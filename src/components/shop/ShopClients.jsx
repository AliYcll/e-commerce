import React from 'react';

// Brand Logos
import hooli from '../../assets/icons/brands/hooli.png';
import lyft from '../../assets/icons/brands/lyft.png';
import brand3 from '../../assets/icons/brands/brand-3.png';
import stripe from '../../assets/icons/brands/stripe.png';
import aws from '../../assets/icons/brands/aws.png';
import reddit from '../../assets/icons/brands/reddit.png';

const ShopClients = () => {
    return (
        <div className="bg-[#FAFAFA] py-12">
            <div className="container mx-auto px-4">
                {/* Client Logos Grid / Flex */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-8 transition-all duration-300">
                    <div className="flex justify-center w-full md:w-auto">
                        <img src={hooli} alt="Hooli" className="h-12 w-auto object-contain" />
                    </div>
                    <div className="flex justify-center w-full md:w-auto">
                        <img src={lyft} alt="Lyft" className="h-20 w-auto object-contain" />
                    </div>
                    <div className="flex justify-center w-full md:w-auto">
                        <img src={brand3} alt="Brand" className="h-24 w-auto object-contain" />
                    </div>
                    <div className="flex justify-center w-full md:w-auto">
                        <img src={stripe} alt="Stripe" className="h-16 w-auto object-contain" />
                    </div>
                    <div className="flex justify-center w-full md:w-auto">
                        <img src={aws} alt="AWS" className="h-16 w-auto object-contain" />
                    </div>
                    <div className="flex justify-center w-full md:w-auto">
                        <img src={reddit} alt="Reddit" className="h-20 w-auto object-contain" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopClients;
