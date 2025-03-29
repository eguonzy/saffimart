import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCartIcon, HeartIcon, StarIcon, ChevronRightIcon } from 'lucide-react';
import { products } from '../utils/data';
import ProductCard from '../components/ProductCard';
const ProductDetail = () => {
  const {
    id
  } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  useEffect(() => {
    // In a real app, you would fetch the product from an API
    const foundProduct = products.find(p => p.id === id);
    setProduct(foundProduct);
    // Get related products from the same category
    if (foundProduct) {
      const related = products.filter(p => p.category === foundProduct.category && p.id !== id).slice(0, 4);
      setRelatedProducts(related);
    }
  }, [id]);
  if (!product) {
    return <div className="container mx-auto px-4 py-16 text-center">
        <p>Loading product...</p>
      </div>;
  }
  const incrementQuantity = () => setQuantity(q => q + 1);
  const decrementQuantity = () => setQuantity(q => q > 1 ? q - 1 : 1);
  return <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
            <ChevronRightIcon size={16} className="mx-2" />
            <Link to="/products" className="hover:text-blue-600">
              Products
            </Link>
            <ChevronRightIcon size={16} className="mx-2" />
            <Link to={`/products?category=${product.category.toLowerCase()}`} className="hover:text-blue-600">
              {product.category}
            </Link>
            <ChevronRightIcon size={16} className="mx-2" />
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>
      {/* Product Info */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative">
            <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg" />
            {product.isNew && <span className="absolute top-4 left-4 bg-blue-600 text-white px-2 py-1 text-xs font-medium rounded">
                New
              </span>}
            {product.isSale && <span className="absolute top-4 left-4 bg-red-600 text-white px-2 py-1 text-xs font-medium rounded">
                Sale
              </span>}
          </div>
          {/* Product Details */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              {product.name}
            </h1>
            {/* Reviews */}
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => <StarIcon key={i} size={18} className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'} />)}
              </div>
              <span className="ml-2 text-sm text-gray-600">
                {product.reviews} reviews
              </span>
            </div>
            {/* Price */}
            <div className="mb-6">
              {product.originalPrice ? <div className="flex items-center">
                  <span className="text-2xl font-bold text-red-600 mr-2">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="ml-2 bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </span>
                </div> : <span className="text-2xl font-bold text-gray-800">
                  ${product.price.toFixed(2)}
                </span>}
            </div>
            {/* Description */}
            <p className="text-gray-600 mb-6">{product.description}</p>
            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantity
              </label>
              <div className="flex items-center">
                <button onClick={decrementQuantity} className="bg-gray-200 px-3 py-1 rounded-l-md">
                  -
                </button>
                <input type="text" value={quantity} readOnly className="w-12 text-center border-t border-b border-gray-300 py-1" />
                <button onClick={incrementQuantity} className="bg-gray-200 px-3 py-1 rounded-r-md">
                  +
                </button>
              </div>
            </div>
            {/* Add to Cart and Wishlist */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-md font-medium flex items-center justify-center hover:bg-blue-700 transition">
                <ShoppingCartIcon size={18} className="mr-2" />
                Add to Cart
              </button>
              <button className="flex-1 sm:flex-none border border-gray-300 text-gray-700 py-3 px-6 rounded-md font-medium flex items-center justify-center hover:bg-gray-50 transition">
                <HeartIcon size={18} className="mr-2" />
                Add to Wishlist
              </button>
            </div>
            {/* Additional Info */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex text-sm mb-4">
                <span className="font-medium text-gray-700 w-24">SKU:</span>
                <span className="text-gray-600">
                  SKU-{product.id}-{product.name.substring(0, 3).toUpperCase()}
                </span>
              </div>
              <div className="flex text-sm mb-4">
                <span className="font-medium text-gray-700 w-24">
                  Category:
                </span>
                <Link to={`/products?category=${product.category.toLowerCase()}`} className="text-blue-600 hover:underline">
                  {product.category}
                </Link>
              </div>
              <div className="flex text-sm">
                <span className="font-medium text-gray-700 w-24">Tags:</span>
                <span className="text-gray-600">
                  {product.isNew ? 'New, ' : ''}
                  {product.isSale ? 'Sale, ' : ''}
                  {product.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tabs */}
      <div className="container mx-auto px-4 py-8 border-t border-gray-200">
        <div className="border-b border-gray-200">
          <div className="flex overflow-x-auto">
            <button className={`py-3 px-6 font-medium text-sm border-b-2 ${activeTab === 'description' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`} onClick={() => setActiveTab('description')}>
              Description
            </button>
            <button className={`py-3 px-6 font-medium text-sm border-b-2 ${activeTab === 'specifications' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`} onClick={() => setActiveTab('specifications')}>
              Specifications
            </button>
            <button className={`py-3 px-6 font-medium text-sm border-b-2 ${activeTab === 'reviews' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`} onClick={() => setActiveTab('reviews')}>
              Reviews ({product.reviews})
            </button>
          </div>
        </div>
        <div className="py-6">
          {activeTab === 'description' && <div>
              <p className="text-gray-600">
                {product.description}
                {/* Extended description would go here */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                quam velit, vulputate eu pharetra nec, mattis ac neque. Duis
                vulputate commodo lectus, ac blandit elit tincidunt id. Sed
                rhoncus, tortor sed eleifend tristique, tortor mauris molestie
                elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet
                elit iaculis pretium sit amet quis magna.
              </p>
              <p className="text-gray-600 mt-4">
                Aenean dictum laoreet dui, at pretium felis imperdiet non.
                Nullam vitae nibh odio. Morbi eleifend arcu sit amet accumsan
                luctus. Donec at rhoncus massa. Curabitur ac nunc id sapien
                fermentum lobortis. Etiam ultrices leo id commodo volutpat.
              </p>
            </div>}
          {activeTab === 'specifications' && <div className="border rounded-md overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap bg-gray-50 text-sm font-medium text-gray-700">
                      Material
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      Premium Quality
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap bg-gray-50 text-sm font-medium text-gray-700">
                      Dimensions
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      10 x 8 x 2 inches
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap bg-gray-50 text-sm font-medium text-gray-700">
                      Weight
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      1.5 lbs
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap bg-gray-50 text-sm font-medium text-gray-700">
                      Warranty
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      1 Year Limited Warranty
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap bg-gray-50 text-sm font-medium text-gray-700">
                      Country of Origin
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      USA
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>}
          {activeTab === 'reviews' && <div>
              <div className="flex items-center mb-6">
                <div className="flex mr-4">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} size={24} className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'} />)}
                </div>
                <div>
                  <span className="text-xl font-semibold">
                    {product.rating.toFixed(1)}
                  </span>
                  <span className="text-gray-600 ml-1">out of 5</span>
                </div>
              </div>
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>
                {/* Sample reviews */}
                <div className="space-y-6">
                  <div className="border-b pb-6">
                    <div className="flex items-center mb-2">
                      <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => <StarIcon key={i} size={16} className={i < 5 ? 'text-yellow-400 fill-current' : 'text-gray-300'} />)}
                      </div>
                      <span className="font-medium">John D.</span>
                      <span className="mx-2">•</span>
                      <span className="text-gray-500 text-sm">2 days ago</span>
                    </div>
                    <p className="text-gray-600">
                      Great product! Exactly as described and arrived quickly.
                      Would definitely recommend.
                    </p>
                  </div>
                  <div className="border-b pb-6">
                    <div className="flex items-center mb-2">
                      <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => <StarIcon key={i} size={16} className={i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'} />)}
                      </div>
                      <span className="font-medium">Sarah M.</span>
                      <span className="mx-2">•</span>
                      <span className="text-gray-500 text-sm">1 week ago</span>
                    </div>
                    <p className="text-gray-600">
                      Good quality for the price. Shipping was a bit slow but
                      the product itself is excellent.
                    </p>
                  </div>
                </div>
              </div>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition">
                Write a Review
              </button>
            </div>}
        </div>
      </div>
      {/* Related Products */}
      {relatedProducts.length > 0 && <div className="container mx-auto px-4 py-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(product => <ProductCard key={product.id} {...product} />)}
          </div>
        </div>}
    </div>;
};
export default ProductDetail;