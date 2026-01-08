import React from 'react';
import cardMen from '../../assets/images/home/card-men.png';
import cardWomen from '../../assets/images/home/card-women.png';
import cardAccessories from '../../assets/images/home/card-accessories.png';
import cardKids from '../../assets/images/home/card-kids.png';

const ShopCards = () => {
    return (
        <section className="py-10 md:py-20 bg-[#FAFAFA]">
            <div className="container mx-auto px-12 md:px-4">
                <div className="text-center mb-12">
                    <h3 className="font-bold text-[24px] text-[#252B42] mb-2 uppercase">EDITOR'S PICK</h3>
                    <p className="text-[#737373] text-[14px]">Problems trying to resolve the conflict between</p>
                </div>

                {/* Grid Layout - Height driven by the first item (Men) */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-[70rem] mx-auto">

                    {/* Item 1 - Men (Master Height Control) */}
                    <div className="md:col-span-2 relative overflow-hidden group aspect-[4/5] md:aspect-[5/6]">
                        <img src={cardMen} alt="Men" className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105" />
                        <div className="absolute bottom-6 left-6 bg-white w-[170px] h-[48px] flex items-center justify-center font-bold text-[#252B42] hover:bg-gray-100 cursor-pointer transition shadow-md uppercase">
                            MEN
                        </div>
                    </div>

                    {/* Item 2 - Women */}
                    {/* On Desktop: h-full matches grid height, image is absolute to fill. On Mobile: uses aspect ratio */}
                    <div className="md:col-span-1 relative overflow-hidden group md:h-full max-md:aspect-[3/4]">
                        <img src={cardWomen} alt="Women" className="w-full h-full object-cover object-top md:absolute md:inset-0 transition duration-500 group-hover:scale-105" />
                        <div className="absolute bottom-6 left-6 bg-white w-[120px] h-[48px] flex items-center justify-center font-bold text-[#252B42] hover:bg-gray-100 cursor-pointer transition shadow-md uppercase">
                            WOMEN
                        </div>
                    </div>

                    {/* Item 3 & 4 - Accessories & Kids */}
                    <div className="md:col-span-1 flex flex-col gap-8 md:h-full">
                        <div className="relative flex-1 overflow-hidden group max-md:aspect-[4/3]">
                            <img src={cardAccessories} alt="Accessories" className="w-full h-full object-cover object-top md:absolute md:inset-0 transition duration-500 group-hover:scale-105" />
                            <div className="absolute bottom-6 left-6 bg-white w-[120px] h-[48px] flex items-center justify-center font-bold text-[#252B42] hover:bg-gray-100 cursor-pointer transition shadow-md uppercase">
                                ACCESSORIES
                            </div>
                        </div>
                        <div className="relative flex-1 overflow-hidden group max-md:aspect-[4/3]">
                            <img src={cardKids} alt="Kids" className="w-full h-full object-cover object-top md:absolute md:inset-0 transition duration-500 group-hover:scale-105" />
                            <div className="absolute bottom-6 left-6 bg-white w-[120px] h-[48px] flex items-center justify-center font-bold text-[#252B42] hover:bg-gray-100 cursor-pointer transition shadow-md uppercase">
                                KIDS
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopCards;
