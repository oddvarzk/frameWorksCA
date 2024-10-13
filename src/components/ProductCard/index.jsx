import React from 'react';
import { useNavigate } from 'react-router-dom';
import StarRating from '../Rating';

const ProductCard = ({ post }) => {
  const navigate = useNavigate();

  const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    if (discountedPrice >= originalPrice) {
      return 0;
    }
    return Math.round((1 - discountedPrice / originalPrice) * 100);
  };

  const discountPercentage = calculateDiscountPercentage(post.price, post.discountedPrice);
  
  const handleClick = () => {
    navigate(`/product/${post.id}`);
  };

  return (
    <div 
      className='w-52 text-charcoal cursor-pointer overflow-hidden transition-transform duration-200 hover:scale-105 relative'
      onClick={handleClick}
    >
      <img className='w-52 h-64 shadow-lg' src={post.image.url} alt={post.title} />
      {discountPercentage > 0 && (
        <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 text-xs">
          {discountPercentage}% off
        </div>
      )}
      <div>
        <StarRating rating={post.rating} />
        <h2 className='text-lg font-semibold py-1'>{post.title}</h2>
        <div className='flex text-sm justify-between'>
          {post.discountedPrice === post.price ? (
            <h3 className='text-md'>{post.price} NOK</h3>
          ) : (
            <>
              <h3 className='text-md'>{post.discountedPrice} NOK</h3>
              <h3 className='text-md line-through'>{post.price} NOK</h3>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
