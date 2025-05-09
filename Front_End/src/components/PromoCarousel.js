// src/components/PromoCarousel.js
import React, { useState, useEffect } from 'react';
import '../styles/PromoCarousel.css';

const slides = [
  {
    id: 1,
    text: '🔥 2x1 en todas las hamburguesas los viernes',
    image: '/images/promo1.jpg',
  },
  {
    id: 2,
    text: '🍕 Envío gratis en pedidos mayores a $20',
    image: '/images/promo2.jpg',
  },
  {
    id: 3,
    text: '🥗 Nueva línea saludable: ensaladas frescas',
    image: '/images/promo3.jpg',
  },
];

const PromoCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="promo-carousel">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-text">{slide.text}</div>
        </div>
      ))}
    </section>
  );
};

export default PromoCarousel;
