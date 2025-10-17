// app/terms/page.jsx
import Link from "next/link";
import JsonLd from "../components/JsonLd";
import { SITE, BRAND, DEFAULT_OG } from "../seo.config";
import "bootstrap/dist/css/bootstrap.min.css";
import "../policies.css";

export const dynamic = "force-static";

export const metadata = {
  metadataBase: new URL(SITE),
  title: `เงื่อนไขการให้บริการ | ${BRAND}`,
  description: `ข้อตกลงการใช้งานเว็บไซต์และบริการของ ${BRAND} รวมถึงข้อกำหนดความรับผิดชอบ ข้อห้าม และข้อจำกัดความรับผิด`,
  alternates: { canonical: `${SITE}/terms` },
  openGraph: {
    type: "website",
    url: `${SITE}/terms`,
    title: `เงื่อนไขการให้บริการ | ${BRAND}`,
    description: `โปรดอ่านข้อตกลงก่อนใช้งานเว็บไซต์และบริการของเรา`,
    images: [{ url: DEFAULT_OG, width: 1200, height: 630 }],
  },
};

export default function TermsPage() {
  const termsLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `เงื่อนไขการให้บริการ | ${BRAND}`,
    url: `${SITE}/terms`,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "หน้าหลัก", item: SITE },
        { "@type": "ListItem", position: 2, name: "เงื่อนไขการให้บริการ", item: `${SITE}/terms` },
      ],
    },
  };

  return (
    <>
      <JsonLd data={termsLd} />

      <section className="policy-hero py-5">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb small">
              <li className="breadcrumb-item"><Link href="/">หน้าหลัก</Link></li>
              <li className="breadcrumb-item active" aria-current="page">เงื่อนไขการให้บริการ</li>
            </ol>
          </nav>

          <div className="policy-card p-4">
            <h1 className="h3 mb-3">เงื่อนไขการให้บริการ</h1>
            <p className="small text-muted">
              มีผลบังคับใช้ตั้งแต่ <strong>17 ตุลาคม 2025</strong>
            </p>

            <h2 className="h5 section-heading" id="t1">1) คำจำกัดความ</h2>
            <p className="small text-muted">
              “บริการ” หมายถึง บริการที่เกี่ยวข้องกับการวางกลยุทธ์ ตั้งค่า และปรับปรุงแคมเปญโฆษณา รวมถึงบริการวัดผลและการรายงาน
            </p>

            <h2 className="h5 section-heading" id="t2">2) การยอมรับเงื่อนไข</h2>
            <p className="small text-muted">
              การเข้าถึงหรือใช้งานเว็บไซต์/บริการถือว่าคุณยอมรับเงื่อนไขฉบับนี้ หากไม่เห็นด้วย โปรดหยุดใช้งานทันที
            </p>

            <h2 className="h5 section-heading" id="t3">3) ขอบเขตบริการ</h2>
            <ul className="small text-muted">
              <li>ให้คำปรึกษาและตั้งค่าแคมเปญตามข้อตกลงที่ทำร่วมกัน</li>
              <li>บริการมิได้เป็นการขายหรือโอน “บัญชีผู้ใช้” ของแพลตฟอร์มใด ๆ</li>
              <li>ลูกค้าต้องปฏิบัติตามนโยบายของแต่ละแพลตฟอร์ม</li>
            </ul>

            <h2 className="h5 section-heading" id="t4">4) ความรับผิดชอบของผู้ใช้</h2>
            <ul className="small text-muted">
              <li>ให้ข้อมูลที่ถูกต้องและทันสมัย</li>
              <li>รับผิดชอบการเข้าถึงบัญชีของตนอย่างปลอดภัย</li>
              <li>ไม่ใช้บริการในทางที่ผิดหรือขัดต่อกฎหมาย/นโยบาย</li>
            </ul>

            <h2 className="h5 section-heading" id="t5">5) ทรัพย์สินทางปัญญา</h2>
            <p className="small text-muted">
              เนื้อหา โลโก้ และสื่อใด ๆ บนเว็บไซต์เป็นทรัพย์สินของ {BRAND} หรือผู้ให้สิทธิ์ที่เกี่ยวข้อง ห้ามทำซ้ำ ดัดแปลง หรือเผยแพร่โดยไม่ได้รับอนุญาต
            </p>

            <h2 className="h5 section-heading" id="t6">6) การชำระเงินและภาษี</h2>
            <p className="small text-muted">
              เงื่อนไขการชำระเงินให้เป็นไปตามเอกสารเสนอราคา/ใบแจ้งหนี้ หากมีภาษีที่กฎหมายกำหนด ผู้ใช้บริการเป็นผู้รับผิดชอบ
            </p>

            <h2 className="h5 section-heading" id="t7">7) การจำกัดความรับผิด</h2>
            <p className="small text-muted">
              เราไม่รับผิดชอบต่อความเสียหายทางอ้อม สูญเสียกำไร หรือเหตุสุดวิสัย ผลลัพธ์ของโฆษณาขึ้นกับหลายปัจจัยนอกเหนือการควบคุม
            </p>

            <h2 className="h5 section-heading" id="t8">8) การบอกเลิก</h2>
            <p className="small text-muted">
              คู่สัญญาอาจบอกเลิกได้ตามเงื่อนไขในข้อตกลง/ใบสั่งซื้อ โดยชำระค่าบริการที่เกิดขึ้นแล้วจนถึงวันที่บอกเลิก
            </p>

            <h2 className="h5 section-heading" id="t9">9) กฎหมายที่ใช้บังคับ</h2>
            <p className="small text-muted">
              เงื่อนไขนี้อยู่ภายใต้กฎหมายไทย และศาลไทยมีเขตอำนาจพิจารณาข้อพิพาท
            </p>

            <h2 className="h5 section-heading" id="t10">10) การปรับปรุงเงื่อนไข</h2>
            <p className="small text-muted mb-0">
              เราอาจปรับปรุงเงื่อนไขเป็นครั้งคราว โดยจะแจ้งบนหน้านี้และระบุวันที่มีผลบังคับ
            </p>
          </div>

          <div className="row g-4 mt-4">
            <div className="col-md-6">
              <div className="policy-card p-4 h-100">
                <h3 className="h6">ลิงก์ด่วน</h3>
                <ul className="small mb-0">
                  <li><Link href="/privacy">นโยบายความเป็นส่วนตัว</Link></li>
                  <li><Link href="/refund">นโยบายการชำระเงิน/คืนเงิน</Link></li>
                  <li><Link href="/about">เกี่ยวกับเรา</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="policy-card p-4 h-100">
                <h3 className="h6">ติดต่อเรา</h3>
                <p className="small text-muted mb-2">หากมีข้อสงสัยเกี่ยวกับเงื่อนไขนี้</p>
                <Link href="admin@accfbpro.shop" className="btn btn-outline-secondary btn-sm">support@yourdomain.com</Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
