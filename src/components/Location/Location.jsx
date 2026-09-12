import './Location.css';

const PHONE = '+14352596546';
const PHONE_DISPLAY = '(435) 259-6546';
const MAPS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=51+North+Main+Street+Moab+UT+84532';
const MAPS_EMBED_URL =
  'https://www.google.com/maps?q=51+North+Main+Street,+Moab,+UT+84532&output=embed';

export default function Location() {
  return (
    <section className="visit" id="location">
      <div className="container">
        <div className="section-head">
          <div className="section-kicker">Visit Us</div>
          <h2>Find us in downtown Moab</h2>
        </div>

        <div className="visit-grid">
          <div className="visit-info">
            <h3>Miguel's Baja Grill</h3>

            <div className="visit-row">
              <div>
                <strong>Address</strong>
                <span>51 North Main Street, Moab, UT 84532</span>
              </div>
            </div>

            <div className="visit-row">
              <div>
                <strong>Phone</strong>
                <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>
              </div>
            </div>

            <div className="visit-row">
              <div>
                <strong>Hours</strong>
                <table className="hours-table">
                  <tbody>
                    <tr>
                      <td>Monday – Sunday</td>
                      <td>5:00 pm – 9:00 pm</td>
                    </tr>
                  </tbody>
                </table>
                <span className="visit-hours-note">
                  Hours may vary by season — please call ahead to confirm.
                </span>
              </div>
            </div>

            <div className="visit-row">
              <div>
                <strong>Reservations</strong>
                <span>No reservations — seating is first come, first served.</span>
              </div>
            </div>

            <div className="visit-row">
              <div>
                <strong>Ambiance</strong>
                <span>
                  A small, cozy restaurant right on Main Street, an easy walk from downtown
                  Moab.
                </span>
              </div>
            </div>

            <div className="visit-cta">
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Get Directions
              </a>
              <a href={`tel:${PHONE}`} className="btn btn-outline">
                Call Now
              </a>
            </div>
          </div>

          <div className="visit-map">
            <iframe
              src={MAPS_EMBED_URL}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Miguel's Baja Grill in Moab, Utah"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
