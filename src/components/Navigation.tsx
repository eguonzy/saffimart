import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, UserIcon, MenuIcon, XIcon, SearchIcon, ChevronDownIcon, LaptopIcon, ShirtIcon, WatchIcon, HomeIcon, SparklesIcon, DumbbellIcon } from 'lucide-react';
import { categories } from '../utils/data';
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isMobileCategoriesOpen, setIsMobileCategoriesOpen] = useState(false);
  const getCategoryIcon = (icon: string) => {
    switch (icon) {
      case 'laptop':
        return <LaptopIcon size={18} />;
      case 'shirt':
        return <ShirtIcon size={18} />;
      case 'watch':
        return <WatchIcon size={18} />;
      case 'home':
        return <HomeIcon size={18} />;
      case 'sparkles':
        return <SparklesIcon size={18} />;
      case 'dumbbell':
        return <DumbbellIcon size={18} />;
      default:
        return null;
    }
  };
  return <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-bold text-xl text-blue-600">
            ShopWave
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <div className="relative">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium py-2" onClick={() => setIsCategoriesOpen(!isCategoriesOpen)} onMouseEnter={() => setIsCategoriesOpen(true)} onMouseLeave={() => setIsCategoriesOpen(false)} aria-expanded={isCategoriesOpen} aria-haspopup="true">
                <span>Categories</span>
                <ChevronDownIcon size={16} className={`transform transition-transform duration-200 ${isCategoriesOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`absolute left-0 w-64 bg-white rounded-lg shadow-lg transform transition-all duration-200 ease-in-out ${isCategoriesOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`} onMouseEnter={() => setIsCategoriesOpen(true)} onMouseLeave={() => setIsCategoriesOpen(false)} role="menu">
                <div className="p-2">
                  {categories.map(category => <Link key={category.id} to={`/products?category=${category.name.toLowerCase()}`} className="flex items-center space-x-3 px-4 py-3 rounded-md text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-150" role="menuitem">
                      <span className="text-gray-400">
                        {getCategoryIcon(category.icon)}
                      </span>
                      <span>{category.name}</span>
                    </Link>)}
                  <div className="border-t my-2"></div>
                  <Link to="/products?category=new" className="flex items-center space-x-3 px-4 py-3 rounded-md text-gray-700 hover:bg-gray-50 hover:text-blue-600" role="menuitem">
                    <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded">
                      New
                    </span>
                    <span>New Arrivals</span>
                  </Link>
                  <Link to="/products?category=sale" className="flex items-center space-x-3 px-4 py-3 rounded-md text-gray-700 hover:bg-gray-50 hover:text-blue-600" role="menuitem">
                    <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-medium bg-red-100 text-red-600 rounded">
                      Sale
                    </span>
                    <span>Sale Items</span>
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/products" className="text-gray-700 hover:text-blue-600 font-medium">
              All Products
            </Link>
            <Link to="/products?category=new" className="text-gray-700 hover:text-blue-600 font-medium">
              New Arrivals
            </Link>
            <Link to="/products?category=sale" className="text-gray-700 hover:text-blue-600 font-medium">
              Sale
            </Link>
          </nav>
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-700 hover:text-blue-600">
              <SearchIcon size={20} />
            </button>
            <Link to="/cart" className="text-gray-700 hover:text-blue-600 relative">
              <ShoppingCartIcon size={20} />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Link>
            <Link to="/profile" className="text-gray-700 hover:text-blue-600">
              <UserIcon size={20} />
            </Link>
          </div>
          <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
        {isMenuOpen && <nav className="md:hidden pt-4 pb-2">
            <div className="space-y-3">
              <Link to="/" className="block text-gray-700 hover:text-blue-600 py-2">
                Home
              </Link>
              <div className="py-2">
                <button onClick={() => setIsMobileCategoriesOpen(!isMobileCategoriesOpen)} className="flex items-center justify-between w-full text-left text-gray-900 mb-2">
                  <span className="text-sm font-semibold">Categories</span>
                  <ChevronDownIcon size={16} className={`transition-transform duration-200 ${isMobileCategoriesOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`grid grid-cols-2 gap-2 transition-all duration-200 ease-in-out ${isMobileCategoriesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  {categories.map(category => <Link key={category.id} to={`/products?category=${category.name.toLowerCase()}`} className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 text-sm py-1">
                      <span className="text-gray-400">
                        {getCategoryIcon(category.icon)}
                      </span>
                      <span>{category.name}</span>
                    </Link>)}
                  <Link to="/products?category=new" className="flex items-center col-span-2 space-x-2 text-gray-700 hover:text-blue-600 text-sm py-1">
                    <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded">
                      New
                    </span>
                    <span>New Arrivals</span>
                  </Link>
                  <Link to="/products?category=sale" className="flex items-center col-span-2 space-x-2 text-gray-700 hover:text-blue-600 text-sm py-1">
                    <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-medium bg-red-100 text-red-600 rounded">
                      Sale
                    </span>
                    <span>Sale Items</span>
                  </Link>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-3 space-y-3">
                <Link to="/products" className="block text-gray-700 hover:text-blue-600 py-2">
                  All Products
                </Link>
                <Link to="/products?category=new" className="block text-gray-700 hover:text-blue-600 py-2">
                  New Arrivals
                </Link>
                <Link to="/products?category=sale" className="block text-gray-700 hover:text-blue-600 py-2">
                  Sale
                </Link>
              </div>
              <div className="border-t border-gray-200 pt-3">
                <div className="flex items-center space-x-6 py-2">
                  <button className="text-gray-700 hover:text-blue-600">
                    <SearchIcon size={20} />
                  </button>
                  <Link to="/cart" className="text-gray-700 hover:text-blue-600 relative">
                    <ShoppingCartIcon size={20} />
                    <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      3
                    </span>
                  </Link>
                  <Link to="/profile" className="text-gray-700 hover:text-blue-600">
                    <UserIcon size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </nav>}
      </div>
    </header>;
};
export default Navigation;