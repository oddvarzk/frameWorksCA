import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav>
            <button className="md:hidden p-2 py-5" onClick={() => setIsOpen(!isOpen)}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
            
            <ul className={`flex-col text-pretty text-lg font-light md:flex md:flex-row gap-10 px-5 py-5 mt-4 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
                <li className="hover:underline">
                    <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                </li>
                <li className="hover:underline">
                    <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                </li>
                <li className="hover:underline">
                    <Link to="/cart" onClick={() => setIsOpen(false)}> <FontAwesomeIcon icon={faCartShopping} /> </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;