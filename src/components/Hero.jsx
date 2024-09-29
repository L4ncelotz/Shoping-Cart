import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto text-white text-center py-36">
        <h2 className="text-4xl font-bold">Welcome to Chokky Store</h2>
        <p className="mt-2">Find the best products for your home.</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
