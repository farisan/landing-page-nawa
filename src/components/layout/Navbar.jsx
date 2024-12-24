import React, { useEffect, useState } from 'react'

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const smoothScroll = (targetId, duration = 1000) => {
        const target = document.getElementById(targetId);
        if (!target) {
            console.error(`Element with ID "${targetId}" not found.`);
            return;
        }

        const start = window.scrollY; // Posisi awal
        const targetPosition = target.getBoundingClientRect().top; // Jarak ke elemen target
        const startTime = performance.now();

        const animateScroll = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1); // Progress dari 0 ke 1
            const ease = progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2; // Ease-in-out cubic

            window.scrollTo(0, start + targetPosition * ease);

            if (elapsedTime < duration) {
                requestAnimationFrame(animateScroll);
            }
        };

        requestAnimationFrame(animateScroll);
    };

    const handleScroll = (e, targetId) => {
        e.preventDefault(); // Mencegah navigasi default
        smoothScroll(targetId, 1500);
    };


    return (
        <nav className={`navbar bg-gray-800 py-4 sm:px-6 fixed w-full top-0 z-50 ${isScrolled ? 'scrolled' : ''} shadow-md`} >
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold font-poppins">CompanyLogo</div>
                <div className="hidden xl:flex space-x-5">
                    <a href="#about" className="font-poppins text-white" onClick={(e) => handleScroll(e, 'about')}>About</a>
                    <a href="#history" className="font-poppins text-white" onClick={(e) => handleScroll(e, 'history')}>History</a>
                    <a href="#services" className="font-poppins text-white" onClick={(e) => handleScroll(e, 'services')}>Services</a>
                    <a href="#review" className="font-poppins text-white" onClick={(e) => handleScroll(e, 'review')}>Review</a>
                    <a href="#client" className="font-poppins text-white" onClick={(e) => handleScroll(e, 'client')}>Client</a>
                </div>
                <div className="xl:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </div>
            {isOpen && (
                <>
                    <br className="xl:hidden" />
                    <div className="xl:hidden">
                        <a href="#about" className="block font-poppins text-white py-2" onClick={(e) => handleScroll(e, 'about')}>About</a>
                        <a href="#history" className="font-poppins text-white" onClick={(e) => handleScroll(e, 'history')}>History</a>
                        <a href="#services" className="block font-poppins text-white py-2" onClick={(e) => handleScroll(e, 'services')}>Services</a>
                        <a href="#review" className="block font-poppins text-white py-2" onClick={(e) => handleScroll(e, 'review')}>Review</a>
                        <a href="#client" className="block font-poppins text-white py-2" onClick={(e) => handleScroll(e, 'client')}>Client</a>
                    </div>
                </>
            )}
        </nav>
    )
}
