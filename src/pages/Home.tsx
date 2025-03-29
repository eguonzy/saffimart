import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories, featuredCollections } from '../utils/data';
const Home = () => {
  // Get featured products (first 4)
  const featuredProducts = products.slice(0, 4);
  // Get new arrivals (products marked as new)
  const newArrivals = products.filter(product => product.isNew).slice(0, 4);
  return <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[500px]" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
    }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Summer Sale
            </h1>
            <p className="text-xl text-white mb-8">
              Up to 50% off on selected items. Limited time offer.
            </p>
            <Link to="/products?category=sale" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition">
              Shop Now
            </Link>
          </div>
        </div>
      </section>
      {/* Categories Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map(category => <Link key={category.id} to={`/products?category=${category.name.toLowerCase()}`} className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <span className="text-blue-600 text-xl">{category.icon}</span>
                </div>
                <h3 className="font-medium text-gray-800">{category.name}</h3>
              </Link>)}
          </div>
        </div>
      </section>
      {/* Featured Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Featured Products
            </h2>
            <Link to="/products" className="text-blue-600 hover:text-blue-700 flex items-center">
              View All <ArrowRightIcon size={16} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => <ProductCard key={product.id} {...product} />)}
          </div>
        </div>
      </section>
      {/* Featured Collections */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            Featured Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCollections.map(collection => <Link key={collection.id} to={`/products?collection=${collection.name.toLowerCase().replace(/\s+/g, '-')}`} className="relative rounded-lg overflow-hidden group">
                <img src={collection.image} alt={collection.name} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {collection.name}
                  </h3>
                  <p className="text-white text-sm mb-3">
                    {collection.description}
                  </p>
                  <span className="text-white text-sm flex items-center">
                    Shop Collection{' '}
                    <ArrowRightIcon size={14} className="ml-1" />
                  </span>
                </div>
              </Link>)}
          </div>
        </div>
      </section>
      {/* New Arrivals */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              New Arrivals
            </h2>
            <Link to="/products?category=new" className="text-blue-600 hover:text-blue-700 flex items-center">
              View All <ArrowRightIcon size={16} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map(product => <ProductCard key={product.id} {...product} />)}
          </div>
        </div>
      </section>
      {/* Newsletter */}
      <section className="py-12 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Join Our Newsletter
            </h2>
            <p className="text-blue-100 mb-6">
              Subscribe to get special offers, free giveaways, and
              once-in-a-lifetime deals.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input type="email" placeholder="Enter your email" className="px-4 py-3 rounded-md flex-grow focus:outline-none" />
              <button type="submit" className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;