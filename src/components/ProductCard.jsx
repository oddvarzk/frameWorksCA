import React from 'react';
import { useNavigate } from 'react-router-dom';

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
        <h3>Rated {post.rating}/5</h3>
        <h2 className='text-lg py-1'>{post.title}</h2>
        <h3 className='text-md'>{post.price} NOK</h3>
      </div>
    </div>
  );
};

export default ProductCard;
