import React from 'react';
import { useNavigate } from 'react-router-dom';
import StarRating from '../Rating';

const ProductCard = ({ post }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${post.id}`);
  };

  return (
    <div 
      className='w-52 text-charcoal cursor-pointer overflow-hidden transition-transform duration-200 hover:scale-105'
      onClick={handleClick}
    >
      <img className='w-52 h-64 shadow-lg' src={post.image.url} alt={post.title} />
      <div>
      <StarRating rating={post.rating} />
        <h2 className='text-lg font-semibold py-1'>{post.title}</h2>
          <div className='flex text-sm justify-between'>
            <h3 className='text-md'>{post.discountedPrice} NOK</h3>
            <h3 className='text-md'>{post.price} NOK</h3>
          </div>
      </div>
    </div>
  );
};

export default ProductCard;
