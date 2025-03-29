import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCardIcon, TruckIcon, UserIcon } from 'lucide-react';
const Checkout = () => {
  const navigate = useNavigate();
  const [formStep, setFormStep] = useState(1);
  // Mock cart total - in a real app, this would come from cart state
  const subtotal = 209.97;
  const shipping = 5.99;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/order-confirmation');
  };
  return <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${formStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                  <UserIcon size={16} />
                </div>
                <span className="ml-2 text-sm font-medium">Shipping</span>
              </div>
              <div className={`flex-1 h-1 ${formStep >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`} />
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${formStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                  <TruckIcon size={16} />
                </div>
                <span className="ml-2 text-sm font-medium">Delivery</span>
              </div>
              <div className={`flex-1 h-1 ${formStep >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`} />
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${formStep >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                  <CreditCardIcon size={16} />
                </div>
                <span className="ml-2 text-sm font-medium">Payment</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Checkout Form */}
            <div className="lg:w-2/3">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Shipping Information */}
                <div className={`bg-white rounded-lg shadow-sm p-6 ${formStep === 1 ? 'block' : 'hidden'}`}>
                  <h2 className="text-lg font-bold mb-4">
                    Shipping Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input type="text" required className="w-full border border-gray-300 rounded-md px-3 py-2" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input type="text" required className="w-full border border-gray-300 rounded-md px-3 py-2" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input type="email" required className="w-full border border-gray-300 rounded-md px-3 py-2" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Address
                      </label>
                      <input type="text" required className="w-full border border-gray-300 rounded-md px-3 py-2" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <input type="text" required className="w-full border border-gray-300 rounded-md px-3 py-2" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        State
                      </label>
                      <input type="text" required className="w-full border border-gray-300 rounded-md px-3 py-2" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        ZIP Code
                      </label>
                      <input type="text" required className="w-full border border-gray-300 rounded-md px-3 py-2" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <input type="tel" required className="w-full border border-gray-300 rounded-md px-3 py-2" />
                    </div>
                  </div>
                  <div className="mt-6">
                    <button type="button" onClick={() => setFormStep(2)} className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition">
                      Continue to Delivery
                    </button>
                  </div>
                </div>
                {/* Delivery Options */}
                <div className={`bg-white rounded-lg shadow-sm p-6 ${formStep === 2 ? 'block' : 'hidden'}`}>
                  <h2 className="text-lg font-bold mb-4">Delivery Method</h2>
                  <div className="space-y-4">
                    <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:border-blue-500">
                      <input type="radio" name="delivery" value="standard" defaultChecked className="mr-4" />
                      <div>
                        <p className="font-medium">Standard Shipping</p>
                        <p className="text-sm text-gray-500">
                          Delivery in 3-5 business days
                        </p>
                      </div>
                      <span className="ml-auto font-medium">$5.99</span>
                    </label>
                    <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:border-blue-500">
                      <input type="radio" name="delivery" value="express" className="mr-4" />
                      <div>
                        <p className="font-medium">Express Shipping</p>
                        <p className="text-sm text-gray-500">
                          Delivery in 1-2 business days
                        </p>
                      </div>
                      <span className="ml-auto font-medium">$12.99</span>
                    </label>
                  </div>
                  <div className="mt-6 flex gap-4">
                    <button type="button" onClick={() => setFormStep(1)} className="w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition">
                      Back
                    </button>
                    <button type="button" onClick={() => setFormStep(3)} className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition">
                      Continue to Payment
                    </button>
                  </div>
                </div>
                {/* Payment Information */}
                <div className={`bg-white rounded-lg shadow-sm p-6 ${formStep === 3 ? 'block' : 'hidden'}`}>
                  <h2 className="text-lg font-bold mb-4">
                    Payment Information
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Card Number
                      </label>
                      <input type="text" required placeholder="1234 5678 9012 3456" className="w-full border border-gray-300 rounded-md px-3 py-2" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Expiry Date
                        </label>
                        <input type="text" required placeholder="MM/YY" className="w-full border border-gray-300 rounded-md px-3 py-2" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          CVV
                        </label>
                        <input type="text" required placeholder="123" className="w-full border border-gray-300 rounded-md px-3 py-2" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Name on Card
                      </label>
                      <input type="text" required className="w-full border border-gray-300 rounded-md px-3 py-2" />
                    </div>
                  </div>
                  <div className="mt-6 flex gap-4">
                    <button type="button" onClick={() => setFormStep(2)} className="w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition">
                      Back
                    </button>
                    <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition">
                      Place Order
                    </button>
                  </div>
                </div>
              </form>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Checkout;