import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChevronDown, LayoutGrid, ListCheck, Search } from 'lucide-react';
import { setFilter, setSort, fetchProducts } from '../../store/actions/productActions';
import { useParams } from 'react-router-dom';

const ShopFilter = () => {
    const dispatch = useDispatch();
    const { filter, sort, total } = useSelector(state => state.product);
    const { categoryId } = useParams();

    // Local state for filter input to debounce or wait for button click (Task says: "if client text in filter input it should be hold in the filter state")
    // Note: Task implies text is held in state. "on filter state change it should create a get request".
    // So update global state on change or submit. Let's do on submit for better UX or on change with debounce.
    // Task says: "if client text in filter input it should be hold in the filter state" -> implies controlled input.
    // "on filter state change it should create a get request" -> implies useEffect on state change.

    // Let's use local state for input and dispatch on change (maybe debounce) or form submit.
    // Given the UI shows a "Filter" button, let's assume valid flow is: Type -> Click Filter -> Update State.
    // But typical e-commerce might hold 'text' in local and 'filter' in global.
    // Let's stick to: Text -> setFilter -> fetchProducts by Page logic or here.

    // We will update standard input value locally and dispatch on blur or change. 
    // Wait, the UI has a "Filter" button. It probably is for the Sort/Filter combo or just Filter.
    // Let's make the "Filter" button trigger the fetch with current local input?
    // Actually the task says: "on filter state change it should create a get request".
    // This means `setFilter` should be dispatched, and `fetchProducts` should reaction to it.

    const [localFilter, setLocalFilter] = useState(filter);

    const handleFilterSubmit = (e) => {
        e.preventDefault();
        dispatch(setFilter(localFilter));
        // We can trigger fetch here explicitly or rely on ShopPage effect. 
        // Task: "If one of the parameters ... changed, a new GET request should be sent".
        // Let's trigger it directly here for clarity, passing current categoryId
        dispatch(fetchProducts(categoryId));
    };

    const handleSortChange = (e) => {
        const val = e.target.value;
        dispatch(setSort(val));
        dispatch(fetchProducts(categoryId));
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
