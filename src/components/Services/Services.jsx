export function Services() {
    return (
        <section className="relative container mx-auto w-full bg-gray-200 py-8 px-6">
            {/* Background Shapes */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-red-500 rounded-full opacity-20"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-red-500 rounded-full opacity-20"></div>

            <div className="flex mx-10 flex-col md:flex-row items-center justify-between relative z-10">
                {/* Text Content */}
                <div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-2">GET IN TOUCH</h2>
                    <p className="text-gray-600 mb-4">
                        At Linestar, we pride ourselves on our 24/7 accessibility.
                    </p>
                    <a
                        href="#"
                        className="text-red-500 font-medium hover:underline inline-flex items-center"
                    >
                        Apply as a driver <span className="ml-2">→</span>
                    </a>
                </div>

                {/* Contact Button */}
                <div>
                    <button className="bg-red-100 text-gray-800 px-4 py-2 rounded hover:bg-red-200 transition">
                        Contact us
                    </button>
                </div>
            </div>
        </section>
    );
};