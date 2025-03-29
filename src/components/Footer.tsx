import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">ShopWave</h3>
            <p className="text-gray-300 text-sm">
              Your one-stop destination for quality products at competitive
              prices.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/products" className="hover:text-white">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products?category=new" className="hover:text-white">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/products?category=sale" className="hover:text-white">
                  Sale Items
                </Link>
              </li>
              <li>
                <Link to="/products?category=popular" className="hover:text-white">
                  Popular Items
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-white">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-white">
                  Returns & Exchanges
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-sm text-gray-300 mb-2">
              Subscribe to receive updates on our latest products and special
              offers.
            </p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="px-3 py-2 text-gray-800 text-sm rounded-l-md w-full focus:outline-none" />
              <button type="submit" className="bg-blue-600 px-4 py-2 rounded-r-md text-sm hover:bg-blue-700 transition">
                Join
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-gray-400 text-center">
          <p>
            &copy; {new Date().getFullYear()} ShopWave. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;