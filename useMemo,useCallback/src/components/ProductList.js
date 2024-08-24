
import React, { useState, useMemo } from 'react';
import products from '../data/products.json';  // Assuming a simple array of product objects

const ProductList = ({ filter, sortKey }) => {
  const sortedAndFilteredProducts = useMemo(() => {
    let filteredProducts = products.filter(product =>
      product.category === filter.category && product.price <= filter.maxPrice
    );
    if (sortKey === 'price') {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortKey === 'name') {
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    }
    return filteredProducts;
  }, [filter, sortKey]);

  return (
    <div>
      {sortedAndFilteredProducts.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
