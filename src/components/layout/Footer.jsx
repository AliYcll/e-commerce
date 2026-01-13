import React from 'react';
import footerFacebookIcon from '../../assets/icons/footer/footer-facebook.png';
import footerInstagramIcon from '../../assets/icons/footer/footer-instagram.png';
import footerTwitterIcon from '../../assets/icons/footer/footer-twitter.png';

const Footer = () => {
    return (
        <footer className="bg-white">
            {/* Footer Top */}
            <div className="w-full bg-[#FAFAFA] py-10">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <h3 className="text-2xl font-bold text-[#252B42]">Bandage</h3>
                    <div className="flex gap-4 text-[#23A6F0]">
                        <img src={footerFacebookIcon} alt="Facebook" className="cursor-pointer" />
                        <img src={footerInstagramIcon} alt="Instagram" className="cursor-pointer" />
                        <img src={footerTwitterIcon} alt="Twitter" className="cursor-pointer" />
                    </div>
                </div>
            </div>

            {/* Footer Links Section */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 my-4 md:grid-cols-2 lg:grid-cols-6 gap-8">
                    {/* Columns */}
                    <div className="flex flex-col gap-4">
                        <h5 className="font-bold text-[#252B42]">Company Info</h5>
                        <a href="#" className="text-[#737373] text-sm font-bold hover:text-[#23A6F0]">About Us</a>
                        <a href="#" className="text-[#737373] text-sm font-bold hover:text-[#23A6F0]">Carrier</a>
                        <a href="#" className="text-[#737373] text-sm font-bold hover:text-[#23A6F0]">We are hiring</a>
                        <a href="#" className="text-[#737373] text-sm font-bold hover:text-[#23A6F0]">Blog</a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h5 className="font-bold text-[#252B42]">Legal</h5>
                        <a href="#" className="text-[#737373] text-sm font-bold hover:text-[#23A6F0]">About Us</a>
                        <a href="#" className="text-[#737373] text-sm font-bold hover:text-[#23A6F0]">Carrier</a>
                        <a href="#" className="text-[#737373] text-sm font-bold hover:text-[#23A6F0]">We are hiring</a>
                        <a href="#" className="text-[#737373] text-sm font-bold hover:text-[#23A6F0]">Blog</a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h5 className="font-bold text-[#252B42]">Features</h5>
                        <a href="#" className="text-[#737373] text-sm font-bold hover:text-[#23A6F0]">Business Marketing</a>
                        <a href="#" className="text-[#737373] text-sm font-bold hover:text-[#23A6F0]">User Analytic</a>
                        <a href="#" className="text-[#737373] text-sm font-bold hover:text-[#23A6F0]">Live Chat</a>
                        <a href="#" className="text-[#737373] text-sm font-bold hover:text-[#23A6F0]">Unlimited Support</a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h5 className="font-bold text-[#252B42]">Resources</h5>
                        <a href="#" className="text-[#737373] text-sm font-bold hover:text-[#23A6F0]">IOS & Android</a>
                        <a href="#" className="text-[#737373] text-sm font-bold hover:text-[#23A6F0]">Watch a Demo</a>
                        <a href="#" className="text-[#737373] text-sm font-bold hover:text-[#23A6F0]">Customers</a>
                        <a href="#" className="text-[#737373] text-sm font-bold hover:text-[#23A6F0]">API</a>
                    </div>
                    <div className="flex flex-col gap-4 md:col-span-2 lg:col-span-2">
                        <h5 className="font-bold text-[#252B42]">Get In Touch</h5>
                        <div className="flex w-full max-w-[350px] md:max-w-[450px] lg:max-w-none">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="border border-[#E6E6E6] bg-[#F9F9F9] p-3 rounded-l-md w-full focus:outline-none"
                            />
                            <button className="bg-[#23A6F0] text-white px-4 py-3 rounded-r-md">Subscribe</button>
                        </div>
                        <p className="text-[#737373] text-xs">Lore imp sum dolor Amit.</p>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="bg-[#FAFAFA] py-6">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <p className="text-[#737373] font-bold text-sm text-center md:text-left w-[60%] md:w-full mx-auto md:mx-0">
                        Made With Love By Finland All Right Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
