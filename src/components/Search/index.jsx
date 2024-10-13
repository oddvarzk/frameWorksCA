import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchData } from '../../api/fetchData';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getProducts = async () => {
            try {
                setLoading(true);
                const data = await fetchData();
                setProducts(data);
            } catch (error) {
                setError("Unable to load products. Please try again later.");
            }
        };
        getProducts();
    }, []);

    useEffect(() => {
        filterProducts();
    }, [searchTerm, products]);

    const filterProducts = () => {
        if (!searchTerm) {
            setFilteredProducts([]);
            return;
        }

        const filtered = products.filter(product =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search for products..."
                value={searchTerm}
                onChange={handleInputChange}
            />
            {error && <p className="error-message">{error}</p>}
            { !error && (
                <div>
                    {filteredProducts.length > 0 ? (
                        <ul>
                            {filteredProducts.map(product => (
                                <li key={product.id}>
                                    <Link to={`/product/${product.id}`}>{product.title}</Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        searchTerm && <p>Sorry pal, we don't have "{searchTerm}".</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
