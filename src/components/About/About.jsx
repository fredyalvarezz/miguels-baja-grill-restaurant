import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <div className="about-copy">
          <div className="section-kicker">Our Kitchen</div>
          <h2 className="about-title">About Us</h2>
          <p>
            At Miguel's Baja Grill, we feature Moab's best seafood, traditional Mexican dishes and margaritas from scratch.
            Our genuine Mexican cuisine comes from traditional recipes and methods of Baja California Sur and other states in Mexico.
            We pride ourselves on fresh food, using only the freshest ingredients to provide you with the best dining experience!
          </p>
          <p>
            We prepare it as you order it: fresh seafood, tacos, quesadillas, flautas and
            homemade guacamole, alongside our famous margaritas made from scratch. So please, sit
            back and enjoy your Baja experience.
            Buen Provecho!
            Enjoy!
          </p>
          <div className="about-pillars">
            <div className="pillar"><strong>Fresh seafood</strong></div>
            <div className="pillar"><strong>Traditional recipes</strong></div>
            <div className="pillar"><strong>Margaritas from scratch</strong></div>
          </div>
        </div>

        <div className="about-photo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfw9TwZDJazY_zGuJ3XwUoU2p5ArJ1UhrHcOh68reQn4Yp9096tLomOX0M&s=10"
            alt="Miguel's baja grill"
          />
        </div>
      </div>
    </section>
  );
}
