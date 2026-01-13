import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import heroBg from '../assets/images/contact/hero-bg.png';
import heroBgMobile from '../assets/images/contact/hero-bg-mobile.png';
import phoneIcon from '../assets/icons/contact/phone.png';
import locationIcon from '../assets/icons/contact/location.png';
import emailIcon from '../assets/icons/contact/email.png';
import twitterIcon from '../assets/icons/contact/contact-twitter.png';
import facebookIcon from '../assets/icons/contact/contact-facebook.png';
import instagramIcon from '../assets/icons/contact/contact-instagram.png';
import linkedinIcon from '../assets/icons/contact/contact-linkedin.png';
import { ArrowLeft, ArrowRight } from 'lucide-react'; // Assuming we can use lucide for the arrow, or I'll just use text if not available. User said "Arrow 2" in CSS.

const ContactPage = () => {
    return (
        <div className="font-sans">
            <Header />

            {/* Hero Section */}
            <section className="relative w-full md:h-screen flex items-center bg-white overflow-hidden">
                {/* Desktop Background Layer (Hidden on mobile) */}
                <div
                    className="absolute inset-0 bg-center bg-no-repeat hidden md:block z-0 bg-[length:100%] min-[1660px]:bg-[length:85%]"
                    style={{
                        backgroundImage: `url(${heroBg})`
                    }}
                />

                <div className="container mx-auto px-4 py-10 md:py-0 relative z-10">
                    <div className="w-full md:w-1/2 flex flex-col gap-8 items-center text-center md:items-start md:text-left bg-white/90 md:bg-transparent p-6 rounded-lg">
                        <h5 className="font-bold text-base text-[#252B42] mt-8">CONTACT US</h5>
                        <h1 className="text-4xl md:text-[58px] font-bold text-[#252B42] leading-tight">Get in touch <br />today!</h1>
                        <p className="text-[#737373] text-xl max-w-sm">
                            We know how large objects will act, but things on a small scale
                        </p>
                        <div className="text-[#252B42] font-bold text-xl">
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

                    {/* Mobile Image Block */}
                    <div className="w-full md:hidden mt-8 flex justify-center -mx-4 w-[calc(100%+2rem)]">
                        <img src={heroBgMobile} alt="Family Shopping" className="w-full h-auto object-cover" />
                    </div>
                </div>
            </section>

            {/* Visit Office Cards */}
            <section className="bg-[#F9F9F9] py-20">
                <div className="container mx-auto px-4 text-center section-container">
                    <h6 className="font-bold text-[#252B42] text-sm mb-2">VISIT OUR OFFICE</h6>
                    <h2 className="text-4xl font-bold text-[#252B42] max-w-xl mx-auto mb-16">
                        We help small businesses with big ideas
                    </h2>

                    <div className="grid md:grid-cols-3 justify-center items-center">
                        {/* Phone Card (Light) */}
                        <div className="bg-white p-10 flex flex-col items-center gap-4 py-16 w-full h-full hover:shadow-lg transition-shadow">
                            <img src={phoneIcon} alt="Phone" className="w-[72px] h-[72px] object-contain mb-2" />
                            <div className="text-[#252B42] font-bold text-sm">
                                <p>georgia.young@example.com</p>
                                <p>georgia.young@ple.com</p>
                            </div>
                            <h5 className="font-bold text-[#252B42] text-base mt-2">Get Support</h5>
                            <button className="text-[#23A6F0] border border-[#23A6F0] rounded-full px-6 py-3 font-bold text-sm mt-2 hover:bg-[#23A6F0] hover:text-white transition">
                                Submit Request
                            </button>
                        </div>

                        {/* Location Card (Dark) - Scaled up slightly to mimic the "middle card pop" effect if desired, or just same size but dark */}
                        <div className="bg-[#252B42] p-10 flex flex-col items-center gap-4 py-20 w-full h-full shadow-xl transform md:scale-105 z-10">
                            <img src={locationIcon} alt="Location" className="w-[72px] h-[72px] object-contain mb-2" />
                            <div className="text-white font-bold text-sm">
                                <p>georgia.young@example.com</p>
                                <p>georgia.young@ple.com</p>
                            </div>
                            <h5 className="font-bold text-white text-base mt-2">Get Support</h5>
                            <button className="text-[#23A6F0] border border-[#23A6F0] rounded-full px-6 py-3 font-bold text-sm mt-2 hover:bg-[#23A6F0] hover:text-white transition">
                                Submit Request
                            </button>
                        </div>

                        {/* Email Card (Light) */}
                        <div className="bg-white p-10 flex flex-col items-center gap-4 py-16 w-full h-full hover:shadow-lg transition-shadow">
                            <img src={emailIcon} alt="Email" className="w-[72px] h-[72px] object-contain mb-2" />
                            <div className="text-[#252B42] font-bold text-sm">
                                <p>georgia.young@example.com</p>
                                <p>georgia.young@ple.com</p>
                            </div>
                            <h5 className="font-bold text-[#252B42] text-base mt-2">Get Support</h5>
                            <button className="text-[#23A6F0] border border-[#23A6F0] rounded-full px-6 py-3 font-bold text-sm mt-2 hover:bg-[#23A6F0] hover:text-white transition">
                                Submit Request
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Arrow CTA */}
            <section className="py-20 text-center relative bg-white">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {/* Using an SVG for curved arrow as placeholder, or if user has one. The user only gave phone/loc/mail icons.
                     I will use a simple arrow SVG. */}
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#23A6F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
                </div>
                <h5 className="font-bold text-[#252B42] text-base tracking-wider mb-4">WE Can't WAIT TO MEET YOU</h5>
                <h2 className="text-4xl md:text-[58px] font-bold text-[#252B42] mb-8">Let's Talk</h2>
                <button className="bg-[#23A6F0] text-white font-bold py-4 px-10 rounded-[5px] hover:bg-[#1a8cd8] transition text-sm">
                    Try it free now
                </button>
            </section>

            <Footer />
        </div>
    );
};

export default ContactPage;
