// src/app/api/line/webhook/route.js
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { verifySignature, replyMessage, envStatus } from "../../../lib/line";

/**
 * นโยบาย Production:
 * - ไม่ตอบกลับข้อความอัตโนมัติให้ผู้ใช้ทั่วไป (เงียบ)
 * - อนุญาตเฉพาะคำว่า "register" เพื่อให้ใครก็ตามดู userId/groupId ของตนเองได้
 * - ใช้ /api/line/notify-order สำหรับแจ้งออเดอร์ไปยัง admin เพียงคนเดียว
 */

export async function GET() {
  const ok = envStatus();
  const allSet = ok.LINE_CHANNEL_SECRET && ok.LINE_CHANNEL_ACCESS_TOKEN;
  return new Response(allSet ? "LINE Webhook Ready ✅" : `❌ Missing ENV: ${JSON.stringify(ok)}`, {
    status: 200,
  });
}

export async function HEAD() {
  return new Response(null, { status: 200 });
}

export async function POST(req) {
  try {
    const signature = req.headers.get("x-line-signature") || "";
    const rawBody = await req.text();

    if (!verifySignature(rawBody, signature)) {
      return NextResponse.json({ ok: false, error: "Invalid Signature" }, { status: 401 });
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

      // อนุญาตให้ขอดู userId/groupId เฉพาะเมื่อพิมพ์ "register" เท่านั้น
      if (type === "message" && ev?.message?.type === "text" && replyToken) {
        const text = String(ev.message.text || "").trim().toLowerCase();
        if (text === "register" || text === "ลงทะเบียน") {
          await replyMessage(replyToken, [
            {
              type: "text",
              text:
                "🔑 ใช้สำหรับตั้งค่า push message:\n" +
                (userId ? `userId: ${userId}\n` : "") +
                (groupId ? `groupId: ${groupId}\n` : "") +
                (roomId ? `roomId: ${roomId}\n` : ""),
            },
          ]);
        }
        // ข้อความอื่น "เงียบ" ไม่ตอบ
      }

      // ไม่ต้องทำอะไรเมื่อ join/follow ใน production (เงียบ)
      if (type === "join" || type === "follow") {
        // no-op
      }
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Webhook error:", e);
    return NextResponse.json({ ok: false, error: e?.message || String(e) }, { status: 500 });
  }
}
