export const runtime = "nodejs";

import { NextResponse } from "next/server";
import crypto from "node:crypto";

const CHANNEL_SECRET = process.env.LINE_CHANNEL_SECRET || "";
// NOTE: This webhook is production-safe: it verifies signature and DOES NOT auto-reply to user messages.

function verifySignature(bodyText, signature) {
  if (!CHANNEL_SECRET) return false;
  const calc = crypto.createHmac("sha256", CHANNEL_SECRET).update(bodyText).digest("base64");
  try {
    // timing-safe compare
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

    // Parse once (we ignore all message events on purpose)
    const body = JSON.parse(bodyText);

    // Optional: log minimal event meta (no auto-replies)
    for (const ev of body.events || []) {
      console.log("[LINE webhook]", {
        type: ev?.type,
        source: ev?.source?.type,
        ts: ev?.timestamp,
      });
    }

    // Always 200 OK without replying to end users
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("LINE webhook error:", e);
    return NextResponse.json({ ok: false, error: e?.message || String(e) }, { status: 500 });
  }
}
