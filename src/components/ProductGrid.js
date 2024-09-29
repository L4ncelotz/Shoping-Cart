// src/components/ProductGrid.js
import React from 'react';

const products = [
  { id: 1, name: 'Product 1', price: '$25.00', image: '/path-to-image1.jpg' },
  { id: 2, name: 'Product 2', price: '$35.00', image: '/path-to-image2.jpg' },
  { id: 3, name: 'Product 3', price: '$45.00', image: '/path-to-image3.jpg' },
  // Add more products as needed
];

const ProductGrid = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map(product => (
        <div key={product.id} className="border rounded-lg overflow-hidden shadow-md">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
