import React from 'react';
import couple from '../../assets/images/home/neural-universe/couple.png';

const NeuralUniverse = () => {
    return (
        <section className="bg-white py-4 md:py-0">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
                {/* Image */}
                <div className="md:w-1/2 order-1 md:order-1">
                    <img src={couple} alt="Neural Universe" className="w-full max-w-[704px] object-cover" />
                </div>

                {/* Content */}
                <div className="md:w-1/2 flex flex-col gap-[30px] items-center md:items-start text-center md:text-left p-8 order-2 md:order-2">
                    <h5 className="font-bold text-[16px] text-[#BDBDBD] tracking-[0.1px]">SUMMER 2020</h5>
                    <h2 className="font-bold text-[40px] text-[#252B42] leading-[50px] tracking-[0.2px]">Part of the Neural Universe</h2>
                    <h4 className="font-normal text-[20px] text-[#737373] leading-[30px] tracking-[0.2px] max-w-[376px]">
                        We know how large objects will act, but things on a small scale.
                    </h4>
                    <div className="flex gap-[10px] flex-col md:flex-row">
                        <button className="bg-[#2DC071] text-white px-[40px] py-[15px] rounded-[5px] font-bold text-[14px] hover:bg-[#239a5b] transition">
                            BUY NOW
                        </button>
                        <button className="border border-[#2DC071] text-[#2DC071] px-[40px] py-[15px] rounded-[5px] font-bold text-[14px] hover:bg-[#2DC071] hover:text-white transition">
                            READ MORE
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NeuralUniverse;
