import React from 'react'

function Navbar() {
  return (
    <div>
        <div className='bg-[#53BF9D]'>
            <ul className='list-type-none flex items-center justify-evenly px-3 py-3 text-white sm:text-2xl sm:py-4 md:text-lg'>
                <li>
                <i className="fa-solid fa-location-dot"></i>
                </li>
            
                    <li>
                        <input className='bg-[#53BF9D] placeholder:text-white outline-white w-[300px] indent-2 rounded-full md:py-2 font-bold text-xs' type='text' placeholder='Hawrah Fatak Nirala ,Gorakhpur, Uttar Pradesh....' />
                    </li>
                <div className='relative'>
                <li>
                <i className="fa-sharp fa-solid fa-bell"></i>
                <div className='absolute rounded-full text-xs bg-red-500 top-[-5px] right-[-8px] px-1'>
                <span>0</span>
                </div>
                </li>
                </div>
              
                <li>
                <i className=" fa-solid fa-cart-plus"></i>
               
                </li>
            </ul>
        </div>
        <div className='flex  items-center justify-evenly bg-[#53BF9D] px-3 py-3 '>
            <div className='md:text-lg sm:text-xs pt-4 bg-white rounded-full w-[350px] flex px-3 py-3 items-center '>
            <i className="text-[#53BF9D] mr-2  fa-solid fa-magnifying-glass"></i>
            <input className='w-full mx-3  outline-none  placeholder:text-black font-semibold indent-8 ' type='text' placeholder='Search for Products....' />
            </div>
            <div className='text-white'>
            <i className="fa-solid fa-microphone sm:text-2xl md:text-lg"></i>
            </div>
        </div>
    </div>
  )
}

export default Navbar
