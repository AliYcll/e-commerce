import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSlider from '../components/home/HeroSlider';
import ShopCards from '../components/home/ShopCards';
import BestSellerProducts from '../components/home/BestSellerProducts';
import GreenFeatures from '../components/home/GreenFeatures';
import NeuralUniverse from '../components/home/NeuralUniverse';
import FeaturedPosts from '../components/home/FeaturedPosts';

const HomePage = () => {
    return (
        <div className="flex flex-col min-h-screen font-sans">
            <Header />

            <main className="flex-grow">
                <HeroSlider />
                <ShopCards />
                <BestSellerProducts />
                <GreenFeatures />
                <NeuralUniverse />
                <FeaturedPosts />
            </main>

            <Footer />
        </div>
    );
};

export default HomePage;
