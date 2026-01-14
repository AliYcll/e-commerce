import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { getOrders } from '../store/actions/clientActions';
import { fetchProducts, setLimit } from '../store/actions/productActions';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const PreviousOrdersPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    // Selectors
    const { orderList, user } = useSelector(state => state.client);
    const { productList, categories } = useSelector(state => state.product);

    const [openOrderId, setOpenOrderId] = useState(null);

    // Check auth
    const isAuthenticated = user.email || localStorage.getItem("token");

    // Redirect if not logged in
    useEffect(() => {
        if (!isAuthenticated) {
            history.push('/login', { from: location.pathname });
        }
    }, [isAuthenticated, history, location]);

    useEffect(() => {
        if (isAuthenticated) {
            dispatch(getOrders());

            // Fetch comprehensive product list to ensure we can show details
            // Increasing limit to cover most catalog for this view
            dispatch(setLimit(500));
            dispatch(fetchProducts());
        }
    }, [dispatch, isAuthenticated]);

    const toggleDetails = (orderId) => {
        if (openOrderId === orderId) {
            setOpenOrderId(null);
        } else {
            setOpenOrderId(orderId);
        }
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    // Helper to generic URL-friendly slug
    const slugify = (text) => {
        return text
            .toString()
            .toLowerCase()
            .replace(/\s+/g, '-')     // Replace spaces with -
            .replace(/[^\w-]+/g, '')  // Remove all non-word chars
            .replace(/--+/g, '-')     // Replace multiple - with single -
            .replace(/^-+/, '')       // Trim - from start of text
            .replace(/-+$/, '');      // Trim - from end of text
    };

    const getProductLink = (product) => {
        if (!product || !product.id || !product.category_id) return "#";

        const title = product.name || product.title || "Product";
        const slug = slugify(title);

        // Find category to get code (gender) and title
        const category = categories.find(c => c.id === product.category_id);
        const gender = category ? (category.code.startsWith('k') ? 'kadin' : 'erkek') : 'genel';
        const categoryName = category ? slugify(category.title) : 'kategori';

        return `/shop/${gender}/${categoryName}/${product.category_id}/${slug}/${product.id}`;
    };

    // Helper to find product details
    const getProductDetails = (orderItem) => {
        // First check if the order item has embedded product object
        if (orderItem.product && orderItem.product.images) {
            return orderItem.product;
        }

        // Check valid ID
        const pId = orderItem.product_id || orderItem.productId || orderItem.id;

        // Fallback: search in global productList by ID
        const found = productList.find(p => p.id === pId);
        if (found) return found;

        // Fallback object if nothing found
        return {
            name: orderItem.detail || "Product",
            images: orderItem.product?.images || [], // try accessing possibly nested
            price: orderItem.price // if available
        };
    };

    const getOrderSummaryText = (order) => {
        if (!order.products || order.products.length === 0) return "Order";

        const firstItem = order.products[0];
        const productDetails = getProductDetails(firstItem);
        const firstName = productDetails.name || firstItem.detail; // Prefer name from lookup

        if (order.products.length === 1) {
            return firstName;
        } else {
            return `${firstName} and ${order.products.length - 1} more items`;
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow bg-[#FAFAFA] py-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold text-[#252B42] mb-8">Previous Orders</h1>

                    {orderList.length === 0 ? (
                        <div className="bg-white p-8 rounded shadow text-center">
                            <p className="text-[#737373] text-lg">You have no orders yet.</p>
                        </div>
                    ) : (
                        <div className="bg-white rounded shadow overflow-hidden">
                            {/* Desktop Header */}
                            <div className="hidden md:grid grid-cols-12 gap-4 bg-[#F8F9FA] p-4 border-b border-gray-200 font-bold text-[#252B42]">
                                <div className="col-span-3">Order Date</div>
                                <div className="col-span-3">Order Summary</div>
                                <div className="col-span-2">Total Amount</div>
                                <div className="col-span-2">Items</div>
                                <div className="col-span-2 text-right">Details</div>
                            </div>

                            {/* Orders List */}
                            {orderList.map((order) => (
                                <div key={order.id} className="border-b border-gray-200 last:border-0">
                                    {/* Order Row */}
                                    <div
                                        className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 items-center hover:bg-gray-50 transition-colors cursor-pointer"
                                        onClick={() => toggleDetails(order.id)}
                                    >
                                        <div className="col-span-12 md:col-span-3 text-[#737373]">
                                            <span className="md:hidden font-bold text-[#252B42] mr-2">Date:</span>
                                            {formatDate(order.order_date)}
                                        </div>
                                        <div className="col-span-12 md:col-span-3 text-[#252B42]">
                                            <span className="md:hidden font-bold text-[#252B42] mr-2">Summary:</span>
                                            {getOrderSummaryText(order)}
                                        </div>
                                        <div className="col-span-6 md:col-span-2 font-bold text-[#23A6F0]">
                                            <span className="md:hidden text-[#252B42] mr-2">Amount:</span>
                                            ${order.price.toFixed(2)}
                                        </div>
                                        <div className="col-span-6 md:col-span-2 text-[#737373]">
                                            <span className="md:hidden font-bold text-[#252B42] mr-2">Count:</span>
                                            {order.products?.reduce((acc, item) => acc + item.count, 0) || 0}
                                        </div>
                                        <div className="col-span-12 md:col-span-2 text-right">
                                            <button className="text-[#23A6F0] font-bold text-sm flex items-center justify-end gap-1 ml-auto">
                                                {openOrderId === order.id ? 'Close' : 'View'}
                                                <svg
                                                    className={`w-4 h-4 transition-transform ${openOrderId === order.id ? 'rotate-180' : ''}`}
                                                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Collapsible Details */}
                                    {openOrderId === order.id && (
                                        <div className="bg-[#F8F9FA] p-4 border-t border-gray-100 animate-fade-in">
                                            <h4 className="font-bold text-[#252B42] mb-3">Order Details</h4>
                                            <div className="space-y-4">
                                                {order.products?.map((item, index) => {
                                                    const product = getProductDetails(item);
                                                    const link = getProductLink(product);

                                                    return (
                                                        <Link
                                                            key={index}
                                                            to={link}
                                                            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white p-3 rounded border border-gray-200 hover:shadow-md transition-shadow cursor-pointer block"
                                                        >
                                                            {product.images?.[0]?.url ? (
                                                                <img
                                                                    src={product.images[0].url}
                                                                    alt={product.name}
                                                                    className="w-16 h-16 object-cover rounded"
                                                                />
                                                            ) : (
                                                                <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center text-gray-400 text-xs text-center p-1">
                                                                    No Image
                                                                </div>
                                                            )}
                                                            <div className="flex-grow">
                                                                <h5 className="font-bold text-[#252B42] hover:text-[#23A6F0] transition-colors">{product.name}</h5>
                                                                <p className="text-xs text-[#737373]">{product.description || ""}</p>
                                                            </div>
                                                            <div className="text-right min-w-[100px]">
                                                                <div className="font-bold text-[#23A6F0]">Count: {item.count}</div>
                                                            </div>
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PreviousOrdersPage;
