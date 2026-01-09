import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import contactHero from '../assets/images/contact/contact-hero.png';
import twitterIcon from '../assets/icons/contact/contact-twitter.png';
import facebookIcon from '../assets/icons/contact/contact-facebook.png';
import instagramIcon from '../assets/icons/contact/contact-instagram.png';
import linkedinIcon from '../assets/icons/contact/contact-linkedin.png';

const ContactPage = () => {
    return (
        <div className="font-sans">
            <Header />

            {/* Hero Section */}
            <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2 flex flex-col gap-6 items-center text-center md:items-start md:text-left">
                    <h5 className="font-bold text-xl mt-8">CONTACT US</h5>
                    <h1 className="text-5xl font-bold text-primary leading-tight">Get in touch <br />today!</h1>
                    <p className="text-text-gray text-xl max-w-sm">
                        We know how large objects will act, but things on a small scale
                    </p>
                    <div className="text-primary font-bold text-xl">
                        Phone: +451 215 215
                        <br />
                        Fax: +451 215 215
                    </div>
                    <div className="flex gap-[34px] p-[10px]">
                        <img src={twitterIcon} alt="Twitter" className="w-[30px] h-auto hover:opacity-80 transition-opacity cursor-pointer" />
                        <img src={facebookIcon} alt="Facebook" className="w-[30px] h-auto hover:opacity-80 transition-opacity cursor-pointer" />
                        <img src={instagramIcon} alt="Instagram" className="w-[30px] h-auto hover:opacity-80 transition-opacity cursor-pointer" />
                        <img src={linkedinIcon} alt="LinkedIn" className="w-[30px] h-auto hover:opacity-80 transition-opacity cursor-pointer" />
                    </div>
                </div>
                <div className="md:w-1/2 relative">
                    {/* Image Placeholder */}
                    <div className="bg-[#FFE9EA] rounded-full w-[400px] h-[400px] absolute top-10 right-10 -z-10"></div>
                    <img src={contactHero} alt="Family" className="relative z-10 rounded-lg object-cover w-[500px] h-[500px]" />
                </div>
            </section>

            {/* Visit Office Cards */}
            <section className="bg-light-bg py-20">
                <div className="container mx-auto px-4 text-center">
                    <h6 className="font-bold text-primary mb-2">VISIT OUR OFFICE</h6>
                    <h2 className="text-4xl font-bold text-primary max-w-xl mx-auto mb-16">
                        We help small businesses with big ideas
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Phone Card */}
                        <div className="bg-white p-10 flex flex-col items-center gap-4 py-20 hover:scale-105 transition-transform">
                            <div className="text-secondary mb-4">
                                {/* Icon placeholder */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </div>
                            <h6 className="font-bold text-primary">georgia.young@example.com</h6>
                            <h6 className="font-bold text-primary">georgia.young@ple.com</h6>
                            <h5 className="font-bold text-primary mt-2">Get Support</h5>
                            <button className="text-secondary border border-secondary rounded-full px-6 py-3 font-bold mt-2 hover:bg-secondary hover:text-white transition">
                                Submit Request
                            </button>
                        </div>

                        {/* Map Card - Dark */}
                        <div className="bg-primary text-white p-10 flex flex-col items-center gap-4 py-20 scale-105 shadow-xl">
                            <div className="text-secondary mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3" /><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z" /></svg>
                            </div>
                            <h6 className="font-bold">georgia.young@example.com</h6>
                            <h6 className="font-bold">georgia.young@ple.com</h6>
                            <h5 className="font-bold mt-2">Get Support</h5>
                            <button className="text-secondary border border-secondary rounded-full px-6 py-3 font-bold mt-2 hover:bg-secondary hover:text-white transition">
                                Submit Request
                            </button>
                        </div>

                        {/* Email Card */}
                        <div className="bg-white p-10 flex flex-col items-center gap-4 py-20 hover:scale-105 transition-transform">
                            <div className="text-secondary mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                            </div>
                            <h6 className="font-bold text-primary">georgia.young@example.com</h6>
                            <h6 className="font-bold text-primary">georgia.young@ple.com</h6>
                            <h5 className="font-bold text-primary mt-2">Get Support</h5>
                            <button className="text-secondary border border-secondary rounded-full px-6 py-3 font-bold mt-2 hover:bg-secondary hover:text-white transition">
                                Submit Request
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Arrow CTA */}
            <section className="py-20 text-center relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-secondary">
                    {/* Curved Arrow SVG placeholder */}
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
                </div>
                <h5 className="font-bold text-primary">WE Can't WAIT TO MEET YOU</h5>
                <h2 className="text-5xl font-bold text-primary my-8">Let's Talk</h2>
                <button className="bg-secondary text-white font-bold py-4 px-12 rounded-[5px] hover:bg-[#1a8cd8] transition">
                    Try it free now
                </button>
            </section>

            <Footer />
        </div>
    );
};

export default ContactPage;
