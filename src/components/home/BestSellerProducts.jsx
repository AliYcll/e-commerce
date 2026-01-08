import React from 'react';
import product1 from '../../assets/images/products/product-1.png';
import product2 from '../../assets/images/products/product-2.png';
import product3 from '../../assets/images/products/product-3.png';
import product4 from '../../assets/images/products/product-4.png';
import product5 from '../../assets/images/products/product-5.png';
import product6 from '../../assets/images/products/product-6.png';
import product7 from '../../assets/images/products/product-7.png';
import product8 from '../../assets/images/products/product-8.png';

const productImages = [product1, product2, product3, product4, product5, product6, product7, product8];

const BestSellerProducts = () => {
    return (
        <section className="py-10 md:py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10 md:mb-20">
                    <h4 className="text-[20px] text-[#737373] font-normal mb-2">Featured Products</h4>
                    <h3 className="font-bold text-[24px] text-[#252B42] mb-2 uppercase">BESTSELLER PRODUCTS</h3>
                    <p className="text-[#737373] text-[14px]">Problems trying to resolve the conflict between</p>
                </div>

                {/* Product Grid - Reverted to single column on mobile, but constrained width */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[30px]">
                    {productImages.map((img, index) => (
                        /* Card Wrapper with max-width and margin-auto to shrink it on mobile */
                        <div key={index} className="flex flex-col items-center group cursor-pointer w-full max-w-[300px] mx-auto sm:max-w-none">
                            <div className="w-full aspect-[238/427] md:h-[427px] overflow-hidden mb-6">
                                <img src={img} alt={`Product ${index + 1}`} className="w-full h-full object-cover object-top transition duration-300 group-hover:scale-105" />
                            </div>
                            <h5 className="font-bold text-[16px] text-[#252B42] mb-2">Graphic Design</h5>
                            <p className="font-bold text-[14px] text-[#737373] mb-2">English Department</p>
                            <div className="flex gap-2 font-bold mb-3">
                                <span className="text-[#BDBDBD]">$16.48</span>
                                <span className="text-[#23856D]">$6.48</span>
                            </div>
                            {/* Colors */}
                            <div className="flex gap-1.5">
                                <div className="w-4 h-4 rounded-full bg-[#23A6F0] cursor-pointer hover:ring-2 ring-offset-1 ring-[#23A6F0]"></div>
                                <div className="w-4 h-4 rounded-full bg-[#23856D] cursor-pointer hover:ring-2 ring-offset-1 ring-[#23856D]"></div>
                                <div className="w-4 h-4 rounded-full bg-[#E77C40] cursor-pointer hover:ring-2 ring-offset-1 ring-[#E77C40]"></div>
                                <div className="w-4 h-4 rounded-full bg-[#252B42] cursor-pointer hover:ring-2 ring-offset-1 ring-[#252B42]"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BestSellerProducts;
