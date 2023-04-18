import React from 'react'

function Section() {
  return (
    <div className='flex items-center lg:justify-evenly sm:justify-between mt-12 px-4 py-4 border-2 border-[#408E91] '>
      <div className='text-center lg:text-3xl text-[#22A39F] sm:text-xl'>
      <i class="fa-solid fa-house"></i>
      <div>
        <span>Home</span>
      </div>
      </div>
      <div className='text-center lg:text-3xl text-[#22A39F] sm:text-xl'>
      <i class="fa-solid fa-user"></i>
      <div>
        <span>Profile</span>
      </div>
      </div>
      <div className='lg:text-5xl text-[#22A39F] sm:text-2xl'>
      <i class="fa-solid fa-face-smile"></i>
      </div>
      <div className='text-center lg:text-3xl text-[#22A39F] sm:text-xl'>
      <i class="fa-solid fa-list"></i>
      <div>
        <span>Follow List</span>
      </div>
      </div>
      <div className='text-center lg:text-3xl text-[#22A39F] sm:text-xl'>
      <i class="fa-solid fa-comment"></i>
      <div>
        <span>Chat</span>
      </div>
      </div>
    </div>
  )
}

export default Section
