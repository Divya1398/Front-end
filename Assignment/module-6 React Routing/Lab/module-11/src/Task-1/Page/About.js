import React from 'react';
import Header from '../Comen/Header';
import Footer from '../Comen/Footer';

function About() {
  return (
    <div>
      <Header />

      <section className="d-flex justify-content-center align-items-center" style={{ minHeight: '70vh', backgroundColor: '#198754' }}>
        <div className="card text-center text-white p-4 shadow" style={{ maxWidth: '700px', backgroundColor: '#157347', borderRadius: '10px' }}>
          <h1 className="mb-3">About TechCorp</h1>
          <p className="lead mb-2">TechCorp is a trusted software and web development company delivering modern digital solutions.</p>
          <p>Our mission is to empower businesses with innovative technology, creative design, and expert support.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
