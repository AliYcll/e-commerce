import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    // Helper to generic URL-friendly slug
    const slugify = (text) => {
        return text
            .toString()
            .toLowerCase()
            .replace(/\s+/g, '-')     // Replace spaces with -
            .replace(/[^\w-]+/g, '')  // Remove all non-word chars
            .replace(/--+/g, '-')     // Replace multiple - with single -
            .replace(/^-+/, '')       // Trim - from start of text
            .replace(/-+$/, '');      // Trim - from end of text
    };

    const title = product.name || product.title || "Product";
    const slug = slugify(title);

    // Handle image mapping (API returns images array, static data used image string)
    const image = product.images && product.images.length > 0 ? product.images[0].url : (product.image || "");

    // Handle description/department
    const description = product.description || product.department || "English Department";

    // Handle price (API returns number)
    const price = product.price || 0;
    // Simulate old price for visual consistency if not provided (e.g. 1.5x) or just use logic
    const oldPrice = product.oldPrice || (price * 1.5).toFixed(2);
    const newPrice = product.newPrice || price.toFixed(2);

    return (
        <Link to={`/shop/product/${product.id}/${slug}`} className="block h-full">
            <div className="flex flex-col items-center p-4">
                {/* Image Container */}
                <div className="w-full relative aspect-[239/300] overflow-hidden mb-6 cursor-pointer group">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col items-center gap-2 pb-8">
                    <h5 className="font-bold text-[#252B42] text-base text-center line-clamp-1">
                        {title}
                    </h5>
                    <span className="font-bold text-[#737373] text-sm text-center hover:text-[#23A6F0] line-clamp-1">
                        {description}
                    </span>

                    <div className="flex items-center gap-2 px-1 py-1">
                        <h5 className="font-bold text-[#BDBDBD] text-base line-through">
                            ${oldPrice}
                        </h5>
                        <h5 className="font-bold text-[#23856D] text-base">
                            ${newPrice}
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
        </Link>
    );
};

export default ProductCard;
