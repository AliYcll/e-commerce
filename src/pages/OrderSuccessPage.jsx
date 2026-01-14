import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import confetti from 'canvas-confetti';

const OrderSuccessPage = () => {
    const history = useHistory();

    useEffect(() => {
        // Fire confetti on mount
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <div className="mb-8">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                </div>
                <h1 className="text-4xl font-bold text-[#252B42] mb-4">Order Received!</h1>
                <p className="text-[#737373] text-lg max-w-md mx-auto">
                    Your order has been received successfully. Thank you!
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <button
                    onClick={() => history.push('/')}
                    className="bg-[#23A6F0] text-white px-8 py-4 rounded font-bold text-lg hover:bg-[#1a8cd8] transition-colors"
                >
                    Go to Home
                </button>
                <button
                    onClick={() => history.push('/my-orders')}
                    className="bg-[#252B42] text-white px-8 py-4 rounded font-bold text-lg hover:bg-[#1f2533] transition-colors"
                >
                    Previous Orders
                </button>
            </div>
        </div>
    );
};

export default OrderSuccessPage;
