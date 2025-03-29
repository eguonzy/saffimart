import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2Icon, ChevronRightIcon } from 'lucide-react';
import { products } from '../utils/data';
// Mock cart data - in a real app, this would come from a cart state management system
const initialCartItems = [{
  id: '1',
  quantity: 2
}, {
  id: '4',
  quantity: 1
}];
const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(initialCartItems);
  // Get full product details for cart items
  const cartProducts = cartItems.map(item => ({
    ...products.find(p => p.id === item.id)!,
    quantity: item.quantity
  }));
  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items => items.map(item => item.id === productId ? {
      ...item,
      quantity: newQuantity
    } : item));
  };
  const removeItem = (productId: string) => {
    setCartItems(items => items.filter(item => item.id !== productId));
  };
  const subtotal = cartProducts.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 5.99;
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + shipping + tax;
  if (cartItems.length === 0) {
    return <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">
          Add some products to your cart and come back here to complete your
          purchase.
        </p>
        <Link to="/products" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition">
          Continue Shopping
        </Link>
      </div>;
  }
  return <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-6">
          <h1 className="text-2xl font-bold">Shopping Cart</h1>
          <span className="ml-2 text-gray-500">({cartItems.length} items)</span>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm">
              {cartProducts.map(item => <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 border-b last:border-b-0">
                  <div className="w-24 h-24 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-md" />
                  </div>
                  <div className="flex-grow">
                    <Link to={`/products/${item.id}`} className="text-lg font-medium hover:text-blue-600">
                      {item.name}
                    </Link>
                    <p className="text-sm text-gray-500 mb-2">
                      {item.category}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border rounded">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 hover:bg-gray-100">
                          -
                        </button>
                        <span className="px-3 py-1 border-x">
                          {item.quantity}
                        </span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 hover:bg-gray-100">
                          +
                        </button>
                      </div>
                      <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700">
                        <Trash2Icon size={18} />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    {item.quantity > 1 && <p className="text-sm text-gray-500">
                        ${item.price.toFixed(2)} each
                      </p>}
                  </div>
                </div>)}
            </div>
            <div className="mt-6">
              <Link to="/products" className="text-blue-600 hover:text-blue-700 flex items-center">
                <ChevronRightIcon size={16} className="rotate-180 mr-1" />
                Continue Shopping
              </Link>
            </div>
          </div>
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-bold mb-4">Order Summary</h2>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <button onClick={() => navigate('/checkout')} className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Cart;