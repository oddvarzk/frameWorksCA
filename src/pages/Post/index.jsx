import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../../api/fetchData.jsx';
import StarRating from '../../components/StarRating/index.jsx';

const Post = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    fetchData(id)
      .then((data) => {
        setProduct(data);
        console.log(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  if (isLoading) {
    return (
      <div className='flex justify-center items-center h-full'>
        <div className='animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-deepBlue py-5'></div>
      </div>
    );
  }

  if (isError) {
    return <div className='flex justify-center'>Error loading product details..</div>;
  }

  if (!product) {
    return null;
  }

  return (
    <div className='w-full flex-col items-center gap-5 justify-center max-w-md mx-auto text-charcoal'>
      <div className='flex gap-5'>
        <img className='w-full object-cover h-64 shadow-lg' src={product.image.url} alt={product.title} />
        <div className='py-4'>
          <StarRating rating={product.rating} />
          <h2 className='text-lg py-1'>{product.title}</h2>
          <h3 className='text-md'>{product.discountedPrice} NOK</h3>
          <p className='text-sm'>{product.description}</p>
        </div>
      </div>
      <div className='flex justify-center py-5'>
        <button
          onClick={handleAddToCart}
          className='px-4 py-2 bg-deepBlue text-white rounded shadow-md hover:bg-darkBlue'
        >
          Add to Cart
        </button>
      </div>
      <div>
        <div>
        <div className='py-4 flex justify-center'>
            <StarRating rating={product.reviews.rating} />
            <p className='text-sm'>{product.reviews.username}</p>
            <p className='text-sm'>{product.reviews.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

