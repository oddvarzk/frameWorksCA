import React, { useEffect, useState } from 'react';

const url = "https://v2.api.noroff.dev/online-shop";

export function Home(){
    const [posts, setPosts] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function getData() {
            setIsLoading(true);
            setIsError(false);
    
            try {
                const response = await fetch(url);
                const json = await response.json();
                setPosts(json.data);
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
        getData();
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
                {posts.map((post) => (
                    <div key={post.id} className='w-52 text-charcoal cursor-pointer verflow-hidden transition-transform duration-200 hover:scale-105'>
                        <div>
                            <img className='w-52 h-64 shadow-lg' src={post.image.url}></img>
                        </div>
                        <div>
                            <h3>Rated {post.rating}/5</h3>
                        </div>
                        <div>
                            <h2 className='text-lg py-1'>{post.title}</h2>
                            <h3 className='text-md'>{post.price} NOK</h3>
                        </div>
                    </div>
                ))}
            </div>
    );
}

export default Home;