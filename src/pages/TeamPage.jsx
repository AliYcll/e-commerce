import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import teamHeroLarge from '../assets/images/team/hero-large.png';
import teamHeroSmall1 from '../assets/images/team/hero-small-1.png';
import teamHeroSmall2 from '../assets/images/team/hero-small-2.png';
import teamHeroSmall3 from '../assets/images/team/hero-small-3.png';
import teamHeroSmall4 from '../assets/images/team/hero-small-4.png';
import teamHeroMobileLarge from '../assets/images/team/hero-mobile-large.png';
import teamHeroMobileSmall1 from '../assets/images/team/hero-mobile-small-1.png';
import teamHeroMobileSmall2 from '../assets/images/team/hero-mobile-small-2.png';
import teamHeroMobileSmall3 from '../assets/images/team/hero-mobile-small-3.png';
import teamHeroMobileSmall4 from '../assets/images/team/hero-mobile-small-4.png';
import ctaTwitter from '../assets/icons/cta/cta-twitter.png';
import ctaFacebook from '../assets/icons/cta/cta-facebook.png';
import ctaInstagram from '../assets/icons/cta/cta-instagram.png';
import ctaLinkedin from '../assets/icons/cta/cta-linkedin.png';
import TeamList from '../components/common/TeamList';

const TeamPage = () => {
    return (
        <div className="font-sans">
            <Header />

            {/* Header / Breadcrumb Section */}
            <section className="container mx-auto px-4 py-12 text-center">
                <h5 className="font-bold text-2xl text-text-gray py-10 ">WHAT WE DO</h5>
                <h1 className="text-5xl font-bold text-primary mb-6 leading-tight  mx-auto">Innovation tailored for you</h1>
                <div className="flex justify-center items-center my-8 gap-4 text-sm font-bold">
                    <Link to="/" className="text-primary">Home</Link>
                    <ChevronRight size={16} className="text-text-muted" />
                    <span className="text-text-gray">Team</span>
                </div>
            </section>

            {/* Hero Collage */}
            <section className="container mx-auto px-0 md:px-4 pb-12 flex flex-col md:flex-row gap-4 h-auto md:h-[530px]">
                <div className="md:w-1/2 h-full">
                    <picture>
                        <source media="(min-width: 768px)" srcSet={teamHeroLarge} />
                        <img src={teamHeroMobileLarge} alt="Team Hero Large" className="w-full h-full object-cover" />
                    </picture>
                </div>
                <div className="md:w-1/2 grid grid-cols-2 gap-4 h-full">
                    <picture>
                        <source media="(min-width: 768px)" srcSet={teamHeroSmall1} />
                        <img src={teamHeroMobileSmall1} alt="Team Small 1" className="w-full h-full object-cover" />
                    </picture>
                    <picture>
                        <source media="(min-width: 768px)" srcSet={teamHeroSmall2} />
                        <img src={teamHeroMobileSmall2} alt="Team Small 2" className="w-full h-full object-cover" />
                    </picture>
                    <picture>
                        <source media="(min-width: 768px)" srcSet={teamHeroSmall3} />
                        <img src={teamHeroMobileSmall3} alt="Team Small 3" className="w-full h-full object-cover" />
                    </picture>
                    <picture>
                        <source media="(min-width: 768px)" srcSet={teamHeroSmall4} />
                        <img src={teamHeroMobileSmall4} alt="Team Small 4" className="w-full h-full object-cover" />
                    </picture>
                </div>
            </section>

            {/* Team Grid */}
            <section className="container mx-auto my-16 text-center">
                <h2 className="text-6xl font-bold text-primary py-8 mb-16">Meet Our Team</h2>
                <TeamList />
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

export default TeamPage;
