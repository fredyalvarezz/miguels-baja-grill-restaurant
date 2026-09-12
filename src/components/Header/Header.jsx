import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const PHONE = '+14352596546';
const PHONE_DISPLAY = '(435) 259-6546';
const MAPS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=51+North+Main+Street+Moab+UT+84532';

const NAV_LINKS = [
  { to: '/about', label: 'About' },
  { to: '/menu', label: 'Menu' },
  { to: '/margaritas', label: 'Margaritas' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <Link to="/" className="nav-brand">Miguel's Baja Grill</Link>

        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <Link key={link.to} to={link.to}>{link.label}</Link>
          ))}
        </div>

        <div className="nav-cta">
          <a href={`tel:${PHONE}`} className="btn btn-outline">
            {PHONE_DISPLAY}
          </a>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Get Directions
          </a>
        </div>

        <button
          className="nav-toggle"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </div>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <div className="mobile-menu-inner">
          {NAV_LINKS.map((link) => (
            <Link key={link.to} to={link.to} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <a href={`tel:${PHONE}`} onClick={() => setOpen(false)}>
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </nav>
  );
}