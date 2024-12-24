import { useEffect, useRef, useState } from "react";


const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "https://placehold.co/400x300?text=Image+1",
        "https://placehold.co/400x300?text=Image+2",
        "https://placehold.co/400x300?text=Image+3"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="w-full md:w-1/2 rounded-lg shadow-lg mb-8 md:mb-0 md:mx-8 transform hover:scale-105 transition-transform duration-500">
            <img src={images[currentIndex]} alt={`Carousel image ${currentIndex + 1}`} className="w-full rounded-lg" />
        </div>
    );
};


const About = ({ imagePosition = 'left', label = false }) => {
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
        <section id="about" className="bg-white p-16">
            <div ref={aboutRef} className={`container w-full mx-auto px-4 fade-in ${isVisible ? 'visible' : ''} container mx-auto px-4 fade-in`}>
                {label && <h2 className="text-4xl font-bold font-poppins text-center underline mb-16">About Us</h2>}
                {imagePosition === 'left' && (
                    <div className="flex flex-col md:flex-row items-center gap-2">
                        <Carousel />
                        <div className="md:w-full">
                            <p className="md:text-base xl:text-lg mb-4">We are a leading company in our industry, committed to providing top-notch services to our clients. Our team of experts works tirelessly to ensure customer satisfaction and deliver exceptional results.</p>
                            <p className="md:text-base xl:text-lg mb-4">Our mission is to innovate and lead the market with our cutting-edge solutions. We believe in the power of technology and strive to integrate it into every aspect of our business to enhance efficiency and effectiveness.</p>
                            <p className="md:text-base xl:text-lg">Join us on our journey to excellence and experience the difference we bring to the table.</p>
                        </div>
                    </div>
                )}

                {imagePosition === 'right' && (
                    <div className="flex flex-col md:flex-row sm:flex-col-reverse items-center">
                        <div className="md:w-full">
                            <p className="md:text-base xl:text-lg mb-4">We are a leading company in our industry, committed to providing top-notch services to our clients. Our team of experts works tirelessly to ensure customer satisfaction and deliver exceptional results.</p>
                            <p className="md:text-base xl:text-lg mb-4">Our mission is to innovate and lead the market with our cutting-edge solutions. We believe in the power of technology and strive to integrate it into every aspect of our business to enhance efficiency and effectiveness.</p>
                            <p className="md:text-base xl:text-lg">Join us on our journey to excellence and experience the difference we bring to the table.</p>
                        </div>
                        <Carousel />
                    </div>
                )}
            </div>
        </section>
    );
};


export default About;