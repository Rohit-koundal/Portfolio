import React, { useEffect, useRef } from 'react'
import resume from '../../assets/Rohit_FullStackDeveloper_Resume.pdf'
 const Header = () => {

  const headerRef = useRef(null)
  const stickyHeaderFunc = () =>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop >80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky__header')
      }
      else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }
  useEffect(()=>{
   stickyHeaderFunc()
   return window.removeEventListener('scroll',stickyHeaderFunc)
  },[])

  const handlerClick = (e)=>{
    e.preventDefault()
    const targetAttr = e.target.getAttribute('href');
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      top: location-80,
      left: 0,
    })
  }

  // const resumePath = '../../assetss/Rohit_FullStackDeveloper_Resume.pdf';
  return <header ref={headerRef} className='w-full h-[80px] leading-[80px] flex items-center'>
    <div className='container'>
    <div className='flex items-center justify-between'>
      {/* logo  */}
      <div className='flex items-center gap-[10px]'>
        <span className='w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500]
        rounded-full flex items-center justify-center'
        >R</span>
      <div className='leading-[20px]'>
        <h2 className='text-xl text-smallTextColor font-[700]'>Rohit</h2>
       <p className='text-smallTextColor text-[14px] font-[500]'>Koundal</p>
      </div>
      </div>
      {/* log end */}

      {/* menu start */}
      <div className='menu'>
        <ul className='flex items-center gap-10 '>
          <li><a onClick={handlerClick} className='text-smallTextColor font-[600]' href='#about'>About</a></li>
          <li><a onClick={handlerClick} className='text-smallTextColor font-[600]' href='#services'>Services</a></li>
          <li><a onClick={handlerClick} className='text-smallTextColor font-[600]' href='#portfolio'>Portfolio</a></li>
          <li><a onClick={handlerClick} className='text-smallTextColor font-[600]' href='#contact'>Contact</a></li>
          <li><a className='text-smallTextColor font-[600]' href={resume} download="Rohit_FullStackDeveloper_Resume.pdf">Resume<i className='ri-download-line'></i></a></li>
        </ul>
      </div>
      {/* menu end */}
      {/* menu right start */}
       <div className="flex items-center gap-4">
        <a href='#contact'><button className='flex items-center gap-2 text-smallTextColor font-[600] 
        border border-soli d border-smallTextColor py-2 px-4
         rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[600] ease-in duration-100' >
          <i className='ri-send-plane-line'></i>Let's Chat
        </button></a>
        
        <span className='text-2xl text-smallTextColor md:hidden'><i className='ri-menu-line'></i></span>
       </div>
      {/* menu end rigth */}
    </div>
    </div>
   </header>
};

export default Header;