import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ShopHeader from '../components/shop/ShopHeader';
import ShopCategories from '../components/shop/ShopCategories';
import ShopFilter from '../components/shop/ShopFilter';
import ShopProducts from '../components/shop/ShopProducts';
import ShopClients from '../components/shop/ShopClients';

const ShopPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <ShopHeader />
                <ShopCategories />
                <ShopFilter />
                <ShopProducts />
                <ShopClients />
            </main>
            <Footer />
        </div>
    );
};

export default ShopPage;
