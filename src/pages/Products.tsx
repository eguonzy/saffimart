import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersIcon, XIcon, ChevronDownIcon } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../utils/data';
const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');
  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: 200
  });
  const [sortBy, setSortBy] = useState('featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  useEffect(() => {
    let filtered = [...products];
    // Filter by category
    if (selectedCategory && selectedCategory !== 'all') {
      if (selectedCategory === 'new') {
        filtered = filtered.filter(product => product.isNew);
      } else if (selectedCategory === 'sale') {
        filtered = filtered.filter(product => product.isSale);
      } else {
        filtered = filtered.filter(product => product.category.toLowerCase() === selectedCategory.toLowerCase());
      }
    }
    // Filter by price range
    filtered = filtered.filter(product => product.price >= priceRange.min && product.price <= priceRange.max);
    // Sort products
    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'newest') {
      // For demo, we're just using the default order as "newest"
      // In a real app, you'd sort by date
    }
    setFilteredProducts(filtered);
  }, [selectedCategory, priceRange, sortBy, categoryParam]);
  return <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800">
            {selectedCategory === 'all' ? 'All Products' : selectedCategory === 'new' ? 'New Arrivals' : selectedCategory === 'sale' ? 'Sale Items' : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}`}
          </h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-4">
            <button onClick={() => setIsMobileFilterOpen(true)} className="w-full flex items-center justify-center gap-2 bg-gray-100 px-4 py-2 rounded-md">
              <SlidersIcon size={18} /> Filters
            </button>
          </div>
          {/* Mobile Filter Sidebar */}
          <div className={`fixed inset-0 z-50 lg:hidden ${isMobileFilterOpen ? 'block' : 'hidden'}`}>
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsMobileFilterOpen(false)}></div>
            <div className="absolute right-0 top-0 h-full w-80 bg-white p-6 overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Filters</h3>
                <button onClick={() => setIsMobileFilterOpen(false)}>
                  <XIcon size={20} />
                </button>
              </div>
              {/* Filter content - same as desktop but for mobile */}
              <div className="space-y-6">
                {/* Categories */}
                <div>
                  <h4 className="font-medium mb-3">Categories</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="radio" name="category-mobile" checked={selectedCategory === 'all'} onChange={() => setSelectedCategory('all')} className="mr-2" />
                      All Products
                    </label>
                    {categories.map(category => <label key={category.id} className="flex items-center">
                        <input type="radio" name="category-mobile" checked={selectedCategory === category.name.toLowerCase()} onChange={() => setSelectedCategory(category.name.toLowerCase())} className="mr-2" />
                        {category.name}
                      </label>)}
                    <label className="flex items-center">
                      <input type="radio" name="category-mobile" checked={selectedCategory === 'new'} onChange={() => setSelectedCategory('new')} className="mr-2" />
                      New Arrivals
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="category-mobile" checked={selectedCategory === 'sale'} onChange={() => setSelectedCategory('sale')} className="mr-2" />
                      Sale Items
                    </label>
                  </div>
                </div>
                {/* Price Range */}
                <div>
                  <h4 className="font-medium mb-3">Price Range</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>${priceRange.min}</span>
                      <span>${priceRange.max}</span>
                    </div>
                    <input type="range" min="0" max="200" value={priceRange.max} onChange={e => setPriceRange({
                    ...priceRange,
                    max: parseInt(e.target.value)
                  })} className="w-full" />
                  </div>
                </div>
              </div>
              <button onClick={() => setIsMobileFilterOpen(false)} className="w-full mt-6 bg-blue-600 text-white py-2 rounded-md">
                Apply Filters
              </button>
            </div>
          </div>
          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              {/* Categories */}
              <div>
                <h4 className="font-medium mb-3">Categories</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="category" checked={selectedCategory === 'all'} onChange={() => setSelectedCategory('all')} className="mr-2" />
                    All Products
                  </label>
                  {categories.map(category => <label key={category.id} className="flex items-center">
                      <input type="radio" name="category" checked={selectedCategory === category.name.toLowerCase()} onChange={() => setSelectedCategory(category.name.toLowerCase())} className="mr-2" />
                      {category.name}
                    </label>)}
                  <label className="flex items-center">
                    <input type="radio" name="category" checked={selectedCategory === 'new'} onChange={() => setSelectedCategory('new')} className="mr-2" />
                    New Arrivals
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="category" checked={selectedCategory === 'sale'} onChange={() => setSelectedCategory('sale')} className="mr-2" />
                    Sale Items
                  </label>
                </div>
              </div>
              {/* Price Range */}
              <div>
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>${priceRange.min}</span>
                    <span>${priceRange.max}</span>
                  </div>
                  <input type="range" min="0" max="200" value={priceRange.max} onChange={e => setPriceRange({
                  ...priceRange,
                  max: parseInt(e.target.value)
                })} className="w-full" />
                </div>
              </div>
            </div>
          </div>
          {/* Products Grid */}
          <div className="flex-grow">
            {/* Sort and Count */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <p className="text-gray-600 mb-4 sm:mb-0">
                {filteredProducts.length} products
              </p>
              <div className="relative">
                <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="appearance-none bg-white border border-gray-300 rounded-md pl-4 pr-10 py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDownIcon size={16} />
                </div>
              </div>
            </div>
            {/* Products */}
            {filteredProducts.length > 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map(product => <ProductCard key={product.id} {...product} />)}
              </div> : <div className="text-center py-12">
                <p className="text-gray-500">
                  No products found matching your criteria.
                </p>
              </div>}
          </div>
        </div>
      </div>
    </div>;
};
export default Products;