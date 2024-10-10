import React, { useEffect, useState } from 'react';
import { fetchData } from '../api/fetchData';
import ProductCard from '../components/ProductCard';

export function Home() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setIsError(false);

        fetchData().then(data => {
            setPosts(data);
            setIsLoading(false);
        }).catch(() => {
            setIsError(true);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return (
            <div className='flex justify-center items-center h-full'>
                <div className='animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-deepBlue py-5'></div>
            </div>
        );
    }

    if (isError) {
        return <div className='flex justify-center'>Error loading items.. try refreshing the page.</div>;
    }

    return (
        <div className='flex flex-wrap gap-10 py-5 px-5 justify-center'>
            {posts.map(post => (
                <ProductCard key={post.id} post={post} />
            ))}
        </div>
    );
}

export default Home;
