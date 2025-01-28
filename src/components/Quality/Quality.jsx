const Quality = () => {
    const features = [
        {
            icon: "🚗",
            title: "Dedicated drivers towards",
        },
        {
            icon: "🛡️",
            title: "Non stop support and safety",
        },
        {
            icon: "🎧",
            title: "Constant communication",
        },
        {
            icon: "💡",
            title: "Innovative methods",
        },
        {
            icon: "⚙️",
            title: "Competent at handling complexities",
        },
    ];

    return (
        <section className="container m-auto pt-[100px] h-auto px-6 bg-white">
            <div className="text-center">
                <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8">Why choose us</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-6 border rounded-lg shadow-md hover:shadow-lg transition"
                        >
                            <div className="text-4xl text-red-500 mb-4">{feature.icon}</div>
                            <p className="text-gray-700 text-sm font-semibold">
                                {feature.title}
                            </p>
                        </div>
                    ))}
                </div>
               
            </div>
        </section>
    );
};

export default Quality;