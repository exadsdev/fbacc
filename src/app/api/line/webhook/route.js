// src/app/api/line/webhook/route.js
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { verifySignature, envStatus } from "../../../lib/line";

/**
 * Production Mode:
 * - หยุดตอบกลับทุกข้อความ (รวมถึง register)
 * - ใช้เพื่อรับ event เท่านั้น เช่น order, follow, join, message
 * - ระบบภายในอื่นจะใช้ /api/line/notify-order สำหรับแจ้ง Admin
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

    // ตรวจสอบลายเซ็น
    if (!verifySignature(rawBody, signature)) {
      return NextResponse.json({ ok: false, error: "Invalid Signature" }, { status: 401 });
    }

    // แปลงข้อมูล body
    const body = JSON.parse(rawBody || "{}");
    const events = Array.isArray(body?.events) ? body.events : [];

    // แค่ log ข้อมูล event ไม่ตอบกลับอะไรเลย
    for (const ev of events) {
      const type = ev?.type;
      const sourceType = ev?.source?.type;
      const userId = ev?.source?.userId;
      const groupId = ev?.source?.groupId;
      const roomId = ev?.source?.roomId;
      const msg = ev?.message?.text;

      console.log("[LINE] event:", { type, sourceType, userId, groupId, roomId, msg });
    }

    // ไม่ต้องตอบกลับ LINE
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Webhook error:", e);
    return NextResponse.json({ ok: false, error: e?.message || String(e) }, { status: 500 });
  }
}
