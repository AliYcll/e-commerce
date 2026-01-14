import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const AddressForm = ({ onSubmit, defaultValues, onCancel }) => {
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm({
        defaultValues: defaultValues || {
            title: "",
            name: "",
            surname: "",
            phone: "",
            city: "",
            district: "",
            neighborhood: "",
            address: ""
        }
    });

    useEffect(() => {
        if (defaultValues) {
            reset(defaultValues);
        }
    }, [defaultValues, reset]);

    const cities = ["İstanbul", "Ankara", "İzmir", "Bursa", "Antalya", "Adana", "Konya", "Gaziantep", "Şanlıurfa", "Kocaeli"]; // Mock list

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow-md border border-gray-200">
            <h3 className="text-lg font-bold text-[#252B42] mb-4">
                {defaultValues?.id ? 'Edit Address' : 'Add New Address'}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Title */}
                <div className="flex flex-col">
                    <label className="text-sm font-bold text-[#252B42] mb-1">Address Title</label>
                    <input
                        {...register("title", { required: "Address title is required" })}
                        className="border border-gray-300 rounded p-2 text-sm focus:outline-none focus:border-[#23A6F0]"
                        placeholder="e.g. Home, Office"
                    />
                    {errors.title && <span className="text-red-500 text-xs mt-1">{errors.title.message}</span>}
                </div>

                {/* Phone */}
                <div className="flex flex-col">
                    <label className="text-sm font-bold text-[#252B42] mb-1">Phone</label>
                    <input
                        {...register("phone", {
                            required: "Phone is required",
                            pattern: {
                                value: /^(\+90|0)?\d{10}$/,
                                message: "Invalid phone number"
                            }
                        })}
                        className="border border-gray-300 rounded p-2 text-sm focus:outline-none focus:border-[#23A6F0]"
                        placeholder="05XXXXXXXXX"
                    />
                    {errors.phone && <span className="text-red-500 text-xs mt-1">{errors.phone.message}</span>}
                </div>

                {/* Name */}
                <div className="flex flex-col">
                    <label className="text-sm font-bold text-[#252B42] mb-1">Name</label>
                    <input
                        {...register("name", { required: "Name is required" })}
                        className="border border-gray-300 rounded p-2 text-sm focus:outline-none focus:border-[#23A6F0]"
                    />
                    {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
                </div>

                {/* Surname */}
                <div className="flex flex-col">
                    <label className="text-sm font-bold text-[#252B42] mb-1">Surname</label>
                    <input
                        {...register("surname", { required: "Surname is required" })}
                        className="border border-gray-300 rounded p-2 text-sm focus:outline-none focus:border-[#23A6F0]"
                    />
                    {errors.surname && <span className="text-red-500 text-xs mt-1">{errors.surname.message}</span>}
                </div>

                {/* City */}
                <div className="flex flex-col">
                    <label className="text-sm font-bold text-[#252B42] mb-1">City</label>
                    <select
                        {...register("city", { required: "City is required" })}
                        className="border border-gray-300 rounded p-2 text-sm focus:outline-none focus:border-[#23A6F0]"
                    >
                        <option value="">Select City</option>
                        {cities.map(city => (
                            <option key={city} value={city}>{city}</option>
                        ))}
                    </select>
                    {errors.city && <span className="text-red-500 text-xs mt-1">{errors.city.message}</span>}
                </div>

                {/* District */}
                <div className="flex flex-col">
                    <label className="text-sm font-bold text-[#252B42] mb-1">District</label>
                    <input
                        {...register("district", { required: "District is required" })}
                        className="border border-gray-300 rounded p-2 text-sm focus:outline-none focus:border-[#23A6F0]"
                    />
                    {errors.district && <span className="text-red-500 text-xs mt-1">{errors.district.message}</span>}
                </div>

                {/* Neighborhood */}
                <div className="flex flex-col md:col-span-2">
                    <label className="text-sm font-bold text-[#252B42] mb-1">Neighborhood</label>
                    <input
                        {...register("neighborhood", { required: "Neighborhood is required" })}
                        className="border border-gray-300 rounded p-2 text-sm focus:outline-none focus:border-[#23A6F0]"
                    />
                    {errors.neighborhood && <span className="text-red-500 text-xs mt-1">{errors.neighborhood.message}</span>}
                </div>

                {/* Address Details */}
                <div className="flex flex-col md:col-span-2">
                    <label className="text-sm font-bold text-[#252B42] mb-1">Address Details</label>
                    <textarea
                        {...register("address", { required: "Address detail is required" })}
                        className="border border-gray-300 rounded p-2 text-sm focus:outline-none focus:border-[#23A6F0] min-h-[80px]"
                        placeholder="Street, building no, door no..."
                    />
                    {errors.address && <span className="text-red-500 text-xs mt-1">{errors.address.message}</span>}
                </div>
            </div>

            <div className="flex justify-end gap-2">
                {onCancel && (
                    <button
                        type="button"
                        onClick={onCancel}
                        className="px-4 py-2 text-[#737373] hover:bg-gray-100 rounded text-sm font-bold"
                    >
                        Cancel
                    </button>
                )}
                <button
                    type="submit"
                    className="px-6 py-2 bg-[#23A6F0] text-white rounded hover:bg-[#1a8cd8] transition text-sm font-bold"
                >
                    Save Address
                </button>
            </div>
        </form>
    );
};

export default AddressForm;
