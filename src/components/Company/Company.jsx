export function Company() {
    return (
        <div className="w-full">
            <section className=" container m-auto pt-[100px] py-16 p-[10px] text-gray-800" id="haqida">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className='order-2 md:order-1'>
                        <h2 className="text-[22px] sm:text-4xl md:text-left text-center font-bold mb-6">About Our Logistics Services</h2>
                        <p className="mb-4 text-[13px] sm:text-[15px] md:text-left text-center text-lg leading-relaxed">
                            We specialize in efficient and reliable logistics solutions, ensuring that goods are transported safely and on time. With a modern fleet of trucks and a dedicated team of logistics experts, we are committed to providing top-tier services tailored to your needs.
                        </p>
                        <p className="mb-4 text-[13px] sm:text-[15px] md:text-left text-center text-lg leading-relaxed">
                            Our extensive network covers local and international routes, offering comprehensive logistics management from pickup to delivery. We leverage cutting-edge technology to provide real-time tracking, ensuring complete transparency and control over your shipments.
                        </p>
                        <p className="mb-4 text-[13px] sm:text-[15px] md:text-left text-center text-lg leading-relaxed">
                            Partner with us for a seamless logistics experience driven by reliability, innovation, and customer satisfaction.
                        </p>
                    </div>
                    <div className='order-1 md:order-2'>
                        <img
                            src="/fura2.png"
                            alt="Logistics Truck"
                            className="rounded-lg  object-cover w-full h-full"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

