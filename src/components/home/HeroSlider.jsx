import React from 'react';
import hero1 from '../../assets/images/hero/hero-1.png';
import heroPreviousIcon from '../../assets/icons/hero-previous-icon.png';
import heroNextIcon from '../../assets/icons/hero-next-icon.png';
import sliderActiveIcon from '../../assets/icons/slider-active.png';
import sliderInactiveIcon from '../../assets/icons/slider-inactive.png';

const HeroSlider = () => {
    return (
        <section className="relative h-[calc(100vh-148px)] min-h-[500px] lg:min-h-[716px] w-full text-white overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-top"
                style={{
                    backgroundImage: `url(${hero1})`
                }}
            >
                <div className="container mx-auto px-4 h-full flex items-center relative z-10">
                    {/* Text Content */}
                    <div className="flex flex-col gap-[35px] text-center md:text-left items-center md:items-start max-w-[600px]">
                        <h5 className="font-bold text-base tracking-[0.1px]">SUMMER 2020</h5>
                        <h1 className="font-bold text-[40px] md:text-[58px] leading-[50px] md:leading-[80px] tracking-[0.2px]">
                            NEW COLLECTION
                        </h1>
                        <h4 className="text-[20px] font-normal leading-[30px] tracking-[0.2px] text-[#FAFAFA] md:w-[376px]">
                            We know how large objects will act, but things on a small scale.
                        </h4>
                        <button className="bg-[#2DC071] px-[40px] py-[15px] rounded-[5px] text-white font-bold text-[24px] leading-[32px] hover:bg-[#239a5b] transition">
                            SHOP NOW
                        </button>
                    </div>
                </div>
            </div>
            {/* Arrows */}
            <div className="absolute top-1/2 left-4 md:left-8 cursor-pointer">
                <img src={heroPreviousIcon} alt="Previous" />
            </div>
            <div className="absolute top-1/2 right-4 md:right-8 cursor-pointer">
                <img src={heroNextIcon} alt="Next" />
            </div>
            {/* Slider Pagination Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                <img src={sliderActiveIcon} alt="Active Slide" className="cursor-pointer" />
                <img src={sliderInactiveIcon} alt="Inactive Slide" className="cursor-pointer" />
            </div>
        </section>
    );
};

export default HeroSlider;
