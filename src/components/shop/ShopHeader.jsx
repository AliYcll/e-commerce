import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ShopHeader = () => {
  return (
    <div className="bg-[#FAFAFA] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-center">
            {/* Title */}
            <h2 className="text-[#252B42] font-bold text-2xl text-center md:text-left">
                Shop
            </h2>

            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-4 py-2">
                <Link to="/" className="text-[#252B42] font-bold text-sm hover:text-[#23A6F0]">
                    Home
                </Link>
                <ChevronRight className="text-[#BDBDBD]" size={16} />
                <span className="text-[#BDBDBD] font-bold text-sm">
                    Shop
                </span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ShopHeader;
