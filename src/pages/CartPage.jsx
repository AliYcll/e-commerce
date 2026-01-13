import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { updateCartItem } from '../store/actions/shoppingCartActions';

const CartPage = () => {
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
                        <div className="bg-white p-8 rounded shadow">
                            <ul>
                                {cart.map((item, index) => (
                                    <li key={index} className="flex justify-between items-center border-b border-gray-100 py-4 last:border-b-0">
                                        <div className="flex items-center gap-4">
                                            <div className="w-20 h-24 bg-gray-100 rounded overflow-hidden">
                                                <img src={item.product.images?.[0]?.url || item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold">{item.product.name}</h3>
                                                <div className="flex items-center gap-3 mt-2">
                                                    <p className="text-gray-500 text-sm">Quantity:</p>
                                                    <div className="flex items-center border border-gray-200 rounded">
                                                        <button
                                                            className="px-3 py-1 hover:bg-gray-100 disabled:opacity-50"
                                                            disabled={item.count <= 1}
                                                            onClick={() => dispatch(updateCartItem(item.product.id, { count: item.count - 1 }))}
                                                        >
                                                            -
                                                        </button>
                                                        <input
                                                            type="text"
                                                            value={item.count}
                                                            className="w-12 text-center font-bold outline-none"
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
                                                            className="px-3 py-1 hover:bg-gray-100"
                                                            onClick={() => dispatch(updateCartItem(item.product.id, { count: item.count + 1 }))}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="font-bold text-[#23A6F0]">
                                            ${(item.product.price * item.count).toFixed(2)}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CartPage;
