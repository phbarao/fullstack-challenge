import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Landing() {
  return (
    <>
      <h1>Landing Page</h1>

      <Link to="/products">Produtos</Link>
    </>
  );
}

export default Landing;
