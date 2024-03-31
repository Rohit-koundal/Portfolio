import React from 'react'
import heroImg from "../../assets/images/Hero.svg";
import CountUp from "react-countup";
// import profileImg from "../../../assets/images/hero.svg";
// import CountUp from 'react-countup/build/CountUp';
const Profile =() => {
  return (
    <section className='pt-0' id='about'>
        <div className='container pt-14'>
            <div className='md:flex items-center jsutify-between sm:flex-col md:flex-row'>
             <div className='w-full md:basis-1/2'>
                <h5 data-aos='fade-right' data-aos-duration='1500' className='text-headingColor font-[600] text-[16px]'>
                    Welcome to My Portfolio
                </h5>
                <h1 data-aos='fade-up' data-aos-duration='1000' 
                className='text-headingColor font-[800] text-[1.8rem] 
                sm:text-[30px] leading-[35px]
                sm:leading-[46px] mt-5'>
                    Hii, I'm Rohit Koundal <br/> Web developer
                </h1>
                <div data-aos='fade-up'
                data-aos-duration='1000' className='flex items-center gap-6 mt-7'>
                <a href='#contact'>
                    <button className='bg-primaryColor text-white font-[500] flex items-center gap-2
                    hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
                        <i className='ri-mail-line'></i>Hire me</button></a>
                        <a href='#portfolio' className='text-smallTextColor font-[600] text-[16px]
                        border-b border-solid border-smallTextColor'>
                            See Portfolio</a>
                </div>
                <p data-aos='fade-left'
                data-aos-duration="1500" className='flex gap-2
                text-headingColor mt-14 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10'>
                    <span><i className='ri-apps-2-line'></i></span>With over 5+ years of professional experience as a Frontend Engineer, I have demonstrated expertise in Angular,
Reactjs, and multiple programming languages. My collaborative work ethic shines in both team settings and
independent projects, reflecting a solid grasp of object-oriented analysis. I am dedicated to enhancing existing
systems and technologies by implementing common programming design patterns and best practices. With
excellent communication skills and a keen eye for detail, I efficiently tackle complex tasks. Equipped with
analytical prowess and strong problem-solving abilities, I consistently deliver high-quality solutions
autonomously.
</p>

                <div className='flex items-center gap-9 mt-14' data-aos="fade-left" data-aos-duration='1000'>
                    <span className='text-smallTextColor text-[15px] font-[600]'>
                        Follow me:
                    </span>
                    <span>
                        <a href='#linkedIn' className='text-smallTextColor text-[18px] font-[600]'>
                            <i className='ri-linkedin-line'></i>
                        </a>
                    </span>
                    <span>
                        <a href='#linkedIn' className='text-smallTextColor text-[18px] font-[600]'>
                            <i className='ri-facebook-line'></i>
                        </a>
                    </span> <span>
                        <a href='#linkedIn' className='text-smallTextColor text-[18px] font-[600]'>
                            <i className='ri-github-line'></i>
                        </a>
                    </span> <span>
                        <a href='#linkedIn' className='text-smallTextColor text-[18px] font-[600]'>
                            <i className='ri-instagram-line'></i>
                        </a>
                    </span>
                </div>
             </div>
{/* profile picture */}
<div className='basis-1/3 mt-10 sm:mt-0'>
    <figure className='flex items-center justify-center'>
        <img src={heroImg} alt=''></img>
    </figure>
</div>
{/* profile picture */}
<div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 
md:flex-col  md:justify-end md:text-end'>
    <div className='mb-10'>
        <h2 className='text-headingColor font-[700] text-[32px]'>
            <CountUp start={0} end={3.6} duration={3} suffix="+" />
        </h2>
        <h4 className='text-headingColor font-[500] text-[18px]'>
            Years of Experience
        </h4>
    </div>

    <div className='mb-10'>
        <h2 className='text-headingColor font-[700] text-[32px]'>
            <CountUp start={0} end={100} duration={3} suffix="%" />
        </h2>
        <h4 className='text-headingColor font-[500] text-[18px]'>
            Success Rate
        </h4>
    </div>

    <div className='mb-10'>
        <h2 className='text-headingColor font-[700] text-[32px]'>
            <CountUp start={0} end={20} duration={3} suffix="+" />
        </h2>
        <h4 className='text-headingColor font-[500] text-[18px]'>
            Project Completed
        </h4>
    </div>

</div>
            </div>
        </div>
    </section>
  )
}

export default Profile;
