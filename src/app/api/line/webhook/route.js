// app/api/line/webhook/route.js
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import crypto from "node:crypto";

/* ===============================
   LINE BOT ENV CONFIG
================================= */
const CHANNEL_SECRET = process.env.LINE_CHANNEL_SECRET || "";
const ACCESS_TOKEN = process.env.LINE_CHANNEL_ACCESS_TOKEN || "";

/* ===============================
   VERIFY LINE SIGNATURE
================================= */
function verifySignature(rawBody, signature) {
  if (!CHANNEL_SECRET) return false;
  const calc = crypto
    .createHmac("sha256", CHANNEL_SECRET)
    .update(rawBody)
    .digest("base64");
  return crypto.timingSafeEqual(
    Buffer.from(signature || ""),
    Buffer.from(calc)
  );
}

/* ===============================
   REPLY MESSAGE FUNCTION
================================= */
async function replyMessage(replyToken, messages) {
  if (!ACCESS_TOKEN || !replyToken) return;
  const url = "https://api.line.me/v2/bot/message/reply";

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ replyToken, messages }),
  });

  if (!res.ok) {
    const err = await res.text().catch(() => "");
    console.warn("LINE reply error:", res.status, err);
  }
}

/* ===============================
   HEALTH CHECK (GET)
================================= */
export async function GET() {
  const ok =
    Boolean(CHANNEL_SECRET) && Boolean(ACCESS_TOKEN)
      ? "LINE Webhook Ready ✅"
      : "❌ Missing Environment Variables";
  return new Response(ok, { status: 200 });
}

/* ===============================
   MAIN WEBHOOK HANDLER (POST)
================================= */
export async function POST(req) {
  try {
    const signature = req.headers.get("x-line-signature") || "";
    const rawBody = await req.text();

    // ตรวจสอบลายเซ็นจาก LINE
    if (!verifySignature(rawBody, signature)) {
      return NextResponse.json(
        { ok: false, error: "Invalid Signature" },
        { status: 401 }
      );
    }

    const body = JSON.parse(rawBody || "{}");
    const events = Array.isArray(body?.events) ? body.events : [];

    for (const ev of events) {
      const type = ev?.type;
      const replyToken = ev?.replyToken;
      const sourceType = ev?.source?.type;
      const userId = ev?.source?.userId;
      const groupId = ev?.source?.groupId;
      const roomId = ev?.source?.roomId;

      console.log("[LINE] Event:", {
        type,
        sourceType,
        userId,
        groupId,
        roomId,
      });

      // 1️⃣ เมื่อผู้ใช้เพิ่มบอทเป็นเพื่อน
      if (type === "follow" && replyToken) {
        await replyMessage(replyToken, [
          {
            type: "text",
            text:
              "สวัสดีครับ 🙌 พิมพ์ 'register' เพื่อรับ userId/groupId สำหรับตั้งค่า push message ได้เลยครับ",
          },
        ]);
      }

      // 2️⃣ เมื่อบอทถูกเชิญเข้ากลุ่ม
      if (type === "join" && sourceType === "group" && replyToken) {
        await replyMessage(replyToken, [
          {
            type: "text",
            text:
              "ขอบคุณที่เพิ่มบอทครับ 🎉 พิมพ์ 'register' เพื่อรับ groupId ไว้ใช้เชื่อมต่อระบบครับ",
          },
        ]);
      }

      // 3️⃣ เมื่อมีข้อความส่งเข้ามา
      if (type === "message" && ev?.message?.type === "text" && replyToken) {
        const text = String(ev.message.text || "").trim().toLowerCase();

        if (text === "register" || text === "ลงทะเบียน") {
          await replyMessage(replyToken, [
            {
              type: "text",
              text:
                "🔑 ข้อมูลสำหรับเชื่อมต่อระบบ:\n" +
                (userId ? `userId: ${userId}\n` : "") +
                (groupId ? `groupId: ${groupId}\n` : "") +
                (roomId ? `roomId: ${roomId}\n` : ""),
            },
          ]);
        } else if (text === "ping") {
          await replyMessage(replyToken, [{ type: "text", text: "pong ✅" }]);
        } else {
          await replyMessage(replyToken, [
            {
              type: "text",
              text:
                "คำสั่งที่ใช้ได้:\n- register (ลงทะเบียน)\n- ping (ทดสอบบอท)\n",
            },
          ]);
        }
      }
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Webhook error:", e);
    return NextResponse.json(
      { ok: false, error: e?.message || String(e) },
      { status: 500 }
    );
  }
}
