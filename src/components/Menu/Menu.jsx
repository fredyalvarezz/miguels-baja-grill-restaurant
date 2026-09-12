import './Menu.css';

const APPETIZERS = [
  {
    name: 'San Quintín Baby Clams',
    price: '$12.99',
    desc: 'Steamed baby clams served with lime wedges and a side of garlic-butter.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIYf59c0PLyMK27gvHvaL_TlLCV5gCcIXxTzwBqz8RUvYnnmeDUiQVFM6v&s=10',
  },
  {
    name: 'Nopoló Style Ceviche',
    price: '$14.99',
    desc: 'A blend of fresh Mahi-Mahi, onion, cilantro, cucumber and tomatoes marinated in lime juice, served with three tostadas. A popular appetizer along the Baja coast.',
    note: 'Add avocado for $1.99',
    tag: 'Popular',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/b4/50/bd/photo0jpg.jpg?w=2000&h=-1&s=1',
  },
  {
    name: 'Bacon Wrapped Scallops',
    price: '$17.99',
    desc: 'Large wild-caught deep-sea scallops, grilled and wrapped in bacon, served on a bed of lettuce with tomato, red onion, avocado and a side of Baja fish sauce.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/7a/a4/e8/photo2jpg.jpg?w=1100&h=-1&s=1',
  },
  {
    name: 'San Ignacio Quesadilla',
    price: '$13.99',
    desc: 'Large flour tortilla filled with melted Jack cheese. Served with sour cream and pico de gallo on the side.',
    tag: 'Not Gluten Free',
    note:
      'With chicken or pork $15.99 · With carne asada $16.99 · With portobello, green pepper & onion $15.99 · With roasted poblano, onion & tomato $14.99 · With shrimp, onion, green pepper & tomato $16.99',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/b4/10/b0/photo0jpg.jpg?w=2000&h=-1&s=1',
  },
  {
    name: 'Chips with Salsa',
    price: '$4.99',
    desc: 'House-made salsa served with warm corn chips.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/b1/b0/9c/photo0jpg.jpg?w=1600&h=-1&s=1',
  },
  {
    name: 'Flautas',
    price: '$9.99',
    desc: 'Four rolled corn tortillas filled with chicken, pork or potato and cheese, deep fried and served with sour cream, lettuce, guacamole and pico de gallo.',
    tag: 'Cannot be made Gluten Free',
    image: 'https://s3.amazonaws.com/static.realcaliforniamilk.com/media/recipes_2/flautas-de-pollo-chicken-flautas.jpg',
  },
  {
    name: 'Tostadas',
    price: '$6.99',
    desc: 'Two crisp corn tortillas topped with beans, served with sour cream, cheese, lettuce, guacamole and pico de gallo.',
    note: 'Add chicken or pork for $2.00',
    image: 'https://7diasdesabor.com/wp-content/uploads/2023/03/Tostadas-de-Pollo-con-Mexican-Crumbling-Cheese-web-500x500.jpg',
  },
  {
    name: 'Guacamole With Chips',
    price: '5.99',
    desc: 'Fresh avocados, tomatoes, onion and cilantro, perfectly blended and served with corn chips. Prepared when ordered.',
    tag: 'Popular',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-iY9DU5WGIqsloo6ChOg63o6ElYZLUBcIhYxdH0yJ6SLRyhyRQvYB_A7z&s=10',
  },
];

