import React from 'react'
import './about.css'
import ME from '../../assets/me-3.jpg'
import HIKING from '../../assets/hiking1.jpg'
import {FaLaptop} from 'react-icons/fa' 
import {LiaUserSolid} from 'react-icons/lia'
import {BsFolderPlus} from 'react-icons/bs'
// import ImageSlider from './components/ImageSlider/ImageSlider'

// import { Pagination } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const About = () => {
  // const slides = [
  //   {url: ME, title: 'Library Me'},
  //   {url: HIKING, title: 'Hiking'},
  //   {url: '../../assets/snowboarding.jpg', title: 'Snowboarding'},
  //   {url: '../../assets/uni.jpeg', title: 'University'}
  // ];
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>Me</h2>
      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image">
              {/* <ImageSlider slides={slides}/> */}
              <img src={ME} alt="Me in a library"></img>
            </div>
      
        </div>

        <div className="about__content">

            <div className="about__cards">
                <article className='about__card'>
                  <FaLaptop className='about__icon'/>
                  <h5>Experience</h5>
                  <small>2+ Years Coding</small>
                </article>

                <article className='about__card'>
                  <LiaUserSolid className='about__icon'/>
                  <h5>Education</h5>
                  <small>Currently Attaining a BESc at UWO</small>
                </article>

                <article className='about__card'>
                  <BsFolderPlus className='about__icon'/>
                  <h5>Hobbies</h5>
                  <small>Sports, Reading, Drawing</small>
                </article>
            </div>

            <p>
              Hi, I'm Mijgon, a software engineering student studying at the University of Western Ontario. 
              I am currently receiving my Bachelor's degree in Software Engineering. 
              Outside of coding, I enjoy playing sports, hiking, and trying out new activities. 
              I also like to create digital art and read in my free time.
              
              Feel free to contact me at anytime c:
            </p>

            <a href="#contact" className='btn btn__primary'>Let's Talk</a>

        </div>
      </div>
    </section>
    
  )
}

export default About