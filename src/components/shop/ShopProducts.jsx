import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../store/actions/productActions';
import { FetchState } from '../../store/reducers/productReducer';
import ProductCard from '../product/ProductCard';

const ShopProducts = () => {
    const dispatch = useDispatch();
    const { productList, fetchState, total } = useSelector(state => state.product);

    // Fetch is now handled by ShopPage based on URL params

    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4">
                {/* Loading State */}
                {fetchState === FetchState.FETCHING && (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#23A6F0]"></div>
                    </div>
                )}

                {/* Product Grid */}
                {fetchState === FetchState.FETCHED && (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-24">
                            {productList.length > 0 ? (
                                productList.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))
                            ) : (
                                <div className="col-span-full text-center text-gray-500 py-10">
                                    No products found.
                                </div>
                            )}
                        </div>

                        {/* Pagination (Keeping static for now as per instructions, can be dynamic later) */}
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
                    </>
                )}

                {/* Error State */}
                {fetchState === FetchState.FAILED && (
                    <div className="text-center text-red-500 py-20 font-bold text-xl">
                        Failed to load products. Please try again later.
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShopProducts;
