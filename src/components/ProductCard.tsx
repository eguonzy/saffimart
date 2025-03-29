import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, HeartIcon } from 'lucide-react';
interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}
const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  isNew,
  isSale
}: ProductCardProps) => {
  return <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative">
        <Link to={`/products/${id}`}>
          <img src={image} alt={name} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
        </Link>
        {isNew && <span className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 text-xs font-medium rounded">
            New
          </span>}
        {isSale && <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs font-medium rounded">
            Sale
          </span>}
        <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition">
            <HeartIcon size={18} className="text-gray-600" />
          </button>
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition">
            <ShoppingCartIcon size={18} className="text-gray-600" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <Link to={`/products/${id}`} className="block">
          <h3 className="text-gray-800 font-medium mb-1 hover:text-blue-600 transition">
            {name}
          </h3>
        </Link>
        <p className="text-sm text-gray-500 mb-2">{category}</p>
        <div className="flex items-center">
          {originalPrice ? <>
              <span className="text-red-600 font-semibold">
                ${price.toFixed(2)}
              </span>
              <span className="ml-2 text-gray-500 text-sm line-through">
                ${originalPrice.toFixed(2)}
              </span>
            </> : <span className="text-gray-800 font-semibold">
              ${price.toFixed(2)}
            </span>}
        </div>
      </div>
    </div>;
};
export default ProductCard;