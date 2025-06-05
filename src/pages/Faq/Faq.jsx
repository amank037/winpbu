import './Faq.css'
import BottomGrid from '../../components/BottomGrid/BottomGrid'
import { Link } from 'react-router-dom'

const data1 = [
    {
      icon: "Winpbu",
      title: "Customer Service",
      date: "March 25, 2025",
      image: "https://winpibu.com/wp-content/uploads/2025/03/1657098452448.jpeg",
      link: "/customer-service"
    },
    {
      icon: "Winpbu",
      title: "Master Agent List",
      date: "March 23, 2025",
      image: "https://winpibu.com/wp-content/uploads/2025/03/master-agent-1.jpg",
      link: "/master-agent-list"
    },
    {
      icon: "Winpbu",
      title: "Super Agent List",
      date: "March 23, 2025",
      image: "https://winpibu.com/wp-content/uploads/2025/03/super-agent-3.jpg",
      link: "/super-agent-list"
    }
]

const data2 = [
    {
        icon: "Winpbu",
        title: "Sub Admin List",
        date: "March 21, 2025",
        image: "https://winpibu.com/wp-content/uploads/2025/03/sub-admin.jpg",
        link: "/sub-admin-list"
      },
      {
        icon: "FAQ",
        title: "WINPBU তে কিভাবে লেনদেন করবেন?",
        date: "March 19, 2025",
        image: "https://winpibu.com/wp-content/uploads/2025/03/MONEY-TRANSFER-2.png",
        link: "/WINPBU-তে-কিভাবে-লেনদেন-করবেন?"
      },
      {
        icon: "Winpbu",
        title: "Site Admin List",
        date: "March 19, 2025",
        image: "https://winpibu.com/wp-content/uploads/2025/03/site-admin-list-2.jpg",
        link: "/site-admin-list"
      },
      {
        icon: "Winpbu",
        title: "কিভাবে একাউন্ট খুলবেন?",
        date: "March 19, 2025",
        image: "https://winpibu.com/wp-content/uploads/2025/03/REGISTER-1.png",
        link: "/WINPBU-তে-কিভাবে-লেনদেন-করবেন?"
      },
]

const faqData = [
    {
      title: "WINPBU তে কিভাবে লেনদেন করবেন?",
      date: "March 19, 2025",
      link: "/WINPBU-তে-কিভাবে-লেনদেন-করবেন?",
      image: "https://winpibu.com/wp-content/uploads/2025/03/MONEY-TRANSFER-2.png",
      desc: "WINPIBU তে কিভাবে লেনদেন করবেন? January 26, 2025 বিকাশ / নগদ / রকেট বা অন্যান্য মোবাইল ব্যাংকিং এ কিভাবে লেনদেন করবেন? ইউজার যখন এজেন্ট কে"
    },
    {
      title: "কিভাবে একাউন্ট খুলবেন?",
      date: "March 19, 2025",
      link: "/WINPBU-তে-কিভাবে-লেনদেন-করবেন?",
      image: "https://winpibu.com/wp-content/uploads/2025/03/REGISTER-1.png",
      desc: "কিভাবে একাউন্ট খুলবেন? January 26, 2025 একাউন্ট আপনি নিজে নিজে খুলতে পারবেন না। তাই একাউন্ট খোলার আগে মনোযোগ দিয়ে পড়ুনঃ ভেল্কি তে একাউন্ট করতে হলে"
    },
    {
      title: "একাউন্ট খোলার নিয়ম বা শর্ত গুলো কি কি?",
      date: "March 19, 2025",
      link: "/rules-and-regulations-for-open-account",
      image: "https://winpibu.com/wp-content/uploads/2025/03/rules-and-regulations-1.png",
      desc: "একাউন্ট খোলার নিয়ম বা শর্ত গুলো কি কি? January 26, 2025 WINPIBU - শর্ত এবং নিয়ম এই শর্ত গুলো না পড়ে আপনারা কখনোই একাউন্ট খুলবেন"
    },
    {
      title: "ভেল্কি সাইট",
      date: "March 19, 2025",
      link: "/ভেল্কি-সাইট",
      image: "https://winpibu.com/wp-content/uploads/2025/03/velki-live-site-1536x487-1.png",
      desc: "ভেল্কি সাইট January 26, 2025 করে অনেক গুলো সাইট তইরী করেছে। তাই আপনাদের আমাদের লিংক ছাড়া অন্য কোন লিংক ব্যবহার করা উচিত হবে না। আমাদের"
    },
    {
      title: "কিভাবে আমি ভেল্কি তে এজেন্ট হতে পারি?",
      date: "March 19, 2025",
      link: "/how-to-be-a-agent",
      image: "https://winpibu.com/wp-content/uploads/2025/03/agent-1.png",
      desc: "কিভাবে আমি ভেল্কি তে এজেন্ট হতে পারি? January 28, 2025 লোকাল মাস্টার এজেন্ট হবার সিস্টেম: এজেন্ট হবার জন্য আমাদের সুপার এজেন্ট দের সাথে যোগাযোগ করতে"
    },
    {
      title: "এজেন্ট কে ফোন নাম্বার দিয়ে খুঁজুন",
      date: "March 18, 2025",
      link: "/search-agent-by-phone",
      image: "https://winpibu.com/wp-content/uploads/2025/03/Selection_141-1.png",
      desc: "এজেন্ট কে ফোন নাম্বার দিয়ে খুঁজুন January 31, 2025 এজেন্ট কে ফোন নাম্বার দিয়ে খুজুনঃ Search Recent Posts Customer Service Master Agent List Super Agent"
    }
  ]

function Faq() {
  return (
    <div className='faq-container'>
        <h1 className='faq-container-title'>Category: FAQ</h1>
        {faqData.map((item, index) => (
            <div className='faq-item' key={index}>
                <p className='faq-icon'>FAQ</p>
                <h2 className='faq-title'>{item.title}</h2>
                <div className='faq-email'>
                    <svg class="svg-icon" aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M18,19 C18,19.5522847 17.5522847,20 17,20 C16.4477153,20 16,19.5522847 16,19 L16,17 C16,15.3431458 14.6568542,14 13,14 L5,14 C3.34314575,14 2,15.3431458 2,17 L2,19 C2,19.5522847 1.55228475,20 1,20 C0.44771525,20 0,19.5522847 0,19 L0,17 C0,14.2385763 2.23857625,12 5,12 L13,12 C15.7614237,12 18,14.2385763 18,17 L18,19 Z M9,10 C6.23857625,10 4,7.76142375 4,5 C4,2.23857625 6.23857625,0 9,0 C11.7614237,0 14,2.23857625 14,5 C14,7.76142375 11.7614237,10 9,10 Z M9,8 C10.6568542,8 12,6.65685425 12,5 C12,3.34314575 10.6568542,2 9,2 C7.34314575,2 6,3.34314575 6,5 C6,6.65685425 7.34314575,8 9,8 Z"></path></svg>
                    By 
                    <a href="">velkihelpline@gmail.com</a>
                    <span>{item.date}</span>
                </div>
                <Link className='faq-image-container' to={item.link}>
                    <img className='faq-image' src={item.image} alt="" />
                </Link>
                <p className='faq-desc'>{item.desc}<span className='faq-read-more'><Link to={item.link}>[Read More…]</Link></span></p>
            </div>
        ))}
        <BottomGrid data1={data1} data2={data2}/>
    </div>

    
  )
}

export default Faq