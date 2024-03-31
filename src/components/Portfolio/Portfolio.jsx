import React, { useEffect, useState } from 'react'
import data from "../../assets/data/portfolioData";
import Model from '../Model/Model';
export default function Portfolio() {
    const [items, setItems] = useState(6);
    const [portfolios, setPortfolio] = useState(data);
    const [selectItem,setSelectItem] = useState("all");
    const [showModel, setShowModel] = useState(false);
    const [activeId,setActiveId] = useState(null)
    const loadMoreImagesHandler = () => {
        setItems(prev => prev + 3);
    }
    const showModelHandler = (id) =>{
        setShowModel(true);
        setActiveId(id);
    }
    useEffect(() => {
        if(selectItem === "all"){
            setPortfolio(data)
        }
        if(selectItem === "webdesign"){
          const dataFiltered = data.filter(items=> items.category === "Web Design")
          setPortfolio(dataFiltered)
        }
        if(selectItem === "ux"){
            const dataFiltered = data.filter(items=> items.category === "Ux")
            setPortfolio(dataFiltered)
          }
    }, [selectItem])
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
                        <button onClick={()=>setSelectItem("all")} className='text-smallColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>
                            All
                        </button>
                        <button  onClick={()=>setSelectItem("webdesign")}  className='text-smallColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>
                            Web Design
                        </button>
                        <button  onClick={()=>setSelectItem("ux")} className='text-smallColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>
                            Full Stack Web site
                        </button>
                    </div>
                </div>
                <div className='flex items-center gap-4 flex-wrap mt-12'>
                    {
                        portfolios?.slice(0, items).map((element, index) => (
                            <div key={index} data-aos="fade-zoom-in" data-aos-delay="50" data-aos-duration="1000"
                                className='group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]'>
                                <figure>
                                    <img className='rounded-[8px]' src={element.imgUrl} alt=''></img>
                                </figure>
                                <div className='w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] 
                                hidden group-hover:block'>
                                    <div className="w-full h-full flex items-center justify-center">
                                        <button onClick={()=>showModelHandler(element.id)} className='text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px]
                                font-[500] ease-in duration-200'>
                                            See Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className='text-center mt-6'>
                    {
                        items < portfolios.length && data.length > 6 && (<button onClick={loadMoreImagesHandler} className='text-white bg-primaryColor hover:bg-smallTextColor py-2 px-4 rounded-[8px]
                        font-[500] ease-in duration-200'>
                            Lord More
                        </button>)
                    }

                </div>

            </div>
            {
              showModel && <Model setShowModel={setShowModel} activeId={activeId}/>
            }
        </section>
    )
}
