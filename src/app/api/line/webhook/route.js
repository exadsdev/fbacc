// src/app/api/line/notify-order/route.js
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { pushMessage } from "../../../lib/line";

/**
 * Endpoint สำหรับระบบออเดอร์ของคุณเท่านั้น
 * ส่งแจ้งเตือนไปยัง admin คนเดียว (LINE_ADMIN_USER_ID)
 * ป้องกันด้วย ORDER_WEBHOOK_SECRET ผ่าน Header: x-api-key
 *
 * ตัวอย่าง payload:
 * {
 *   "orderId": "ORD-2025-000123",
 *   "total": 29900,
 *   "currency": "THB",
 *   "customer": { "name": "Somchai", "phone": "0812345678" },
 *   "items": [
 *     { "name": "PG Phone V9", "qty": 1, "price": 29900 }
 *   ],
 *   "url": "https://your-admin/orders/ORD-2025-000123"
 * }
 */

const ADMIN_USER_ID = process.env.LINE_ADMIN_USER_ID || "";
const API_KEY = process.env.ORDER_WEBHOOK_SECRET || "";

export async function POST(req) {
  try {
    const key = req.headers.get("x-api-key") || "";
    if (!key || key !== API_KEY) {
      return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
    }

    const payload = await req.json().catch(() => ({}));
    const {
      orderId = "",
      total = 0,
      currency = "THB",
      customer = {},
      items = [],
      url = "",
    } = payload || {};

    if (!ADMIN_USER_ID) {
      return NextResponse.json(
        { ok: false, error: "Missing LINE_ADMIN_USER_ID" },
        { status: 500 }
      );
    }

    if (!orderId) {
      return NextResponse.json({ ok: false, error: "orderId required" }, { status: 400 });
    }

    const itemLines = Array.isArray(items)
      ? items
          .slice(0, 10)
          .map((it) => `• ${it?.name || "-"} x${it?.qty || 1} @ ${Number(it?.price || 0).toLocaleString()} ${currency}`)
          .join("\n")
      : "";

    const text =
      `🧾 มีคำสั่งซื้อใหม่\n` +
      `Order: ${orderId}\n` +
      (customer?.name ? `ลูกค้า: ${customer.name}\n` : "") +
      (customer?.phone ? `โทร: ${customer.phone}\n` : "") +
      (itemLines ? `สินค้า:\n${itemLines}\n` : "") +
      `ยอดรวม: ${Number(total).toLocaleString()} ${currency}\n` +
      (url ? `ดูรายละเอียด: ${url}\n` : "") +
      `\n(แจ้งเตือนนี้ส่งถึง Admin เท่านั้น)`;

    await pushMessage(ADMIN_USER_ID, [{ type: "text", text }]);

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Notify Order error:", e);
    return NextResponse.json({ ok: false, error: e?.message || String(e) }, { status: 500 });
  }
}
