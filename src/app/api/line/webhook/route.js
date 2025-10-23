// src/app/api/line/webhook/route.js
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { verifySignature, envStatus } from "../../../lib/line"; // <- แน่ใจว่ามีไฟล์ src/app/lib/line.js

/**
 * Production Webhook (silent):
 * - ไม่ตอบกลับผู้ใช้ทุกกรณี
 * - รับและบันทึก event อย่างเดียว
 * - ใช้ /api/line/notify-order (แยกไฟล์) สำหรับแจ้ง Admin เท่านั้น
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

    // Verify LINE signature
    if (!verifySignature(rawBody, signature)) {
      return NextResponse.json({ ok: false, error: "Invalid Signature" }, { status: 401 });
    }

    // Parse and log events (no replies)
    const body = JSON.parse(rawBody || "{}");
    const events = Array.isArray(body?.events) ? body.events : [];

    for (const ev of events) {
      const type = ev?.type;
      const sourceType = ev?.source?.type;
      const userId = ev?.source?.userId;
      const groupId = ev?.source?.groupId;
      const roomId = ev?.source?.roomId;
      const msg = ev?.message?.text;

      console.log("[LINE] event:", { type, sourceType, userId, groupId, roomId, msg });
      // ไม่ส่ง replyMessage ใด ๆ ทั้งสิ้น
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Webhook error:", e);
    return NextResponse.json({ ok: false, error: e?.message || String(e) }, { status: 500 });
  }
}
