import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchData } from '../../api/fetchData';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetchData();
                setProducts(data);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        };
        getProducts();
    }, []);

    useEffect(() => {
        if (searchTerm === '') {
            setFilteredProducts([]);
        } else {
            const filtered = products.filter(product => 
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredProducts(filtered);
        }
    }, [searchTerm, products]);

    return (
        <div>
            <input
                type="text"
                placeholder="Search for products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div>
                {filteredProducts.length > 0 && (
                    <ul>
                        {filteredProducts.map(product => (
                            <li key={product.id}>
                                <Link to={`/product/${product.id}`}>{product.title}</Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default SearchBar;


