import './MargaritaBand.css';

const ITEMS = [
  'Fresh-squeezed lime juice, every day',
  'Sea salt rim, on request',
  'Classic',
];

export default function MargaritaBand() {
  return (
    <section className="margarita-band">
      <div className="container margarita-inner">
        <div>
          <div className="section-kicker">Our Specialty</div>
          <h2>Margaritas</h2>
          <p>
            Margaritas are made with Grand Marnier, Triple Sec, fresh lime juice, 
            natural sweetener, your choice of Tequila and are served on the rocks (try it, you'll love it)
             unless you request blended.
          </p>
          <ul className="margarita-list">
            {ITEMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="margarita-photo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNejFIj-agMtWMCv975GaxQ9E9K7dq_QvVX-n_lAIK2w&s"
            alt="Fresh margarita with salt and lime"
          />
        </div>
      </div>
    </section>
  );
}