const SALADS = [
  {
    name: 'Mixed Green Salad',
    price: '$7.99',
    desc: 'Mixed greens, tomato, cucumber, green pepper, red onion, carrots, jicama, nopalitos and almond slivers. Homemade lime-cilantro or mango-miso dressing on the side.',
    image: 'https://www.foodandwine.com/thmb/uAAAw2CcQbWcxzLBRPJYsTr571U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/HD-201109-r-mixed-greens-herb-salad-182f21683caa4b6da1cee7c52f38239a.jpg',
  },
  {
    name: 'Large Mixed Green Salad',
    price: '$10.99',
    desc: 'Mixed greens, tomato, cucumber, green pepper, red onion, carrots, jicama, nopalitos and almond slivers.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/7a/a4/e7/photo1jpg.jpg?w=1100&h=-1&s=1',
  },
  {
    name: 'Steak Salad',
    price: '$17.99',
    desc: 'A large mixed green salad topped with charbroiled carne asada (steak).',
    image: 'https://www.theendlessmeal.com/wp-content/uploads/2019/05/steak-salad-recipe-2.jpg',
  },
  {
    name: 'Scallop Salad',
    price: '$28.99',
    desc: 'A large mixed green salad topped with scallops sautéed in butter and garlic.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/7a/a4/e8/photo2jpg.jpg?w=1100&h=-1&s=1',
  },
  {
    name: 'Shrimp Salad',
    price: '$18.99',
    desc: 'A large mixed green salad topped with shrimp sautéed in butter and garlic.',
    image: 'https://www.eatingbirdfood.com/wp-content/uploads/2022/06/grilled-shrimp-salad-hero.jpg',
  },
  {
    name: 'Mahi-Mahi Salad',
    price: '$19.99',
    desc: 'A large mixed green salad topped with Mahi-Mahi grilled with garlic and lime.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3taWj9KRIz_aHsI-_f51fKsdmJr8Hb4aaSsSPZccJ8FrrsX6mmGJ5SYT0&s=10',
  },
  {
    name: 'Portobello Salad',
    price: '$16.99',
    desc: 'A large mixed green salad topped with portobello mushrooms sautéed in garlic, balsamic vinegar, onion and green pepper.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3taWj9KRIz_aHsI-_f51fKsdmJr8Hb4aaSsSPZccJ8FrrsX6mmGJ5SYT0&s=10',
  },
];

const SEAFOOD_DINNERS = [
  {
    name: 'Mariscos A La Paz',
    price: '$31.99',
    desc: 'Large deep sea scallops, shrimp, Mahi-Mahi and baby clams in a tomato-based sauce with onions, green peppers, tomato, garlic and chile de árbol.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/7a/a4/e6/photo0jpg.jpg?w=1100&h=-1&s=1',
  },
  {
    name: 'Shrimp',
    price: '$27.99',
    desc: 'Ajillo: sauteed with butter, elephant garlic and guajillo chiles, Garlic: sauteed in butter and garlic, Grilled: grilled over an open-flame and basted in garlic and lime, Lime-tequila: sauteed in butter with lime juice, onions, cilantro, chile de arbol and tequila, Ranchero: a tomato-based sauce with onion, green pepper and green olives',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/61/72/1f/caption.jpg?w=1400&h=-1&s=1',
  },
  {
    name: 'Mahi-Mahi',
    price: '$27.99',
    desc: 'Ajillo: sauteed with butter, elephant garlic and guajillo chiles, Garlic: sauteed in butter and garlic, Grilled: grilled over an open-flame and basted in garlic and lime, Lime-tequila: sauteed in butter with lime juice, onions, cilantro, chile de arbol and tequila, Ranchero: a tomato-based sauce with onion, green pepper and green olives',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/61/72/20/caption.jpg?w=1400&h=-1&s=1',
  },
  {
    name: 'Scallops',
    price: '$27.99',
    desc: 'Ajillo: sauteed with butter, elephant garlic and guajillo chiles, Garlic: sauteed in butter and garlic, Grilled: grilled over an open-flame and basted in garlic and lime, Lime-tequila: sauteed in butter with lime juice, onions, cilantro, chile de arbol and tequila, Ranchero: a tomato-based sauce with onion, green pepper and green olives',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/b4/50/bf/photo2jpg.jpg?w=1600&h=-1&s=1',
  },
];

const ENCHILADAS = [
  {
    name: 'Santa Rosalía Enchiladas',
    price: '$11.99',
    desc: 'Two corn tortillas filled with melted Jack cheese, covered with your choice of green tomatillo sauce, red sauce or mole (mole is not Gluten Free). Served with Baja Grill rice, beans of the day and sour cream.',
    note: 'Steak $19.99 · Shrimp $17.99 · Lamb $19.99 · Chicken or Pork $17.99 · Portobello Mushroom $17.99 · Poblano Chile, Onion & Tomato $16.99',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/2d/7b/df/chicken-enchiladas.jpg?w=1400&h=-1&s=1',
  },
];

