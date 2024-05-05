import { menus } from '@/data/menus';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Menu from '../public/Menu.svg'



const Navbar = () => {
    const [pathnameState, setPathnameState] = useState('/');
   
    const router = useRouter();
    
    useEffect(() => {
      setPathnameState(router.pathname);
    }, []);
  return (
    <div className='absolute z-10 w-full bg-gray bg-opacity-50 backdrop-blur-sm' >
    <div className=' flex justify-between items-center  w-full px-6 lg:py-12 md:py-6 py-4'>
        <div className='w-full lg:pl-12 pl-2 uppercase text-white font-extrabold font-Robotomono xl:text-4xl lg:text-3xl text-2xl'>
            aufal marom._
        </div>
        <nav className='hidden md:flex justify-end lg:space-x-15 space-x-10 pr-6 w-full'>
        {
                  menus.map(((item, index) => {
                    return (
                      item.href === pathnameState ? 
                        <p key={index} className=" lg:text-xl text-base font-Robotomono text-right font-medium text-white  cursor-auto">
                          {item.name}
                        </p>
                      : 
                        <Link key={index} href={item.href} className="text-base font-Robotomono lg:text-xl  text-right font-medium text-white  hover:text-gray-700 ">
                        {item.name}
                        </Link>
                    )
                  }))
                }
                </nav>
                <div className='text-white md:hidden'>
            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"/>
            </svg>
            </div>
        
        
        </div>
    </div>
  )
}

export default Navbar