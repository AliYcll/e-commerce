import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const ShopDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const categories = useSelector(state => state.product.categories);

    // Group categories by gender
    const groupedCategories = categories.reduce((acc, category) => {
        // Gender code is typically the first part of the code string (e.g., 'k:...' or 'e:...')
        // Assuming the API returns a 'code' field like 'k:tisort' or 'e:gomlek'
        // If not, we might need to rely on 'gender' field if available, or parse the code.
        // Based on previous experience with similar APIs, 'code' usually starts with gender char.

        const genderCode = category.code?.split(':')[0]; // 'k' or 'e'

        if (genderCode === 'k') {
            acc.women.push(category);
        } else if (genderCode === 'e') {
            acc.men.push(category);
        }
        return acc;
    }, { women: [], men: [] });

    // Helper to sort and deduplicate categories
    const processCategories = (catList) => {
        const unique = [];
        const map = new Map();

        for (const cat of catList) {
            if (!map.has(cat.title)) {
                map.set(cat.title, true);
                unique.push(cat);
            }
        }
        // Sort alphabetically
        return unique.sort((a, b) => a.title.localeCompare(b.title));
    };

    const womenCategories = processCategories(groupedCategories.women);
    const menCategories = processCategories(groupedCategories.men);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const generateLink = (category, gender) => {
        // gender: 'k' -> 'kadin', 'e' -> 'erkek'
        const genderSlug = gender === 'k' ? 'kadin' : 'erkek';
        // slugify title: 'Tişört & Atlet' -> 'tisort-atlet' logic or simpler 'title.toLowerCase()'
        // For simplicity and robustness, lets match the user sample: shop/kadin/ayakkabi/2
        // We will slugify properly if needed, but for now simple lowercase might suffice or we need a slugify helper.
        // Let's implement a simple slugify.

        const slugify = (text) => {
            return text
                .toString()
                .toLowerCase()
                .replace(/\s+/g, '-')           // Replace spaces with -
                .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
                .replace(/\-\-+/g, '-')         // Replace multiple - with single -
                .replace(/^-+/, '')             // Trim - from start of text
                .replace(/-+$/, '');            // Trim - from end of text
        }

        // However, the category object likely has a 'code' like 'k:tisort'. 
        // We can use the part after ':' as the categoryName param if title is too complex.
        // But user requested: shop/:gender/:categoryName/:categoryId
        // Let's use detail from code if title is complex, or slugify title.
        // Let's rely on code's second part for clean slug if available.
        const categorySlug = category.code?.split(':')[1] || slugify(category.title);

        return `/shop/${genderSlug}/${categorySlug}/${category.id}`;
    };

    return (
        <div className="relative group" ref={dropdownRef}>
            <button
                className="flex items-center gap-1 hover:text-[#252B42] text-[#252B42] font-medium transition-colors py-2"
                onClick={() => setIsOpen(!isOpen)}
                onMouseEnter={() => setIsOpen(true)}
            >
                Shop
                <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {(isOpen) && (
                <div
                    className="absolute left-0 top-full pt-2 w-[500px] z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                    onMouseLeave={() => setIsOpen(false)}
                >
                    <div className="bg-white rounded shadow-xl border border-gray-100 p-6 grid grid-cols-2 gap-8">
                        {/* Women Column */}
                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold text-[#252B42] text-lg border-b pb-2">Kadın</h3>
                            <div className="flex flex-col gap-2">
                                {womenCategories.map(cat => (
                                    <Link
                                        key={cat.id}
                                        to={generateLink(cat, 'k')}
                                        className="text-[#737373] hover:text-[#23A6F0] text-sm transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {cat.title}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Men Column */}
                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold text-[#252B42] text-lg border-b pb-2">Erkek</h3>
                            <div className="flex flex-col gap-2">
                                {menCategories.map(cat => (
                                    <Link
                                        key={cat.id}
                                        to={generateLink(cat, 'e')}
                                        className="text-[#737373] hover:text-[#23A6F0] text-sm transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {cat.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShopDropdown;