const TRADITIONAL_DISHES = [
  {
    name: 'Steak Tampiqueña',
    price: '$27.99',
    desc: '8 oz. flatiron steak grilled to order. Served with one cheese enchilada with green tomatillo sauce, red sauce or mole (mole is not Gluten Free), two chicken flautas, rice, beans of the day and guacamole.',
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/02/65/c2/0c/filename-steak-tampiquena.jpg',
  },
  {
    name: 'Steak Fajitas',
    price: '$22.99',
    desc: 'Angus beef, red and green peppers, tomatoes and onions sautéed with garlic and bacon. Served with rice, beans of the day and flour tortillas.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/76/ca/e8/photo6jpg.jpg?w=1100&h=-1&s=1',
  },
  {
    name: 'Spicy Steak Fajitas',
    price: '$22.99',
    desc: 'Angus beef sautéed with green onion, yellow onion, portobello mushroom, tomato, bacon and chile de árbol. Topped with cheese, served with flour tortillas, beans and rice.',
    image: 'https://s3-media0.fl.yelpcdn.com/bphoto/aF5wPtWLIQHVhwU9-Z273w/258s.jpg',
  },
  {
    name: 'Chicken Fajitas',
    price: '$20.99',
    desc: 'Chicken, red and green peppers, tomatoes and onions sautéed with garlic and just a touch of fresh orange juice. Served with rice, beans of the day and flour tortillas.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/dc/3b/53/photo3jpg.jpg?w=2000&h=-1&s=1',
  },
  {
    name: "Maria's Chile Relleno",
    price: '$18.99',
    desc: 'Old-fashioned egg-battered, extra-large poblano pepper stuffed with Jack cheese and covered with our tomato chile-de-árbol red sauce. Served with rice, beans of the day and flour tortillas.',
    tag: 'Not Gluten Free',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/15/2c/17/photo1jpg.jpg?w=1400&h=-1&s=1',
  },
  {
    name: 'Portobello Fajitas',
    price: '$19.99',
    desc: 'Portobello mushroom, red and green peppers, tomatoes and onions sautéed with garlic and balsamic vinegar. Served with rice, beans of the day and flour tortillas.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/ca/6a/c4/miguel-s-baja-grill.jpg?w=2000&h=-1&s=1',
  },
  {
    name: 'Spicy Chicken Fajitas',
    price: '$20.99',
    desc: 'Chicken sautéed with green onion, yellow onion, portobello mushroom, tomato, bacon and chile de árbol. Topped with cheese, served with flour tortillas, beans and rice.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/dc/3b/53/photo3jpg.jpg?w=1200&h=1200&s=1',
  },
];

const TACOS = [
  {
    name: 'Baja Fish Tacos',
    price: '$19.99',
    desc: 'The traditional way of cooking fish tacos in Baja, Mexico. Beer-battered Mahi-Mahi, deep fried, served on flour tortillas with cabbage, pico de gallo, cucumber and our Baja fish sauce.',
    note: 'Traditional or Grilled',
    tag: 'Popular',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/2d/7b/e8/fish-tacos.jpg?w=1400&h=-1&s=1',
  },
  {
    name: 'Loreto Shrimp Tacos',
    price: '$19.99',
    desc: 'Beer-battered shrimp served on flour tortillas with cabbage, pico de gallo, cucumber and Baja fish sauce.',
    note: 'Traditional or Grilled',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/76/ca/e6/photo4jpg.jpg?w=1100&h=-1&s=1',
  },
  {
    name: 'Todos Santos Lamb Tacos',
    price: '$19.99',
    desc: 'Roasted lamb, marinated in traditional Mexican spices, served on flour tortillas with fresh cilantro and onion, cucumbers and red sauce.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/20/80/3c/photo0jpg.jpg?w=1600&h=-1&s=1',
  },
  {
    name: 'Mulegé Chicken Tacos',
    price: '$18.99',
    desc: 'Grilled chicken breast marinated in achiote chile, served on flour tortillas with pico de gallo. Lettuce, cucumbers, lime and our tomato chile-de-árbol sauce on the side.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/fd/72/8f/caption.jpg?w=1400&h=-1&s=1',
  },
  {
    name: 'Cabo San Lucas Pork Tacos',
    price: '$18.99',
    desc: 'Fresh pork, slowly cooked in cast iron, served on flour tortillas with fresh cilantro and onion. Green tomatillo sauce, lettuce and cucumber on the side.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/e2/85/91/this-entree-of-one-pork.jpg?w=2000&h=-1&s=1',
  },
  {
    name: 'Don Juan Carne Asada Tacos',
    price: '$21.99',
    desc: 'Marinated and charbroiled New York steak served on flour tortillas with pico de gallo and avocado salsa. Served with lettuce, salsa and radish on the side.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/03/9c/02/photo0jpg.jpg?w=2000&h=-1&s=1',
  },
];

