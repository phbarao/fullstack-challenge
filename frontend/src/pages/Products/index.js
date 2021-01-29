import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

function Products() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  const handleFilterChange = (e, filterType) => {
    switch (filterType) {
      case "category":
        setCategory(e.target.value);
        break;

      case "search":
        setSearch(e.target.value);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get("/products");
      setProducts(response.data);
      let filteredProducts = response.data;

      if (category !== "all") {
        filteredProducts = filteredProducts.filter(
          (product) => product.category === category
        );
      }

      if (search !== "") {
        filteredProducts = filteredProducts.filter((product) =>
          product.title.toLowerCase().includes(search.toLowerCase())
        );
      }
      setProducts(filteredProducts);
    }

    loadProducts();
  }, [search, category]);

  function formatPrice(price) {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    <>
      <h1>Products</h1>

      <select
        name="category"
        id="category"
        onChange={(e) => handleFilterChange(e, "category")}
      >
        <option value="all">Todos...</option>
        <option value="audio">Audio</option>
        <option value="video">Video</option>
      </select>

      <input
        id="search"
        name="search"
        type="text"
        placeholder="Search..."
        onChange={(e) => handleFilterChange(e, "search")}
      />

      <ul>
        {products.map((product) => (
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
