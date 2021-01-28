import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');
      setProducts(response.data);
    }
    loadProducts();
  }, []);

  function formatPrice(price) {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  return (
    <>
      <h1>Products</h1>

      <input
        id="search"
        name="search"
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {products
          .filter((product) => product.title.includes(search.toUpperCase()))
          .map((product) => (
            <li key={product._id}>
              <strong>{product.title}</strong>
              <small>{product.category}</small>
              <span>{formatPrice(product.price)}</span>
            </li>
          ))}
      </ul>
      <Link to="/">Voltar</Link>
    </>
  );
}

export default Products;