import './MargaritaBand.css';

const ITEMS = [
  'Fresh-squeezed lime juice, every day',
  'Sea salt rim, on request',
  'Classic',
];

const WINES = [
  { name: 'Los Cardos Malbec, Argentina', price: 'Glass $7.00 · Bottle $30.00', desc: 'Spicy and rich with juicy, fresh black fruit and a long jammy finish.' },
  { name: 'Heron Wines Chardonnay, California', price: 'Glass $7.00 · Bottle $30.00', desc: 'Aromas of pear, peach and citrus, followed by a light toasted-vanilla finish.' },
  { name: 'Heron Wines Pinot Noir, California', price: 'Glass $7.25 · Bottle $31.00', desc: 'Red cherry, tart cranberry, spicy vanilla and a slightly earthy background.' },
];

const SHOOTERS = [
  { name: 'Don Julio Añejo', price: '$8.75' },
  { name: 'Sauza Hornitos Reposado', price: '$5.50' },
  { name: 'Patrón Silver', price: '$8.25' },
  { name: 'Montezuma Gold', price: '$4.00' },
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

      <div className="container margarita-drinks">
        <h3 className="menu-subheading">Drink Menu</h3>
        <p className="menu-subnote">Wine · corking fee $10.00</p>
        <div className="drink-grid">
          {WINES.map((w) => (
            <div className="drink-item" key={w.name}>
              <div className="drink-item-head">
                <strong>{w.name}</strong>
                <span>{w.price}</span>
              </div>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>

        <h4 className="menu-subheading-sm">Shooters · 1 oz.</h4>
        <p className="menu-subnote">
          Tequila is Mexico's national spirit, made from fermenting the sugars of the Blue Agave
          plant. It must be produced within designated regions of Mexico, mostly in the state of
          Jalisco.
        </p>
        <div className="drink-grid drink-grid-compact">
          {SHOOTERS.map((s) => (
            <div className="drink-item" key={s.name}>
              <div className="drink-item-head">
                <strong>{s.name}</strong>
                <span>{s.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="menu-note">
          Please be prepared to show ID if ordering any alcoholic beverage. Utah liquor law
          states: "A full-service restaurant may not sell, offer for sale, or furnish an
          alcoholic product except in connection with an order for food prepared, sold, and
          furnished at the licensed premises." Your server will be happy to explain further.
        </div>
      </div>
    </section>
  );
}