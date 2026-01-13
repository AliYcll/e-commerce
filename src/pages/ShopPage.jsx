import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import { fetchProducts, setFilter, setSort, setOffset } from '../store/actions/productActions';
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
    const { limit } = useSelector(state => state.product);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);

        // Parse params
        const sort = queryParams.get('sort') || "";
        const filter = queryParams.get('filter') || "";
        const page = parseInt(queryParams.get('page')) || 1;

        // Calculate offset based on page (default limit is handled in reducer or state, usually 25)
        // If we want to support limit in URL we could parse it too, but let's stick to state limit for now.
        const offset = (page - 1) * limit;

        // Sync Redux State
        dispatch(setFilter(filter));
        dispatch(setSort(sort));
        dispatch(setOffset(offset));

        // Fetch Products with new params
        dispatch(fetchProducts(categoryId));

    }, [dispatch, categoryId, location.search, limit]);

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
