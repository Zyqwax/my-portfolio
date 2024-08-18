import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <React.Fragment>
      <div className='footer'>
        <div className='footer-links'>
          <ul className='footer-nav-link-list'>
            <li className='footer-nav-link-item'>
              <Link href='/'>Ana Sayfa</Link>
            </li>
            <li className='footer-nav-link-item'>
              <Link href='/about'>Hakkında</Link>
            </li>
            <li className='footer-nav-link-item'>
              <Link href='/projects'>Projeler</Link>
            </li>
            <li className='footer-nav-link-item'>
              <Link href='/articles'>Makaleler</Link>
            </li>
            <li className='footer-nav-link-item'>
              <Link href='/contact'>iletişim</Link>
            </li>
          </ul>
        </div>

        <div className='footer-credits'>
          <div className='footer-credits-text'>© 2024 Enes Samed Gözlü. Tüm hakları saklıdır.</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
