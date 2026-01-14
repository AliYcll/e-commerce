import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCards, addCard, updateCard, deleteCard } from '../../../store/actions/clientActions';
import CreditCardForm from '../../common/CreditCardForm';

const PaymentSection = () => {
    const dispatch = useDispatch();
    const { creditCards } = useSelector(state => state.client);

    // Local state
    const [selectedCardId, setSelectedCardId] = useState(null);
    const [isAddingNew, setIsAddingNew] = useState(false);
    const [editingCard, setEditingCard] = useState(null);

    // Fetch cards on mount
    useEffect(() => {
        dispatch(getCards());
    }, [dispatch]);

    // Set default selected card
    useEffect(() => {
        if (creditCards && creditCards.length > 0 && !selectedCardId) {
            setSelectedCardId(creditCards[0].id);
        }
    }, [creditCards]);

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

    return (
        <div className="animate-fade-in">
            {/* Header Tabs Mockup */}
            <div className="bg-white rounded border border-gray-200 p-4 mb-6">
                <h3 className="text-xl font-bold text-[#252B42] mb-4">Kart ile Öde</h3>
                <div className="flex gap-4 border-b border-gray-200 pb-2">
                    <button className="text-sm font-bold text-[#252B42] border-b-2 border-[#252B42] pb-2 -mb-2.5">
                        Kart ile Öde
                    </button>
                    <button className="text-sm font-bold text-[#737373] pb-2">
                        Kapıda Ödeme
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column: Cards */}
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="font-bold text-[#252B42]">Kart Bilgileri</h4>
                        <button
                            onClick={() => { setEditingCard(null); setIsAddingNew(true); }}
                            className="text-sm text-[#737373] underline hover:text-[#23A6F0]"
                        >
                            Başka bir Kart ile Ödeme Yap
                        </button>
                    </div>

                    {/* Card Scroller / Grid */}
                    <div className="space-y-4 mb-6">
                        {creditCards.map(card => (
                            <div
                                key={card.id}
                                onClick={() => setSelectedCardId(card.id)}
                                className={`p-4 border rounded cursor-pointer transition-all flex justify-between items-center ${selectedCardId === card.id
                                    ? 'border-[#23A6F0] bg-[#F3F9FE]'
                                    : 'border-gray-200 bg-white hover:border-gray-300'}`}
                            >
                                <div className="flex items-center gap-3">
                                    <input
                                        type="radio"
                                        checked={selectedCardId === card.id}
                                        onChange={() => setSelectedCardId(card.id)}
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
                                        className="text-xs font-bold text-[#23A6F0] hover:underline"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={(e) => handleDelete(card.id, e)}
                                        className="text-gray-400 hover:text-red-500"
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
                                <p className="text-[#737373] mb-2">Henüz kayıtlı kartınız yok.</p>
                                <button
                                    onClick={() => setIsAddingNew(true)}
                                    className="text-[#23A6F0] font-bold underline"
                                >
                                    Yeni Kart Ekle
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
                    <h4 className="font-bold text-[#252B42] mb-4">Taksit Seçenekleri</h4>
                    <p className="text-xs text-[#737373] mb-4">Kartınıza uygun taksit seçeneğini seçiniz</p>

                    <div className="border border-gray-200 rounded overflow-hidden">
                        <table className="w-full text-sm">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="p-3 text-left text-[#252B42]">Taksit Sayısı</th>
                                    <th className="p-3 text-left text-[#252B42]">Aylık Ödeme</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr className="hover:bg-gray-50">
                                    <td className="p-3 flex items-center gap-2">
                                        <input type="radio" checked readOnly className="text-[#23A6F0]" />
                                        <span className="font-bold text-[#23A6F0]">Tek Çekim</span>
                                    </td>
                                    <td className="p-3 font-bold text-[#23A6F0]">
                                        {/* Mock Total - Ideally pass from props */}
                                        Topl. Ödeme
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 opacity-50">
                                    <td className="p-3 flex items-center gap-2">
                                        <input type="radio" disabled />
                                        <span>3 Taksit</span>
                                    </td>
                                    <td className="p-3">Calculation...</td>
                                </tr>
                                <tr className="hover:bg-gray-50 opacity-50">
                                    <td className="p-3 flex items-center gap-2">
                                        <input type="radio" disabled />
                                        <span>6 Taksit</span>
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
