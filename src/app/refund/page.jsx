// app/refund/page.jsx
import Link from "next/link";
import JsonLd from "../components/JsonLd";
import { SITE, BRAND, DEFAULT_OG } from "../seo.config";
import "bootstrap/dist/css/bootstrap.min.css";
import "../policies.css";

export const dynamic = "force-static";

export const metadata = {
  metadataBase: new URL(SITE),
  title: `นโยบายการชำระเงิน/คืนเงิน | ${BRAND}`,
  description: `เงื่อนไขการชำระเงิน การเริ่มต้นบริการ การยกเลิก และการคืนเงินของ ${BRAND}`,
  alternates: { canonical: `${SITE}/refund` },
  openGraph: {
    type: "website",
    url: `${SITE}/refund`,
    title: `นโยบายการชำระเงิน/คืนเงิน | ${BRAND}`,
    description: `โปรดอ่านเงื่อนไขก่อนทำรายการชำระเงิน`,
    images: [{ url: DEFAULT_OG, width: 1200, height: 630 }],
  },
};

export default function RefundPage() {
  const refundLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `นโยบายการชำระเงิน/คืนเงิน | ${BRAND}`,
    url: `${SITE}/refund`,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "หน้าหลัก", item: SITE },
        { "@type": "ListItem", position: 2, name: "นโยบายการชำระเงิน/คืนเงิน", item: `${SITE}/refund` },
      ],
    },
  };

  return (
    <>
      <JsonLd data={refundLd} />

      <section className="policy-hero py-5">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb small">
              <li className="breadcrumb-item"><Link href="/">หน้าหลัก</Link></li>
              <li className="breadcrumb-item active" aria-current="page">นโยบายการชำระเงิน/คืนเงิน</li>
            </ol>
          </nav>

          <div className="policy-card p-4">
            <h1 className="h3 mb-3">นโยบายการชำระเงิน/คืนเงิน</h1>
            <p className="small text-muted">
              มีผลบังคับใช้ตั้งแต่ <strong>17 ตุลาคม 2025</strong>
            </p>

            <h2 className="h5 section-heading" id="r1">1) วิธีการชำระเงินที่รองรับ</h2>
            <ul className="small text-muted">
              <li>โอนผ่านบัญชีธนาคาร/พร้อมเพย์</li>
              <li>บัตรเครดิต/เดบิต หรือช่องทางที่ระบุในใบแจ้งหนี้</li>
              <li>การชำระเงินถือว่าเสร็จสมบูรณ์เมื่อเราได้รับหลักฐานการชำระเงินที่ตรวจสอบได้</li>
            </ul>

            <h2 className="h5 section-heading" id="r2">2) การเริ่มต้นบริการ</h2>
            <p className="small text-muted">
              เราจะเริ่มดำเนินงานหลังจากได้รับการชำระเงินตามใบแจ้งหนี้และข้อมูลที่จำเป็นครบถ้วน
            </p>

            <h2 className="h5 section-heading" id="r3">3) การยกเลิกบริการ</h2>
            <p className="small text-muted">
              ลูกค้าสามารถยกเลิกบริการโดยแจ้งเป็นลายลักษณ์อักษรล่วงหน้าอย่างน้อย 7 วันทำการก่อนรอบบิลถัดไป
            </p>

            <h2 className="h5 section-heading" id="r4">4) นโยบายการคืนเงิน</h2>
            <ul className="small text-muted">
              <li>ค่าบริการที่ได้ดำเนินการแล้ว <strong>ไม่สามารถคืนเงิน</strong> (Non-refundable) ยกเว้นกรณีที่เกิดจากความผิดพลาดของเราโดยตรง</li>
              <li>ในกรณีที่ยังไม่ได้เริ่มบริการ อาจคืนเงินเต็มจำนวนหักค่าธรรมเนียมที่เกิดขึ้นจริง (ถ้ามี)</li>
              <li>กรณีเป็นแพ็กเกจรายเดือน จะไม่มีการคืนเงินสำหรับช่วงเวลาที่เริ่มดำเนินงานแล้ว</li>
            </ul>

            <h2 className="h5 section-heading" id="r5">5) ระยะเวลาดำเนินการคืนเงิน</h2>
            <p className="small text-muted">
              หากเข้าเงื่อนไขการคืนเงิน เราจะดำเนินการภายใน 7–14 วันทำการนับจากวันที่อนุมัติ โดยใช้ช่องทางเดียวกับที่ชำระมา
            </p>

            <h2 className="h5 section-heading" id="r6">6) ใบกำกับภาษี/เอกสาร</h2>
            <p className="small text-muted">
              หากต้องการใบกำกับภาษี โปรดแจ้งข้อมูลนิติบุคคลล่วงหน้าก่อนชำระเงิน
            </p>

            <h2 className="h5 section-heading" id="r7">7) ติดต่อฝ่ายการเงิน</h2>
            <p className="small text-muted mb-0">
              อีเมล: billing@yourdomain.com | โทร: 083-252-8058
            </p>
          </div>

          <div className="row g-4 mt-4">
            <div className="col-md-6">
              <div className="policy-card p-4 h-100">
                <h3 className="h6">ลิงก์ด่วน</h3>
                <ul className="small mb-0">
                  <li><Link href="/terms">เงื่อนไขการให้บริการ</Link></li>
                  <li><Link href="/privacy">นโยบายความเป็นส่วนตัว</Link></li>
                  <li><Link href="/about">เกี่ยวกับเรา</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="policy-card p-4 h-100">
                <h3 className="h6">ช่วยเหลือเพิ่มเติม</h3>
                <p className="small text-muted mb-2">หากต้องการใบเสนอราคาหรือสอบถามสถานะการชำระเงิน</p>
                <Link href="https://lin.ee/DdmOwao" className="btn btn-outline-secondary btn-sm">ติดต่อฝ่ายการเงิน</Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
