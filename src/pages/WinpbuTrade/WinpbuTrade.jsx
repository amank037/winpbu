import './WinpbuTrade.css'
import { Link } from 'react-router-dom'
import BottomGrid from '../../components/BottomGrid/BottomGrid'

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
        link: "/কিভাবে-একাউন্ট-খুলবেন?"
      },
]
  

function WinpbuTrade() {
  return (
    <div>
        <div className='winpbu-trade-div2'>
            <div className='winpbu-trade-container'>
                <div className='winpbu-trade-left'>
                    <div className='winpbu-trade-left-top'>
                        <img className='winpbu-trade-img' src="https://winpibu.com/wp-content/uploads/2025/03/MONEY-TRANSFER-2.png" alt="" />
                        <h2 className='winpbu-trade-left-top-title'>WINPIBU তে কিভাবে লেনদেন করবেন?</h2>
                        <p className='winpbu-trade-left-top-date'>January 31, 2025</p>
                    </div>


                    <div className='winpbu-trade-left-desc left-border'>
                        <h3>বিকাশ / নগদ / রকেট বা অন্যান্য মোবাইল ব্যাংকিং এ কিভাবে লেনদেন করবেন?</h3>
                        <p>ইউজার যখন এজেন্ট কে টাকা পাঠাবে এবং এজেন্ট যখন ইউজার কে টাকা পাঠাবেঃ-</p>
                        <ul>
                            <li>ইউজার যদি এজেন্টর বিকাশ পার্সোনাল এ টাকা পাঠায় ১০ পয়েন্ট এর জন্য ক্যাশ ইন বা সেন্ড ম্যানি করবে ১০২০ টাকা।</li>
                            <li>ইউজার যদি এজেন্টের বিকাশ এজেন্ট এ টাকা পাঠায় ১০ পয়েন্টের জন্য ক্যাশ আউট করবে ১০০০ টাকা।</li>
                            <li>এজেন্ট যদি ইউজার এর বিকাশ পার্সোনাল এ টাকা পাঠায় ১০ পয়েন্টের জন্য এজেন্ট ক্যাশ ইন করবে ১০০০ টাকা।</li>
                            <li>এজেন্ট যদি ইউজার এর বিকাশ এজেন্ট এ টাকা পাঠায় ১০ পয়েন্ট এর জন্য ক্যাশ আউট করবে ৯৮০ টাকা।</li>
                        </ul>
                    </div>

                    <div className='winpbu-trade-left-desc'>
                        <p>বিকাশ / নগদ / রকেট বা অন্যান্য মোবাইল ব্যাংকিংএর সময় সীমাঃ-</p>
                        <ul>
                            <li>মোবাইল ব্যাংকিং এর সময় সকাল ৯ টা ৪৫ থেকে দুপুর ১ টা পর্যন্ত, তার পরে দুপুর ৩ টা থেকে রাত ৯ টা ৪৫ পর্যন্ত।</li>
                            <li>এই সময়ের বাইরে কোন ভাবেই কোন লেনদেন করা যাবে না। রাত ৯ টা ৪৫ এর পরে কেউ যদি টাকা পাঠায় তার দায় ভার কোম্পানী নিবে না।</li>
                            <li>ডিপোজিট এবং উইথড্র তে ১৫ মিনিট থেকে ১ ঘন্টা সময় পর্যন্ত লাগতে পারে।</li>
                            <li>ইউজার দিনে ১ বার ডিপোজিট এবং ১ বার উইথড্র করতে পারবেন।</li>
                            <li>প্রতিবার টাকা পাঠানোর আগে – এজেন্ট কাছ থেকে বিকাশ নগদ রকেট নাম্বার চেয়ে নিবেন। এটা বাধ্যতামুলক।</li>
                        </ul>
                    </div>

                    <div className='winpbu-trade-left-desc'>
                        <p>ব্যাংকে কিভাবে এ কিভাবে লেনদেন করবেন?</p>
                        <ul>
                            <li>১ লাখ টাকা নিচে কোন এমাউন্ট ব্যাংকে ডিপোজিট বা উইথড্র করা যাবে না।</li>
                            <li>কোন ইউজার ব্যাংকে ডিপোজিট করলে আমাদের ডিপোজিট ভেরিফাই করতে ২ দিন পর্যন্ত সময় লাগতে পারে।</li>
                            <li>কোন ইউজার ব্যাংকে উইথড্র চাইলে – পরের দিন উইথড্র পাবেন এবং প্রতিলাখে ১০০০ টাকা উইথড্র চার্জ দিতে হবে।</li>
                        </ul>
                    </div>

                </div>

                <div className='winpbu-trade-right'>
                    <div className='winpbu-trade-right-form'>
                        <p>Search</p>
                        <div className='winpbu-trade-right-form-input'>
                            <input type="text" placeholder='Search...'/>
                            <button>Search</button>
                        </div>
                    </div>

                    <div className='winpbu-trade-right-bottom'>
                        <h3 className='winpbu-trade-right-list-title'>Recent Posts</h3>
                        <ul className='winpbu-trade-right-list'>
                            <li><a href="">Customer Service</a></li>
                            <li><Link to="/master-agent-list">Master Agent List</Link></li>
                            <li><Link to="/super-agent-list">Super Agent List</Link></li>
                            <li><Link to="/sub-admin-list">Sub Admin List</Link></li>
                            <li><Link to="/WINPBU-তে-কিভাবে-লেনদেন-করবেন?">WINPBU তে কিভাবে লেনদেন করবেন?</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <BottomGrid data1={data1} data2={data2}/>
    </div>
  )
}

export default WinpbuTrade