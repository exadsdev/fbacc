// app/about/page.jsx
import Link from "next/link";
import JsonLd from "../components/JsonLd";
import { SITE, BRAND, DEFAULT_OG } from "../seo.config";
import "bootstrap/dist/css/bootstrap.min.css";
import "../policies.css";

export const dynamic = "force-static";

export const metadata = {
  metadataBase: new URL(SITE),
  title: `เกี่ยวกับเรา | ${BRAND}`,
  description: `${BRAND} ทีมผู้เชี่ยวชาญด้านการวางกลยุทธ์และตั้งค่าโฆษณาออนไลน์อย่างมืออาชีพ โปร่งใส ตรวจสอบได้ สอดคล้องนโยบาย`,
  alternates: { canonical: `${SITE}/about` },
  openGraph: {
    type: "website",
    url: `${SITE}/about`,
    title: `เกี่ยวกับเรา | ${BRAND}`,
    description: `${BRAND} ทีมผู้เชี่ยวชาญด้านการตลาดดิจิทัลที่มุ่งผลลัพธ์`,
    images: [{ url: DEFAULT_OG, width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND,
    url: SITE,
    logo: `${SITE}/logo.png`,
    sameAs: [
      "https://www.facebook.com/yourpage",
      "https://www.youtube.com/@yourchannel",
      "https://line.me/R/ti/p/%40yourlineid",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+66-83-252-8058",
        contactType: "customer support",
        areaServed: "TH",
        availableLanguage: ["Thai", "English"],
      },
    ],
  };

  const webPageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `เกี่ยวกับเรา | ${BRAND}`,
    url: `${SITE}/about`,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "หน้าหลัก", item: SITE },
        { "@type": "ListItem", position: 2, name: "เกี่ยวกับเรา", item: `${SITE}/about` },
      ],
    },
  };

  return (
    <>
      <JsonLd data={orgLd} />
      <JsonLd data={webPageLd} />

      <section className="policy-hero py-5">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb small">
              <li className="breadcrumb-item"><Link href="/">หน้าหลัก</Link></li>
              <li className="breadcrumb-item active" aria-current="page">เกี่ยวกับเรา</li>
            </ol>
          </nav>

          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <h1 className="title display-6 fw-bold">เกี่ยวกับ <span className="text-primary">{BRAND}</span></h1>
              <p className="lead text-secondary mt-3">
                เราคือทีมผู้เชี่ยวชาญด้าน <strong>กลยุทธ์โฆษณาออนไลน์</strong> ที่มุ่งสร้างผลลัพธ์จริง
                ด้วยการวิเคราะห์ข้อมูล การตั้งค่าแคมเปญอย่างละเอียด และการปฏิบัติตามนโยบายแพลตฟอร์มอย่างเคร่งครัด
              </p>
              <div className="d-flex gap-2 mt-3">
                <span className="badge rounded-pill badge-soft">โปร่งใส ตรวจสอบได้</span>
                <span className="badge rounded-pill badge-soft">สอดคล้องนโยบาย</span>
                <span className="badge rounded-pill badge-soft">รองรับธุรกิจไทย</span>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="policy-card p-4">
                <h2 className="h6 mb-3">ข้อมูลติดต่อ</h2>
                <ul className="list-unstyled small mb-0">
                  <li><strong>อีเมล:</strong> support@yourdomain.com</li>
                  <li><strong>โทร:</strong> 083-252-8058</li>
                  <li><strong>ที่อยู่:</strong> Bangkok, Thailand</li>
                  <li className="mt-2">
                    <Link href="https://lin.ee/fAKLljU" target="_blank" className="btn btn-success btn-sm">แชท LINE</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="my-5" />

          <div className="row g-4">
            <div className="col-md-4">
              <div className="policy-card p-4 h-100">
                <h3 className="h6">พันธกิจ (Mission)</h3>
                <p className="small text-muted mb-0">
                  สร้างผลลัพธ์ทางธุรกิจที่ยั่งยืน ผ่านการตลาดที่วัดผลได้และเคารพผู้ใช้
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="policy-card p-4 h-100">
                <h3 className="h6">ค่านิยม (Values)</h3>
                <ul className="small text-muted mb-0">
                  <li>ความโปร่งใสและจริยธรรม</li>
                  <li>การเคารพนโยบายและข้อมูลส่วนบุคคล</li>
                  <li>ยึดข้อมูลจริงในการตัดสินใจ</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="policy-card p-4 h-100">
                <h3 className="h6">ความเชี่ยวชาญ (Expertise)</h3>
                <ul className="small text-muted mb-0">
                  <li>Google Ads / Facebook Ads / TikTok Ads</li>
                  <li>Conversion Tracking & Analytics</li>
                  <li>Landing Page & SEO Technical</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="policy-card p-4 mt-5">
            <h2 className="h5 mb-3">แนวทางการทำงาน</h2>
            <ol className="small text-muted mb-0">
              <li>ทำความเข้าใจธุรกิจและเป้าหมาย</li>
              <li>ออกแบบโครงสร้างแคมเปญและวัดผล</li>
              <li>ทดสอบ ปรับปรุง และรายงานผลอย่างต่อเนื่อง</li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
