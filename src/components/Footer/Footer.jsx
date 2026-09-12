import { Link } from 'react-router-dom';
import './Footer.css';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaPhone } from 'react-icons/fa';

import logo from '../../assets/logo.png';

const PHONE = '+14352596546';
const PHONE_DISPLAY = '(435) 259-6546';

const WHATSAPP = '526331016178';

const FACEBOOK =
  'https://www.facebook.com/miguelsbajagrillmoab?locale=es_LA';

const INSTAGRAM =
  'https://www.instagram.com/miguels_baja_grill_moab_ut/';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">

          {/* Logo */}
          <div className="footer-brand">
            <img
              src={logo}
              alt="Miguel's Baja Grill"
              className="footer-logo"
            />
          </div>

          {/* Navigation */}
          <nav className="footer-links">
            <Link to="/about">About</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/margaritas">Margaritas</Link>
            <Link to="/contact">Contact</Link>

            <a href={`tel:${PHONE}`} className="footer-phone">
              <FaPhone />
              <span>{PHONE_DISPLAY}</span>
            </a>
          </nav>

          {/* Social media */}
          <div className="footer-social">

            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Miguel's Baja Grill on WhatsApp"
              className="social-link whatsapp"
            >
              <FaWhatsapp />
            </a>

            <a
              href={FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Miguel's Baja Grill on Facebook"
              className="social-link facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Miguel's Baja Grill on Instagram"
              className="social-link instagram"
            >
              <FaInstagram />
            </a>

          </div>
        </div>

        <div className="footer-bottom">
          <p>
            51 North Main Street, Moab, UT 84532
            <span> · </span>
            Open daily, 5:00 pm – 9:00 pm
            <span> · </span>
            No Reservations
          </p>

          <p>
            © {year} Miguel's Baja Grill. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}