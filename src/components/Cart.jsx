import React, { useState } from 'react';

const Cart = ({ cartItems, setCartItems, removeFromCart, closeCart }) => {
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingCost = 100; // ค่าขนส่ง
  const finalTotal = total + shippingCost - discount;

  const increaseQuantity = (id) => {
    // ฟังก์ชันเพิ่มจำนวนสินค้า
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (id) => {
    // ฟังก์ชันลดจำนวนสินค้า
    setCartItems(cartItems.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  // คูปองที่สามารถใช้ได้
  const couponsAvailable = [
    { code: "DISCOUNT10", discount: 0.1, description: "ลด 10% สำหรับการสั่งซื้อครั้งแรก" },
    { code: "FREESHIP", discount: shippingCost, description: "ค่าขนส่งฟรีสำหรับการสั่งซื้อเกิน $50" }
  ];

  const applyCoupon = () => {
    const coupon = couponsAvailable.find(c => c.code === couponCode);
    if (coupon) {
      // ตรวจสอบคูปองและคำนวณส่วนลดใหม่
      if (coupon.code === "DISCOUNT10") {
        setDiscount(total * coupon.discount); // ลด 10%
      } else if (coupon.code === "FREESHIP") {
        // เช็คว่า total มากกว่า 50 หรือไม่
        if (total > 50) {
          setDiscount(shippingCost); // ฟรีค่าขนส่ง
        } else {
          alert('ต้องสั่งซื้อเกิน $50 ถึงจะใช้คูปองนี้ได้');
        }
      }
      alert('Coupon applied successfully!');
    } else {
      alert('Invalid coupon code');
    }
  };

  return (
    <div className="fixed top-0 right-0 w-80 bg-white shadow-lg p-6 rounded-lg">
      <button onClick={closeCart} className="mb-4 text-red-500 font-bold">Close</button>
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <ul className="mb-4">
          {cartItems.map(item => (
            <li key={item.id} className="flex justify-between items-center border-b py-2">
              <span className="font-medium">{item.name}</span>
              <div className="flex items-center">
                <button 
                  onClick={() => decreaseQuantity(item.id)} 
                  className="text-gray-500 hover:underline mx-2"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button 
                  onClick={() => increaseQuantity(item.id)} 
                  className="text-gray-500 hover:underline mx-2"
                >
                  +
                </button>
              </div>
              <span className="text-gray-700">${(item.price * item.quantity).toFixed(2)}</span>
              <button 
                onClick={() => removeFromCart(item.id)} 
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="mb-4">
        <div className="flex justify-between font-bold">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping:</span>
          <span>${shippingCost.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Discount:</span>
          <span>${discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-lg">
          <span>Final Total:</span>
          <span>${finalTotal.toFixed(2)}</span>
        </div>
      </div>
      <input 
        type="text" 
        placeholder="Enter coupon code" 
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)} // อัปเดตค่าคูปองที่กรอก
        className="border rounded p-2 mb-2 w-full"
      />
      <button 
        onClick={applyCoupon} // เรียกใช้ฟังก์ชันเมื่อคลิก
        className="bg-blue-500 text-white rounded p-2 w-full hover:bg-blue-600"
      >
        Apply Coupon
      </button>
      <h3 className="mt-4 font-bold">Available Coupons:</h3>
      <ul className="text-gray-700">
        {couponsAvailable.map((coupon, index) => (
          <li key={index} className="mb-2">
            <strong>{coupon.code}</strong>: {coupon.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
