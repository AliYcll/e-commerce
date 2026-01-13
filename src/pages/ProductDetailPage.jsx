import React, { useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowRight, ChevronLeft } from 'lucide-react';
import { fetchProduct } from '../store/actions/productActions';
import { FetchState } from '../store/reducers/productReducer';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProductOverview from '../components/product/ProductOverview';
import ProductTabs from '../components/product/ProductTabs';
import ProductBestSellers from '../components/product/ProductBestSellers';
import ShopClients from '../components/shop/ShopClients';

const ProductDetailPage = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const { activeProduct, fetchState } = useSelector(state => state.product);

    // Fetch product on mount or when productId changes
    useEffect(() => {
        if (productId) {
            dispatch(fetchProduct(productId));
        }
        window.scrollTo(0, 0);
    }, [dispatch, productId]);

    const handleBack = () => {
        history.goBack();
    };

    if (fetchState === FetchState.FETCHING) {
        return (
            <div className="flex flex-col min-h-screen font-sans bg-[#FAFAFA] items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#23A6F0]"></div>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen font-sans bg-[#FAFAFA]">
            {/* Header */}
            <Header />

            <main className="flex-grow">
                {/* Breadcrumb Header */}
                <div className="bg-[#FAFAFA] py-6">
                    <div className="container mx-auto px-4 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-4 text-[14px] font-bold">
                            <Link to="/" className="text-[#252B42]">Home</Link>
                            <ArrowRight size={16} className="text-[#BDBDBD]" />
                            <Link to="/shop" className="text-[#BDBDBD]">Shop</Link>
                        </div>
                        <button
                            onClick={handleBack}
                            className="flex items-center gap-2 text-[#737373] hover:text-[#23A6F0] font-bold text-sm transition-colors"
                        >
                            <ChevronLeft size={16} />
                            Back
                        </button>
                    </div>
                </div>

                {/* Main Product Section */}
                {activeProduct && <ProductOverview product={activeProduct} />}

                {/* Tabs Section */}
                <ProductTabs product={activeProduct} />

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
