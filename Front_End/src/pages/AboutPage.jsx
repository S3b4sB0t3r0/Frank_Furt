// src/pages/AboutPage.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/AboutPage.css';


const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="about-page">
        <section className="hero-section">
          <h1>About Us</h1>
          <p>We are passionate about food and customer service.</p>
        </section>

        <section className="content">
          <div className="container">
            <h2>Our Story</h2>
            <p>
              Since 2002, Fresheat has been delivering top-quality food to food lovers all over the world.
              We are committed to freshness, quality ingredients, and a memorable dining experience.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
