import React from 'react';
import Link from 'next/link';

const NavBar = (props) => {
  const { active } = props;

  return (
    <React.Fragment>
      <div className='nav-container'>
        <nav className='navbar'>
          <div className='nav-background'>
            <ul className='nav-list'>
              <li className={active === 'home' ? 'nav-item active' : 'nav-item'}>
                <Link href='/'>Ana Sayfa</Link>
              </li>
              <li className={active === 'about' ? 'nav-item active' : 'nav-item'}>
                <Link href='/about'>Hakkında</Link>
              </li>
              <li className={active === 'projects' ? 'nav-item active' : 'nav-item'}>
                <Link href='/projects'>Projeler</Link>
              </li>
              <li className={active === 'articles' ? 'nav-item active' : 'nav-item'}>
                <Link href='/articles'>Makaleler</Link>
              </li>
              <li className={active === 'contact' ? 'nav-item active' : 'nav-item'}>
                <Link href='/contact'>İletişim</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
