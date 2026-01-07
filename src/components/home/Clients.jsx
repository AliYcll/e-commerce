import React from 'react';

const Clients = () => {
    return (
        <section className="bg-[#FAFAFA] py-12">
            <div className="container mx-auto px-4 flex flex-col md:flex-row flex-wrap justify-center md:justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
                {/* Placeholders for client logos */}
                {['hooli', 'lyft', 'piedpiper', 'stripe', 'aws', 'reddit'].map((brand) => (
                    <div key={brand} className="text-4xl font-bold text-[#737373] transform scale-75 md:scale-100 hover:scale-110 transition cursor-pointer">{brand}</div>
                ))}
            </div>
        </section>
    );
};

export default Clients;
