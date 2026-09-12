import './FinalCTA.css';

const PHONE = '+14352596546';
const MAPS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=51+North+Main+Street+Moab+UT+84532';

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container">
        <h2>Craving Baja style tonight?</h2>
        <p>Open daily from 5:00 pm to 9:00 pm in the heart of Moab.</p>
        <div className="final-cta-buttons">
          <a href={`tel:${PHONE}`} className="btn btn-outline-light">Call Now</a>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
