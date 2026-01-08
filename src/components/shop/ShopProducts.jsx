import React from 'react';
import ProductCard from '../product/ProductCard';

import p1 from '../../assets/images/shop/products/product-1.png';
import p2 from '../../assets/images/shop/products/product-2.png';
import p3 from '../../assets/images/shop/products/product-3.png';
import p4 from '../../assets/images/shop/products/product-4.png';
import p5 from '../../assets/images/shop/products/product-5.png';
import p6 from '../../assets/images/shop/products/product-6.png';
import p7 from '../../assets/images/shop/products/product-7.png';
import p8 from '../../assets/images/shop/products/product-8.png';
import p9 from '../../assets/images/shop/products/product-9.png';
import p10 from '../../assets/images/shop/products/product-10.png';
import p11 from '../../assets/images/shop/products/product-11.png';
import p12 from '../../assets/images/shop/products/product-12.png';

const products = [
    { id: 1, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48', image: p1 },
    { id: 2, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48', image: p2 },
    { id: 3, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48', image: p3 },
    { id: 4, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48', image: p4 },
    { id: 5, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48', image: p5 },
    { id: 6, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48', image: p6 },
    { id: 7, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48', image: p7 },
    { id: 8, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48', image: p8 },
    { id: 9, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48', image: p9 },
    { id: 10, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48', image: p10 },
    { id: 11, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48', image: p11 },
    { id: 12, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48', image: p12 },
];

const ShopProducts = () => {
    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4">
                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-24">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center">
                    <div className="flex border border-[#BDBDBD] rounded-lg bg-white overflow-hidden shadow-sm">
                        <button className="px-6 py-6 border-r border-[#BDBDBD] text-[#BDBDBD] font-bold text-sm bg-[#F3F3F3] hover:bg-gray-200 transition-colors">
                            First
                        </button>
                        <button className="px-5 py-6 border-r border-[#E9E9E9] text-[#23A6F0] font-bold text-sm hover:bg-gray-50 bg-white">
                            1
                        </button>
                        <button className="px-5 py-6 border-r border-[#E9E9E9] text-white font-bold text-sm bg-[#23A6F0] hover:bg-[#1a8cd8]">
                            2
                        </button>
                        <button className="px-5 py-6 border-r border-[#E9E9E9] text-[#23A6F0] font-bold text-sm hover:bg-gray-50 bg-white">
                            3
                        </button>
                        <button className="px-6 py-6 text-[#23A6F0] font-bold text-sm hover:bg-gray-50 bg-white">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopProducts;
