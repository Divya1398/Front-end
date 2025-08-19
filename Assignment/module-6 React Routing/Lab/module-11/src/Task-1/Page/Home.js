import React from 'react';
import Header from '../Comen/Header';
import Footer from '../Comen/Footer';

function Home() {
  return (
    <div>
      <Header />

      <section className="d-flex justify-content-center align-items-center" style={{ minHeight: '70vh', backgroundColor: '#0d6efd' }}>
        <div className="card text-center text-white p-4 shadow" style={{ maxWidth: '700px', backgroundColor: '#0b5ed7', borderRadius: '10px' }}>
          <h1 className="mb-3">Welcome to TechCorp</h1>
          <p className="lead mb-2">Innovative web and mobile solutions to help your business grow digitally.</p>
          <p>We combine creativity, technology, and expertise to deliver reliable services that make an impact.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
