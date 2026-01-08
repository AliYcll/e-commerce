import React from 'react';
import { ChevronDown, LayoutGrid, ListCheck } from 'lucide-react';

const ShopFilter = () => {
    return (
        <div className="bg-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Showing results */}
                    <div className="font-bold text-[#737373] text-sm">
                        Showing all 12 results
                    </div>

                    {/* Views */}
                    <div className="flex items-center gap-4">
                        <span className="font-bold text-[#737373] text-sm hidden md:inline">Views:</span>
                        <div className="flex gap-2">
                            <button className="p-3 border border-[#ECECEC] rounded hover:bg-gray-50 flex items-center justify-center text-[#252B42]">
                                <LayoutGrid size={16} fill="currentColor" />
                            </button>
                            <button className="p-3 border border-[#ECECEC] rounded hover:bg-gray-50 flex items-center justify-center text-[#737373]">
                                <ListCheck size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Filter Actions */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                        <div className="relative group w-full sm:w-auto">
                            <button className="flex items-center justify-between gap-2 px-6 py-3 border border-[#DDDDDD] bg-[#F9F9F9] rounded text-[#737373] text-sm w-full">
                                <span>Popularity</span>
                                <ChevronDown size={14} />
                            </button>
                        </div>
                        <button className="px-8 py-3 bg-[#23A6F0] text-white font-bold text-sm rounded hover:bg-[#1a8cd8] transition-colors w-full sm:w-auto">
                            Filter
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopFilter;
