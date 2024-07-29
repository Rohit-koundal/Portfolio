import React from 'react'
import frontendImg from '../../assets/images/front-end.png';

export default function Services() {
    return (
        <section id='services'>
            <div className='container lg:pt-5'>
                <div className="text-center">
                    <h2 className='text-headingColor font-[800] text-[2.4rem] mb-5'>
                        What do I help
                    </h2>
                    <p className='lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7'>I specialize in backend, frontend, full stack development, and UX/UI design. From crafting robust backend solutions to creating captivating user interfaces, I deliver comprehensive digital solutions tailored to your needs. Let's collaborate to elevate your digital presence and drive success.</p>
                </div>

                <div className='flex flex-col justify-center sm:py-12'>
                    <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0'>
                        <div className='relative text-gray-700 antialised text-sm font-semibold'>

                            <div className='hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform
                        -translate-x-1/2'></div>

                            <div className='mt-6 sm:mt-0 sm:mb-12'>
                                <div className='flex items-center flex-col sm:flex-row'>

                                    <div className='flex justify-start w-full mx-auto items-center'>
                                        <div className='w-full sm:w-1/2 sm:pr-8'>
                                            <div
                                                data-aos='fade-right'
                                                data-aos-duration='1200'
                                                className='bg-white p-4 rounded shadow
                                group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                                <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white
                                            group-hover:font-[600] text-xl'>Frontend Developer</h3>
                                                <p className='text-[18px] text-smallTextColor group-hover:text-white group-hover:font-[500]
                                            leading-7'>
                                                    Frontend expertise in Angular, HTML, CSS, React, Tailwind CSS, Bootstrap, Redux, and Material UI. Elevate your digital presence today.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute
                 left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                justify-center'>
                                        <figure>
                                            <img src={frontendImg} alt='' />
                                        </figure>
                                    </div>
                                </div>


                            </div>
                            {/* right sude
                         */}
                            <div className='mt-6 sm:mt-0 sm:mb-12'>
                                <div className='flex items-center flex-col sm:flex-row'>

                                    <div className='flex justify-end w-full mx-auto items-center'>
                                        <div className='w-full sm:w-1/2 sm:pl-8'>
                                            <div
                                                data-aos='fade-left'
                                                data-aos-duration='1200'
                                                className='bg-white p-4 rounded shadow
                                group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                                <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white
                                            group-hover:font-[600] text-xl'>Backend Developer</h3>
                                                <p className='text-[18px] text-smallTextColor group-hover:text-white group-hover:font-[500]
                                            leading-7'>
                                                    Backend mastery in Node.js, Express.js, and MongoDB. Empower your platform with robust functionality. Let's enhance your digital infrastructure together.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute
                 left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                justify-center'>
                                        <figure>
                                            <img src={frontendImg} alt='' />
                                        </figure>
                                    </div>
                                </div>


                            </div>

                            <div className='mt-6 sm:mt-0 sm:mb-12'>
                                <div className='flex items-center flex-col sm:flex-row'>

                                    <div className='flex justify-start w-full mx-auto items-center'>
                                        <div className='w-full sm:w-1/2 sm:pr-8'>
                                            <div
                                                data-aos='fade-right'
                                                data-aos-duration='1200'
                                                className='bg-white p-4 rounded shadow
                                group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                                <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white
                                            group-hover:font-[600] text-xl'>Full Stack Developer</h3>
                                                <p className='text-[18px] text-smallTextColor group-hover:text-white group-hover:font-[500]
                                            leading-7'>
                                                   Full stack proficiency in MERN (MongoDB, Express.js, React, Node.js) and MEAN (MongoDB, Express.js, Angular, Node.js). Unlock comprehensive solutions for your digital needs.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute
                 left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                justify-center'>
                                        <figure>
                                            <img src={frontendImg} alt='' />
                                        </figure>
                                    </div>
                                </div>


                            </div>
                            {/* right sude
                         */}
                            <div className='mt-6 sm:mt-0 sm:mb-12'>
                                <div className='flex items-center flex-col sm:flex-row'>

                                    <div className='flex justify-end w-full mx-auto items-center'>
                                        <div className='w-full sm:w-1/2 sm:pl-8'>
                                            <div
                                                data-aos='fade-left'
                                                data-aos-duration='1200'
                                                className='bg-white p-4 rounded shadow
                                group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                                <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white
                                            group-hover:font-[600] text-xl'>UX/UI Designer</h3>
                                                <p className='text-[18px] text-smallTextColor group-hover:text-white group-hover:font-[600]
                                            leading-7'>
                                                   UI/UX expertise in crafting intuitive interfaces and seamless user experiences. Elevate your digital platform with captivating design and user-centric solutions.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute
                 left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                justify-center'>
                                        <figure>
                                            <img src={frontendImg} alt='' />
                                        </figure>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
