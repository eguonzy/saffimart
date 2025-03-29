import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircleIcon } from 'lucide-react';
const OrderConfirmation = () => {
  // Mock order details - in a real app, this would come from the order state
  const orderNumber = 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  const orderDate = new Date().toLocaleDateString();
  return <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <CheckCircleIcon size={64} className="mx-auto text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Thank You for Your Order!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Your order has been received and is being processed.
          </p>
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-left">
                <p className="text-sm text-gray-500">Order Number</p>
                <p className="font-medium">{orderNumber}</p>
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-500">Order Date</p>
                <p className="font-medium">{orderDate}</p>
              </div>
            </div>
            <div className="border-t pt-6">
              <p className="text-gray-600 mb-4">
                We'll send you a confirmation email with your order details and
                tracking information.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition">
              Continue Shopping
            </Link>
            <Link to="/profile" className="inline-block border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition">
              View Order History
            </Link>
          </div>
        </div>
      </div>
    </div>;
};
export default OrderConfirmation;