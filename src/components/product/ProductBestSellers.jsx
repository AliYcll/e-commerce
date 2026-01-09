import React from 'react';
import productCover1 from '../../assets/images/products/product-cover-1.png';
import productCover2 from '../../assets/images/products/product-cover-2.png';
import productCover3 from '../../assets/images/products/product-cover-3.png';
import productCover4 from '../../assets/images/products/product-cover-4.png';
import productCover5 from '../../assets/images/products/product-cover-5.png';
import productCover6 from '../../assets/images/products/product-cover-6.png';
import productCover7 from '../../assets/images/products/product-cover-7.png';
import productCover8 from '../../assets/images/products/product-cover-8.png';
import { Link } from 'react-router-dom';

const productImages = [
    productCover1, productCover2, productCover3, productCover4,
    productCover5, productCover6, productCover7, productCover8
];

const ProductBestSellers = () => {
    return (
        <section className="py-10 md:py-12 bg-[#FAFAFA]">
            <div className="container mx-auto px-4">
                <div className="mb-8 border-b border-[#ECECEC] pb-4">
                    <h3 className="font-bold text-[24px] text-[#252B42] uppercase">BESTSELLER PRODUCTS</h3>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[30px]">
                    {productImages.map((img, index) => (
                        <div key={index} className="flex flex-col items-start bg-white p-4 group cursor-pointer hover:shadow-lg transition duration-300">
                            <div className="w-full aspect-[239/280] overflow-hidden mb-4 relative">
                                <img src={img} alt={`Product ${index + 1}`} className="w-full h-full object-cover transition duration-300 group-hover:scale-105" />
                            </div>
                            <h5 className="font-bold text-[16px] text-[#252B42] mb-1">Graphic Design</h5>
                            <p className="font-bold text-[14px] text-[#737373] mb-2">English Department</p>
                            <div className="flex gap-2 font-bold mb-3">
                                <span className="text-[#BDBDBD]">$16.48</span>
                                <span className="text-[#23856D]">$6.48</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductBestSellers;
