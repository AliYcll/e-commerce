import React from 'react';
import { useSelector } from 'react-redux';

const OrderSummary = () => {
    const { cart } = useSelector(state => state.shoppingCart);

    // Calculate totals
    const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.count), 0);
    const shipping = subtotal > 150 ? 0 : 29.99;
    const discount = 0; // Can implement discount logic here
    const total = subtotal + shipping - discount;

    return (
        <div className="bg-white p-6 rounded shadow border border-[#E8E8E8]">
            <h2 className="text-lg font-bold text-[#252B42] mb-6">Order Summary</h2>

            <div className="flex flex-col gap-4 mb-6">
                <div className="flex justify-between text-[#737373]">
                    <span>Subtotal</span>
                    <span className="font-bold text-[#252B42]">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#737373]">
                    <span>Shipping</span>
                    <span className="font-bold text-[#252B42]">
                        {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                    </span>
                </div>
                {discount > 0 && (
                    <div className="flex justify-between text-[#737373]">
                        <span>Discount</span>
                        <span className="font-bold text-green-600">-${discount.toFixed(2)}</span>
                    </div>
                )}
            </div>

            <div className="border-t border-[#E8E8E8] pt-4 mb-6">
                <div className="flex justify-between items-center">
                    <span className="font-bold text-[#252B42]">Total</span>
                    <span className="text-xl font-bold text-[#23A6F0]">${total.toFixed(2)}</span>
                </div>
            </div>

            <button className="w-full bg-[#23A6F0] text-white py-3 rounded font-bold hover:bg-[#1a8cd8] transition text-sm">
                Create Order
            </button>
        </div>
    );
};

export default OrderSummary;
