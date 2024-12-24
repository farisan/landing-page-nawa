import { useEffect, useRef, useState } from "react";

const InstagramReview = (data) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden  max-w-md mx-auto transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center p-4">
                <img className="w-12 h-12 rounded-full" src='https://placehold.co/100x100?text=User+1&font=roboto' alt={`Profile picture of john doe}`} />
                <div className="ml-4">
                    <h2 className="text-lg font-bold">john_doe</h2>
                </div>
            </div>
            <img className="w-full h-120 object-cover" src='https://placehold.co/600x400?text=Testimoni&font=roboto' alt={`Post by john doe`} />
            <div className="p-4">
                <p className="text-gray-700 mb-4">Had an amazing time at the beach today! The weather was perfect and the water was so refreshing.</p>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <i className="fas fa-heart text-red-500 mr-2"></i>
                        <span>120</span>
                    </div>
                    <div className="flex items-center">
                        <i className="fas fa-comment text-gray-500 mr-2"></i>
                        <span>10</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

const Review = () => {
    const [isVisible, setIsVisible] = useState(false);
    const aboutRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const top = aboutRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (top < windowHeight - 100) {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <section id="review" className="flex-col justify-center items-center w-full bg-white p-16">
            <h2 className="text-4xl font-bold font-poppins underline text-center xl:mb-auto sm:mb-16">Review</h2>
            <div ref={aboutRef} className={`flex flex-wrap justify-center items-center gap-10 fade-in ${isVisible ? 'visible' : ''}`}>
                <div className="flex-none">
                    <InstagramReview />
                </div>
                <div className="flex-none lg:mt-60">
                    <InstagramReview />
                </div>
            </div>
        </section>
    )
}

export default Review;