import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProducts, setOffset } from '../../store/actions/productActions';
import { FetchState } from '../../store/reducers/productReducer';
import ProductCard from '../product/ProductCard';

const ShopProducts = () => {
    const dispatch = useDispatch();
    const { categoryId } = useParams();
    const { productList, fetchState, total, limit, offset } = useSelector(state => state.product);
    const topRef = useRef(null);

    const totalPages = Math.ceil(total / limit);
    const currentPage = Math.floor(offset / limit) + 1;

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;

        const newOffset = (page - 1) * limit;
        dispatch(setOffset(newOffset));
        dispatch(fetchProducts(categoryId));

        // Scroll to top of products grid
        topRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // Generate page numbers to show
    // We want to show a window of pages, e.g., [1, 2, 3] or [1, ..., 4, 5, 6, ..., 10]
    // For simplicity given the design: "First", "1", "2", "3", "Next" style.
    // Let's implement a simple logic: show current, prev, next, and always first/last?
    // Or just a sliding window?
    // The design shows "First", 1, 2, 3, "Next". 
    // Let's show surrounding pages.

    const getPageNumbers = () => {
        const pages = [];
        // Standard logic: 1, ..., prev, current, next, ..., total

        // Always add 1
        pages.push(1);

        // Determine start and end of standard window around current page
        let start = Math.max(2, currentPage - 1);
        let end = Math.min(totalPages - 1, currentPage + 1);

        // Adjust window if close to boundaries to consistent size if needed, 
        // but simple neighbor logic is usually fine.

        // Add ellipsis before window if gap exists
        if (start > 2) {
            pages.push('...');
        }

        // Add window
        for (let i = start; i <= end; i++) {
            // Avoid adding 1 again if start is 1 (which it shouldn't be due to Math.max(2, ...))
            // and avoid adding totalPages again if end is totalPages
            if (i !== 1 && i !== totalPages) {
                pages.push(i);
            }
        }

        // Add ellipsis after window if gap exists
        if (end < totalPages - 1) {
            pages.push('...');
        }

        // Always add last page if totalPages > 1 and it hasn't been added yet
        if (totalPages > 1 && !pages.includes(totalPages)) {
            pages.push(totalPages);
        }

        // Filter out duplicates and ensure correct order, especially for '...'
        // This simple logic might add duplicates if currentPage is 1 or totalPages
        // Let's refine the logic to avoid duplicates from the start.
        const uniquePages = [];
        for (const page of pages) {
            if (uniquePages.length === 0 || uniquePages[uniquePages.length - 1] !== page) {
                uniquePages.push(page);
            }
        }

        // Final check to ensure '...' is not adjacent to 1 or totalPages if it shouldn't be
        // and to handle cases where totalPages is small (e.g., 2, 3, 4 pages)
        const finalPages = [];
        for (let i = 0; i < uniquePages.length; i++) {
            const page = uniquePages[i];
            if (page === '...') {
                // Check if '...' is between consecutive numbers, if so, it's redundant
                if (i > 0 && i < uniquePages.length - 1 &&
                    typeof uniquePages[i - 1] === 'number' && typeof uniquePages[i + 1] === 'number' &&
                    uniquePages[i + 1] - uniquePages[i - 1] <= 2) {
                    // Skip this '...'
                } else {
                    finalPages.push(page);
                }
            } else {
                finalPages.push(page);
            }
        }

        // One last pass to ensure no '...' is directly next to 1 or totalPages if it's not needed
        // Example: [1, ..., 2] should be [1, 2]
        // Example: [1, 2, ..., 3] should be [1, 2, 3]
        const cleanedPages = [];
        for (let i = 0; i < finalPages.length; i++) {
            const page = finalPages[i];
            if (page === '...') {
                const prev = finalPages[i - 1];
                const next = finalPages[i + 1];
                if (typeof prev === 'number' && typeof next === 'number' && next - prev === 2) {
                    cleanedPages.push(prev + 1); // Replace '...' with the missing number
                } else if (typeof prev === 'number' && next === undefined && prev === totalPages - 1) {
                    // '...' at the end, but prev is totalPages - 1, so totalPages should be next
                    // This case is handled by the initial push of totalPages
                } else if (typeof next === 'number' && prev === undefined && next === 2) {
                    // '...' at the beginning, but next is 2, so 1 should be prev
                    // This case is handled by the initial push of 1
                } else {
                    cleanedPages.push(page);
                }
            } else {
                cleanedPages.push(page);
            }
        }

        // If totalPages is small, we might end up with [1, ..., totalPages]
        // or [1, 2, ..., totalPages] etc.
        // Let's just generate all numbers if totalPages is small (e.g., <= 5)
        if (totalPages <= 5) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        // Re-implementing a more robust logic for ellipses and neighbors
        const newPages = [];
        newPages.push(1); // Always add the first page

        if (currentPage > 3) {
            newPages.push('...'); // Add ellipsis if current page is far from the beginning
        }

        // Add pages around the current page
        for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
            newPages.push(i);
        }

        if (currentPage < totalPages - 2) {
            newPages.push('...'); // Add ellipsis if current page is far from the end
        }

        if (totalPages > 1) {
            newPages.push(totalPages); // Always add the last page if more than one page
        }

        // Filter out adjacent duplicates of '...' and ensure numbers are not skipped if they are neighbors
        const finalFilteredPages = [];
        for (let i = 0; i < newPages.length; i++) {
            const page = newPages[i];
            const prevPage = finalFilteredPages[finalFilteredPages.length - 1];

            if (page === '...') {
                if (prevPage === '...') {
                    continue; // Skip consecutive '...'
                }
                if (typeof prevPage === 'number' && typeof newPages[i + 1] === 'number' && newPages[i + 1] - prevPage <= 2) {
                    // If '...' is between numbers that are close, replace '...' with the missing number
                    for (let j = prevPage + 1; j < newPages[i + 1]; j++) {
                        finalFilteredPages.push(j);
                    }
                    continue;
                }
            }
            finalFilteredPages.push(page);
        }

        // Remove any '...' that might be at the beginning or end if not needed
        if (finalFilteredPages[0] === '...') finalFilteredPages.shift();
        if (finalFilteredPages[finalFilteredPages.length - 1] === '...') finalFilteredPages.pop();

        // Ensure 1 and totalPages are always present and correctly positioned
        if (finalFilteredPages[0] !== 1) finalFilteredPages.unshift(1);
        if (totalPages > 1 && finalFilteredPages[finalFilteredPages.length - 1] !== totalPages) finalFilteredPages.push(totalPages);

        // Final pass to remove duplicates and ensure order
        const uniqueAndOrdered = [];
        const seen = new Set();
        for (const p of finalFilteredPages) {
            if (!seen.has(p)) {
                uniqueAndOrdered.push(p);
                seen.add(p);
            }
        }

        // One last check for small totalPages to avoid [1, ..., 2] scenarios
        if (totalPages <= 5) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        return uniqueAndOrdered;
    };

    const pageNumbers = getPageNumbers();

    return (
        <div className="bg-white py-12" ref={topRef}>
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

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex justify-center">
                                <div className="flex border border-[#BDBDBD] rounded-lg bg-white overflow-hidden shadow-sm">
                                    <button
                                        onClick={() => handlePageChange(1)}
                                        disabled={currentPage === 1}
                                        className="px-6 py-6 border-r border-[#BDBDBD] text-[#BDBDBD] font-bold text-sm bg-[#F3F3F3] hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        First
                                    </button>

                                    {/* Previous Page Link if visible gap? Maybe just Previous button logic?
                                      The design had specific numbers. Let's render the calculated pages.
                                    */}
                                    {pageNumbers.map((page, index) => (
                                        page === '...' ? (
                                            <button
                                                key={`ellipsis-${index}`}
                                                disabled
                                                className="px-5 py-6 border-r border-[#E9E9E9] text-[#23A6F0] font-bold text-sm bg-white cursor-default"
                                            >
                                                ...
                                            </button>
                                        ) : (
                                            <button
                                                key={page}
                                                onClick={() => handlePageChange(page)}
                                                className={`px-5 py-6 border-r border-[#E9E9E9] font-bold text-sm transition-colors ${currentPage === page
                                                        ? 'bg-[#23A6F0] text-white hover:bg-[#1a8cd8]'
                                                        : 'text-[#23A6F0] hover:bg-gray-50 bg-white'
                                                    }`}
                                            >
                                                {page}
                                            </button>
                                        )
                                    ))}

                                    <button
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        className="px-6 py-6 text-[#23A6F0] font-bold text-sm hover:bg-gray-50 bg-white disabled:text-gray-400 disabled:cursor-not-allowed"
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        )}
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
