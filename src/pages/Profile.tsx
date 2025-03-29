import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserIcon, ShoppingBagIcon, HeartIcon, CreditCardIcon, MapPinIcon, LogOutIcon, ChevronRightIcon } from 'lucide-react';
const Profile = () => {
  const [activeTab, setActiveTab] = useState('account');
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    address: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      country: 'USA'
    }
  };
  const orders = [{
    id: 'ORD-12345',
    date: '2023-05-15',
    status: 'Delivered',
    total: 129.99
  }, {
    id: 'ORD-12346',
    date: '2023-06-02',
    status: 'Processing',
    total: 79.5
  }, {
    id: 'ORD-12347',
    date: '2023-06-18',
    status: 'Shipped',
    total: 249.99
  }];
  const wishlist = [{
    id: '101',
    name: 'Premium Wireless Earbuds',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }, {
    id: '102',
    name: 'Smart Watch Series 5',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }];
  const payments = [{
    id: '1',
    type: 'Visa',
    last4: '4242',
    expiry: '04/25'
  }, {
    id: '2',
    type: 'Mastercard',
    last4: '5555',
    expiry: '08/24'
  }];
  return <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex items-center space-x-4 mb-6">
                <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full" />
                <div>
                  <h3 className="font-bold text-lg">{user.name}</h3>
                  <p className="text-gray-600 text-sm">{user.email}</p>
                </div>
              </div>
              <div className="space-y-1">
                <button className={`w-full text-left px-4 py-2 rounded-md flex items-center space-x-3 ${activeTab === 'account' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'}`} onClick={() => setActiveTab('account')}>
                  <UserIcon size={18} />
                  <span>Account</span>
                </button>
                <button className={`w-full text-left px-4 py-2 rounded-md flex items-center space-x-3 ${activeTab === 'orders' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'}`} onClick={() => setActiveTab('orders')}>
                  <ShoppingBagIcon size={18} />
                  <span>Orders</span>
                </button>
                <button className={`w-full text-left px-4 py-2 rounded-md flex items-center space-x-3 ${activeTab === 'wishlist' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'}`} onClick={() => setActiveTab('wishlist')}>
                  <HeartIcon size={18} />
                  <span>Wishlist</span>
                </button>
                <button className={`w-full text-left px-4 py-2 rounded-md flex items-center space-x-3 ${activeTab === 'payments' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'}`} onClick={() => setActiveTab('payments')}>
                  <CreditCardIcon size={18} />
                  <span>Payment Methods</span>
                </button>
                <button className={`w-full text-left px-4 py-2 rounded-md flex items-center space-x-3 ${activeTab === 'addresses' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'}`} onClick={() => setActiveTab('addresses')}>
                  <MapPinIcon size={18} />
                  <span>Addresses</span>
                </button>
              </div>
              <div className="pt-6 mt-6 border-t">
                <Link to="/login" className="w-full text-left px-4 py-2 rounded-md flex items-center space-x-3 text-red-600 hover:bg-red-50">
                  <LogOutIcon size={18} />
                  <span>Sign Out</span>
                </Link>
              </div>
            </div>
          </div>
          {/* Main Content */}
          <div className="flex-grow">
            {activeTab === 'account' && <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-6">Account Information</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input type="text" defaultValue="John" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input type="text" defaultValue="Doe" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input type="email" defaultValue={user.email} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input type="tel" defaultValue="(123) 456-7890" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="border-t pt-6">
                    <h3 className="font-medium mb-4">Password</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Current Password
                        </label>
                        <input type="password" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          New Password
                        </label>
                        <input type="password" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>}
            {activeTab === 'orders' && <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-6">Your Orders</h2>
                {orders.length > 0 ? <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Order ID
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Total
                          </th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {orders.map(order => <tr key={order.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {order.id}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {order.date}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                {order.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              ${order.total.toFixed(2)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="#" className="text-blue-600 hover:text-blue-900">
                                View Details
                              </a>
                            </td>
                          </tr>)}
                      </tbody>
                    </table>
                  </div> : <div className="text-center py-8">
                    <ShoppingBagIcon size={48} className="mx-auto text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      No orders yet
                    </h3>
                    <p className="text-gray-500">
                      When you place an order, it will appear here.
                    </p>
                    <Link to="/products" className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition">
                      Start Shopping
                    </Link>
                  </div>}
              </div>}
            {activeTab === 'wishlist' && <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-6">Your Wishlist</h2>
                {wishlist.length > 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {wishlist.map(item => <div key={item.id} className="flex border rounded-lg overflow-hidden">
                        <div className="w-1/3">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="w-2/3 p-4 flex flex-col">
                          <h3 className="font-medium mb-1">{item.name}</h3>
                          <p className="text-blue-600 font-semibold mb-3">
                            ${item.price.toFixed(2)}
                          </p>
                          <div className="flex gap-2 mt-auto">
                            <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition">
                              Add to Cart
                            </button>
                            <button className="border border-gray-300 text-gray-600 px-3 py-1 rounded text-sm hover:bg-gray-50 transition">
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>)}
                  </div> : <div className="text-center py-8">
                    <HeartIcon size={48} className="mx-auto text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      Your wishlist is empty
                    </h3>
                    <p className="text-gray-500">
                      Save items you love to your wishlist.
                    </p>
                    <Link to="/products" className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition">
                      Browse Products
                    </Link>
                  </div>}
              </div>}
            {activeTab === 'payments' && <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Payment Methods</h2>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    + Add New Card
                  </button>
                </div>
                {payments.map(payment => <div key={payment.id} className="flex items-center justify-between p-4 border rounded-lg mb-4">
                    <div className="flex items-center">
                      <div className="bg-gray-100 p-2 rounded mr-4">
                        <CreditCardIcon size={24} className="text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium">
                          {payment.type} •••• {payment.last4}
                        </p>
                        <p className="text-sm text-gray-500">
                          Expires {payment.expiry}
                        </p>
                      </div>
                    </div>
                    <button className="text-gray-500 hover:text-gray-700">
                      <ChevronRightIcon size={20} />
                    </button>
                  </div>)}
              </div>}
            {activeTab === 'addresses' && <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Your Addresses</h2>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    + Add New Address
                  </button>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-medium">Default Address</h3>
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-700 text-sm">
                        Edit
                      </button>
                      <button className="text-red-600 hover:text-red-700 text-sm">
                        Delete
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-700">{user.name}</p>
                  <p className="text-gray-600">{user.address.street}</p>
                  <p className="text-gray-600">
                    {user.address.city}, {user.address.state} {user.address.zip}
                  </p>
                  <p className="text-gray-600">{user.address.country}</p>
                </div>
              </div>}
          </div>
        </div>
      </div>
    </div>;
};
export default Profile;