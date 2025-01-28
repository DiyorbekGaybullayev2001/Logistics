import logo from '../../../public/logo.jpg';
import { LuFacebook, LuInstagram, LuLocateFixed, LuPhone, LuYoutube } from "react-icons/lu";
import { LiaTelegram } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";



const Footer = () => {
    return (
        <>
            <footer id='boglanish' className='w-full h-[100%] pt-[70px] '>
                <div className='container  m-auto grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-3  w-full'>

                    <div className=' h-full '>
                        <img src={logo} alt="" className='rounded-[50%] h-[70px] w-[70px] m-auto'/>
                    </div>

                    <div className=' sm:flex h-full p-[10px] m-auto'>
                        {/* <h1 className='text-[30px] font-serif font-semibold'>Contact</h1> */}
                        <div className='flex items-center mt-[10px] pl-[10px]'>
                            <LuPhone className='text-[#4762FF] text-[30px]'/>
                            <div className='grid grid-cols-1'>
                                <span className='ml-3'> +998919989488</span>
                                <span className='ml-3'> +998919989900</span>
                            </div>
                        </div>
                        <div className='flex items-center mt-[10px] pl-[10px]'>
                            {/* <LuPhone className='text-[#4762FF]'/> */}
                            {/* <span className='ml-3'> +998919989988</span> */}
                        </div>
                        {/* <div className='flex items-center mt-[10px]'>
                            <LuPhone className='text-[#4762FF]'/>
                            <span className='ml-3'> +998919989988</span>
                        </div>  */}
                    </div>

                    <div className='h-full flex text-[20px] p-[10px] m-auto'>
                      {/* <h1 className='text-[20px] font-serif font-semibold'>Our social networks</h1> */}
                        <div className='items-center ml-[10px] '>
                            <a href="#" className='ml-3'><LuInstagram className='text-[red] text-[25px]'/></a>
                        </div> 
                        <div className=' items-center ml-[10px] '>
                            <a href="#" className='ml-3'><LuFacebook className='text-[#2338f6] text-[25px]'/></a>
                        </div> 
                        <div className=' items-center ml-[10px] '>
                            <a href="#" className='ml-3'> <LuYoutube className='text-[#f3cc32] text-[25px]'/></a>
                        </div> 
                        <div className='items-center ml-[10px] '>
                            <a href="#" className='ml-3'><LiaTelegram className='text-[#354ff6] text-[25px]'/></a>
                        </div> 
                    </div>
                    
                </div>

                <div className='container mt-[60px] border-t-2 m-auto text-center pt-[20px] pb-2'>
                     © 2024. All rights reserved
                </div>
            </footer>
        </>
    )
}

export default Footer
