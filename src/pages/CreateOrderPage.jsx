import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAddressList, addAddress, updateAddress, deleteAddress, createOrder } from '../store/actions/clientActions';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import OrderSummary from '../components/shop/cart/OrderSummary';
import AddressForm from '../components/common/AddressForm';
import PaymentSection from '../components/shop/order/PaymentSection';

const CreateOrderPage = () => {
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();

    // Selectors
    const { user, addressList, creditCards } = useSelector(state => state.client);
    const { cart } = useSelector(state => state.shoppingCart);

    // Check if user is authenticated based on Redux state OR valid token in localStorage
    const isAuthenticated = user.email || localStorage.getItem("token");

    const [isAddingNew, setIsAddingNew] = useState(false);
    const [editingAddress, setEditingAddress] = useState(null);
    const [selectedAddressId, setSelectedAddressId] = useState(null);
    const [selectedCardId, setSelectedCardId] = useState(null);
    const [activeStep, setActiveStep] = useState('address');
    const [paymentBusy, setPaymentBusy] = useState(false);

    // Redirect if not logged in
    useEffect(() => {
        if (!isAuthenticated) {
            history.push('/login', { from: location.pathname });
        }
    }, [isAuthenticated, history, location]);

    // Fetch addresses on mount
    useEffect(() => {
        if (isAuthenticated) {
            dispatch(getAddressList());
        }
    }, [dispatch, isAuthenticated]);

    // Set default selected address
    useEffect(() => {
        if (addressList && addressList.length > 0 && !selectedAddressId) {
            setSelectedAddressId(addressList[0].id);
        }
    }, [addressList]);

    const handleAddressSubmit = (data) => {
        if (editingAddress) {
            // Update
            dispatch(updateAddress({ ...data, id: editingAddress.id }))
                .then(() => {
                    setEditingAddress(null);
                    setIsAddingNew(false);
                });
        } else {
            // Add New
            dispatch(addAddress(data))
                .then(() => {
                    setIsAddingNew(false);
                });
        }
    };

    const handleDelete = (id, e) => {
        e.stopPropagation(); // Prevent card selection
        dispatch(deleteAddress(id));
    };

    const handleEdit = (address, e) => {
        e.stopPropagation();
        setEditingAddress(address);
        setIsAddingNew(true);
        // Scroll to form
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCreateOrder = () => {
        if (!selectedAddressId || !selectedCardId) {
            alert("Please select an address and a credit card.");
            return;
        }

        const card = creditCards.find(c => c.id === selectedCardId);
        if (!card) return;

        // Calculate total price (checked items only)
        const checkedItems = cart.filter(item => item.checked);
        if (checkedItems.length === 0) {
            alert("Your cart is empty.");
            return;
        }

        const subtotal = checkedItems.reduce((sum, item) => sum + (item.product.price * item.count), 0);
        const shippingCost = subtotal >= 150 ? 0 : 29.99;
        const totalPrice = subtotal + shippingCost;

        const orderPayload = {
            address_id: selectedAddressId,
            order_date: new Date().toISOString(),
            card_no: parseInt(card.card_no.replace(/\s/g, ''), 10), // Ensure number
            card_name: card.name_on_card,
            card_expire_month: parseInt(card.expire_month, 10),
            card_expire_year: parseInt(card.expire_year, 10),
            card_ccv: 321, // Mock CVV as it's not stored
            price: totalPrice,
            products: checkedItems.map(item => ({
                product_id: item.product.id,
                count: item.count,
                detail: item.product.description || item.product.name // Detail description
            }))
        };

        dispatch(createOrder(orderPayload))
            .then(() => {
                history.push('/order-success');
            })
            .catch(err => {
                console.error(err);
                alert("An error occurred while creating the order.");
            });
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow bg-[#FAFAFA] py-12">
                <div className="container mx-auto px-4">

                    {/* Steps Header */}
                    <div className="flex justify-between md:justify-start gap-8 mb-8">
                        <div
                            onClick={() => setActiveStep('address')}
                            className={`cursor-pointer border-b-4 pb-2 px-2 transition-colors ${activeStep === 'address' ? 'border-[#23A6F0]' : 'border-gray-200'}`}
                        >
                            <span className={`text-xl font-bold ${activeStep === 'address' ? 'text-[#23A6F0]' : 'text-[#737373]'}`}>1. Address Info</span>
                            <p className="text-xs text-[#737373] hidden md:block">Billing & Shipping Details</p>
                        </div>
                        <div
                            className={`cursor-pointer border-b-4 pb-2 px-2 transition-colors ${activeStep === 'payment' ? 'border-[#23A6F0]' : 'border-gray-200'}`}
                        >
                            <span className={`text-xl font-bold ${activeStep === 'payment' ? 'text-[#23A6F0]' : 'text-[#737373]'}`}>2. Payment</span>
                            <p className="text-xs text-[#737373] hidden md:block">Credit Card or Shopping Loan</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Left Side - Address Management */}
                        <div className="lg:col-span-8">

                            {activeStep === 'address' ? (
                                <>
                                    {/* Alert/Info */}
                                    <div className="bg-[#EFFFF8] border border-green-200 p-4 rounded mb-6 flex items-start gap-3">
                                        <span className="text-green-600">ℹ️</span>
                                        <p className="text-sm text-[#252B42]">
                                            For corporate billing, uncheck "Send Invoice to Same Address" and select your registered Corporate Invoice address.
                                        </p>
                                    </div>

                                    <h2 className="text-lg font-bold text-[#252B42] mb-4">Shipping Address</h2>

                                    {/* Address Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                        {/* Add New Button Card */}
                                        <button
                                            onClick={() => { setEditingAddress(null); setIsAddingNew(true); }}
                                            className="min-h-[180px] flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded hover:border-[#23A6F0] hover:bg-white transition-colors group bg-gray-50"
                                        >
                                            <span className="text-4xl text-[#23A6F0] mb-2 group-hover:scale-110 transition-transform">+</span>
                                            <span className="font-bold text-[#252B42]">Add New Address</span>
                                        </button>

                                        {/* Address Cards */}
                                        {addressList.map(address => (
                                            <div
                                                key={address.id}
                                                onClick={() => setSelectedAddressId(address.id)}
                                                className={`relative p-4 rounded border-2 cursor-pointer transition-all ${selectedAddressId === address.id
                                                    ? 'border-[#23A6F0] bg-white shadow-md'
                                                    : 'border-gray-200 bg-white hover:border-[#23A6F0] hover:shadow-sm'
                                                    }`}
                                            >
                                                <div className="flex justify-between items-start mb-2">
                                                    <div className="flex items-center gap-2">
                                                        <input
                                                            type="radio"
                                                            checked={selectedAddressId === address.id}
                                                            onChange={() => setSelectedAddressId(address.id)}
                                                            className="w-4 h-4 text-[#23A6F0]"
                                                        />
                                                        <span className="font-bold text-[#252B42]">{address.title}</span>
                                                    </div>

                                                </div>

                                                <div className="text-sm text-[#737373] space-y-1 mb-3">
                                                    <div className="font-bold text-[#252B42] flex items-center gap-2">
                                                        <span>👤 {address.name} {address.surname}</span>
                                                    </div>
                                                    <p className="line-clamp-2">{address.neighborhood} {address.address}</p>
                                                    <p>{address.district}/{address.city}</p>
                                                    <p className="font-bold">📱 {address.phone}</p>
                                                </div>

                                                {selectedAddressId === address.id && (
                                                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-[#23A6F0] border-l-[40px] border-l-transparent transform rotate-0 rounded-tr">
                                                        <span className="absolute -top-[35px] -left-[14px] text-white text-xs">✓</span>
                                                    </div>
                                                )}

                                                <div className="absolute bottom-4 right-4 flex items-center gap-3">
                                                    <button
                                                        onClick={(e) => handleEdit(address, e)}
                                                        className="text-xs font-bold text-[#23A6F0] hover:text-[#1a8cd8] hover:underline cursor-pointer transition-colors"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={(e) => handleDelete(address.id, e)}
                                                        className="text-gray-400 hover:text-red-600 transition-all cursor-pointer"
                                                        title="Delete Address"
                                                    >
                                                        🗑️
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Form Section (Conditional) */}
                                    {isAddingNew && (
                                        <div className="mb-8 animate-fade-in">
                                            <AddressForm
                                                onSubmit={handleAddressSubmit}
                                                defaultValues={editingAddress}
                                                onCancel={() => { setIsAddingNew(false); setEditingAddress(null); }}
                                            />
                                        </div>
                                    )}
                                </>
                            ) : (
                                <PaymentSection
                                    onFormStatusChange={setPaymentBusy}
                                    selectedCardId={selectedCardId}
                                    onChange={setSelectedCardId}
                                />
                            )}
                        </div>

                        {/* Right Side - Summary */}
                        <div className="lg:col-span-4">
                            <OrderSummary showButton={false} />
                            <div className="mt-4 text-center">
                                <button
                                    onClick={() => {
                                        if (activeStep === 'address') {
                                            setActiveStep('payment');
                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                        } else {
                                            handleCreateOrder();
                                        }
                                    }}
                                    disabled={activeStep === 'payment' && paymentBusy}
                                    className={`w-full py-4 rounded font-bold text-lg transition shadow-lg ${activeStep === 'payment' && paymentBusy
                                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        : 'bg-[#23A6F0] text-white hover:bg-[#1a8cd8]'
                                        }`}
                                >
                                    {activeStep === 'address' ? 'Save and Continue >' : 'Complete Order >'}
                                </button>
                                <div className="mt-4 flex items-start gap-2 text-xs text-[#737373] text-left border border-gray-200 p-3 rounded bg-white">
                                    <input type="checkbox" className="mt-1" defaultChecked />
                                    <span>
                                        I have read and agree to the <a href="#" className="underline font-bold">Preliminary Information Conditions</a> and <a href="#" className="underline font-bold">Distance Sales Agreement</a>.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CreateOrderPage;
