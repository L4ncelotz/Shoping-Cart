import React from 'react';


const ProductList = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Camera', price: 129, image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 2, name: 'Watch', price: 39, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D' },
    { id: 3, name: 'Headset', price: 29, image: 'https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D' },
    { id: 4, name: 'Perfume', price: 59, image: 'https://plus.unsplash.com/premium_photo-1670537994863-5ad53a3214e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D' },
    { id: 5, name: 'Glasses', price: 19, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D' },
    { id: 6, name: 'Sneakers', price: 45, image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D' },
    { id: 7, name: 'Body Lotion', price: 10, image: 'https://images.unsplash.com/photo-1597931752949-98c74b5b159f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D' },
    { id: 8, name: 'Mug', price: 5, image: 'https://plus.unsplash.com/premium_photo-1719289799337-9cb436447965?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHxwcm9kdWN0fGVufDB8fDB8fHww' },
    { id: 9, name: 'SmartPhone', price: 109, image: 'https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBob25lfGVufDB8fDB8fHww' },
    { id: 10, name: 'SD Card', price: 4, image: 'https://images.unsplash.com/photo-1499336969384-ebe67b79faa8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <div key={product.id} className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105">
          <img src={product.image} alt={product.name} className="h-40 w-full object-cover rounded-md" />
          <h2 className="mt-2 text-lg font-semibold">{product.name}</h2>
          <p className="mt-1 text-gray-700">${product.price.toFixed(2)}</p>
          <button
            className="mt-4 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
