import React, { useEffect } from 'react'
import data from "../../assets/data/portfolioData";
export default function Portfolio() {
    useEffect(()=>{
        console.log(data)
    },[])
  return (
    <section id="portfolio">
        <div className="container">
            <div className="flex items-center justify-between flex-wrap">
              <div className="mb-7 sm:mb-0">
                <h3 className='text-headingColor text-[2rem] font-[700]'>
                  My Recent Projects
                </h3>
                </div>  
                <div className="flex gap-3">
                    <button className='text-smallColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>
                        All
                    </button>
                    <button className='text-smallColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>
                        Web Design
                    </button>
                    <button className='text-smallColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>
                        Full Stack Web site
                    </button>
                </div>
            </div>
            <div className='flex items-center gap-4 flex-wrap mt-12'>
                {
                    data.map((element,index) => (
                         <div className='group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]'>
                          <figure>
                            <img className='rounded-[8px]' src={element.imgUrl} alt=''></img>
                        </figure>                            
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}
