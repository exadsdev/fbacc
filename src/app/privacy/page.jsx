// app/privacy/page.jsx
import Link from "next/link";
import JsonLd from "../components/JsonLd";
import { SITE, BRAND, DEFAULT_OG } from "../seo.config";
import "bootstrap/dist/css/bootstrap.min.css";
import "../policies.css";

export const dynamic = "force-static";

export const metadata = {
  metadataBase: new URL(SITE),
  title: `นโยบายความเป็นส่วนตัว | ${BRAND}`,
  description: `นโยบายความเป็นส่วนตัวของ ${BRAND} อธิบายข้อมูลที่เก็บ การใช้งาน การเปิดเผย ระยะเวลาการเก็บรักษา และสิทธิของเจ้าของข้อมูล`,
  alternates: { canonical: `${SITE}/privacy` },
  openGraph: {
    type: "website",
    url: `${SITE}/privacy`,
    title: `นโยบายความเป็นส่วนตัว | ${BRAND}`,
    description: `เราเคารพความเป็นส่วนตัวและปกป้องข้อมูลส่วนบุคคลของคุณ`,
    images: [{ url: DEFAULT_OG, width: 1200, height: 630 }],
  },
};

export default function PrivacyPage() {
  const privacyLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `นโยบายความเป็นส่วนตัว | ${BRAND}`,
    url: `${SITE}/privacy`,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "หน้าหลัก", item: SITE },
        { "@type": "ListItem", position: 2, name: "นโยบายความเป็นส่วนตัว", item: `${SITE}/privacy` },
      ],
    },
  };

  return (
    <>
      <JsonLd data={privacyLd} />

      <section className="policy-hero py-5">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb small">
              <li className="breadcrumb-item"><Link href="/">หน้าหลัก</Link></li>
              <li className="breadcrumb-item active" aria-current="page">นโยบายความเป็นส่วนตัว</li>
            </ol>
          </nav>

          <div className="row g-4">
            <div className="col-lg-8">
              <div className="policy-card p-4">
                <h1 className="h3 mb-3">นโยบายความเป็นส่วนตัว</h1>
                <p className="small text-muted">
                  มีผลบังคับใช้ตั้งแต่ <strong>17 ตุลาคม 2025</strong> เว้นแต่จะระบุไว้เป็นอย่างอื่น
                </p>

                <div className="toc mb-4">
                  <div className="small text-uppercase text-muted">สารบัญ</div>
                  <ul className="small list-unstyled mb-0">
                    <li><a className="anchor" href="#p1">1. ขอบเขตและคำจำกัดความ</a></li>
                    <li><a className="anchor" href="#p2">2. ข้อมูลที่เราเก็บ</a></li>
                    <li><a className="anchor" href="#p3">3. วัตถุประสงค์การประมวลผล</a></li>
                    <li><a className="anchor" href="#p4">4. คุกกี้และเทคโนโลยีติดตาม</a></li>
                    <li><a className="anchor" href="#p5">5. การเปิดเผยข้อมูล</a></li>
                    <li><a className="anchor" href="#p6">6. การโอนข้อมูลระหว่างประเทศ</a></li>
                    <li><a className="anchor" href="#p7">7. การเก็บรักษาข้อมูล</a></li>
                    <li><a className="anchor" href="#p8">8. สิทธิของเจ้าของข้อมูล</a></li>
                    <li><a className="anchor" href="#p9">9. ความปลอดภัยของข้อมูล</a></li>
                    <li><a className="anchor" href="#p10">10. ผู้ติดต่อด้านข้อมูลส่วนบุคคล</a></li>
                    <li><a className="anchor" href="#p11">11. การปรับปรุงนโยบาย</a></li>
                  </ul>
                </div>

                <h2 id="p1" className="h5 section-heading">1) ขอบเขตและคำจำกัดความ</h2>
                <p className="small text-muted">
                  นโยบายนี้ครอบคลุมการเก็บ ใช้ เปิดเผย และคุ้มครองข้อมูลส่วนบุคคลบนเว็บไซต์ {SITE} และบริการที่เกี่ยวข้องทั้งหมดของ {BRAND}.
                </p>

                <h2 id="p2" className="h5 section-heading">2) ข้อมูลที่เราเก็บ</h2>
                <ul className="small text-muted">
                  <li>ข้อมูลการติดต่อ เช่น ชื่อ อีเมล เบอร์โทร</li>
                  <li>ข้อมูลธุรกิจที่คุณให้เพื่อประเมินกลยุทธ์</li>
                  <li>ข้อมูลการใช้งานเว็บไซต์ (IP, User-Agent, Referrer, หน้าเพจที่เข้าชม)</li>
                  <li>ข้อมูลคอนเวอร์ชัน/อีเวนต์เพื่อวัดผลโฆษณา</li>
                </ul>

                <h2 id="p3" className="h5 section-heading">3) วัตถุประสงค์การประมวลผล</h2>
                <ul className="small text-muted">
                  <li>ให้บริการและซัพพอร์ตลูกค้า</li>
                  <li>วิเคราะห์และปรับปรุงประสิทธิภาพโฆษณาและเว็บไซต์</li>
                  <li>ปฏิบัติตามข้อกฎหมายและข้อกำหนดแพลตฟอร์ม</li>
                </ul>

                <h2 id="p4" className="h5 section-heading">4) คุกกี้และเทคโนโลยีติดตาม</h2>
                <p className="small text-muted">
                  เราใช้คุกกี้และแท็ก เช่น Google Tag Manager, Google Analytics, Meta Pixel
                  คุณสามารถจัดการคุกกี้ได้ในเบราว์เซอร์ หรือกด <kbd>Ctrl</kbd>+<kbd>H</kbd> เพื่อลบประวัติ/คุกกี้
                </p>

                <h2 id="p5" className="h5 section-heading">5) การเปิดเผยข้อมูล</h2>
                <p className="small text-muted">
                  เราอาจเปิดเผยข้อมูลแก่ผู้ให้บริการประมวลผล (Processors) เฉพาะเท่าที่จำเป็นต่อการให้บริการ เช่น โฮสติ้ง ระบบวิเคราะห์ และระบบชำระเงิน
                </p>

                <h2 id="p6" className="h5 section-heading">6) การโอนข้อมูลระหว่างประเทศ</h2>
                <p className="small text-muted">
                  หากมีการโอนข้อมูลไปยังต่างประเทศ เราจะคำนึงถึงมาตรการคุ้มครองข้อมูลที่เหมาะสมตามกฎหมายที่บังคับใช้
                </p>

                <h2 id="p7" className="h5 section-heading">7) การเก็บรักษาข้อมูล</h2>
                <p className="small text-muted">
                  เก็บรักษาเท่าที่จำเป็นต่อวัตถุประสงค์และข้อกำหนดทางกฎหมาย โดยทั่วไปไม่เกิน 24 เดือน นับจากกิจกรรมล่าสุด
                </p>

                <h2 id="p8" className="h5 section-heading">8) สิทธิของเจ้าของข้อมูล</h2>
                <ul className="small text-muted">
                  <li>สิทธิขอเข้าถึง/คัดลอก/โอนย้ายข้อมูล</li>
                  <li>สิทธิขอแก้ไข/ลบ หรือคัดค้านการประมวลผล</li>
                  <li>สิทธิถอนความยินยอม (หากอาศัยความยินยอม)</li>
                </ul>

                <h2 id="p9" className="h5 section-heading">9) ความปลอดภัยของข้อมูล</h2>
                <p className="small text-muted">
                  เราใช้มาตรการด้านเทคนิคและองค์กร เช่น HTTPS/SSL การจำกัดสิทธิ์เข้าถึง และการเข้ารหัสเมื่อเหมาะสม
                </p>

                <h2 id="p10" className="h5 section-heading">10) ผู้ติดต่อด้านข้อมูลส่วนบุคคล</h2>
                <p className="small text-muted">
                  อีเมล: privacy@yourdomain.com | โทร: 083-252-8058
                </p>

                <h2 id="p11" className="h5 section-heading">11) การปรับปรุงนโยบาย</h2>
                <p className="small text-muted mb-0">
                  เราอาจปรับปรุงนโยบายเป็นครั้งคราว โดยจะแจ้งเตือนบนหน้านี้ พร้อมระบุวันที่มีผลบังคับ
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="policy-card p-4">
                <h2 className="h6 mb-3">สรุปแบบย่อ</h2>
                <ul className="small text-muted mb-0">
                  <li>เราเก็บเท่าที่จำเป็นต่อการให้บริการ</li>
                  <li>คุณควบคุมคุกกี้และการติดตามได้</li>
                  <li>ขอลบ/แก้ไขข้อมูลได้ตามสิทธิที่กฎหมายให้</li>
                </ul>
              </div>

              <div className="policy-card p-4 mt-4">
                <h2 className="h6 mb-3">ลิงก์ที่เกี่ยวข้อง</h2>
                <ul className="small mb-0">
                  <li><Link href="/terms">เงื่อนไขการให้บริการ</Link></li>
                  <li><Link href="/refund">นโยบายการชำระเงิน/คืนเงิน</Link></li>
                  <li><Link href="/about">เกี่ยวกับเรา</Link></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
