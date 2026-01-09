import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import aboutHero from '../assets/images/about/about-hero.png';
import workWithUs from '../assets/images/about/work-with-us.png';

const AboutPage = () => {
    return (
        <div className="font-sans">
            <Header />

            {/* Hero Section */}
            <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 flex flex-col gap-6">
                    <h5 className="font-bold text-primary">ABOUT US</h5>
                    <h1 className="text-5xl font-bold text-primary leading-tight">About Us</h1>
                    <p className="text-text-gray text-xl max-w-[376px]">
                        We know how large objects will act, but things on a small scale.
                    </p>
                    <button className="bg-secondary text-white font-bold py-4 px-10 rounded-[5px] w-fit">
                        Get Quote Now
                    </button>
                </div>
                <div className="md:w-1/2 relative min-h-[400px]">
                    {/* Placeholder for Image stack */}
                    <div className="bg-[#FFE9EA] rounded-full w-[400px] h-[400px] absolute top-0 right-0 -z-10"></div>
                    <img src={aboutHero} alt="About Hero" className="rounded-lg shadow-lg object-cover w-[400px] h-[400px]" />
                </div>
            </section>

            {/* Problem Section */}
            <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row gap-16 justify-center items-center">
                <div className="flex flex-col gap-6 md:w-1/3">
                    <h2 className="text-danger font-bold">Problems trying</h2>
                    <h3 className="text-primary font-bold text-2xl">
                        Met loose away look the accurate.
                    </h3>
                </div>
                <div className="md:w-1/3 text-text-gray">
                    <p>
                        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="container mx-auto px-4 py-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center bg-white">
                <div className="flex flex-col gap-2">
                    <h2 className="text-5xl font-bold text-primary">15K</h2>
                    <h5 className="font-bold text-text-gray text-base">Happy Customers</h5>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-5xl font-bold text-primary">150K</h2>
                    <h5 className="font-bold text-text-gray text-base">Monthly Visitors</h5>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-5xl font-bold text-primary">15</h2>
                    <h5 className="font-bold text-text-gray text-base">Countries Worldwide</h5>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-5xl font-bold text-primary">100+</h2>
                    <h5 className="font-bold text-text-gray text-base">Top Partners</h5>
                </div>
            </section>

            {/* Video Section Placeholder */}
            <section className="container mx-auto px-4 py-16">
                <div className="bg-white rounded-2xl overflow-hidden relative shadow-lg h-[540px] flex items-center justify-center">
                    <img src="https://placehold.co/1000x540" alt="Video Cover" className="absolute w-full h-full object-cover" />
                    <button className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center z-10 hover:scale-110 transition-transform">
                        <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                    </button>
                </div>
            </section>

            {/* Team Section */}
            <section className="container mx-auto px-4 py-16 text-center">
                <h2 className="text-4xl font-bold text-primary mb-4">Meet Our Team</h2>
                <p className="text-text-gray max-w-md mx-auto mb-16">
                    Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="flex flex-col items-center">
                            <img src={`https://placehold.co/300x300?text=Team+${item}`} alt="Team Member" className="w-full h-auto mb-4" />
                            <h5 className="font-bold text-primary">Username</h5>
                            <h6 className="text-text-gray font-bold">Profession</h6>
                            <div className="flex gap-4 mt-2 text-secondary">
                                {/* Social Icons Placeholder */}
                                <span>F</span>
                                <span>I</span>
                                <span>T</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Clients Section */}
            <section className="bg-light-bg py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-primary mb-8">Big Companies Are Here</h2>
                    <p className="text-text-gray max-w-md mx-auto mb-16">
                        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                    </p>
                    <div className="flex flex-wrap justify-between items-center gap-8 grayscale opacity-70">
                        {/* Replace with actual client logos from assets/brands if available later, for now generic */}
                        <span>LYFT</span>
                        <span>STRIPE</span>
                        <span>AWS</span>
                        <span>REDDIT</span>
                        <span>HOOLIE</span>
                        <span>AMAZON</span>
                    </div>
                </div>
            </section>

            {/* Work With Us */}
            <section className="flex flex-col md:flex-row bg-[#2A7CC7] text-white">
                <div className="md:w-2/3 py-24 pl-[15%] flex flex-col justify-center gap-6">
                    <h5 className="font-bold text-base">WORK WITH US</h5>
                    <h2 className="text-4xl font-bold">Now Let's grow Yours</h2>
                    <p className="text-sm max-w-md">
                        The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
                    </p>
                    <button className="border border-white text-white px-10 py-4 font-bold rounded hover:bg-white hover:text-[#2A7CC7] transition w-fit">
                        Button
                    </button>
                </div>
                <div className="md:w-1/3 hidden md:block">
                    <img src={workWithUs} alt="Work With Us" className="w-full h-full object-cover" />
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutPage;
