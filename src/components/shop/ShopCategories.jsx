import React from 'react';

// Images
import cat1 from '../../assets/images/shop/cat-1.png';
import cat2 from '../../assets/images/shop/cat-2.png';
import cat3 from '../../assets/images/shop/cat-3.png';
import cat4 from '../../assets/images/shop/cat-4.png';
import cat5 from '../../assets/images/shop/cat-5.png';

const categories = [
    {
        id: 1,
        title: 'CLOTHS',
        count: '5 Items',
        image: cat1
    },
    {
        id: 2,
        title: 'CLOTHS',
        count: '5 Items',
        image: cat2
    },
    {
        id: 3,
        title: 'CLOTHS',
        count: '5 Items',
        image: cat3
    },
    {
        id: 4,
        title: 'CLOTHS',
        count: '5 Items',
        image: cat4
    },
    {
        id: 5,
        title: 'CLOTHS',
        count: '5 Items',
        image: cat5
    },
];

const ShopCategories = () => {
    return (
        <div className="bg-[#FAFAFA] pb-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {categories.map((cat) => (
                        <div key={cat.id} className="relative aspect-square md:aspect-[205/223] overflow-hidden group cursor-pointer">
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: `url(${cat.image})` }}
                            />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
                                <h5 className="font-bold text-base mb-2">{cat.title}</h5>
                                <p className="text-sm font-normal">{cat.count}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShopCategories;
