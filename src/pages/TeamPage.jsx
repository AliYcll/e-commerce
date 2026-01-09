import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { ChevronRight, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const TeamPage = () => {
    return (
        <div className="font-sans">
            <Header />

            {/* Header / Breadcrumb Section */}
            <section className="container mx-auto px-4 py-12 text-center">
                <h5 className="font-bold text-text-gray mb-4">WHAT WE DO</h5>
                <h1 className="text-5xl font-bold text-primary mb-6 leading-tight max-w-[500px] mx-auto">Innovation tailored for you</h1>
                <div className="flex justify-center items-center gap-4 text-sm font-bold">
                    <Link to="/" className="text-primary">Home</Link>
                    <ChevronRight size={16} className="text-text-muted" />
                    <span className="text-text-gray">Team</span>
                </div>
            </section>

            {/* Hero Collage */}
            <section className="container mx-auto px-4 pb-12 flex flex-col md:flex-row gap-4 h-[530px]">
                <div className="md:w-1/2 h-full">
                    <img src="https://placehold.co/700x530" alt="Team Hero Large" className="w-full h-full object-cover" />
                </div>
                <div className="md:w-1/2 grid grid-cols-2 gap-4 h-full">
                    <img src="https://placehold.co/360x260" alt="Team Small 1" className="w-full h-full object-cover" />
                    <img src="https://placehold.co/360x260" alt="Team Small 2" className="w-full h-full object-cover" />
                    <img src="https://placehold.co/360x260" alt="Team Small 3" className="w-full h-full object-cover" />
                    <img src="https://placehold.co/360x260" alt="Team Small 4" className="w-full h-full object-cover" />
                </div>
            </section>

            {/* Team Grid */}
            <section className="container mx-auto px-4 py-24 text-center">
                <h2 className="text-4xl font-bold text-primary mb-16">Meet Our Team</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                        <div key={item} className="flex flex-col items-center group">
                            <div className="w-full overflow-hidden mb-6">
                                <img src={`https://placehold.co/300x320?text=Team+${item}`} alt="Team Member" className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" />
                            </div>
                            <h5 className="font-bold text-primary text-xl mb-2">Username</h5>
                            <h6 className="text-text-gray font-bold mb-4">Profession</h6>
                            <div className="flex gap-4 text-secondary">
                                <Facebook size={20} className="hover:text-primary cursor-pointer" />
                                <Instagram size={20} className="hover:text-primary cursor-pointer" />
                                <Twitter size={20} className="hover:text-primary cursor-pointer" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Trial CTA */}
            <section className="bg-white py-20 text-center">
                <h2 className="text-4xl font-bold text-primary mb-6">Start your 14 days free trial</h2>
                <p className="text-text-gray max-w-sm mx-auto mb-8">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
                </p>
                <button className="bg-secondary text-white font-bold py-4 px-10 rounded-[5px]">Try it free now</button>
                <div className="flex justify-center gap-6 mt-8 p-4">
                    <Twitter size={30} className="text-[#55ACEE]" />
                    <Facebook size={30} className="text-[#395185]" />
                    <Instagram size={30} className="text-[#000000]" />
                    <h2 className="text-3xl font-bold text-[#0077B5]">in</h2>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default TeamPage;
