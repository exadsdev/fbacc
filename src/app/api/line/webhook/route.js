export const runtime = "nodejs";

import { NextResponse } from "next/server";
import crypto from "node:crypto";

const CHANNEL_SECRET = process.env.LINE_CHANNEL_SECRET || "";

// Verify LINE signature (production-safe)
function verifySignature(bodyText, signature) {
  if (!CHANNEL_SECRET) return false;
  const calc = crypto.createHmac("sha256", CHANNEL_SECRET).update(bodyText).digest("base64");
  try {
    return crypto.timingSafeEqual(Buffer.from(signature || ""), Buffer.from(calc));
  } catch {
    return false;
  }
}

export async function POST(req) {
  try {
    const signature = req.headers.get("x-line-signature") || "";
    const bodyText = await req.text();

    if (!verifySignature(bodyText, signature)) {
      return NextResponse.json({ ok: false, error: "Bad signature" }, { status: 401 });
    }

    // เรา “ไม่ตอบกลับผู้ใช้” แล้ว — แค่ parse และจบ
    const body = JSON.parse(bodyText);

    // (ถ้าต้องการ log แบบย่อเพื่อ debug)
    for (const ev of body.events || []) {
      console.log("[LINE webhook]", { type: ev?.type, src: ev?.source?.type, ts: ev?.timestamp });
    }

    // ตอบ 200 เสมอ เพื่อบอก LINE ว่ารับแล้ว (ไม่มี auto-reply ใด ๆ)
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("LINE webhook error:", e);
    return NextResponse.json({ ok: false, error: e?.message || String(e) }, { status: 500 });
  }
}
