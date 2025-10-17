import Link from "next/link";
import Image from "next/image";
import { SITE, BRAND } from "@/app/seo.config";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer bg-dark text-white mt-5 pt-5">
      <div className="container">
        {/* Top */}
        <div className="row g-4">
          {/* Brand / About */}
          <div className="col-12 col-md-5">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div className="footer-logo-wrap">
                <Image
                  src="/images/logo-512.png"
                  alt={`${BRAND} logo`}
                  width={40}
                  height={40}
                  className="rounded-2"
                  priority
                />
              </div>
              <span className="fw-semibold">{BRAND}</span>
            </div>
            <p className="text-white-50 small mb-3">
              บริการดูแลและตั้งค่าโฆษณาออนไลน์อย่างมืออาชีพ
              โปร่งใส ตรวจสอบได้ และสอดคล้องกับนโยบายแพลตฟอร์ม
            </p>

            <ul className="list-unstyled text-white-50 small mb-0">
              <li>
                อีเมล: <a className="link-faded" href="mailto:support@yourdomain.com">support@yourdomain.com</a>
              </li>
              <li>โทร: 083-252-8058</li>
              <li>ที่อยู่: Bangkok, Thailand</li>
            </ul>
          </div>

          {/* Quick links */}
          <div className="col-6 col-md-3">
            <h6 className="text-uppercase small text-white-50 mb-3">ลิงก์ด่วน</h6>
            <ul className="list-unstyled small mb-0">
              <li><Link className="link-faded" href="/">หน้าหลัก</Link></li>
              <li><Link className="link-faded" href="/#packages">แพ็กเกจบริการ</Link></li>
              <li><Link className="link-faded" href="/Video">วิดีโอวิธีสั่งซื้อ</Link></li>
              <li><Link className="link-faded" href="/contact">ติดต่อเรา</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div className="col-6 col-md-4">
            <h6 className="text-uppercase small text-white-50 mb-3">ข้อมูล & นโยบาย</h6>
            <ul className="list-unstyled small mb-2">
              <li><Link className="link-faded" href="/about">เกี่ยวกับเรา</Link></li>
              <li><Link className="link-faded" href="/privacy">นโยบายความเป็นส่วนตัว</Link></li>
              <li><Link className="link-faded" href="/terms">เงื่อนไขการให้บริการ</Link></li>
              <li><Link className="link-faded" href="/refund">นโยบายการชำระเงิน/คืนเงิน</Link></li>
            </ul>

            <div className="d-flex gap-2 mt-3">
              <a className="social-btn" href="https://lin.ee/fAKLljU" target="_blank" rel="noopener noreferrer" aria-label="LINE">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M19.5 3h-15A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h7.94l3.88 1.94a.75.75 0 001.08-.67v-1.27H19.5A1.5 1.5 0 0021 19.5v-15A1.5 1.5 0 0019.5 3zM8.75 13.5H7V7.75h1.75V13.5zm3.25 0H10.5V7.75h1.5V13.5zm3.5 0h-1.5V7.75H15.5V13.5z"/></svg>
              </a>
              <a className="social-btn" href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 10-11.5 9.95v-7.04H7.9V12h2.6V9.8c0-2.57 1.53-3.99 3.87-3.99 1.12 0 2.3.2 2.3.2v2.53h-1.3c-1.28 0-1.68.79-1.68 1.6V12h2.86l-.46 2.91h-2.4v7.04A10 10 0 0022 12z"/></svg>
              </a>
              <a className="social-btn" href="https://www.youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.7 3.5 12 3.5 12 3.5s-7.7 0-9.4.6A3 3 0 00.5 6.2 31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c1.7.6 9.4.6 9.4.6s7.7 0 9.4-.6a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <hr className="footer-hr my-4" />

        {/* Disclaimer */}
        <p className="text-white-50 small mb-4">
          * บริการของเราเป็นการให้คำปรึกษา ออกแบบ วัดผล และตั้งค่าแคมเปญโฆษณาบนแพลตฟอร์มต่าง ๆ
          ไม่ได้มีวัตถุประสงค์เพื่อขายบัญชีผู้ใช้หรือฝ่าฝืนนโยบายแพลตฟอร์ม
        </p>

        {/* Bottom */}
        <div className="footer-bottom d-flex flex-column flex-md-row align-items-center justify-content-between pb-4">
          <div className="small text-white-50">
            © {year} <span className="text-white">{BRAND}</span> • <a className="link-faded" href={SITE}>{SITE.replace(/^https?:\/\//, "")}</a>
          </div>
          <div className="small">
            <Link className="link-faded me-3" href="/privacy">Privacy</Link>
            <Link className="link-faded me-3" href="/terms">Terms</Link>
            <Link className="link-faded" href="/refund">Payments & Refunds</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
