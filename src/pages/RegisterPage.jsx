import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import axiosInstance from '../api/axiosInstance';
import { toast } from 'react-toastify';

const RegisterPage = () => {
    const { register, handleSubmit, watch, setValue, formState: { errors, isValid, isSubmitting } } = useForm({
        mode: 'all',
        defaultValues: {
            role_id: '3' // Fallback
        }
    });

    const [roles, setRoles] = useState([]);
    const history = useHistory();
    const selectedRoleId = watch('role_id');

    // Fetch Roles
    useEffect(() => {
        axiosInstance.get('/roles')
            .then(res => {
                setRoles(res.data);
                // Set default to Customer
                const customerRole = res.data.find(r => r.code === 'customer');
                if (customerRole) {
                    setValue('role_id', customerRole.id);
                }
            })
            .catch(err => {
                console.error("Error fetching roles:", err);
                toast.error("Roles could not be loaded.");
            });
    }, []);

    const onSubmit = (data) => {
        let payload = {
            name: data.name,
            email: data.email,
            password: data.password,
            role_id: data.role_id
        };

        // If Store is selected (assuming store code is 'store' or checking specific ID)
        const selectedRole = roles.find(r => r.id == data.role_id);
        if (selectedRole?.code === 'store') {
            payload.store = {
                name: data.store_name,
                phone: data.store_phone,
                tax_no: data.store_tax_no,
                bank_account: data.store_bank_account
            };
        }

        axiosInstance.post('/signup', payload)
            .then(res => {
                toast.success("You need to click link in email to activate your account!");
                history.goBack();
            })
            .catch(err => {
                console.error("Signup error:", err);
                toast.error(err.response?.data?.message || "Registration failed. Please try again.");
            });
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow flex flex-col items-center justify-center bg-[#FAFAFA] py-10 px-4">
                <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold text-[#252B42] text-center mb-2">Sign Up</h2>
                    <p className="text-[#737373] text-center mb-8">Enter your details to create your account</p>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        {/* Name */}
                        <div>
                            <label className="block text-[#252B42] font-semibold mb-1">Name</label>
                            <input
                                {...register("name", { required: "Name is required", minLength: { value: 3, message: "Name must be at least 3 characters" } })}
                                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-[#23A6F0]"
                                placeholder="Full Name"
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-[#252B42] font-semibold mb-1">Email</label>
                            <input
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                                })}
                                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-[#23A6F0]"
                                placeholder="user@example.com"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-[#252B42] font-semibold mb-1">Password</label>
                            <input
                                type="password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 8, message: "Min 8 chars" },
                                    validate: {
                                        hasNumber: value => /\d/.test(value) || "Must include a number",
                                        hasLower: value => /[a-z]/.test(value) || "Must include lowercase",
                                        hasUpper: value => /[A-Z]/.test(value) || "Must include uppercase",
                                        hasSpecial: value => /[!@#$%^&*(),.?":{}|<>]/.test(value) || "Must include special char"
                                    }
                                })}
                                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-[#23A6F0]"
                                placeholder="********"
                            />
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-[#252B42] font-semibold mb-1">Confirm Password</label>
                            <input
                                type="password"
                                {...register("confirm_password", {
                                    required: "Confirm Password is required",
                                    validate: (val, allValues) => val === allValues.password || "Passwords do not match"
                                })}
                                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-[#23A6F0]"
                                placeholder="********"
                            />
                            {errors.confirm_password && <p className="text-red-500 text-sm mt-1">{errors.confirm_password.message}</p>}
                        </div>

                        {/* Role Selection */}
                        <div>
                            <label className="block text-[#252B42] font-semibold mb-1">Role</label>
                            <select
                                {...register("role_id", { required: "Role is required" })}
                                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-[#23A6F0]"
                                defaultValue="3" // Default to Customer (assuming ID 3)
                            >
                                {roles.map(role => (
                                    <option key={role.id} value={role.id}>{role.name} ({role.code})</option>
                                ))}
                            </select>
                        </div>

                        {/* Store Fields (Conditional) */}
                        {roles.find(r => r.id == selectedRoleId)?.code === 'store' && (
                            <div className="border-t pt-4 mt-4 space-y-4 animate-in fade-in slide-in-from-top-2">
                                <h3 className="font-bold text-[#23A6F0]">Store Information</h3>

                                <div>
                                    <label className="block text-[#252B42] font-semibold mb-1">Store Name</label>
                                    <input
                                        {...register("store_name", { required: "Store name is required", minLength: { value: 3, message: "Min 3 chars" } })}
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-[#23A6F0]"
                                        placeholder="My Store"
                                    />
                                    {errors.store_name && <p className="text-red-500 text-sm mt-1">{errors.store_name.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-[#252B42] font-semibold mb-1">Store Phone</label>
                                    <input
                                        {...register("store_phone", {
                                            required: "Store phone is required",
                                            pattern: { value: /^(\+90|0)?5\d{9}$/, message: "Valid TR phone required (+905...)" }
                                        })}
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-[#23A6F0]"
                                        placeholder="+90 5XX XXX XX XX"
                                    />
                                    {errors.store_phone && <p className="text-red-500 text-sm mt-1">{errors.store_phone.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-[#252B42] font-semibold mb-1">Store Tax ID</label>
                                    <input
                                        {...register("store_tax_no", {
                                            required: "Tax ID is required",
                                            pattern: { value: /^T\d{4}V\d{6}$/, message: "Format: TXXXXVXXXXXX" }
                                        })}
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-[#23A6F0]"
                                        placeholder="T1234V123456"
                                    />
                                    {errors.store_tax_no && <p className="text-red-500 text-sm mt-1">{errors.store_tax_no.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-[#252B42] font-semibold mb-1">IBAN</label>
                                    <input
                                        {...register("store_bank_account", {
                                            required: "IBAN is required",
                                            pattern: { value: /^TR\d{24}$/, message: "Valid TR IBAN required (TR...)" }
                                        })}
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-[#23A6F0]"
                                        placeholder="TR..."
                                    />
                                    {errors.store_bank_account && <p className="text-red-500 text-sm mt-1">{errors.store_bank_account.message}</p>}
                                </div>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting} // Disable while submitting (even if invalid logic handled by handle form, but isSubmitting is key)
                            className="w-full bg-[#23A6F0] hover:bg-[#1a8cd8] text-white font-bold py-3 rounded transition-colors flex justify-center items-center gap-2 mt-6 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    Processing...
                                </>
                            ) : (
                                "Submit"
                            )}
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default RegisterPage;
