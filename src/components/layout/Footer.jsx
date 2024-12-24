const Footer = () => {
    return (
        <>
            <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1f2937" fillOpacity="1" d="M0,192L60,176C120,160,240,128,360,138.7C480,149,600,203,720,213.3C840,224,960,192,1080,170.7C1200,149,1320,139,1380,133.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            </div>
            <footer className="bg-gray-800 text-white py-8 sm:px-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-between">
                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <h2 className="text-2xl font-bold mb-4">About Us</h2>
                            <p className="text-gray-400">We are a team of passionate individuals dedicated to providing the best services and products to our customers. Our mission is to make a positive impact in the world through our work.</p>
                        </div>
                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
                            <ul>
                                <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
                                <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white transition duration-300">About</a></li>
                                <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white transition duration-300">Services</a></li>
                                <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/3">
                            <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white transition duration-300"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="text-gray-400 hover:text-white transition duration-300"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="text-gray-400 hover:text-white transition duration-300"><i className="fab fa-instagram"></i></a>
                                <a href="#" className="text-gray-400 hover:text-white transition duration-300"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-center text-gray-400">
                        <p>&copy; 2023 Your Company. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;