import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../api/fetchData';

const Post = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    fetchData(id)
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [id]);

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
    <div className='w-full max-w-md mx-auto text-charcoal'>
      <img className='w-full h-64 shadow-lg' src={product.image.url} alt={product.title} />
      <div className='py-4'>
        <h3>Rated {product.rating}/5</h3>
        <h2 className='text-lg py-1'>{product.title}</h2>
        <h3 className='text-md'>{product.price} NOK</h3>
        <p className='text-sm'>{product.description}</p>
      </div>
    </div>
  );
};

export default Post;

