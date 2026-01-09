import { useState } from 'react';
import { Menu, X, Search, ShoppingCart, User, Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// Import custom PNG icons for mobile menu nav toggle
import mobileMenuIcon from '../../assets/icons/mobile-nav-menu.png';

// Import Social Icons from assets
import socialInstagram from '../../assets/icons/social-instagram.png';
import socialYoutube from '../../assets/icons/social-youtube.png';
import socialFacebook from '../../assets/icons/social-facebook.png';
import socialTwitter from '../../assets/icons/social-twitter.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="font-sans sticky top-0 z-50">
            {/* Top Bar - Help/Contact Info (Desktop Only) */}
            <div className="hidden md:block bg-[#252B42] text-white py-[14px]">
                <div className="container mx-auto px-4 flex justify-between items-center text-sm font-bold">
                    <div className="flex items-center gap-[10px]">
                        <span className="flex items-center gap-[5px]">(225) 555-0118</span>
                        <span className="flex items-center gap-[5px]">michelle.rivera@example.com</span>
                    </div>
                    <div>
                        Follow Us and get a chance to win 80% off
                    </div>
                    <div className="flex items-center gap-[10px]">
                        <span>Follow Us :</span>
                        <div className="flex items-center gap-[10px]">
                            <img src={socialInstagram} alt="Instagram" className="w-[16px] h-[16px]" />
                            <img src={socialYoutube} alt="Youtube" className="w-[16px] h-[16px]" />
                            <img src={socialFacebook} alt="Facebook" className="w-[16px] h-[16px]" />
                            <img src={socialTwitter} alt="Twitter" className="w-[16px] h-[16px]" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Navbar */}
            <div className="bg-white py-4 md:py-6 relative">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    {/* Brand */}
                    <Link to="/" className="text-[#252B42] text-2xl font-bold tracking-wider">
                        Bandage
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center gap-6 text-[#737373] font-bold text-sm">
                        <Link to="/" className="hover:text-[#252B42]">Home</Link>
                        <Link to="/shop" className="hover:text-[#252B42]">Shop</Link>
                        <Link to="/about" className="hover:text-[#252B42]">About</Link>
                        <Link to="/blog" className="hover:text-[#252B42]">Blog</Link>
                        <Link to="/contact" className="hover:text-[#252B42]">Contact</Link>
                        <Link to="/pages" className="hover:text-[#252B42]">Pages</Link>
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-6 text-[#23A6F0] font-bold text-sm">
                        <div className="flex items-center gap-2 cursor-pointer hover:text-[#1a8cd8]">
                            <User size={16} />
                            <span>Login / Register</span>
                        </div>
                        <Search size={16} className="cursor-pointer hover:text-[#1a8cd8]" />
                        <div className="flex items-center gap-1 cursor-pointer hover:text-[#1a8cd8]">
                            <ShoppingCart size={16} />
                            <span>1</span>
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer hover:text-[#1a8cd8]">
                            <Heart size={16} />
                            <span>1</span>
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center gap-6">
                        {/* On Home page mobile, maybe we want icons on the bar? 
                             The user said "home ekranında sadece home product pricing ve contact olacak baska bir sey olmayacak".
                             This implies the MENU content. The header bar usually keeps some utility or at least the toggle.
                             I'll keep just the toggle for consistency with the requested clean look.
                         */}
                        <button onClick={toggleMenu} className="text-[#252B42] hover:text-[#737373]">
                            {isMenuOpen ? <X size={30} /> : <img src={mobileMenuIcon} alt="Menu" className="w-[24px] h-[16px]" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-[#FAFAFA] w-full py-20 flex flex-col items-center gap-8 animate-in slide-in-from-top-5 duration-300 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">

                    {isHomePage ? (
                        // HOME VARIANT: Only Home, Product, Pricing, Contact. No actions.
                        <nav className="flex flex-col items-center gap-8 text-[#737373] text-[30px] font-normal tracking-tight">
                            <Link to="/" className="hover:text-[#252B42]" onClick={toggleMenu}>Home</Link>
                            <Link to="/product" className="hover:text-[#252B42]" onClick={toggleMenu}>Product</Link>
                            <Link to="/pricing" className="hover:text-[#252B42]" onClick={toggleMenu}>Pricing</Link>
                            <Link to="/contact" className="hover:text-[#252B42]" onClick={toggleMenu}>Contact</Link>
                        </nav>
                    ) : (
                        // SHOP / OTHER PAGES VARIANT: Full links + Vertical Blue Actions
                        <>
                            <nav className="flex flex-col items-center gap-8 text-[#737373] text-[30px] font-normal tracking-tight">
                                <Link to="/" className="hover:text-[#252B42]" onClick={toggleMenu}>Home</Link>
                                <Link to="/shop" className="hover:text-[#252B42]" onClick={toggleMenu}>Shop</Link>
                                <Link to="/about" className="hover:text-[#252B42]" onClick={toggleMenu}>About</Link>
                                <Link to="/blog" className="hover:text-[#252B42]" onClick={toggleMenu}>Blog</Link>
                                <Link to="/contact" className="hover:text-[#252B42]" onClick={toggleMenu}>Contact</Link>
                                <Link to="/pages" className="hover:text-[#252B42]" onClick={toggleMenu}>Pages</Link>
                            </nav>

                            <div className="flex flex-col items-center gap-6 w-full text-[#23A6F0] mt-4">
                                <div className="flex items-center gap-2 text-[30px] font-normal cursor-pointer hover:text-[#1a8cd8]">
                                    <User size={30} />
                                    <span>Login / Register</span>
                                </div>
                                <div className="flex flex-col items-center gap-6 mt-2">
                                    <Search size={30} className="cursor-pointer" />
                                    <div className="flex items-center gap-1 cursor-pointer">
                                        <ShoppingCart size={30} />
                                    </div>
                                    <div className="flex items-center gap-1 cursor-pointer">
                                        <Heart size={30} />
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            )}
        </header>
    );
};

export default Header;
