import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { FiShoppingCart } from 'react-icons/fi';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      setCartItems(cartItems.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const closeCart = () => {
    setShowCart(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header cartItemCount={cartItems.length} />
      <main className="py-8 px-4">
        <h1 className="text-2xl font-bold text-center mb-8">Welcome to Chokky Store</h1>
        <ProductList addToCart={addToCart} />
        {showCart && <Cart cartItems={cartItems} setCartItems={setCartItems} removeFromCart={removeFromCart} closeCart={closeCart} />}
      </main>
      <button
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg"
        onClick={() => setShowCart(!showCart)}
      >
        <FiShoppingCart className="text-2xl" />
      </button>
    </div>
  );
};

export default App;
