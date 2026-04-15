import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home',      to: '/' },
  { label: 'Films',     to: '/films' },
  { label: 'Portfolio', to: '/portfolio' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar__inner">
          <NavLink to="/" className="navbar__logo" onClick={() => setMobileOpen(false)}>
            <span className="navbar__logo-main">Spotlight</span>
            <span className="navbar__logo-sub">Wedding Films</span>
          </NavLink>

          <ul className="navbar__links">
            {NAV_LINKS.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) => isActive ? 'active' : ''}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <NavLink to="/contact" className="navbar__cta">
            Inquire
          </NavLink>

          <button
            className="navbar__hamburger"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(o => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`navbar__mobile${mobileOpen ? ' open' : ''}`}>
        {NAV_LINKS.map(({ label, to }) => (
          <NavLink key={to} to={to} onClick={() => setMobileOpen(false)}>
            {label}
          </NavLink>
        ))}
        <NavLink to="/contact" onClick={() => setMobileOpen(false)}>
          Inquire
        </NavLink>
      </div>
    </>
  );
}