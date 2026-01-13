import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import { fetchProducts } from '../store/actions/productActions';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ShopHeader from '../components/shop/ShopHeader';
import ShopCategories from '../components/shop/ShopCategories';
import ShopFilter from '../components/shop/ShopFilter';
import ShopProducts from '../components/shop/ShopProducts';
import ShopClients from '../components/shop/ShopClients';

const ShopPage = () => {
    const dispatch = useDispatch();
    const { categoryId } = useParams();
    const location = useLocation();

    // Fetch products whenever categoryId changes (or on mount)
    // Note: ShopProducts also dispatches fetchProducts on mount, we should coordinate.
    // Ideally ShopPage controls the main fetch or ShopProducts does.
    // If we move fetch logic here, consistent with "Page Controller" pattern.
    // For now, let's keep duplicate fetch safe (redux thunk handles concurrent state if needed) 
    // or better, REMOVE dispatch from ShopProducts and handle it here as the single source of truth for the PAGE.

    useEffect(() => {
        // Dispatch with categoryId from URL
        dispatch(fetchProducts(categoryId));
        // Resetting logic or retaining logic is handled by reducer/actions
    }, [dispatch, categoryId, location.search]); // Trigger on URL search params change too if we used them directly

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <ShopHeader />
                <ShopCategories />
                <ShopFilter />
                <ShopProducts />
                {/* ShopProducts: internal fetch removed/disabled to avoid double fetch? */}
                <ShopClients />
            </main>
            <Footer />
        </div>
    );
};

export default ShopPage;
