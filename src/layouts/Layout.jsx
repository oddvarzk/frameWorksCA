import React from 'react';
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Footer } from '../components/Footer';

export function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className='bg-mutedTerracotta h-8 flex justify-center items-center'>
                <p className='font-semibold text-charcoal text-sm'>Up to 60% sale on selected items.</p>
            </div>
            <Header />
            <main className="flex-grow p-4">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
