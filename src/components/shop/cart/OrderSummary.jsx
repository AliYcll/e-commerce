import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const OrderSummary = ({ showButton = true }) => {
    const { cart } = useSelector(state => state.shoppingCart);
    const history = useHistory();

    // Calculate totals based on CHECKED items only
    const checkedItems = cart.filter(item => item.checked);
    const subtotal = checkedItems.reduce((sum, item) => sum + (item.product.price * item.count), 0);

    // Shipping rules: simple static rule (e.g. $29.99, free over $150)
    const shippingCost = 29.99;
    const isShippingFree = subtotal >= 150;
    const shippingTotal = isShippingFree ? 0 : shippingCost;

    const total = subtotal + shippingTotal;

    return (
        <div className="flex flex-col gap-4">
            {showButton && (
                <button
                    onClick={() => history.push('/order')}
                    className="w-full bg-[#23A6F0] text-white py-3 rounded-md font-bold hover:bg-[#1a8cd8] transition text-sm"
                >
                    Create Order {'>'}
                </button>
            )}

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-lg font-bold text-[#252B42] mb-4">Order Summary</h2>

                <div className="flex flex-col gap-4 mb-4">
                    <div className="flex justify-between text-[#737373] text-sm">
                        <span>Items Total</span>
                        <span className="font-bold text-[#252B42]">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-[#737373] text-sm">
                        <span>Shipping Total</span>
                        <span className="font-bold text-[#252B42]">${shippingCost.toFixed(2)}</span>
                    </div>

                    {isShippingFree && (
                        <div className="flex justify-between text-[#737373] text-sm">
                            <span className="w-2/3">Free Shipping (Over $150)</span>
                            <span className="font-bold text-[#23A6F0]">-${shippingCost.toFixed(2)}</span>
                        </div>
                    )}

                    <div className="border-t border-gray-200 my-2"></div>

                    <div className="flex justify-between items-center">
                        <span className="font-bold text-[#252B42]">Total</span>
                        <span className="text-xl font-bold text-[#23A6F0]">${total.toFixed(2)}</span>
                    </div>
                </div>

                <button className="w-full bg-gray-100 text-[#23A6F0] py-3 rounded-md font-bold hover:bg-gray-200 transition text-sm flex items-center justify-center gap-2">
                    <span>+</span> ENTER DISCOUNT CODE
                </button>
            </div>

            {showButton && (
                <button
                    onClick={() => history.push('/order')}
                    className="w-full bg-[#23A6F0] text-white py-3 rounded-md font-bold hover:bg-[#1a8cd8] transition text-sm"
                >
                    Create Order {'>'}
                </button>
            )}
        </div>
    );
};

export default OrderSummary;