const MOAB_BURRITOS = [
  {
    name: 'M.O.A.B.',
    price: '$13.99',
    desc: 'An extra-large flour tortilla filled with beans of the day, Baja Grill rice, Jack cheese and covered with your choice of green tomatillo sauce, red sauce or mole (mole is not Gluten Free).',
    note: 'Steak $19.99 · Shrimp $18.99 · Lamb $19.99 · Chicken or Pork $17.99 · Grilled Fish $18.99 · Portobello Mushroom $17.99 · Poblano Chile, Onion & Tomato $17.99',
    tag: 'Not Gluten Free',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/57/d5/70/the-green-moab.jpg?w=1100&h=-1&s=1',
  },
  {
    name: 'M.O.A.B. Lite',
    price: '$13.99',
    desc: 'A half-size burrito served with a dinner salad. Choice of dressing: homemade lime-cilantro or mango-miso.',
    note: 'Steak $19.99 · Shrimp $18.99 · Lamb $19.99 · Chicken or Pork $17.99 · Grilled Fish $18.99 · Portobello Mushroom $17.99 · Poblano Chile, Onion & Tomato $17.99',
    tag: 'Not Gluten Free',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/94/46/eb/photo1jpg.jpg?w=800&h=-1&s=1',
  },
];

function FoodCard({ item }) {
  return (
    <article className="menu-card">
      <div className="menu-card-image">
        {item.image ? (
          <img src={item.image} alt={item.name} loading="lazy" />
        ) : (
          <div className="menu-card-fallback">{item.name.charAt(0)}</div>
        )}
      </div>
      <div className="menu-card-body">
        <div className="menu-card-head">
          <h3>{item.name}</h3>
          <span className="menu-card-price">{item.price}</span>
        </div>
        <p className="menu-card-desc">
          {item.desc || 'Ask your server for today\'s preparation.'}
        </p>
        {item.note && <p className="menu-card-note">{item.note}</p>}
        {item.tag && <span className="menu-card-tag">{item.tag}</span>}
      </div>
    </article>
  );
}

function MenuCategory({ title, subnote, items }) {
  return (
    <>
      <h3 className="menu-subheading">{title}</h3>
      {subnote && <p className="menu-subnote">{subnote}</p>}
      <div className="menu-card-grid">
        {items.map((item) => (
          <FoodCard item={item} key={item.name} />
        ))}
      </div>
    </>
  );
}

export default function Menu() {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="section-head">
          <div className="section-kicker">Menu</div>
          <h2>Restaurant Menu</h2>
          <p>
            Please advise your server of any food allergies. Gluten-free items are available —
            almost all dishes can be made gluten-free unless noted otherwise. Please understand
            we provide gluten-free options, but this is not a dedicated gluten-free facility.
            Miguel's Baja Grill is proud to cook with zero trans-fat. Separate checks must be
            requested before you order.
          </p>
        </div>

        <MenuCategory title="Appetizers" items={APPETIZERS} />

        <MenuCategory
          title="Seafood Dinners"
          subnote="Dinners are served with a side salad of mixed greens, tomato, cucumber, green pepper, red onion, carrots, jicama and almond slivers (homemade lime-cilantro or mango-miso dressing on the side), plus Baja Grill rice, tortillas and vegetables."
          items={SEAFOOD_DINNERS}
        />

        <MenuCategory
          title="Enchiladas"
          subnote="Half orders available."
          items={ENCHILADAS}
        />

        <MenuCategory title="Traditional Dishes" items={TRADITIONAL_DISHES} />

        <MenuCategory
          title="Tacos"
          subnote="All tacos served with Baja Grill rice and beans of the day. Two tacos per order. Half orders available. Corn tortillas available."
          items={TACOS}
        />

        <MenuCategory
          title="The M.O.A.B — The Mother Of All Burritos"
          items={MOAB_BURRITOS}
        />

        <MenuCategory
          title="Salads & Entrees"
          subnote="Choose from our homemade dressings: lime-cilantro or mango-miso. Add avocado to any salad for $1.99 · Add cheese to any salad for $1.99."
          items={SALADS}
        />
      </div>
    </section>
  );
}