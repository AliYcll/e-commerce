import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProductOverview from '../components/product/ProductOverview';
import ProductTabs from '../components/product/ProductTabs';
import ProductBestSellers from '../components/product/ProductBestSellers';
import ShopClients from '../components/shop/ShopClients';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductDetailPage = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex flex-col min-h-screen font-sans bg-[#FAFAFA]">
            {/* Header */}
            <Header />

            <main className="flex-grow">
                {/* Breadcrumb Header */}
                <div className="bg-[#FAFAFA] py-6">
                    <div className="container mx-auto px-4 flex items-center gap-4 text-[14px] font-bold">
                        <Link to="/" className="text-[#252B42]">Home</Link>
                        <ArrowRight size={16} className="text-[#BDBDBD]" />
                        <Link to="/shop" className="text-[#BDBDBD]">Shop</Link>
                    </div>
                </div>

                {/* Main Product Section */}
                <ProductOverview />

                {/* Tabs Section */}
                <ProductTabs />

                {/* Bestseller Section - New Component */}
                <ProductBestSellers />

                {/* Clients Section */}
                <ShopClients />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default ProductDetailPage;
