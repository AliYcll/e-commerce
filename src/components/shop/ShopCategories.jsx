import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ShopCategories = () => {
    const categories = useSelector(state => state.product.categories);

    // Sort by rating (descending) and take top 5
    const topCategories = [...categories]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5);

    const generateLink = (category) => {
        const genderCode = category.code?.split(':')[0];
        const genderSlug = genderCode === 'k' ? 'kadin' : 'erkek';
        const categorySlug = category.code?.split(':')[1] || category.title.toLowerCase();

        return `/shop/${genderSlug}/${categorySlug}/${category.id}`;
    };

    return (
        <div className="bg-[#FAFAFA] pb-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {topCategories.map((cat) => (
                        <Link
                            key={cat.id}
                            to={generateLink(cat)}
                            className="relative aspect-square md:aspect-[205/223] overflow-hidden group cursor-pointer block"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: `url(${cat.img})` }}
                            />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 bg-black/20 group-hover:bg-black/30 transition-colors">
                                <h5 className="font-bold text-base mb-2 uppercase tracking-wide">{cat.title}</h5>
                                <p className="text-sm font-normal">Rating: {cat.rating}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShopCategories;
