// src/components/Testimonials.js
import React from 'react';
import '../styles/Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Emily Smith',
    text: 'Absolutely delicious! The best food delivery experience I’ve had.',
    image: '/images/testimonial1.jpg',
  },
  {
    id: 2,
    name: 'Michael Brown',
    text: 'Great quality and friendly service. Highly recommend Fresheat!',
    image: '/images/testimonial2.jpg',
  },
  {
    id: 3,
    name: 'Sara Wilson',
    text: 'Fresh, hot, and always on time. I order every week!',
    image: '/images/testimonial3.jpg',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Lo que dicen de nosotros</h2>
      <div className="testimonial-cards">
        {testimonials.map(({ id, name, text, image }) => (
          <div className="testimonial-card" key={id}>
            <img src={image} alt={name} />
            <p className="testimonial-text">"{text}"</p>
            <p className="testimonial-name">— {name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
