// src/pages/MenuPage.js
import React from 'react';
import '../styles/MenuPage.css';

const menu = {
  Starters: [
    {
      title: 'Garlic Bread',
      description: 'Toasted bread with garlic and herbs.',
      price: '$4.99',
    },
    {
      title: 'Bruschetta',
      description: 'Grilled bread with tomatoes and olive oil.',
      price: '$6.50',
    },
  ],
  'Main Dishes': [
    {
      title: 'Grilled Chicken',
      description: 'Served with seasonal vegetables and rice.',
      price: '$14.99',
    },
    {
      title: 'Beef Lasagna',
      description: 'Classic lasagna with homemade sauce.',
      price: '$13.75',
    },
  ],
  Desserts: [
    {
      title: 'Tiramisu',
      description: 'Coffee-flavored Italian dessert.',
      price: '$6.99',
    },
    {
      title: 'Chocolate Lava Cake',
      description: 'Warm cake with a gooey chocolate center.',
      price: '$7.50',
    },
  ],
  Drinks: [
    {
      title: 'Fresh Lemonade',
      description: 'Homemade with real lemons.',
      price: '$3.25',
    },
    {
      title: 'Coca-Cola',
      description: 'Classic or zero.',
      price: '$2.50',
    },
  ],
};

const MenuPage = () => {
  return (
    <div className="menu-page">
      
      <h1>Our Full Menu</h1>
      {Object.entries(menu).map(([category, items]) => (
        <div key={category} className="menu-category">
          <h2>{category}</h2>
          <div className="menu-items">
            {items.map((item, index) => (
              <div className="menu-item" key={index}>
                <div className="item-info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="item-price">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuPage;
