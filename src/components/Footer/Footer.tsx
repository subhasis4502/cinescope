import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo-main">Cinescope</div>
            <span className="footer__logo-sub">Wedding Films</span>
            <p className="footer__tagline">
              Cinematic wedding films that capture the feeling, not just the moments.
            </p>
            <div className="footer__socials">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer__social-link">IG</a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="footer__social-link">YT</a>
              <a href="https://vimeo.com" target="_blank" rel="noreferrer" className="footer__social-link">VM</a>
            </div>
          </div>

          {/* Pages */}
          <div className="footer__col">
            <h4 className="footer__col-title">Navigate</h4>
            <ul className="footer__col-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/films">Films</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h4 className="footer__col-title">Services</h4>
            <ul className="footer__col-links">
              <li><a href="#">Wedding Films</a></li>
              <li><a href="#">Elopements</a></li>
              <li><a href="#">Engagement</a></li>
              <li><a href="#">Same-Day Edits</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">Contact</h4>
            <ul className="footer__col-links">
              <li><a href="mailto:hello@spotlightweddings.com">cinescopeeditstudio@gmail.com</a></li>
              <li><a href="tel:+15551234567">+91 980-4444-244</a></li>
              <li><a href="#">Available Worldwide</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <span className="footer__copy">
            © {new Date().getFullYear()} Cinescope Wedding Films. All rights reserved.
          </span>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}