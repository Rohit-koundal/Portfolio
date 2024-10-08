import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#12141e] pt-12">
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-4">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
              Be a part of our journey
            </h2>
            <a href='#contact'>
              <button className='bg-primaryColor text-white font-[500] flex items-center gap-2
                    hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
                <i className='ri-mail-line'></i>Hire me</button></a>
          </div>
          <div className="w-full sm:w-1/2">
            <p className ="text-gray-300 leading-7 mt-4 sm:mt-0">Full stack programming, frontend, backend, and UX/UI design are my areas of expertise. I create eye-catching user interfaces and strong backend systems to provide complete digital solutions that are customised to meet your demands. Together, we can improve your online visibility and foster success.</p>
         
         <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
          <span className="text-gray-300 font-[600] text-[15px]">Follow Me:</span>
          <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
            <a href="#github" className="text-gray-300 font-[500] text-[18px]">
              <i className="ri-github-line"></i>
            </a>
          </span>
          <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
            <a href="#github" className="text-gray-300 font-[500] text-[18px]">
              <i className="ri-instagram-line"></i>
            </a>
          </span>
          <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
            <a href="#github" className="text-gray-300 font-[500] text-[18px]">
              <i className="ri-linkedin-line"></i>
            </a>
          </span>
          
         </div>

          </div>
        </div>
        <div>
        <ul className='flex items-centerv justify-center gap-10 mt-10'>
          <li><a className='text-gray-400 font-[600]' href='#about'>About</a></li>
          <li><a className='text-gray-400 font-[600]' href='#service'>Services</a></li>
          <li><a className='text-gray-400 font-[600]' href='#portfolio'>Portfolio</a></li>
          <li><a className='text-gray-400 font-[600]' href='#contact'>Contact</a></li>
          {/* <li><a className='text-smallTextColor font-[600]' href={resume} download="Rohit_FullStackDeveloper_Resume.pdf">Resume<i className='ri-download-line'></i></a></li> */}
        </ul>
      </div>
      </div>

      <div className="bg-[#1b1e29] py-5 mt-14">
        <div className="container">
          <div className="flex items-center justify-center sm:justify-between">
            <div className="hidden sm:block">
              <div className="flex items-center gap-[10px]">
                <span className="w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center">
                  R
                </span>
                <div className="leading-[20px]">
                  <h2 className="text-gray-200 font-[500] text-[18px]">Rohit</h2>
                  <p className="text-gray-400 text-[14px] font-[500]">
                    Koundal
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-[14px]">Copyright 2024 by Rohit - All right reserved.</p>
            </div>
          </div>
           </div>
      </div>
    </footer>

  )
}
