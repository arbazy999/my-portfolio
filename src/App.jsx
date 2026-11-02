import React from 'react';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', lineHeight: '1.6', color: '#333' }}>
      <header style={{ textAlign: 'center', padding: '40px 0', background: '#f4f4f4', borderRadius: '8px' }}>
        <h1>Arbaz Ali</h1>
        <h3>Frontend Developer & BCA Student</h3>
        <p style={{ maxWidth: '600px', margin: '10px auto' }}>
          Passionate web developer skilled in React, JavaScript, and building responsive user interfaces.
        </p>
      </header>

      <section style={{ padding: '30px 20px' }}>
        <h2>Skills</h2>
        <ul style={{ display: 'flex', gap: '15px', listStyle: 'none', padding: 0 }}>
          <li style={{ background: '#e2e8f0', padding: '8px 15px', borderRadius: '5px' }}>React.js</li>
          <li style={{ background: '#e2e8f0', padding: '8px 15px', borderRadius: '5px' }}>JavaScript</li>
          <li style={{ background: '#e2e8f0', padding: '8px 15px', borderRadius: '5px' }}>HTML5 & CSS3</li>
        </ul>
      </section>

      <section style={{ padding: '30px 20px' }}>
        <h2>Projects</h2>
        <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '5px', maxWidth: '400px' }}>
          <h3>ShopKart E-commerce App</h3>
          <p>An online shopping platform built with React featuring state management and responsive design.</p>
        </div>
      </section>

      <section style={{ padding: '30px 20px', background: '#f9f9f9', borderRadius: '8px' }}>
        <h2>Contact & Resume</h2>
        <p>Email: arbaz@example.com</p>
      </section>
    </div>
  );
}

export default App;