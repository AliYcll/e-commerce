import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const PagesPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow flex flex-col items-center justify-center bg-[#FAFAFA] py-20">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-[#252B42] mb-6">Pages Page</h1>
                    <p className="text-[#737373] text-2xl font-medium">is coming soon</p>
                    <div className="mt-8 w-16 h-1 bg-[#23A6F0] mx-auto rounded"></div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PagesPage;
