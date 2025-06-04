import './Header.css'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


function Header() {
  return (
    <div className='header-div'>
        <div className='trending-div'>
            <svg class="svg-icon" aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="currentColor" d="M 15.09375 6.824219 L 16.414062 8.140625 L 14.40625 10.257812 L 12.398438 12.371094 L 10.117188 10.097656 C 8.863281 8.84375 7.820312 7.820312 7.800781 7.820312 C 7.769531 7.824219 1.898438 15.757812 1.472656 16.371094 C 1.429688 16.4375 1.507812 16.386719 1.65625 16.257812 C 1.796875 16.140625 3.234375 14.902344 4.855469 13.515625 L 7.800781 10.992188 L 7.972656 11.183594 C 8.066406 11.289062 9.101562 12.375 10.269531 13.601562 L 12.398438 15.820312 L 12.527344 15.671875 C 12.59375 15.589844 13.863281 14.222656 15.339844 12.636719 L 18.019531 9.75 L 19.324219 11.050781 L 20.625 12.351562 L 20.625 5.5 L 13.773438 5.5 Z M 15.09375 6.824219 "></path></svg>
            TRENDING
        </div>

        <div className='header-middle-div'>
            <div className='header-logo-div'>
                <img src="https://winpibu.com/wp-content/uploads/2025/03/winpbu-logo-1.png" alt="logo" className='header-logo'/>
            </div>
            <div className='navbar-container'>
                    <nav>
                        <ul>
                            <li><a href="/">হোম পেইজ</a></li>

                            <li><a href="">প্রশ্ন উত্তর</a></li>

                            <li>
                                <a>সাইট <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" /></a>
                                <ul>
                                    <li><a href="">প্রক্সি লিংক গুলো</a></li>
                                    <li><a href="">ভেল্কি</a></li>
                                </ul>
                            </li>

                            <li><a href="">এজেন্ট কে খুঁজুন</a></li>

                            <li>
                                <a>এজেন্ট লিস্ট <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" /></a>
                                <ul>
                                    <li><a href="">মাস্টার এজেন্ট লিস্ট</a></li>
                                    <li><a href="">সুপার এজেন্ট লিস্ট</a></li>
                                    <li><a href="">সাব এডমিন লিস্ট</a></li>
                                    <li><a href="">সাইট এডমিন লিস্ট</a></li>
                                </ul>
                            </li>

                            <li><a href="">কাস্টমার সার্ভিস</a></li>
                        </ul>
                    </nav>
            </div>
        </div>

        <div className='header-bottom-div'>
            <div className='header-bottom-container'>
                <div className='breaking-div'>
                    <h2 className='breaking-icon'>Breaking News</h2>
                </div>

                <div className='header-bottom-right'>
                    <Swiper
                        className='header-bottom-slider'
                        modules={[Autoplay]}
                        slidesPerView={3}
                        spaceBetween={20}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                    >
                        <SwiperSlide>
                            <a href="">একাউন্ট খোলার নিয়ম বা শর্ত গুলো কি কি?</a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="">ভেল্কি সাইট</a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="">কিভাবে আমি ভেল্কি তে এজেন্ট হতে পারি?</a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="">এজেন্ট কে ফোন নাম্বার দিয়ে খুঁজুন</a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="">WINPBU তে কিভাবে লেনদেন করবেন?</a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="">কিভাবে একাউন্ট খুলবেন?</a>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header