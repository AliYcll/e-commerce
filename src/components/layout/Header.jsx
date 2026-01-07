import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Keeping Menu/X for mobile toggle

// Top Bar Icons
import phoneIcon from '../../assets/icons/top-header-phone.png';
import mailIcon from '../../assets/icons/top-header-mail.png';
import instagramIcon from '../../assets/icons/social-instagram.png';
import youtubeIcon from '../../assets/icons/social-youtube.png';
import facebookIcon from '../../assets/icons/social-facebook.png';
import twitterIcon from '../../assets/icons/social-twitter.png';

// Navbar Icons
import navUserIcon from '../../assets/icons/nav-user.png';
import navSearchIcon from '../../assets/icons/nav-search.png';
import navCartIcon from '../../assets/icons/nav-cart.png';
import navHeartIcon from '../../assets/icons/nav-heart.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="font-sans">
            {/* Top Bar - Dark Background - #252B42 */}
            {/* Height approx 58px based on CSS, desktop only */}
            <div className="bg-[#252B42] text-white hidden lg:block">
                <div className="container mx-auto px-4 h-[58px] flex justify-between items-center text-sm font-bold">
                    {/* Contact Info */}
                    <div className="flex items-center gap-[30px]"> {/* gap-30px from css */}
                        <div className="flex items-center gap-[5px]">
                            <img src={phoneIcon} alt="phone" />
                            <span>(225) 555-0118</span>
                        </div>
                        <div className="flex items-center gap-[5px]">
                            <img src={mailIcon} alt="mail" />
                            <span>michelle.rivera@example.com</span>
                        </div>
                    </div>

                    {/* Promo Message */}
                    <div className="font-bold">
                        Follow Us and get a chance to win 80% off
                    </div>

                    {/* Social Media */}
                    <div className="flex items-center gap-[10px]">
                        <span>Follow Us:</span>
                        <div className="flex items-center gap-[5px] p-[5px]">
                            <img src={instagramIcon} alt="instagram" className="cursor-pointer" />
                            <img src={youtubeIcon} alt="youtube" className="cursor-pointer" />
                            <img src={facebookIcon} alt="facebook" className="cursor-pointer" />
                            <img src={twitterIcon} alt="twitter" className="cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Navbar - White Background */}
            <div className="bg-white">
                <div className="container mx-auto px-4 h-[90px] flex justify-between items-center">
                    {/* Brand */}
                    <Link to="/" className="text-xl lg:text-2xl font-bold text-[#252B42]">
                        Bandage
                    </Link>

                    {/* Desktop Menu - Center */}
                    <nav className="hidden md:flex items-center gap-2 lg:gap-6 text-[#737373] font-bold text-xs lg:text-[14px]">
                        <Link to="/" className="hover:text-[#252B42]">Home</Link>

                        {/* Shop Dropdown */}
                        <div className="relative group">
                            <Link to="/shop" className="hover:text-[#252B42] flex items-center gap-2 py-4 font-medium text-[#252B42]">
                                Shop
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                                    <path d="M1 1L5 5L9 1" stroke="#252B42" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>

                            {/* Dropdown Content */}
                            {/* Dropdown Content - Mega Menu Style */}
                            <div className="absolute top-full left-0 bg-[#FAFAFA] text-[#737373] shadow-lg rounded-sm py-6 px-8 min-w-[500px] z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-[20px]">
                                <div className="flex gap-[60px]">
                                    {/* Women Column */}
                                    <div className="flex flex-col gap-3 text-left w-1/2">
                                        <h5 className="text-[#252B42] text-lg font-bold mb-2">Kadın</h5>
                                        <Link to="/shop/women/bags" className="hover:text-[#23A6F0] text-sm">Bags</Link>
                                        <Link to="/shop/women/belts" className="hover:text-[#23A6F0] text-sm">Belts</Link>
                                        <Link to="/shop/women/cosmetics" className="hover:text-[#23A6F0] text-sm">Cosmetics</Link>
                                        <Link to="/shop/women/bags-2" className="hover:text-[#23A6F0] text-sm">Bags</Link>
                                        <Link to="/shop/women/hats" className="hover:text-[#23A6F0] text-sm">Hats</Link>
                                    </div>

                                    {/* Men Column */}
                                    <div className="flex flex-col gap-3 text-left w-1/2">
                                        <h5 className="text-[#252B42] text-lg font-bold mb-2">Erkek</h5>
                                        <Link to="/shop/men/bags" className="hover:text-[#23A6F0] text-sm">Bags</Link>
                                        <Link to="/shop/men/belts" className="hover:text-[#23A6F0] text-sm">Belts</Link>
                                        <Link to="/shop/men/cosmetics" className="hover:text-[#23A6F0] text-sm">Cosmetics</Link>
                                        <Link to="/shop/men/bags-2" className="hover:text-[#23A6F0] text-sm">Bags</Link>
                                        <Link to="/shop/men/hats" className="hover:text-[#23A6F0] text-sm">Hats</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link to="/about" className="hover:text-[#252B42]">About</Link>
                        <Link to="/blog" className="hover:text-[#252B42]">Blog</Link>
                        <Link to="/contact" className="hover:text-[#252B42]">Contact</Link>
                        <Link to="/pages" className="hover:text-[#252B42]">Pages</Link>
                    </nav>

                    {/* Right Side Icons - Blue #23A6F0 */}
                    <div className="flex items-center gap-2 lg:gap-[30px] text-[#23A6F0] text-xs lg:text-sm font-bold">
                        <div className="hidden md:flex items-center gap-1 lg:gap-2 cursor-pointer hover:underline">
                            <img src={navUserIcon} alt="Login" />
                            <span>Login / Register</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <img src={navSearchIcon} alt="Search" className="cursor-pointer" />
                            <div className="flex items-center gap-1 cursor-pointer">
                                <img src={navCartIcon} alt="Cart" />
                                <span className="text-xs hidden md:inline">1</span>
                            </div>
                            <div className="flex items-center gap-1 cursor-pointer hidden md:flex">
                                <img src={navHeartIcon} alt="Wishlist" />
                                <span className="text-xs">1</span>
                            </div>
                            {/* Mobile Menu Toggle */}
                            <button onClick={toggleMenu} className="md:hidden text-[#252B42] cursor-pointer">
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white text-center py-8 flex flex-col gap-8 text-[#737373] text-[30px] font-normal">
                    <Link to="/" onClick={toggleMenu}>Home</Link>
                    <Link to="/shop" onClick={toggleMenu}>Shop</Link>
                    <Link to="/about" onClick={toggleMenu}>About</Link>
                    <Link to="/blog" onClick={toggleMenu}>Blog</Link>
                    <Link to="/contact" onClick={toggleMenu}>Contact</Link>
                    <Link to="/pages" onClick={toggleMenu}>Pages</Link>

                    <div className="flex flex-col gap-6 items-center text-[#23A6F0] text-[30px] mt-4">
                        <div className="flex items-center gap-2 cursor-pointer">
                            <User size={24} />
                            <span>Login / Register</span>
                        </div>
                        <div className="flex flex-col items-center gap-4 text-[#23A6F0]">
                            <Search size={24} />
                            <ShoppingCart size={24} />
                            <Heart size={24} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
