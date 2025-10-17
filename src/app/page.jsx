// app/page.jsx
import Link from "next/link";
import JsonLd from "./components/JsonLd";
import { SITE, BRAND, DEFAULT_OG } from "./seo.config";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
import PRODUCTS from "./data/products";

export const dynamic = "force-static";

export const metadata = {
  metadataBase: new URL(SITE),
  title: `${BRAND} | บริการดูแลและตั้งค่าโฆษณา Facebook สำหรับธุรกิจ`,
  description: `${BRAND} บริการจัดการและตั้งค่าโฆษณา Facebook แบบโปร่งใส สอดคล้องนโยบาย พร้อมคู่มือและคำแนะนำสำหรับธุรกิจ`,
  alternates: { canonical: SITE },
  openGraph: {
    type: "website",
    url: SITE,
    title: `${BRAND} | บริการดูแลและตั้งค่าโฆษณา Facebook สำหรับธุรกิจ`,
    description: `${BRAND} บริการจัดการและตั้งค่าโฆษณา Facebook แบบโปร่งใส สอดคล้องนโยบาย`,
    images: [{ url: DEFAULT_OG, width: 1200, height: 630 }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function HomePage() {
  // ===== JSON-LD: ItemList (แสดง “แพ็กเกจบริการ”) =====
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: PRODUCTS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE}/products/${p.slug}`,
      name: p.name,
      image: `${SITE}${p.image}`,
    })),
  };

  // ===== JSON-LD: WebSite (sitelinks search box) =====
  const webSiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: SITE,
    name: BRAND,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  // ===== JSON-LD: Organization (ความน่าเชื่อถือ) =====
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

  // ===== JSON-LD: FAQPage (ตรงกับคำถามที่พบบ่อยด้านล่าง) =====
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "นโยบายการใช้งานเป็นอย่างไร?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "การใช้งานต้องสอดคล้องกับนโยบายของแพลตฟอร์มอย่างเคร่งครัด เราให้คำแนะนำด้านความปลอดภัยและการยืนยันตัวตนที่เหมาะสมสำหรับธุรกิจของคุณ",
        },
      },
      {
        "@type": "Question",
        name: "ใช้เวลาจัดเตรียมบริการนานไหม?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "โดยทั่วไปพร้อมเริ่มใช้งานภายในระยะเวลาที่ตกลง และมีคู่มือเริ่มต้นใช้งานให้ครบถ้วน",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={itemListLd} />
      <JsonLd data={webSiteLd} />
      <JsonLd data={orgLd} />
      <JsonLd data={faqLd} />

      {/* ===== HERO ===== */}
      <section className="hero py-5 border-bottom">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <span className="badge rounded-pill text-bg-light mb-3">
                พร้อมเริ่มแคมเปญได้ทันที
              </span>
              <h1 className="title display-6 fw-bold">
                บริการดูแลและตั้งค่าโฆษณา Facebook{" "}
                <span className="text-primary">สำหรับธุรกิจ</span>
              </h1>
              <p className="lead text-secondary mt-3">
                โปร่งใส ตรวจสอบได้ และสอดคล้องนโยบายแพลตฟอร์มครบถ้วน
                รองรับการแสดงผลรูปภาพตัวอย่างในผลการค้นหา
                (เปิดใช้ max-image-preview:large)
              </p>
              <div className="d-flex gap-3 mt-3">
                <a className="btn btn-primary btn-lg" href="#packages">
                  ดูแพ็กเกจบริการ
                </a>
                <a className="btn btn-outline-secondary btn-lg" href="/#faq">
                  ดูคำถามที่พบบ่อย
                </a>
              </div>
              {/* ข้อความที่อาจสุ่มเสี่ยงต่อ policy ถูกถอดออก */}
            </div>

            <div className="col-lg-6">
              <img
                src="/images/top.jpg"
                alt={`${BRAND} - ตัวอย่างภาพสำหรับผลการค้นหา`}
                className="hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== PACKAGES ===== */}
      <section id="packages" className="container py-5">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h2 className="h4 mb-0">แพ็กเกจบริการยอดนิยม</h2>
          <small className="text-muted">
            รายละเอียดแพ็กเกจทั้งหมดเป็นบริการดูแล/ตั้งค่าแคมเปญ ไม่จำหน่ายบัญชีผู้ใช้
          </small>
        </div>

        <div className="row g-4">
          {PRODUCTS.map((p) => (
            <div className="boxcart col-12 col-sm-6 col-lg-4 shadow-lg p-3" key={p.id}>
              <div className="card h-100 product-card shadow-sm">
                <Link href={`/products/${p.slug}`} className="text-decoration-none">
                  <img src={p.image} alt={p.name} className="product-image" />
                </Link>

                <div className="text-center mx-auto small fw-medium py-2 border-bottom">
                  {p.description}
                </div>

                <div className="card-body d-flex flex-column">
                  <h3 className="name h6 mb-2">{p.name}</h3>

                  <div className="text-muted small mb-3">
                    <div className="btncart">{p.Accstatus} {p.name}</div>
                    <div className="tbtn">{p.name}</div>
                  </div>

                  <div className="mt-auto d-flex align-items-center justify-content-between gap-2">
                    <span className="price h5 mb-0">
                      <div className="btncart">{p.price.toLocaleString()} บาท</div>
                    </span>

                    <Link
                      className="btn-accent btn-buy"
                      href={`/checkout?sku=${encodeURIComponent(p.slug)}`}
                    >
                      <div className="btncart">
                        <span className="btn-glow" aria-hidden="true"></span>
                        <span className="btn-shine" aria-hidden="true"></span>
                        <span className="btn-label">สั่งใช้บริการ</span>
                        <span className="btn-sub">เริ่มใช้งานภายในเวลาที่ตกลง</span>
                      </div>

                      <div className="tbtn">{p.price.toLocaleString()}บาท</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===== USP / TRUST ===== */}
        <div className="mt-5">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 border rounded-3 h-100">
                <h3 className="h6 mb-2">สอดคล้องนโยบาย</h3>
                <p className="mb-0 small text-muted">
                  ดำเนินงานตามนโยบายแพลตฟอร์มโฆษณา พร้อมแนวทางลดความเสี่ยงของบัญชี
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 border rounded-3 h-100">
                <h3 className="h6 mb-2">โปร่งใส & วัดผลได้</h3>
                <p className="mb-0 small text-muted">
                  ส่งมอบรายงาน แหล่งที่มา แท็กคอนเวอร์ชัน และคำแนะนำปรับปรุงจากข้อมูลจริง
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 border rounded-3 h-100">
                <h3 className="h6 mb-2">ซัพพอร์ตจริง</h3>
                <p className="mb-0 small text-muted">
                  ติดต่อได้หลายช่องทาง พร้อมคู่มือเริ่มต้นใช้งานและทีมงานช่วยเหลือ
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== FAQ ===== */}
        <div id="faq" className="mt-5">
          <h2 className="h4">คำถามที่พบบ่อย</h2>
          <div className="accordion" id="faqAcc">
            <div className="accordion-item">
              <h2 className="accordion-header" id="q1">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#a1"
                >
                  นโยบายการใช้งานเป็นอย่างไร?
                </button>
              </h2>
              <div
                id="a1"
                className="accordion-collapse collapse show"
                data-bs-parent="#faqAcc"
              >
                <div className="accordion-body">
                  การใช้งานต้องสอดคล้องกับนโยบายของแพลตฟอร์มอย่างเคร่งครัด
                  เราให้คำแนะนำด้านความปลอดภัย
                  และการยืนยันตัวตนที่เหมาะสมสำหรับธุรกิจของคุณ
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="q2">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#a2"
                >
                  ใช้เวลาจัดเตรียมบริการนานไหม?
                </button>
              </h2>
              <div
                id="a2"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAcc"
              >
                <div className="accordion-body">
                  โดยทั่วไปพร้อมใช้งานภายในระยะเวลาที่ตกลง
                  และจะมีคู่มือเริ่มต้นใช้งานให้
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== CONTACT ===== */}
        <a
          href="https://lin.ee/fAKLljU"
          className="line"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/line.webp" width="100%" alt="Add LINE" />
        </a>

        <div id="contact" className="mt-5">
          <h2 className="h4">ติดต่อเรา</h2>
          <p className="text-muted">กรุณาระบุความต้องการของธุรกิจและวิธีติดต่อกลับ</p>
          <a
            className="btn btn-success"
            href="https://lin.ee/fAKLljU"
            target="_blank"
            rel="noopener noreferrer"
          >
            แชท LINE
          </a>

          <div className="mt-3 small text-muted">
            <div>อีเมล: support@yourdomain.com</div>
            <div>โทร: 083-252-8058</div>
            <div className="mt-2">
              <Link href="/about" className="me-3">เกี่ยวกับเรา</Link>
              <Link href="/privacy" className="me-3">นโยบายความเป็นส่วนตัว</Link>
              <Link href="/terms" className="me-3">เงื่อนไขการให้บริการ</Link>
              <Link href="/refund">นโยบายการชำระเงิน/คืนเงิน</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VIDEO ===== */}
      <div className="text-center">
        <iframe
          className="vdos"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/pK7YjnztQBQ?si=Em1bdDhIKX4b-v3x"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
