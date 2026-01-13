import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { loginUser } from '../store/actions/clientActions';

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmit = (data) => {
        dispatch(loginUser(data))
            .then(() => {
                toast.success("Welcome back!");
                history.goBack(); // Redirect to previous page
            })
            .catch((err) => {
                console.error("Login failed:", err);
                toast.error(err.response?.data?.message || "Login failed. Please check your credentials.");
            });
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow flex flex-col items-center justify-center bg-[#FAFAFA] py-10 px-4">
                <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold text-[#252B42] text-center mb-2">Login</h2>
                    <p className="text-[#737373] text-center mb-8">Welcome back! Please login to your account.</p>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                                {...register("password", { required: "Password is required" })}
                                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-[#23A6F0]"
                                placeholder="********"
                            />
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                        </div>

                        {/* Remember Me */}
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="rememberMe"
                                {...register("rememberMe")}
                                className="w-4 h-4 text-[#23A6F0] border-gray-300 rounded focus:ring-[#23A6F0]"
                            />
                            <label htmlFor="rememberMe" className="ml-2 text-[#737373] text-sm">Remember me</label>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-[#23A6F0] hover:bg-[#1a8cd8] text-white font-bold py-3 rounded transition-colors flex justify-center items-center gap-2 mt-6 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    Processing...
                                </>
                            ) : (
                                "Login"
                            )}
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default LoginPage;
