import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCards, addCard, updateCard, deleteCard } from '../../../store/actions/clientActions';
import CreditCardForm from '../../common/CreditCardForm';

const PaymentSection = ({ onFormStatusChange, selectedCardId, onChange }) => {
    const dispatch = useDispatch();
    const { creditCards } = useSelector(state => state.client);

    // Local state
    const [isAddingNew, setIsAddingNew] = useState(false);
    const [editingCard, setEditingCard] = useState(null);

    // Fetch cards on mount
    useEffect(() => {
        dispatch(getCards());
    }, [dispatch]);

    // Set default selected card
    useEffect(() => {
        if (creditCards && creditCards.length > 0 && !selectedCardId) {
            // If no card is selected but we have cards, select the first one
            // We use the onChange prop to notify the parent
            if (onChange) {
                onChange(creditCards[0].id);
            }
        }
    }, [creditCards, selectedCardId, onChange]);

    // Notify parent about busy state (form open)
    useEffect(() => {
        if (onFormStatusChange) {
            onFormStatusChange(isAddingNew);
        }
    }, [isAddingNew, onFormStatusChange]);

    const handleCardSubmit = (data) => {
        if (editingCard) {
            dispatch(updateCard({ ...data, id: editingCard.id }))
                .then(() => {
                    setEditingCard(null);
                    setIsAddingNew(false);
                });
        } else {
            dispatch(addCard(data))
                .then(() => {
                    setIsAddingNew(false);
                });
        }
    };

    const handleDelete = (id, e) => {
        e.stopPropagation();
        dispatch(deleteCard(id));
    };

    const handleEdit = (card, e) => {
        e.stopPropagation();
        setEditingCard(card);
        setIsAddingNew(true);
    };

    const handleAddNewClick = () => {
        setEditingCard(null);
        setIsAddingNew(true);
    }

    return (
        <div className="animate-fade-in">
            {/* Header Tabs Mockup */}
            <div className="bg-white rounded border border-gray-200 p-4 mb-6">
                <h3 className="text-xl font-bold text-[#252B42] mb-4">Payment Options</h3>
                <div className="flex gap-4 border-b border-gray-200 pb-2">
                    <button className="text-sm font-bold text-[#252B42] border-b-2 border-[#252B42] pb-2 -mb-2.5">
                        Pay with Card
                    </button>
                    <button className="text-sm font-bold text-[#737373] pb-2">
                        Cash on Delivery
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column: Cards */}
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="font-bold text-[#252B42]">Card Information</h4>
                        <button
                            onClick={handleAddNewClick}
                            disabled={isAddingNew}
                            className={`text-sm text-[#737373] underline hover:text-[#23A6F0] ${isAddingNew ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            Pay with another card
                        </button>
                    </div>

                    {/* Card Scroller / Grid */}
                    <div className={`space-y-4 mb-6 transition-opacity ${isAddingNew ? 'opacity-50 pointer-events-none' : ''}`}>
                        {creditCards.map(card => (
                            <div
                                key={card.id}
                                onClick={() => onChange && onChange(card.id)}
                                className={`p-4 border rounded cursor-pointer transition-all flex justify-between items-center ${selectedCardId === card.id
                                    ? 'border-[#23A6F0] bg-[#F3F9FE]'
                                    : 'border-gray-200 bg-white hover:border-gray-300'}`}
                            >
                                <div className="flex items-center gap-3">
                                    <input
                                        type="radio"
                                        checked={selectedCardId === card.id}
                                        onChange={() => onChange && onChange(card.id)}
                                        disabled={isAddingNew}
                                        className="w-4 h-4 text-[#23A6F0] focus:ring-[#23A6F0]"
                                    />
                                    <div>
                                        <p className="font-bold text-[#252B42] text-sm">
                                            {card.name_on_card}
                                        </p>
                                        <p className="text-xs text-[#737373]">
                                            {card.card_no.replace(/(\d{4})\d{8}(\d{4})/, '$1 **** **** $2')}
                                        </p>
                                        <p className="text-xs text-[#737373] mt-1">
                                            {card.expire_month}/{card.expire_year}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={(e) => handleEdit(card, e)}
                                        disabled={isAddingNew}
                                        className="text-xs font-bold text-[#23A6F0] hover:underline disabled:cursor-not-allowed"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={(e) => handleDelete(card.id, e)}
                                        disabled={isAddingNew}
                                        className="text-gray-400 hover:text-red-500 disabled:cursor-not-allowed"
                                        title="Delete"
                                    >
                                        🗑️
                                    </button>
                                </div>
                            </div>
                        ))}

                        {/* If list is empty */}
                        {creditCards.length === 0 && !isAddingNew && (
                            <div className="text-center py-8 bg-gray-50 rounded border border-dashed border-gray-300">
                                <p className="text-[#737373] mb-2">You have no saved cards yet.</p>
                                <button
                                    onClick={() => setIsAddingNew(true)}
                                    className="text-[#23A6F0] font-bold underline"
                                >
                                    Add New Card
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Form Section */}
                    {isAddingNew && (
                        <div className="mb-6 animate-fade-in">
                            <CreditCardForm
                                onSubmit={handleCardSubmit}
                                initialData={editingCard}
                                onCancel={() => { setIsAddingNew(false); setEditingCard(null); }}
                            />
                        </div>
                    )}
                </div>

                {/* Right Column: Installments (Mock) */}
                <div>
                    <h4 className="font-bold text-[#252B42] mb-4">Installment Options</h4>
                    <p className="text-xs text-[#737373] mb-4">Select installment option suitable for your card</p>

                    <div className="border border-gray-200 rounded overflow-hidden">
                        <table className="w-full text-sm">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="p-3 text-left text-[#252B42]">Installments</th>
                                    <th className="p-3 text-left text-[#252B42]">Monthly Payment</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 flex items-center gap-2">
                                        <input type="radio" checked readOnly className="text-[#23A6F0]" />
                                        <span className="font-bold text-[#23A6F0]">Single Payment</span>
                                    </td>
                                    <td className="p-3 font-bold text-[#23A6F0]">
                                        {/* Mock Total - Ideally pass from props */}
                                        Total
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 opacity-50">
                                    <td className="p-3 flex items-center gap-2">
                                        <input type="radio" disabled />
                                        <span>3 Installments</span>
                                    </td>
                                    <td className="p-3">Calculation...</td>
                                </tr>
                                <tr className="hover:bg-gray-50 opacity-50">
                                    <td className="p-3 flex items-center gap-2">
                                        <input type="radio" disabled />
                                        <span>6 Installments</span>
                                    </td>
                                    <td className="p-3">Calculation...</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentSection;
