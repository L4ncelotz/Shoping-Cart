import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';  // ใช้ react-icons สำหรับไอคอนตะกร้าสินค้า

const Header = ({ cartItemCount }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Chokky Store</h1>
        <div className="relative">
          <button className="relative">
            <FiShoppingCart className="text-2xl" />
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
