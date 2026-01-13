import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ChevronDown, LayoutGrid, ListCheck, Search } from 'lucide-react';
import { useHistory, useLocation } from 'react-router-dom';

const ShopFilter = () => {
    const history = useHistory();
    const location = useLocation();
    const { filter, sort, total } = useSelector(state => state.product);

    const [localFilter, setLocalFilter] = useState(filter);

    // Update local filter if active filter changes from URL/Redux
    useEffect(() => {
        setLocalFilter(filter);
    }, [filter]);

    const updateUrl = (key, value) => {
        const queryParams = new URLSearchParams(location.search);
        if (value) {
            queryParams.set(key, value);
        } else {
            queryParams.delete(key);
        }
        // Reset page to 1 on filter/sort change
        queryParams.set('page', 1);

        history.push({ search: queryParams.toString() });
    };

    const handleFilterSubmit = (e) => {
        e.preventDefault();
        updateUrl('filter', localFilter);
    };

    const handleSortChange = (e) => {
        const val = e.target.value;
        updateUrl('sort', val);
    };

    return (
        <div className="bg-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Showing results */}
                    <div className="font-bold text-[#737373] text-sm">
                        Showing all {total} results
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
                        {/* Search Input */}
                        <form onSubmit={handleFilterSubmit} className="relative w-full sm:w-auto flex">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="border border-[#DDDDDD] bg-[#F9F9F9] rounded-l px-4 py-3 text-sm focus:outline-none focus:border-[#23A6F0] w-full"
                                value={localFilter}
                                onChange={(e) => setLocalFilter(e.target.value)}
                            />
                            <button type="submit" className="bg-[#23A6F0] text-white px-4 rounded-r hover:bg-[#1a8cd8]">
                                <Search size={16} />
                            </button>
                        </form>

                        {/* Sort Select */}
                        <div className="relative group w-full sm:w-auto">
                            <select
                                className="appearance-none flex items-center justify-between gap-2 px-6 py-3 border border-[#DDDDDD] bg-[#F9F9F9] rounded text-[#737373] text-sm w-full cursor-pointer focus:outline-none focus:border-[#23A6F0] pr-10"
                                value={sort}
                                onChange={handleSortChange}
                            >
                                <option value="">Popularity</option>
                                <option value="price:asc">Price: Low to High</option>
                                <option value="price:desc">Price: High to Low</option>
                                <option value="rating:asc">Rating: Low to High</option>
                                <option value="rating:desc">Rating: High to Low</option>
                            </select>
                            <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#737373]" />
                        </div>

                        <button
                            className="px-8 py-3 bg-[#23A6F0] text-white font-bold text-sm rounded hover:bg-[#1a8cd8] transition-colors w-full sm:w-auto"
                            onClick={handleFilterSubmit}
                        >
                            Filter
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopFilter;
