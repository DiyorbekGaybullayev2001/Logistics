import { useState } from 'react'
import mainimg from '../../../public/mainimg.jpg'
import ContactModal from './../Modal/ContactModal';
const Home = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className='w-full  sm:h-[100vh] mx-auto bg-[url("/imgs10.png")]  bg-no-repeat bg-cover ' >
                <div className=' w-[100%] m-auto h-full bg-[#00000075]'>
                    <div className='container font-montserrat m-auto text-white p-[10px] md:p-[30px]'>
                        <h1 className='text-[25px] font-montserrat sm:w-[400px] md:w-[600px] leading-none sm:text-[40px] md:text-[60px]  font-semibold mt-[100px] '>Affordable truck service</h1>
                        <p className='text-[15px]  md:w-[700px] lg:w-[1000px] sm:text-[20px] mt-[50px]'>Affordable truck services are crucial for businesses and individuals who rely on transportation for goods and equipment. Finding a service that is both reliable and affordable can greatly impact operational costs and overall efficiency. The key to an affordable truck service lies in understanding your specific needs. Whether it's for local deliveries or long-haul transport, services that offer a range of pricing options tailored to the type of cargo and distance can be beneficial.
                        {/* To find affordable truck services, it's important to consider the reputation of the company. Reviews and recommendations from other businesses or individuals who have used similar services can give you insight into the quality and reliability. Additionally, comparing multiple providers will help you gauge the price-to-quality ratio. Some services may offer discounts for bulk bookings, repeat customers, or long-term contracts, making them more budget-friendly for frequent use. */}
                        </p>
                        <div className='items-center my-2 mt-[40px] mb-[20px]'>
                            <button className='w-[200px] sm:w-[300px] py-2 sm:py-3 text-[20px] rounded-md hover:border-[#4762FF] hover:border hover:bg-[#3851de] transition-all duration-300 bg-[#4762FF] text-white' onClick={() => setOpen(true)}>Contact</button>
                        </div>
                    </div>

                    {/* <div className='mt-[50px] relative xl:w-[1600px] xl:h-[700px] lg:w-[1600px] lg:h-[700px] md:w-[1600px] md:h-[700px] sm:w-[1000px] sm:h-[600px] w-[600px] h-[250px] '>
                        <img src={mainimg} alt="img" className='absolute h-full xl:right-[-600px] lg:right-[-400px] md:right-[-300px] sm:right-[-150px]  right-[-20px]'/>
                    </div> */}

                </div>
                {/* <div className='flex relative  md:flex-row md:pt-0 pt-10 items-center'>
                    <div className='  absolute right-[0px]'>
                        <div className='text-[40px] md:text-[60px] my-5 text-center font-semibold'>
                            Affordable truck service
                        </div>
                        <p className='text-center text-lg md:text-xl py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam cum assumenda dolor adipisci commodi blanditiis obcaecati quibusdam quidem nesciunt temporibus aut molestias ipsa, dolorum exercitationem natus maxime architecto numquam.</p>
                        <div className='flex justify-center items-center my-2'>
                            <button className='px-4 py-2 rounded-md hover:border-[#4762FF] hover:border hover:bg-[#3851de] transition-all duration-300 bg-[#4762FF] text-white' onClick={() => setOpen(true)}>Aloqaga chiqing</button>
                        </div>
                    </div>
                    <div className='float-end order-1 md:order-2 absolute md:w-[1200px] h-[100%] top-[-350px]'>
                        <img src={mainimg} style={{ mixBlendMode: "multiply" }} className='w-full ' alt="" />
                    </div>
                </div> */}
            </div>
            {
                open && <ContactModal open={open} close={() => setOpen(false)} />
            }
        </>
    )
}

export default Home
