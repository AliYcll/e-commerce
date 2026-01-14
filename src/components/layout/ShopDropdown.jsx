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
        const genderSlug = gender === 'k' ? 'kadin' : 'erkek';

        const slugify = (text) => {
            if (!text) return "";
            return text
                .toString()
                .toLowerCase()
                .replace(/ğ/g, 'g')
                .replace(/ü/g, 'u')
                .replace(/ş/g, 's')
                .replace(/ı/g, 'i')
                .replace(/i̇/g, 'i')
                .replace(/ö/g, 'o')
                .replace(/ç/g, 'c')
                .replace(/\s+/g, '-')     // Replace spaces with -
                .replace(/[^\w-]+/g, '')  // Remove all non-word chars
                .replace(/--+/g, '-')     // Replace multiple - with single -
                .replace(/^-+/, '')       // Trim - from start of text
                .replace(/-+$/, '');      // Trim - from end of text
        };

        const categorySlug = slugify(category.title);

        return `/shop/${genderSlug}/${categorySlug}`;
    };

    return (
        <div className="relative group" ref={dropdownRef}>
            <Link
                to="/shop"
                className="flex items-center gap-1 hover:text-[#252B42] text-[#252B42] font-medium transition-colors py-2"
                onClick={() => setIsOpen(!isOpen)}
                onMouseEnter={() => setIsOpen(true)}
            >
                Shop
                <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </Link>

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
