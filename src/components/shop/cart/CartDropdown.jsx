import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ShoppingCart, Trash2 } from 'lucide-react';
import { Link, useHistory } from 'react-router-dom';
import { removeFromCart, updateCartItem } from '../../../store/actions/shoppingCartActions';

const CartDropdown = () => {
    const { cart } = useSelector(state => state.shoppingCart);
    const dispatch = useDispatch();
    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false);
    let timeoutId;

    const totalItems = cart.reduce((sum, item) => sum + item.count, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.product.price * item.count), 0);

    const handleMouseEnter = () => {
        clearTimeout(timeoutId);
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutId = setTimeout(() => {
            setIsOpen(false);
        }, 200);
    };

    const handleRemove = (e, productId) => {
        e.stopPropagation(); // Prevent closing dropdown
        dispatch(removeFromCart(productId));
    };

    return (
        <div
            className="relative z-50"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="flex items-center gap-1 cursor-pointer hover:text-[#1a8cd8] relative py-2">
                <ShoppingCart size={16} />
                <span>{totalItems}</span>
            </div>

            {/* Dropdown Content */}
            {isOpen && (
                <div className="absolute right-0 top-full mt-0 w-80 bg-white shadow-xl rounded-md border border-gray-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200 origin-top-right">
                    <div className="p-4">
                        <h3 className="font-bold text-[#252B42] text-sm mb-3">My Cart ({totalItems} Items)</h3>

                        <div className="max-h-80 overflow-y-auto flex flex-col gap-3">
                            {cart.length > 0 ? (
                                cart.map((item, index) => (
                                    <div key={index} className="flex gap-3 group">
                                        <div className="w-16 h-20 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
                                            <img
                                                src={item.product.images?.[0]?.url || item.product.image}
                                                alt={item.product.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-col flex-grow justify-between py-1">
                                            <div>
                                                <h4 className="text-[#252B42] text-sm font-bold line-clamp-2 leading-tight">
                                                    {item.product.name}
                                                </h4>
                                                <div className="text-[#737373] text-xs mt-1 flex items-center gap-2">
                                                    <span>Count:</span>
                                                    <div className="flex items-center border border-gray-200 rounded">
                                                        <button
                                                            className="px-2 py-0.5 hover:bg-gray-100 disabled:opacity-50"
                                                            disabled={item.count <= 1}
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                dispatch(updateCartItem(item.product.id, { count: item.count - 1 }));
                                                            }}
                                                        >
                                                            -
                                                        </button>
                                                        <input
                                                            type="text"
                                                            value={item.count}
                                                            className="w-8 text-center text-[#252B42] font-bold outline-none"
                                                            onClick={(e) => e.stopPropagation()}
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
                                                            className="px-2 py-0.5 hover:bg-gray-100"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                dispatch(updateCartItem(item.product.id, { count: item.count + 1 }));
                                                            }}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between mt-1">
                                                <span className="text-[#23A6F0] font-bold text-sm">
                                                    ${(item.product.price * item.count).toFixed(2)}
                                                </span>
                                                <button
                                                    onClick={(e) => handleRemove(e, item.product.id)}
                                                    className="text-red-500 hover:text-red-700 transition-colors p-1"
                                                    title="Remove"
                                                >
                                                    <Trash2 size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-6 text-gray-400 text-sm">
                                    Your cart is empty.
                                </div>
                            )}
                        </div>

                        {cart.length > 0 && (
                            <div className="mt-4 pt-4 border-t border-gray-100">
                                <div className="flex justify-between items-center mb-4 text-[#252B42] font-bold">
                                    <span>Total:</span>
                                    <span className="text-lg">${totalPrice.toFixed(2)}</span>
                                </div>
                                <div className="flex gap-2">
                                    <Link
                                        to="/cart"
                                        className="flex-1 bg-gray-100 text-[#252B42] text-center py-2.5 rounded font-bold text-sm hover:bg-gray-200 transition"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        View Cart
                                    </Link>
                                    <Link
                                        to="/checkout"
                                        className="flex-1 bg-[#23A6F0] text-white text-center py-2.5 rounded font-bold text-sm hover:bg-[#1a8cd8] transition"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Checkout
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartDropdown;
