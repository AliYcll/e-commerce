import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="flex flex-col items-center p-4">
            {/* Image Container */}
            <div className="w-full relative aspect-[239/300] overflow-hidden mb-6 cursor-pointer group">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center gap-2 pb-8">
                <h5 className="font-bold text-[#252B42] text-base text-center">
                    {product.title}
                </h5>
                <a href="#" className="font-bold text-[#737373] text-sm text-center hover:text-[#23A6F0]">
                    {product.department}
                </a>

                <div className="flex items-center gap-2 px-1 py-1">
                    <h5 className="font-bold text-[#BDBDBD] text-base">
                        {product.oldPrice}
                    </h5>
                    <h5 className="font-bold text-[#23856D] text-base">
                        {product.newPrice}
                    </h5>
                </div>

                {/* Colors */}
                <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-4 h-4 rounded-full bg-[#23A6F0] cursor-pointer hover:scale-110 transition-transform"></span>
                    <span className="w-4 h-4 rounded-full bg-[#23856D] cursor-pointer hover:scale-110 transition-transform"></span>
                    <span className="w-4 h-4 rounded-full bg-[#E77C40] cursor-pointer hover:scale-110 transition-transform"></span>
                    <span className="w-4 h-4 rounded-full bg-[#252B42] cursor-pointer hover:scale-110 transition-transform"></span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
