import React from 'react';
import product1 from '../../assets/images/products/product-cover-1.png';
import product2 from '../../assets/images/products/product-cover-2.png';
import product3 from '../../assets/images/products/product-cover-3.png';
import product4 from '../../assets/images/products/product-cover-4.png';
import product5 from '../../assets/images/products/product-cover-5.png';
import product6 from '../../assets/images/products/product-cover-6.png';
import product7 from '../../assets/images/products/product-cover-7.png';
import product8 from '../../assets/images/products/product-cover-8.png';

const ProductBestSellers = () => {
    // Products using the newly provided images
    const products = [
        { img: product1, title: 'Graphic Design', dept: 'English Department', oldPrice: '$16.48', newPrice: '$6.48' },
        { img: product2, title: 'Graphic Design', dept: 'English Department', oldPrice: '$16.48', newPrice: '$6.48' },
        { img: product3, title: 'Graphic Design', dept: 'English Department', oldPrice: '$16.48', newPrice: '$6.48' },
        { img: product4, title: 'Graphic Design', dept: 'English Department', oldPrice: '$16.48', newPrice: '$6.48' },
        { img: product5, title: 'Graphic Design', dept: 'English Department', oldPrice: '$16.48', newPrice: '$6.48' },
        { img: product6, title: 'Graphic Design', dept: 'English Department', oldPrice: '$16.48', newPrice: '$6.48' },
        { img: product7, title: 'Graphic Design', dept: 'English Department', oldPrice: '$16.48', newPrice: '$6.48' },
        { img: product8, title: 'Graphic Design', dept: 'English Department', oldPrice: '$16.48', newPrice: '$6.48' },
    ];

    return (
        <section className="bg-[#FAFAFA] py-12">
            <div className="container mx-auto px-4">
                {/* Header - Left Aligned & Bordered */}
                <div className="mb-8 border-b border-[#ECECEC] pb-4">
                    <h3 className="text-[#252B42] text-[24px] font-bold uppercase tracking-[0.1px]">
                        BESTSELLER PRODUCTS
                    </h3>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[30px]">
                    {products.map((product, index) => (
                        <div key={index} className="flex flex-col bg-white group cursor-pointer shadow-sm hover:shadow-md transition duration-300">
                            {/* Image Container */}
                            <div className="w-full aspect-[238/280] overflow-hidden">
                                <img
                                    src={product.img}
                                    alt={product.title}
                                    className="w-full h-full object-cover object-top transition duration-300 group-hover:scale-105"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="p-6 flex flex-col items-start gap-[10px]">
                                <h5 className="text-[#252B42] text-[16px] font-bold">{product.title}</h5>
                                <p className="text-[#737373] text-[14px] font-bold">{product.dept}</p>
                                <div className="flex items-center gap-[5px] px-[3px] py-[5px]">
                                    <span className="text-[#BDBDBD] text-[16px] font-bold line-through">{product.oldPrice}</span>
                                    <span className="text-[#23856D] text-[16px] font-bold">{product.newPrice}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductBestSellers;
