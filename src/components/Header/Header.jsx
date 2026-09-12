import { useState } from 'react';
import './Header.css';

const PHONE = '+14352596546';
const PHONE_DISPLAY = '(435) 259-6546';
const MAPS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=51+North+Main+Street+Moab+UT+84532';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#menu', label: 'Menu' },
  { href: '#location', label: 'Location' },
 
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <a href="#top" className="nav-brand">Miguel's Baja Grill</a>

        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
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
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href={`tel:${PHONE}`} onClick={() => setOpen(false)}>
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </nav>
  );
}
