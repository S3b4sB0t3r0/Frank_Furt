// src/components/FeaturedMenu.js
import React from 'react';
import '../styles/FeaturedMenu.css';

const menuItems = [
  {
    id: 1,
    title: 'Salmon a la parrilla ',
    description: 'Fresh Atlantic salmon served with vegetables.',
    price: '$30.000',
    image: '/images/salmon.jpg',
  },
  {
    id: 2,
    title: 'Chicken Alfredo',
    description: 'Creamy pasta with grilled chicken breast.',
    price: '$15.50',
    image: '/images/alfredo.jpg',
  },
  {
    id: 3,
    title: 'Veggie Burger',
    description: 'Plant-based burger with avocado and sweet potato fries.',
    price: '$12.75',
    image: '/images/veggie.jpg',
  },
  {
    id: 4,
    title: 'BBQ Ribs',
    description: 'Slow-cooked ribs glazed in BBQ sauce.',
    price: '$20.00',
    image: '/images/ribs.jpg',
  },
];

const FeaturedMenu = () => {
  return (
    <section className="featured-menu">
      <h2>Platos Destacados</h2>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <div className="menu-card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="menu-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="price">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedMenu;
