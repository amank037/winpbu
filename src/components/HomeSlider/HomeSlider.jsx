import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './HomeSlider.css'

function HomeSlider() {
    const data = [
        {
          icon: "Winpbu",
          title: "Customer Service",
          date: "March 25, 2025",
          button: "এই খানে ক্লিক করে বিস্তারিত পড়ুন ...",
          image: "https://winpibu.com/wp-content/uploads/2025/03/1657098452448.jpeg"
        },
        {
          icon: "Winpbu",
          title: "Master Agent List",
          date: "March 23, 2025",
          button: "এই খানে ক্লিক করে বিস্তারিত পড়ুন ...",
          image: "https://winpibu.com/wp-content/uploads/2025/03/master-agent-1.jpg"
        },
        {
          icon: "Winpbu",
          title: "Super Agent List",
          date: "March 23, 2025",
          button: "এই খানে ক্লিক করে বিস্তারিত পড়ুন ...",
          image: "https://winpibu.com/wp-content/uploads/2025/03/super-agent-3.jpg"
        },
        {
          icon: "Winpbu",
          title: "Sub Admin List",
          date: "March 21, 2025",
          button: "এই খানে ক্লিক করে বিস্তারিত পড়ুন ...",
          image: "https://winpibu.com/wp-content/uploads/2025/03/sub-admin.jpg"
        },
        {
          icon: "FAQ",
          title: "WINPBU তে কিভাবে লেনদেন করবেন?",
          date: "March 19, 2025",
          button: "এই খানে ক্লিক করে বিস্তারিত পড়ুন ...",
          image: "https://winpibu.com/wp-content/uploads/2025/03/MONEY-TRANSFER-2.png"
        },
        {
          icon: "Winpbu",
          title: "Site Admin List",
          date: "March 19, 2025",
          button: "এই খানে ক্লিক করে বিস্তারিত পড়ুন ...",
          image: "https://winpibu.com/wp-content/uploads/2025/03/site-admin-list-2.jpg"
        }
    ]
     
  return (
    <div className='home-slider'>
        <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
                el: '.swiper-pagination',
            }}
            className='home-swiper'
        >
            {data.map((slide, index) => (
                <SwiperSlide key={index} className='home-swiper-slide'>
                    <div className='slide-content'>
                        <div className='slide-background' style={{ backgroundImage: `url(${slide.image})` }}></div>
                        <div className='slide-info'>
                            <span className='slide-icon'>{slide.icon}</span>
                            <h2 className='slide-title'>{slide.title}</h2>
                            <span className='slide-date'>{slide.date}</span>
                            <button className='slide-button'>{slide.button}</button>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
        <div className='swiper-pagination'></div>
    </div>
  )
}

export default HomeSlider