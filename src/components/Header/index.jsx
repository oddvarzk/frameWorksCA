import React, { useState, useEffect } from 'react';
import Nav from "../Nav/index.jsx";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export function Header() {
    const [cartCount, setCartCount] = useState(0);

    const updateCartCount = () => {
        const savedCart = localStorage.getItem('cart');
        const cartItems = savedCart ? JSON.parse(savedCart) : [];
        setCartCount(cartItems.length);
    };

    useEffect(() => {
        updateCartCount();

        const handleCartUpdated = () => {
            updateCartCount();
        };

        window.addEventListener('cartUpdated', handleCartUpdated);
        
        return () => {
            window.removeEventListener('cartUpdated', handleCartUpdated);
        };
    }, []);

    return (
        <header className="flex justify-between py-2 px-5 ml-5 mr-5 border-b-mutedTerracotta border">
            <div>
                <Link to="/">
                    <img className="h-28 w-28" src={logo} alt="Logo of website" />
                </Link>
            </div>
            <div className="flex">
                <Nav />
                <div className="flex items-center gap-4 text-pretty text-lg font-light md:flex-row px-5 py-5 mt-4">
                    <Link to="/Checkout" className="relative">
                        <FontAwesomeIcon icon={faCartShopping} className="text-3xl mb-5" />
                        {cartCount > 0 && (
                            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;