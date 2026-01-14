import React from 'react';
import { useForm } from 'react-hook-form';

const CreditCardForm = ({ onSubmit, onCancel, initialData }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: initialData || {
            card_no: "",
            expire_month: "",
            expire_year: "",
            name_on_card: ""
        }
    });

    const years = Array.from({ length: 15 }, (_, i) => new Date().getFullYear() + i);
    const months = Array.from({ length: 12 }, (_, i) => i + 1);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold text-[#252B42] mb-4">
                {initialData ? "Edit Card" : "Add New Card"}
            </h3>

            <div className="space-y-4">
                {/* Card Number */}
                <div>
                    <label className="block text-sm font-bold text-[#252B42] mb-1">Card Number</label>
                    <input
                        type="text"
                        maxLength="16"
                        placeholder="1234123412341234"
                        className={`w-full p-3 bg-gray-50 border rounded outline-none focus:border-[#23A6F0] focus:ring-1 focus:ring-[#23A6F0] transition-colors ${errors.card_no ? 'border-red-500' : 'border-gray-200'}`}
                        {...register("card_no", {
                            required: "Card number is required",
                            pattern: { value: /^[0-9]{16}$/, message: "Must be 16 digits" }
                        })}
                    />
                    {errors.card_no && <span className="text-xs text-red-500">{errors.card_no.message}</span>}
                </div>

                {/* Name on Card */}
                <div>
                    <label className="block text-sm font-bold text-[#252B42] mb-1">Name on Card</label>
                    <input
                        type="text"
                        placeholder="John Doe"
                        className={`w-full p-3 bg-gray-50 border rounded outline-none focus:border-[#23A6F0] focus:ring-1 focus:ring-[#23A6F0] transition-colors ${errors.name_on_card ? 'border-red-500' : 'border-gray-200'}`}
                        {...register("name_on_card", { required: "Name on card is required" })}
                    />
                    {errors.name_on_card && <span className="text-xs text-red-500">{errors.name_on_card.message}</span>}
                </div>

                {/* Expiry Date & CVV Grid */}
                <div className="grid grid-cols-2 gap-4">
                    {/* Expiry Date */}
                    <div>
                        <label className="block text-sm font-bold text-[#252B42] mb-1">Expiration Date</label>
                        <div className="flex gap-2">
                            <select
                                className={`w-full p-3 bg-gray-50 border rounded outline-none focus:border-[#23A6F0] ${errors.expire_month ? 'border-red-500' : 'border-gray-200'}`}
                                {...register("expire_month", { required: true })}
                            >
                                <option value="">Month</option>
                                {months.map(m => (
                                    <option key={m} value={m}>{m < 10 ? `0${m}` : m}</option>
                                ))}
                            </select>
                            <select
                                className={`w-full p-3 bg-gray-50 border rounded outline-none focus:border-[#23A6F0] ${errors.expire_year ? 'border-red-500' : 'border-gray-200'}`}
                                {...register("expire_year", { required: true })}
                            >
                                <option value="">Year</option>
                                {years.map(y => (
                                    <option key={y} value={y}>{y}</option>
                                ))}
                            </select>
                        </div>
                        {(errors.expire_month || errors.expire_year) && <span className="text-xs text-red-500">Date required</span>}
                    </div>

                    {/* CVV (Visual only, usually not saved but requested in form) */}
                    <div>
                        <label className="block text-sm font-bold text-[#252B42] mb-1">CVV</label>
                        <div className="relative">
                            <input
                                type="text"
                                maxLength="3" // Common length
                                placeholder="123"
                                className="w-full p-3 bg-gray-50 border border-gray-200 rounded outline-none focus:border-[#23A6F0] focus:ring-1 focus:ring-[#23A6F0]"
                            />
                            <span className="absolute right-3 top-3 text-gray-400 text-xs">ⓘ</span>
                        </div>
                    </div>
                </div>

                {/* 3D Secure Checkbox */}
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="3dsecure" className="w-4 h-4 text-[#23A6F0] rounded border-gray-300 focus:ring-[#23A6F0]" />
                    <label htmlFor="3dsecure" className="text-sm text-[#252B42] font-bold">3D Secure ile ödemek istiyorum</label>
                </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-4 mt-6">
                <button
                    type="button"
                    onClick={onCancel}
                    className="px-6 py-3 font-bold text-[#737373] bg-gray-100 hover:bg-gray-200 rounded transition-colors"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="px-6 py-3 font-bold text-white bg-[#23A6F0] hover:bg-[#1a8cd8] rounded transition-colors shadow-md"
                >
                    Save Card
                </button>
            </div>
        </form>
    );
};

export default CreditCardForm;
