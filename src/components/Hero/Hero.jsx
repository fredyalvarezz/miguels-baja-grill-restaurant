import './Hero.css';

const PHONE = '+14352596546';
const MAPS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=51+North+Main+Street+Moab+UT+84532';

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="container hero-inner">
        <div>
          <span className="hero-tag">Baja California Cuisine · Moab, UT</span>
          <h1>Fresh seafood, authentic Mexican dishes, and margaritas made from scratch.</h1>
          <p className="hero-sub">
            Welcome to Miguel's Baja Grill
          </p>
          <p className="hero-sub">Best Fish Tacos and Best Margaritas at town.</p>
          <div className="hero-cta">
            <a href="#menu" className="btn btn-primary">View Menu</a>
            <a href={`tel:${PHONE}`} className="btn btn-outline">Call Now</a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Get Directions
            </a>
          </div>
          <div className="hero-meta">
            <div className="hero-meta-item">
              <strong>51 N Main St</strong>
              <span>Moab, UT 84532</span>
            </div>
            <div className="hero-meta-item">
              <strong>5:00 – 9:00 pm</strong>
              <span>Open daily</span>
            </div>
            <div className="hero-meta-item">
              <strong>No Reservations</strong>
              <span>Seating is first come, first served</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/3f/1e/33/photo0jpg.jpg?w=1200&h=1200&s=1"
            alt="fish tacos"
          />
        </div>
      </div>
    </header>
  );
}
