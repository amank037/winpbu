import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
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
          image: "https://winpibu.com/wp-content/uploads/2025/03/1657098452448.jpeg",
          link: "/customer-service"
        },
        {
          icon: "Winpbu",
          title: "Master Agent List",
          date: "March 23, 2025",
          button: "এই খানে ক্লিক করে বিস্তারিত পড়ুন ...",
          image: "https://winpibu.com/wp-content/uploads/2025/03/master-agent-1.jpg",
          link: "/master-agent-list"
        },
        {
          icon: "Winpbu",
          title: "Super Agent List",
          date: "March 23, 2025",
          button: "এই খানে ক্লিক করে বিস্তারিত পড়ুন ...",
          image: "https://winpibu.com/wp-content/uploads/2025/03/super-agent-3.jpg",
          link: "/super-agent-list"
        },
        {
          icon: "Winpbu",
          title: "Sub Admin List",
          date: "March 21, 2025",
          button: "এই খানে ক্লিক করে বিস্তারিত পড়ুন ...",
          image: "https://winpibu.com/wp-content/uploads/2025/03/sub-admin.jpg",
          link: "/sub-admin-list"
        },
        {
          icon: "FAQ",
          title: "WINPBU তে কিভাবে লেনদেন করবেন?",
          date: "March 19, 2025",
          button: "এই খানে ক্লিক করে বিস্তারিত পড়ুন ...",
          image: "https://winpibu.com/wp-content/uploads/2025/03/MONEY-TRANSFER-2.png",
          link: "/WINPBU-তে-কিভাবে-লেনদেন-করবেন?"
        },
        {
          icon: "Winpbu",
          title: "Site Admin List",
          date: "March 19, 2025",
          button: "এই খানে ক্লিক করে বিস্তারিত পড়ুন ...",
          image: "https://winpibu.com/wp-content/uploads/2025/03/site-admin-list-2.jpg",
          link: "/site-admin-list"
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
                    <div className='slide-content' to={slide.link}>
                        <div className='slide-background' style={{ backgroundImage: `url(${slide.image})` }}></div>
                        <div className='slide-info'>
                            <span className='slide-icon'>{slide.icon}</span>
                            <Link to={slide.link}>
                              <h2 className='slide-title'>{slide.title}</h2>
                            </Link>
                            <span className='slide-date'>{slide.date}</span>
                            <Link to={slide.link}>
                              <button className='slide-button'>{slide.button}</button>
                            </Link>
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