import React from 'react';
import cardMen from '../../assets/images/shop/card-men.png';
import cardWomen from '../../assets/images/shop/card-women.png';
import cardAccessories from '../../assets/images/shop/card-accessories.png';
import cardKids from '../../assets/images/shop/card-kids.png';

const ShopCards = () => {
    return (
        <section className="py-10 md:py-20 bg-[#FAFAFA]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h3 className="font-bold text-[24px] text-[#252B42] mb-2 uppercase">EDITOR'S PICK</h3>
                    <p className="text-[#737373] text-[14px]">Problems trying to resolve the conflict between</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 h-auto md:h-[500px]">
                    {/* Large Item - Men */}
                    <div className="md:col-span-2 relative h-[500px] overflow-hidden group">
                        <img src={cardMen} alt="Men" className="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
                        <div className="absolute bottom-6 left-6 bg-white w-[170px] h-[48px] flex items-center justify-center font-bold text-[#252B42] hover:bg-gray-100 cursor-pointer transition shadow-md uppercase">
                            MEN
                        </div>
                    </div>

                    {/* Medium Item - Women */}
                    <div className="md:col-span-1 relative h-[500px] overflow-hidden group">
                        <img src={cardWomen} alt="Women" className="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
                        <div className="absolute bottom-6 left-6 bg-white w-[136px] h-[48px] flex items-center justify-center font-bold text-[#252B42] hover:bg-gray-100 cursor-pointer transition shadow-md uppercase">
                            WOMEN
                        </div>
                    </div>

                    {/* Small Items Column */}
                    <div className="md:col-span-1 flex flex-col gap-8 h-[500px]">
                        <div className="relative flex-1 h-[240px] md:h-auto overflow-hidden group">
                            <img src={cardAccessories} alt="Accessories" className="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
                            <div className="absolute bottom-6 left-6 bg-white w-[170px] h-[48px] flex items-center justify-center font-bold text-[#252B42] hover:bg-gray-100 cursor-pointer transition shadow-md uppercase">
                                ACCESSORIES
                            </div>
                        </div>
                        <div className="relative flex-1 h-[240px] md:h-auto overflow-hidden group">
                            <img src={cardKids} alt="Kids" className="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
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
