import React, { useEffect, useState } from 'react';
import { fetchData } from '../../api/fetchData';
import ProductCard from '../../components/ProductCard';

export function Home() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [retryCount, setRetryCount] = useState(0);

    const loadPosts = async () => {
        setIsLoading(true);
        setIsError(false);
        try {
            const data = await fetchData();
            setPosts(data);
        } catch (error) {
            console.error("Failed to fetch data:", error);
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadPosts();
    }, [retryCount]);

    const handleRetry = () => {
        setRetryCount(prevCount => prevCount + 1);
    };

    if (isLoading) {
        return (
            <div className='flex flex-col justify-center items-center h-full'>
                <div className='animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-deepBlue'></div>
                <p className='mt-4 text-deepBlue'>Loading items, please wait...</p>
            </div>
        );
    }

    if (isError) {
        return (
            <div className='flex flex-col justify-center items-center'>
                <p className='text-red-600'>Oops! Something went wrong while loading items.</p>
                <button 
                    onClick={handleRetry} 
                    className='mt-4 px-4 py-2 bg-deepBlue text-white rounded hover:bg-blue-700'
                >
                    Retry
                </button>
            </div>
        );
    }

    return (
        <div className='flex flex-wrap gap-10 py-5 px-5 justify-center'>
            {posts.length > 0 ? (
                posts.map(post => (
                    <ProductCard key={post.id} post={post} />
                ))
            ) : (
                <p className='text-gray-600'>No items available to display.</p>
            )}
        </div>
    );
}

export default Home;

