import React from 'react';
import descriptionImage from '../../assets/images/products/product-desc-1.png';

const ProductTabs = () => {
    return (
        <div className="bg-white pb-12">
            {/* Tabs Header */}
            <div className="container mx-auto px-4 border-b border-[#ECECEC] mb-8">
                <div className="flex justify-center gap-4 md:gap-8 text-[#737373] text-[14px] font-bold py-6">
                    <span className="cursor-pointer hover:text-[#252B42] text-[#737373]">Description</span>
                    <span className="cursor-pointer hover:text-[#252B42]">Additional Information</span>
                    <span className="cursor-pointer hover:text-[#252B42]">Reviews <span className="text-[#23856D]">(0)</span></span>
                </div>
            </div>

            {/* Tab Content (Description Active) */}
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Image Column */}
                    <div className="md:w-1/3 bg-[#F5F5F5] rounded-md overflow-hidden aspect-[332/392]">
                        <img src={descriptionImage} alt="Description" className="w-full h-full object-cover" />
                    </div>

                    {/* Text Column */}
                    <div className="md:w-1/3 flex flex-col gap-4">
                        <h3 className="text-[#252B42] text-[24px] font-bold">the quick fox jumps over</h3>
                        <p className="text-[#737373] text-[14px] leading-[20px]">
                            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                        </p>
                        <p className="text-[#737373] text-[14px] leading-[20px] border-l-4 border-[#23856D] pl-4">
                            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                        </p>
                        <p className="text-[#737373] text-[14px] leading-[20px]">
                            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                        </p>
                    </div>

                    {/* List Column */}
                    <div className="md:w-1/3 flex flex-col gap-4">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-[#252B42] text-[24px] font-bold">the quick fox jumps over</h3>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2 text-[#737373] text-[14px]">
                                    <span className="font-bold text-[24px]">&gt;</span>
                                    <span>the quick fox jumps over the lazy dog</span>
                                </div>
                                <div className="flex items-center gap-2 text-[#737373] text-[14px]">
                                    <span className="font-bold text-[24px]">&gt;</span>
                                    <span>the quick fox jumps over the lazy dog</span>
                                </div>
                                <div className="flex items-center gap-2 text-[#737373] text-[14px]">
                                    <span className="font-bold text-[24px]">&gt;</span>
                                    <span>the quick fox jumps over the lazy dog</span>
                                </div>
                                <div className="flex items-center gap-2 text-[#737373] text-[14px]">
                                    <span className="font-bold text-[24px]">&gt;</span>
                                    <span>the quick fox jumps over the lazy dog</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 mt-4">
                            <h3 className="text-[#252B42] text-[24px] font-bold">the quick fox jumps over</h3>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2 text-[#737373] text-[14px]">
                                    <span className="font-bold text-[24px]">&gt;</span>
                                    <span>the quick fox jumps over the lazy dog</span>
                                </div>
                                <div className="flex items-center gap-2 text-[#737373] text-[14px]">
                                    <span className="font-bold text-[24px]">&gt;</span>
                                    <span>the quick fox jumps over the lazy dog</span>
                                </div>
                                <div className="flex items-center gap-2 text-[#737373] text-[14px]">
                                    <span className="font-bold text-[24px]">&gt;</span>
                                    <span>the quick fox jumps over the lazy dog</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductTabs;
