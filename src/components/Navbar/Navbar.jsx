import logo from '/logo.jpg'
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import ContactModal from './../Modal/ContactModal';
import { useEffect, useState } from 'react';


export function Navbar() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(false);

    useEffect(() => {
        !active && window.addEventListener("scroll", () => {
            setActive(false)
        })
    }, [])

    return (
        <>
            <nav className="z-30 sticky bg-white shadow-md top-0 hidden md:flex   m-auto items-center py-3 w-full">
            <div className=' bg-white container top-0 hidden md:flex justify-between  m-auto items-center  w-full'>
                <a href="/">
                    <div className=''>
                        <img src={logo} className='cursor-pointer rounded-full w-[70px] h-[70px] object-cover' alt="" />
                    </div>
                </a>
               
                <div className='flex gap-2'>
                <ul className='flex gap-10 font-serif items-center'>
                    <li>
                        <a className='hover:text-[#4762FF] text-xl' href="/">Home</a>
                    </li>
                    <li>
                        <a className='hover:text-[#4762FF] text-xl' href="#haqida">About</a>
                    </li>
                    <li>
                        <a className='hover:text-[#4762FF] text-xl' href="#aloqa">Contact</a>
                    </li>
                    <li>
                        <a className='hover:text-[#4762FF] text-xl' href="#boglanish">Our social networks</a>
                    </li>
                    <button className='p-4  rounded-md hover:border-[#4762FF] hover:border hover:bg-[#3851de] transition-all duration-300 bg-[#4762FF] text-white' onClick={() => setOpen(true)}>Contact</button>
                </ul>
                    {/* <button className='px-4 py-2 rounded-md border hover:bg-red-600 hover:text-white transition-all duration-300 border-red-600 text-red-600 bg-white'>Tugma</button> */}
                </div>
            </div>
            </nav>

            <div className='flex flex-col md:hidden z-30 fixed w-full top-0 justify-center bg-[#4d68ffda]'>
                <div className='flex justify-between items-center px-2 py-1'>
                        <div className=''>
                            <a href="/">
                                <img src={logo} className='w-[60px] h-[60px] object-cover rounded-full' alt="Responsive Menu Image" />
                            </a>
                        </div>
                    <button onClick={() => setActive(!active)} className='h-[60px] '>
                        <IoMenu color='white' size={40} />
                    </button>
                </div>
                {
                    active && <div className={`flex h-[50vh] w-full bg-[#4d68ffda] text-white sticky top-0 `}>
                        <div className='p-4 w-full justify-evenly items-center'>
                            
                            <ul className='flex gap-2 flex-col items-center justify-center text-center'>
                                <li className='hover:bg-white w-full hover:text-[#4d68ffda] p-1 rounded-lg'>
                                    <a className='text-xl' href="/" onClick={() => setActive(true)}>Home</a>
                                </li>
                                <li className='hover:bg-white w-full hover:text-[#4d68ffda] p-1 rounded-lg'>
                                    <a className=' text-xl' href="#haqida" onClick={() => setActive(false)}>About</a>
                                </li>
                                <li className='hover:bg-white w-full hover:text-[#4d68ffda] p-1 rounded-lg'> 
                                    <a className=' text-xl' href="#aloqa" onClick={() => setActive(false)}>Contact</a>
                                </li>
                                <li className='hover:bg-white w-full hover:text-[#4d68ffda] p-1 rounded-lg'>
                                    <a className=' text-xl' href="#boglanish" onClick={() => setActive(false)}>Our social networks</a>
                                </li>
                            </ul>
                            {/* <div className='flex gap-2 flex-col'>
                                <button className='px-4 py-2 rounded-md hover:text-red-600 hover:border-red-600 hover:border hover:bg-white transition-all duration-300 bg-red-600 text-white' onClick={() => {
                                    setOpen(true);
                                    setActive(false);
                                }}>Bog'lanish</button>
                                <button className='px-4 py-2 rounded-md border hover:bg-red-600 hover:text-white transition-all duration-300 border-red-600 text-red-600 bg-white' onClick={() => setActive(false)}>Tugma</button>
                            </div> */}
                        </div>
                    </div>

                }
            </div>
            {
                open && <ContactModal open={open} close={() => setOpen(false)} />
            }
        </>
    )
}


