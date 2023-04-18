import React from 'react'
import { useState } from 'react';
import {BsChevronCompactLeft} from 'react-icons/bs'
import {BsChevronCompactRight} from 'react-icons/bs'
function Silder() {
    const slides = [
        {
            url: 'https://img.freepik.com/free-psd/international-year-fruits-vegetables-banner-template_23-2148866051.jpg?w=2000'
        },
        {
            url:'https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Fresh-and-healthy-vegetables-banner-design-template-download-scaled.jpg'
        },
        {
            url:'https://i.pinimg.com/originals/f1/5b/f4/f15bf410d3e74138de1be710736613aa.jpg'
        },
        {
            url:'https://edit.org/img/blog/ejq-food-delivery.jpg'
        },
        {
            url:'https://i.pinimg.com/736x/00/a2/16/00a216ab9151ace01242fa07c608596a.jpg'
        },
        {
            url:'https://i.pinimg.com/originals/0a/c3/db/0ac3dbf6f00da227b4ac38c680fc9b73.png'
        },
        {
            url:'https://cdn.dribbble.com/users/3906861/screenshots/11048961/03_4x.jpg'
        }
    ];

    const[current,setCurrent] = useState(0);


    const prev =()=>  {
        // checking if it is first img
   const firstImg = current === 0;
   const newImg = firstImg ? slides.length-1:current-1;
   setCurrent(newImg)
    }
    const next =()=>  {
        // checking if it it last img if yes then set last img = zero means to the first image otherwise increase  current by 1 
        const lastImg = current === slides.length-1;
        const newImg = lastImg ? 0 : current + 1;
        setCurrent(newImg)
    }
  return (
    <div className='max-w-[1400px] h-[680px] m-auto py-10 px-4 relative group'>
      <div className='w-full h-full  bg-center bg-cover duration-500' style={{backgroundImage:`url(${slides[current].url})`}}></div>
    <div  className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer'>
        <BsChevronCompactLeft size={30} onClick={prev}/>
    </div>       
    <div  className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer'>
        <BsChevronCompactRight size={30} onClick={next}/>
    </div>


    </div>
  );
}

export default Silder



