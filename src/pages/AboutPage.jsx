import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import aboutHero from '../assets/images/about/about-hero.png';
import aboutMobileHero from '../assets/images/about/about-mobile-hero.png';
import workWithUs from '../assets/images/about/work-with-us.png';
import mediaBgCover from '../assets/images/about/media-bg-cover.png';
import TeamList from '../components/common/TeamList';
import CompanyLogos from '../components/common/CompanyLogos';

const AboutPage = () => {
    return (
        <div className="font-sans">
            <Header />

            {/* Hero Section */}
            <section className="relative w-full flex items-center md:min-h-screen py-12 md:py-0">
                <div className="hidden md:block absolute inset-0 -z-10">
                    <img src={aboutHero} alt="About Hero" className="w-full h-full object-contain" />
                </div>
                <div className="container te mx-auto px-4">
                    <div className="md:w-1/2 flex flex-col gap-6 text-center md:text-left">
                        <h5 className="font-bold text-2xl">ABOUT COMPANY</h5>
                        <h1 className="text-5xl font-bold text-7xl leading-tight py-8">ABOUT US</h1>
                        <p className="text-text-gray text-2xl font-medium max-w-[476px] mx-auto md:mx-0">
                            We know how large objects will act, but things on a small scale.
                        </p>
                        <button className="bg-secondary text-white font-bold py-4 px-10 rounded-[5px] w-fit mx-auto md:mx-0">
                            Get Quote Now
                        </button>

                        {/* Mobile Image */}
                        <div className="md:hidden w-full mt-8">
                            <img src={aboutMobileHero} alt="About Hero Mobile" className="w-full h-auto object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem Section */}
            <section className="container mx-auto px-4 mb-48 flex flex-col md:flex-row gap-4 justify-between items-center">
                <div className="flex flex-col gap-6 md:w-1/2">
                    <h2 className="text-danger font-bold text-sm">Problems trying</h2>
                    <h3 className="text-primary font-bold text-2xl md:text-2xl lg:text-3xl max-w-[476px]">
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                    </h3>
                </div>
                <div className="md:w-1/2 text-text-gray font-medium">
                    <p className="text-l">
                        Problems trying to resolve the conflict between the two major realms of
                    </p>
                    <p className="text-l">
                        Classical physics: Newtonian mechanics
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="container mx-auto px-4 py-16 mb-48 text-6xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center bg-white">
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-primary">15K</h2>
                    <h5 className="font-bold text-text-gray text-base">Happy Customers</h5>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-primary">150K</h2>
                    <h5 className="font-bold text-text-gray text-base">Monthly Visitors</h5>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-primary">15</h2>
                    <h5 className="font-bold text-text-gray text-base">Countries Worldwide</h5>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-primary">100+</h2>
                    <h5 className="font-bold text-text-gray text-base">Top Partners</h5>
                </div>
            </section>

            {/* Video Section Placeholder */}
            <section className="container mx-auto px-4 py-16">
                <div className="bg-white rounded-2xl overflow-hidden relative shadow-lg h-[540px] flex items-center justify-center">
                    <img src={mediaBgCover} alt="Video Cover" className="absolute w-full h-full object-cover" />
                    <button className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center z-10 hover:scale-110 transition-transform">
                        <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                    </button>
                </div>
            </section>

            {/* Team Section */}
            <section className="container mx-auto my-48 px-4 py-16 text-center">
                <h2 className="text-4xl font-bold text-primary mb-4">Meet Our Team</h2>
                <p className="text-text-gray max-w-md mx-auto mb-16">
                    Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                </p>
                <TeamList limit={3} />
            </section>

            {/* Clients Section */}
            <section className="bg-light-bg py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-primary mb-8">Big Companies Are Here</h2>
                    <p className="text-text-gray max-w-md mx-auto mb-16">
                        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                    </p>
                    <div className="grayscale opacity-70">
                        <CompanyLogos />
                    </div>
                </div>
            </section>

            {/* Work With Us */}
            <section className="flex flex-col md:flex-row bg-[#2A7CC7] text-white">
                <div className="md:w-2/3 py-24 pl-[5%] flex flex-col justify-center gap-6">
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
