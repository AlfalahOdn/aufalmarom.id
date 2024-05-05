import React from 'react'
import { ComputerDesktopIcon } from "@heroicons/react/24/outline"
import { services } from '@/data/services'

const Service =() => {
    return(
  <div className='bg-gradient-to-b from-gray-900 to-black w-full'>
    <div className='w-full  pt-12 flex justify-center'>
        <h1 className=' text-center  font-extrabold text-7xl mt-7 text-white font-Robotomono'>My Expertise</h1>
    </div>
    <div className='flex bg-red p-32 justify-center pt-24 '>
      <div className='grid grid-cols-4 divide-x-2 border-solid border-2 rounded-md border-white'>
      {services.map((service: any, index: any) => (
        <div key={index}>
        <div className=' w-96  p-16 pb-14  text-white '>
         <div className='flex ml-2 mb-7 '>
           <div><service.icon className="h-12 w-12 mr-6" aria-hidden="true"/></div>
           <div className='font-Robotomono font-bold text-3xl leading-8 justify-center  uppercase'>{service.name}</div>
         </div>
         <div className='ml-4 text-2xl font-Robotomono text-left'>
           E{service.description}
         </div>
        </div>
 
        </div>
        ))}
      </div>
</div>

  </div>

)
}


export default Service