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
    const { gender, categoryName } = useParams();
    const location = useLocation();
    const { limit, categories } = useSelector(state => state.product);

    // Helper to match slugs (must match ShopDropdown logic)
    const slugify = (text) => {
        if (!text) return "";
        return text
            .toString()
            .toLowerCase()
            .replace(/ğ/g, 'g')
            .replace(/ü/g, 'u')
            .replace(/ş/g, 's')
            .replace(/ı/g, 'i')
            .replace(/i̇/g, 'i')
            .replace(/ö/g, 'o')
            .replace(/ç/g, 'c')
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '')
            .replace(/--+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, '');
    };

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);

        // Parse query params
        const sort = queryParams.get('sort') || "";
        const filter = queryParams.get('filter') || "";
        const page = parseInt(queryParams.get('page')) || 1;
        const offset = (page - 1) * limit;

        // Sync Redux State
        dispatch(setFilter(filter));
        dispatch(setSort(sort));
        dispatch(setOffset(offset));

        // Resolve Category ID from URL params (gender/categoryName)
        let resolvedCategoryId = null;

        if (categories.length > 0 && gender && categoryName) {
            const selectedCategory = categories.find(cat => {
                const catGender = cat.code?.startsWith('k') ? 'kadin' : 'erkek';
                const catSlug = slugify(cat.title);
                return catGender === gender && catSlug === categoryName;
            });

            if (selectedCategory) {
                resolvedCategoryId = selectedCategory.id;
            }
        }

        // Fetch Products with resolved ID (or null for all products)
        dispatch(fetchProducts(resolvedCategoryId));

    }, [dispatch, gender, categoryName, location.search, limit, categories]);

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
