import './Header.css'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState(null)

const toggleSubmenu = (index) => {
  setActiveSubmenu(activeSubmenu === index ? null : index)
}

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

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
                    <button className={isMenuOpen ? 'hamburger-menu active' : 'hamburger-menu'} onClick={toggleMenu}>
                        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                    </button>
                    <ul className={isMenuOpen ? 'mobile-menu active' : 'mobile-menu'}>
                            <li><Link to="/">হোম পেইজ</Link></li>

                            <li><Link to="/faq">প্রশ্ন উত্তর</Link></li>

                            <li>
                                <div onClick={() => toggleSubmenu(1)} className="dropdown-toggle">
                                    সাইট <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
                                </div>
                                <ul className={activeSubmenu === 1 ? 'submenu active' : 'submenu'}>
                                    <li><a href="">প্রক্সি লিংক গুলো</a></li>
                                    <li><a href="">ভেল্কি</a></li>
                                </ul>
                            </li>

                            <li>
                                <div onClick={() => toggleSubmenu(1)} className="dropdown-toggle">
                                    এজেন্ট কে খুঁজুন <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
                                </div>
                                <ul className={activeSubmenu === 1 ? 'submenu active' : 'submenu'}>
                                    <li><Link to="/search-agent-by-phone">এজেন্ট কে ফোন নাম্বার দিয়ে খুঁজুন</Link></li>
                                </ul>
                            </li>

                            <li>
                                <div onClick={() => toggleSubmenu(2)} className="dropdown-toggle">
                                    এজেন্ট লিস্ট <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
                                </div>
                                <ul className={activeSubmenu === 2 ? 'submenu active' : 'submenu'}>
                                    <li><Link to="/master-agent-list">মাস্টার এজেন্ট লিস্ট</Link></li>
                                    <li><Link to="/super-agent-list">সুপার এজেন্ট লিস্ট</Link></li>
                                    <li><Link to="/sub-admin-list">সাব এডমিন লিস্ট</Link></li>
                                    <li><Link to="/site-admin-list">সাইট এডমিন লিস্ট</Link></li>
                                </ul>
                            </li>

                            <li><Link to="/customer-service">কাস্টমার সার্ভিস</Link></li>
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
                        loop={true}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 15
                            },
                            993: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            }
                        }}
                    >
                        <SwiperSlide>
                            <Link to="/rules-and-regulations-for-open-account">একাউন্ট খোলার নিয়ম বা শর্ত গুলো কি কি?</Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/ভেল্কি-সাইট">ভেল্কি সাইট</Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/how-to-be-a-agent">কিভাবে আমি ভেল্কি তে এজেন্ট হতে পারি?</Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/search-agent-by-phone">এজেন্ট কে ফোন নাম্বার দিয়ে খুঁজুন</Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/WINPBU-তে-কিভাবে-লেনদেন-করবেন?">WINPBU তে কিভাবে লেনদেন করবেন?</Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/কিভাবে-একাউন্ট-খুলবেন?">কিভাবে একাউন্ট খুলবেন?</Link>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header