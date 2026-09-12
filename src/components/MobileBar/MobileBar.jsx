import './MobileBar.css';

const PHONE = '+14352596546';
const MAPS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=51+North+Main+Street+Moab+UT+84532';

export default function MobileBar() {
  return (
    <div className="mobile-bar">
      <a href={`tel:${PHONE}`}>
        <button className="btn btn-outline">Call</button>
      </a>
      <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
        <button className="btn btn-primary">Directions</button>
      </a>
    </div>
  );
}
