const Services = () => (
    <section id="services" className="bg-gray-100 p-16">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center underline mb-16">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <i className="fas fa-cogs text-4xl text-gray-800 mb-4"></i>
                    <h3 className="text-2xl font-bold mb-2">Service One</h3>
                    <p className="text-lg">Description of service one. We provide top-notch solutions to meet your needs.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <i className="fas fa-chart-line text-4xl text-gray-800 mb-4"></i>
                    <h3 className="text-2xl font-bold mb-2">Service Two</h3>
                    <p className="text-lg">Description of service two. Our team ensures the best results for your business.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <i className="fas fa-users text-4xl text-gray-800 mb-4"></i>
                    <h3 className="text-2xl font-bold mb-2">Service Three</h3>
                    <p className="text-lg">Description of service three. We offer comprehensive support and solutions.</p>
                </div>
            </div>
        </div>
    </section>
);

export default Services;