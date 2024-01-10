import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { type JSX } from 'react/jsx-runtime';
import logo from '../../images/logo.png';
import { type Page } from '../../interfaces';
import { type Pages } from '../../types';
import ToggleButton from '../Commons/ToggleButton';
import '../../i18n/config';
import { useTranslation } from 'react-i18next';



const Navbar = (): JSX.Element => {
  const [active, setActive] = useState(false);
  const [pages, setPages] = useState<Pages>([]);
  const { t } = useTranslation();

  const pageLinks: Pages = [
    {
      id: 1,
      href: '/',
      text: t('Home'),
    },
    {
      id: 2,
      href: '/about',
      text: t('About'),
    },
  ];

  useEffect(() => {
    setPages(pageLinks);
  }, []);
  return (
    <nav
      className="navbar is-fixed-top is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a
          className="navbar-item"
          ref={() => {}}
          onClick={() => {
            window.location.reload();
          }}
        >
          <img
            src={logo}
            alt={logo}
          />
        </a>

        <a
          role="button"
          onClick={() => {
            setActive(!active);
          }}
          className={`navbar-burger burger ${active && 'is-active'}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu ${active && 'is-active'}`}
      >
        <div className="navbar-start">
          {pages.map((page: Page) => {
            const { id, text, href } = page;
            return (
              <Link
                className="navbar-item"
                to={href}
                key={id}
              >
                {text}
              </Link>
            );
          })}
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
             <div className='is-flex is-justify-content-center is-align-items-center'>
             <ToggleButton />
             </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
