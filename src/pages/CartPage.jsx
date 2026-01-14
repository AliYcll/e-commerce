import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateCartItem, removeFromCart } from '../store/actions/shoppingCartActions';
import OrderSummary from '../components/shop/cart/OrderSummary';

const CartPage = () => {
    const history = useHistory();
    const { cart } = useSelector(state => state.shoppingCart);
    const dispatch = useDispatch();

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow bg-[#FAFAFA] py-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
                    {cart.length === 0 ? (
                        <div className="bg-white p-8 rounded shadow text-center">
                            <p className="text-gray-500">Your cart is empty.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            {/* Cart Items List - Left Side */}
                            <div className="lg:col-span-8 flex flex-col gap-4">
                                {cart.map((item, index) => (
                                    <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden group">
                                        {/* Seller Header */}
                                        <div className="px-4 py-3 border-b border-gray-100 bg-gray-50 flex items-center gap-2 text-sm">
                                            <input
                                                type="checkbox"
                                                checked={item.checked}
                                                onChange={(e) => dispatch(updateCartItem(item.product.id, { checked: e.target.checked }))}
                                                className="w-4 h-4 text-[#23A6F0] rounded border-gray-300 focus:ring-[#23A6F0]"
                                            />
                                            <span className="text-[#737373]">Seller:</span>
                                            <span className="font-bold text-[#252B42]">Bandage Store</span>
                                            <span className="bg-[#23A6F0] text-white text-[10px] px-2 py-0.5 rounded ml-2">Corporate</span>
                                        </div>

                                        {/* Product Row */}
                                        <div className="p-4 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
                                            <div className="hidden sm:block">
                                                <input
                                                    type="checkbox"
                                                    checked={item.checked}
                                                    onChange={(e) => dispatch(updateCartItem(item.product.id, { checked: e.target.checked }))}
                                                    className="w-5 h-5 text-[#23A6F0] rounded border-gray-300 focus:ring-[#23A6F0] cursor-pointer"
                                                />
                                            </div>

                                            {/* Image */}
                                            <div className="w-full sm:w-24 h-32 flex-shrink-0 bg-gray-100 rounded overflow-hidden border border-gray-200">
                                                <img
                                                    src={item.product.images?.[0]?.url || item.product.image}
                                                    alt={item.product.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            {/* Content */}
                                            <div className="flex-grow min-w-0">
                                                <h3 className="font-bold text-[#252B42] text-lg leading-tight mb-2">{item.product.name}</h3>
                                                <p className="text-[#737373] text-sm mb-4 line-clamp-2">{item.product.description}</p>
                                                <div className="text-green-600 text-xs font-bold flex items-center gap-1">
                                                    <span>⚡</span> Shipping Free
                                                </div>
                                            </div>

                                            {/* Controls */}
                                            <div className="flex flex-row sm:flex-col items-center sm:items-end gap-4 w-full sm:w-auto justify-between sm:justify-start">
                                                {/* Price */}
                                                <div className="text-right">
                                                    <div className="font-bold text-[#23A6F0] text-xl">
                                                        ${(item.product.price * item.count).toFixed(2)}
                                                    </div>
                                                    <div className="text-[#737373] text-xs line-through">
                                                        ${(item.product.price * item.count * 1.2).toFixed(2)}
                                                    </div>
                                                </div>

                                                {/* Quantity & Delete */}
                                                <div className="flex items-center gap-4">
                                                    <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                                                        <button
                                                            className="px-3 py-1 bg-gray-50 hover:bg-gray-100 disabled:opacity-50 border-r border-gray-300 transition-colors"
                                                            disabled={item.count <= 1}
                                                            onClick={() => dispatch(updateCartItem(item.product.id, { count: item.count - 1 }))}
                                                        >
                                                            -
                                                        </button>
                                                        <input
                                                            type="text"
                                                            value={item.count}
                                                            className="w-12 text-center font-bold text-[#252B42] outline-none py-1"
                                                            onChange={(e) => {
                                                                const val = e.target.value;
                                                                if (val === '') {
                                                                    dispatch(updateCartItem(item.product.id, { count: 1 }));
                                                                    return;
                                                                }
                                                                let num = parseInt(val);
                                                                if (isNaN(num) || num < 1) num = 1;
                                                                if (num > 9999) num = 9999;
                                                                dispatch(updateCartItem(item.product.id, { count: num }));
                                                            }}
                                                        />
                                                        <button
                                                            className="px-3 py-1 bg-gray-50 hover:bg-gray-100 border-l border-gray-300 transition-colors"
                                                            onClick={() => dispatch(updateCartItem(item.product.id, { count: item.count + 1 }))}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                    <button
                                                        onClick={() => dispatch(removeFromCart(item.product.id))}
                                                        className="text-gray-400 hover:text-red-500 transition-colors"
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Order Summary - Right Side */}
                            <div className="lg:col-span-4">
                                <OrderSummary />
                            </div>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CartPage;
