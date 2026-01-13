import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { ChevronRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import hooli from '../assets/icons/brands/hooli.png';
import lyft from '../assets/icons/brands/lyft.png';
import brand3 from '../assets/icons/brands/brand-3.png';
import stripe from '../assets/icons/brands/stripe.png';
import aws from '../assets/icons/brands/aws.png';
import reddit from '../assets/icons/brands/reddit.png';
import ctaTwitter from '../assets/icons/cta/cta-twitter.png';
import ctaFacebook from '../assets/icons/cta/cta-facebook.png';
import ctaInstagram from '../assets/icons/cta/cta-instagram.png';
import ctaLinkedin from '../assets/icons/cta/cta-linkedin.png';

const PricingPage = () => {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <div className="font-sans">
            <Header />

            {/* Header / Breadcrumb Section */}
            <section className="container mx-auto px-4 py-12 text-center">
                <h5 className="font-bold text-xl text-text-gray mb-6 mt-12">PRICING</h5>
                <h1 className="text-6xl font-bold text-primary mb-6">Simple Pricing</h1>
                <div className="flex justify-center items-center gap-4 text-sm mb-20 font-bold">
                    <Link to="/" className="text-primary">Home</Link>
                    <ChevronRight size={16} className="text-text-muted" />
                    <span className="text-text-gray">Pricing</span>
                </div>
            </section>

            {/* Pricing Toggle */}
            <section className="bg-light-bg py-16">
                <div className="container mx-auto px-4 flex flex-col items-center">
                    <h2 className="text-4xl font-bold text-primary text-center mb-4">Pricing</h2>
                    <p className="text-text-gray text-center max-w-lg mb-12">
                        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                    </p>

                    <div className="flex items-center gap-4 mb-16">
                        <span className={`font-bold ${!isYearly ? 'text-primary' : 'text-text-gray'}`}>Monthly</span>
                        <div
                            className="relative w-12 h-6 rounded-full border border-secondary cursor-pointer"
                            onClick={() => setIsYearly(!isYearly)}
                        >
                            <div className={`absolute top-1 w-4 h-4 rounded-full bg-[#E7E7E7] shadow-md transition-all duration-300 ${isYearly ? 'left-7 bg-secondary' : 'left-1 bg-primary'}`}></div>
                        </div>
                        <span className={`font-bold ${isYearly ? 'text-primary' : 'text-text-gray'}`}>Yearly</span>
                        <span className="bg-[#B2E3FF] text-secondary px-4 py-2 rounded-full font-bold text-xs">Save 25%</span>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid md:grid-cols-3 items-center gap-0 w-full max-w-5xl">
                        {/* Free */}
                        <div className="bg-white border border-secondary rounded-lg p-10 flex flex-col items-center gap-8 shadow-sm z-0">
                            <h3 className="font-bold text-2xl text-primary">FREE</h3>
                            <h5 className="font-bold text-text-gray w-2/3 text-center">Organize across all apps by hand</h5>
                            <div className="flex items-start text-secondary">
                                <span className="text-4xl font-bold">0</span>
                                <div className="flex flex-col ml-2">
                                    <span className="text-2xl font-bold">$</span>
                                    <span className="text-sm text-[#8EC2F2]">Per Month</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 w-full">
                                <div className="flex items-center gap-3"><span className="bg-success rounded-full p-1"><Check size={12} color="white" /></span> <span className="text-primary font-bold">Unlimited product updates</span></div>
                                <div className="flex items-center gap-3"><span className="bg-success rounded-full p-1"><Check size={12} color="white" /></span> <span className="text-primary font-bold">Unlimited product updates</span></div>
                                <div className="flex items-center gap-3"><span className="bg-success rounded-full p-1"><Check size={12} color="white" /></span> <span className="text-primary font-bold">Unlimited product updates</span></div>
                                <div className="flex items-center gap-3"><span className="bg-text-muted rounded-full p-1"><Check size={12} color="white" /></span> <span className="text-primary font-bold">1GB Cloud storage</span></div>
                                <div className="flex items-center gap-3"><span className="bg-text-muted rounded-full p-1"><Check size={12} color="white" /></span> <span className="text-primary font-bold">Email and community support</span></div>
                            </div>
                            <button className="bg-primary text-white py-4 w-full rounded-[5px] font-bold">Try for free</button>
                        </div>

                        {/* Standard (Featured) */}
                        <div className="bg-primary text-white border border-primary rounded-lg p-10 flex flex-col items-center gap-8 py-16 transform scale-105 z-10 shadow-xl relative">
                            {/* New Ribbon or similar could go here */}
                            <h3 className="font-bold text-2xl">STANDARD</h3>
                            <h5 className="font-bold text-white w-2/3 text-center">Organize across all apps by hand</h5>
                            <div className="flex items-start text-secondary">
                                <span className="text-4xl font-bold">9.99</span>
                                <div className="flex flex-col ml-2">
                                    <span className="text-2xl font-bold">$</span>
                                    <span className="text-sm text-[#8EC2F2]">Per Month</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 w-full">
                                <div className="flex items-center gap-3"><span className="bg-success rounded-full p-1"><Check size={12} color="white" /></span> <span className="font-bold">Unlimited product updates</span></div>
                                <div className="flex items-center gap-3"><span className="bg-success rounded-full p-1"><Check size={12} color="white" /></span> <span className="font-bold">Unlimited product updates</span></div>
                                <div className="flex items-center gap-3"><span className="bg-success rounded-full p-1"><Check size={12} color="white" /></span> <span className="font-bold">Unlimited product updates</span></div>
                                <div className="flex items-center gap-3"><span className="bg-text-muted rounded-full p-1"><Check size={12} color="white" /></span> <span className="font-bold">1GB Cloud storage</span></div>
                                <div className="flex items-center gap-3"><span className="bg-text-muted rounded-full p-1"><Check size={12} color="white" /></span> <span className="font-bold">Email and community support</span></div>
                            </div>
                            <button className="bg-secondary text-white py-4 w-full rounded-[5px] font-bold">Try for free</button>
                        </div>

                        {/* Premium */}
                        <div className="bg-white border border-secondary rounded-lg p-10 flex flex-col items-center gap-8 shadow-sm z-0">
                            <h3 className="font-bold text-2xl text-primary">PREMIUM</h3>
                            <h5 className="font-bold text-text-gray w-2/3 text-center">Organize across all apps by hand</h5>
                            <div className="flex items-start text-secondary">
                                <span className="text-4xl font-bold">19.99</span>
                                <div className="flex flex-col ml-2">
                                    <span className="text-2xl font-bold">$</span>
                                    <span className="text-sm text-[#8EC2F2]">Per Month</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 w-full">
                                <div className="flex items-center gap-3"><span className="bg-success rounded-full p-1"><Check size={12} color="white" /></span> <span className="text-primary font-bold">Unlimited product updates</span></div>
                                <div className="flex items-center gap-3"><span className="bg-success rounded-full p-1"><Check size={12} color="white" /></span> <span className="text-primary font-bold">Unlimited product updates</span></div>
                                <div className="flex items-center gap-3"><span className="bg-success rounded-full p-1"><Check size={12} color="white" /></span> <span className="text-primary font-bold">Unlimited product updates</span></div>
                                <div className="flex items-center gap-3"><span className="bg-text-muted rounded-full p-1"><Check size={12} color="white" /></span> <span className="text-primary font-bold">1GB Cloud storage</span></div>
                                <div className="flex items-center gap-3"><span className="bg-text-muted rounded-full p-1"><Check size={12} color="white" /></span> <span className="text-primary font-bold">Email and community support</span></div>
                            </div>
                            <button className="bg-primary text-white py-4 w-full rounded-[5px] font-bold">Try for free</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted Companies */}
            <section className="bg-light-bg pb-20">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-text-black font-medium text-xl py-8 mb-8">Trusted By Over 4000 Big Companies</p>
                    <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 grayscale opacity-70 px-4 md:px-12">
                        <img src={hooli} alt="Hooli" className="h-10 w-auto object-contain" />
                        <img src={lyft} alt="Lyft" className="h-10 w-auto object-contain" />
                        <img src={brand3} alt="Brand" className="h-10 w-auto object-contain" />
                        <img src={stripe} alt="Stripe" className="h-10 w-auto object-contain" />
                        <img src={aws} alt="AWS" className="h-10 w-auto object-contain" />
                        <img src={reddit} alt="Reddit" className="h-10 w-auto object-contain" />
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-primary mb-4">Pricing FAQs</h2>
                        <p className="text-text-gray max-w-lg mx-auto">
                            Problems trying to resolve the conflict between the two major realms of Classical physics
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="flex gap-4">
                                <ChevronRight className="text-secondary min-w-[24px]" />
                                <div>
                                    <h5 className="font-bold text-primary mb-2">the quick fox jumps over the lazy dog</h5>
                                    <p className="text-text-gray text-sm leading-relaxed">
                                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-20">
                        <p className="text-text-gray mb-2">Haven't got your answer?</p>
                        <h4 className="font-bold text-primary text-xl mb-4">Contact our support</h4>
                    </div>
                </div>
            </section>

            {/* Trial CTA */}
            <section className="bg-white py-20 text-center">
                <h2 className="text-4xl font-bold text-primary mb-6">Start your 14 days free trial</h2>
                <p className="text-text-gray max-w-sm mx-auto mb-8">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
                </p>
                <button className="bg-secondary text-white font-bold py-4 px-10 rounded-[5px]">Try it free now</button>
                <div className="flex justify-center gap-8 mt-8 p-4 items-center">
                    <img src={ctaTwitter} alt="Twitter" className="w-[30px] h-auto hover:opacity-80 transition-opacity cursor-pointer" />
                    <img src={ctaFacebook} alt="Facebook" className="w-[30px] h-auto hover:opacity-80 transition-opacity cursor-pointer" />
                    <img src={ctaInstagram} alt="Instagram" className="w-[30px] h-auto hover:opacity-80 transition-opacity cursor-pointer" />
                    <img src={ctaLinkedin} alt="LinkedIn" className="w-[30px] h-auto hover:opacity-80 transition-opacity cursor-pointer" />
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PricingPage;
