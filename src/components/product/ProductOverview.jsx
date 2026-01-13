import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, ShoppingCart, Eye } from 'lucide-react';
import singleProductMain from '../../assets/images/products/single-product-main.png';
import singleProductThumb1 from '../../assets/images/products/single-product-thumb-1.jpg';
import singleProductThumb2 from '../../assets/images/products/single-product-thumb-2.jpg';

const ProductOverview = ({ product }) => {
    // Product Images
    // Ensure images exist, otherwise fallback
    const images = product?.images?.length > 0
        ? product.images.map(img => img.url)
        : [product?.image || singleProductMain];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    if (!product) return null;

    return (
        <div className="bg-[#FAFAFA] py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Left Side - Image Slider */}
                    <div className="md:w-1/2">
                        {/* Main Image */}
                        <div className="relative w-full md:w-fit mx-auto h-auto max-h-[600px] rounded-md mb-4 group">
                            <img
                                src={images[currentImageIndex]}
                                alt={product.name}
                                className="w-full h-full max-h-[600px] object-contain object-center rounded-md"
                            />
                            {/* Arrows */}
                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white p-2 hover:bg-black/20 rounded-full transition"
                                    >
                                        <ChevronLeft size={40} />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white p-2 hover:bg-black/20 rounded-full transition"
                                    >
                                        <ChevronRight size={40} />
                                    </button>
                                </>
                            )}
                        </div>
                        {/* Thumbnails */}
                        {images.length > 1 && (
                            <div className="flex gap-4 overflow-x-auto pb-2">
                                {images.map((img, index) => (
                                    <div
                                        key={index}
                                        className={`w-[100px] h-[75px] flex-shrink-0 cursor-pointer overflow-hidden rounded-md ${currentImageIndex === index ? 'opacity-100 ring-2 ring-[#23A6F0]' : 'opacity-50 hover:opacity-100'}`}
                                        onClick={() => setCurrentImageIndex(index)}
                                    >
                                        <img src={img} alt={`Thumbnail ${index}`} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right Side - Product Info */}
                    <div className="md:w-1/2 flex flex-col items-start gap-4 pt-2">
                        <h4 className="text-[#252B42] text-[20px] font-normal">{product.name}</h4>

                        {/* Rating */}
                        <div className="flex items-center gap-2">
                            <div className="flex text-[#F3CD03]">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={i}
                                        size={18}
                                        fill={i < Math.round(product.rating) ? "currentColor" : "none"}
                                        stroke="currentColor"
                                    />
                                ))}
                            </div>
                            <span className="text-[#737373] text-[14px] font-bold">{product.sell_count} Sold</span>
                        </div>

                        {/* Price & Stock */}
                        <div className="flex flex-col gap-1">
                            <h3 className="text-[#252B42] text-[24px] font-bold">${product.price?.toFixed(2)}</h3>
                            <div className="flex items-center gap-2 text-[14px] font-bold">
                                <span className="text-[#737373]">Availability :</span>
                                <span className={product.stock > 0 ? "text-[#23A6F0]" : "text-red-500"}>
                                    {product.stock > 0 ? "In Stock" : "Out of Stock"}
                                </span>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-[#858585] text-[14px] leading-[20px] pt-4 border-b border-[#BDBDBD] pb-6 mb-2">
                            {product.description}
                        </p>

                        {/* Colors */}
                        <div className="flex gap-2 mb-6">
                            <div className="w-[30px] h-[30px] rounded-full bg-[#23A6F0] cursor-pointer hover:scale-110 transition"></div>
                            <div className="w-[30px] h-[30px] rounded-full bg-[#2DC071] cursor-pointer hover:scale-110 transition"></div>
                            <div className="w-[30px] h-[30px] rounded-full bg-[#E77C40] cursor-pointer hover:scale-110 transition"></div>
                            <div className="w-[30px] h-[30px] rounded-full bg-[#252B42] cursor-pointer hover:scale-110 transition"></div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2">
                            <button className="bg-[#23A6F0] text-white py-[10px] px-[20px] rounded-[5px] font-bold text-[14px] hover:bg-[#1a8cd8] transition">
                                Select Options
                            </button>
                            <button className="w-[40px] h-[40px] rounded-full border border-[#E8E8E8] bg-white flex items-center justify-center hover:bg-gray-50 transition text-[#252B42]">
                                <Heart size={20} />
                            </button>
                            <button className="w-[40px] h-[40px] rounded-full border border-[#E8E8E8] bg-white flex items-center justify-center hover:bg-gray-50 transition text-[#252B42]">
                                <ShoppingCart size={20} />
                            </button>
                            <button className="w-[40px] h-[40px] rounded-full border border-[#E8E8E8] bg-white flex items-center justify-center hover:bg-gray-50 transition text-[#252B42]">
                                <Eye size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductOverview;
