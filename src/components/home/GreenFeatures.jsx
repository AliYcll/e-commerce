import React from 'react';
import hero2 from '../../assets/images/hero/hero-2.png';
import heroPreviousIcon from '../../assets/icons/hero-previous-icon.png';
import heroNextIcon from '../../assets/icons/hero-next-icon.png';
import sliderActiveIcon from '../../assets/icons/slider-active.png';
import sliderInactiveIcon from '../../assets/icons/slider-inactive.png';

const GreenFeatures = () => {
    return (
        <section className="bg-[#23856D] text-white w-full md:min-h-[700px] flex items-center relative overflow-hidden pt-16 md:pt-0 pb-16 md:pb-0">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between h-full">
                {/* Content */}
                <div className="md:w-1/2 flex flex-col gap-[35px] items-center md:items-start text-center md:text-left z-10 mb-8 md:mb-0">
                    <h4 className="text-[20px] font-normal tracking-[0.2px]">SUMMER 2020</h4>
                    <h1 className="text-[40px] md:text-[58px] font-bold leading-[50px] md:leading-[80px] tracking-[0.2px] uppercase">Vita Classic Product</h1>
                    <p className="text-[14px] leading-[20px] tracking-[0.2px] max-w-[341px]">
                        We know how large objects will act, We know how are objects will act, We know
                    </p>
                    <div className="flex flex-col md:flex-row items-center gap-[20px] md:gap-[34px]">
                        <span className="font-bold text-[24px] tracking-[0.1px]">$16.48</span>
                        <button className="bg-[#2DC071] px-[40px] py-[15px] rounded-[5px] font-bold text-[14px] leading-[22px] hover:bg-[#239a5b] transition">
                            ADD TO CART
                        </button>
                    </div>
                </div>

                {/* Mobile Image (Visible only on mobile, placed below text) */}
                <div className="md:hidden w-full flex justify-center relative z-10">
                    <img src={hero2} alt="Vita Classic Product" className="w-[80%] max-w-[400px] object-contain" />
                </div>
            </div>

            {/* Background Image Container (Desktop Only - Overlay Effect) */}
            <div className="absolute inset-0 z-0 hidden md:block">
                <div
                    className="w-full h-full bg-no-repeat bg-contain bg-bottom md:bg-right-bottom lg:pr-48 lg:bg-origin-content"
                    style={{
                        backgroundImage: `url(${hero2})`,
                    }}
                />
            </div>

            {/* Arrows */}
            <div className="absolute top-1/2 left-4 md:left-32 cursor-pointer z-30 hidden md:block">
                <img src={heroPreviousIcon} alt="Previous" />
            </div>
            <div className="absolute top-1/2 right-4 md:right-32 cursor-pointer z-30 hidden md:block">
                <img src={heroNextIcon} alt="Next" />
            </div>

            {/* Pagination */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
                <img src={sliderActiveIcon} alt="Active" className="cursor-pointer" />
                <img src={sliderInactiveIcon} alt="Inactive" className="cursor-pointer" />
            </div>
        </section>
    );
};

export default GreenFeatures;
