'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useSession, signIn, signOut } from 'next-auth/react';
import './Navbar.css';

const NAV_ITEMS = [
  { href: '/', name: 'Home' },
  { href: '/admin', name: 'Admin' },
  { href: '/waiting', name: 'Waiting' },
  { href: '/Video', name: 'Video วิธีสั่งซื้อ' },
  { href: '/contact', name: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href) || pathname === href;

  const userImage = session?.user?.image || null;
  const userName = session?.user?.name || session?.user?.email || 'User';

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3 shadow-sm">
      <div className="container-xl">
        <Link className="navbar-brand d-flex align-items-center gap-2" href="/" aria-label="Go to homepage">
          <div className="brand-logo-wrap">
            <Image src="/images/logo-512.png" alt="logo" width={40} height={40} className="rounded-2" priority />
          </div>
          <span className="fw-semibold">accfb</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {NAV_ITEMS.map((item) => (
              <li key={item.href} className="nav-item">
                <Link
                  href={item.href}
                  className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* กลุ่มหน้าข้อมูลบริษัท/นโยบาย */}
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link px-2"
                id="infoMenu"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                ข้อมูล & นโยบาย
              </button>
              <ul className="dropdown-menu shadow-sm" aria-labelledby="infoMenu">
                <li><Link className="dropdown-item" href="/about">เกี่ยวกับเรา</Link></li>
                <li><Link className="dropdown-item" href="/privacy">นโยบายความเป็นส่วนตัว</Link></li>
                <li><Link className="dropdown-item" href="/terms">เงื่อนไขการให้บริการ</Link></li>
                <li><Link className="dropdown-item" href="/refund">นโยบายการชำระเงิน/คืนเงิน</Link></li>
              </ul>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-2">
            {session ? (
              <div className="dropdown">
                <button
                  className="btn btn-primary dropdown-toggle d-flex align-items-center gap-2 px-2 py-1 border-0"
                  type="button"
                  id="userMenu"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="avatar-wrap">
                    {userImage ? (
                      <Image
                        src={userImage}
                        alt="โปรไฟล์"
                        width={28}
                        height={28}
                        className="rounded-circle object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <span className="avatar-initials" aria-hidden="true">
                        {userName.charAt(0).toUpperCase()}
                      </span>
                    )}
                  </span>
                  <span className="d-none d-sm-inline small">{userName}</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end shadow-sm" aria-labelledby="userMenu">
                  <li><Link className="dropdown-item" href="/profile">โปรไฟล์ของฉัน</Link></li>
                  <li><Link className="dropdown-item" href="/settings">การตั้งค่า</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button type="button" className="dropdown-item text-danger" onClick={() => signOut()}>
                      ออกจากระบบ
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <button type="button" className="btn btn-outline-light btn-sm" onClick={() => signIn()}>
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
