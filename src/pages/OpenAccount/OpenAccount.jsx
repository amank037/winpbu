import './OpenAccount.css'
import { Link } from 'react-router-dom'
import BottomGrid from '../../components/BottomGrid/BottomGrid'

const data1 = [
    {
        icon: "Winpbu",
        title: "এজেন্ট কে ফোন নাম্বার দিয়ে খুঁজুন",
        date: "",
        image: "https://winpibu.com/wp-content/uploads/2025/03/Selection_141-1.png",
        link:"/search-agent-by-phone"
    },
    {
        icon: "Winpbu",
        title: "কিভাবে আমি ভেল্কি তে এজেন্ট হতে পারি?",
        date: "",
        image: "https://winpibu.com/wp-content/uploads/2025/03/agent-1.png",
        link:"/how-to-be-a-agent"
    },
    {
        icon: "Winpbu",
        title: "ভেল্কি সাইট",
        date: "",
        image: "https://winpibu.com/wp-content/uploads/2025/03/velki-live-site-1536x487-1.png",
        link:"/ভেল্কি-সাইট"
    }
]

const data2 = [
    {
        icon: "Winpbu",
        title: "একাউন্ট খোলার নিয়ম বা শর্ত গুলো কি কি?",
        date: "",
        image: "https://winpibu.com/wp-content/uploads/2025/03/rules-and-regulations-1.png",
        link:"/rules-and-regulations-for-open-account"
      },
      {
        icon: "FAQ",
        title: "কিভাবে একাউন্ট খুলবেন?",
        date: "",
        image: "https://winpibu.com/wp-content/uploads/2025/03/REGISTER-1.png",
        link:"/কিভাবে-একাউন্ট-খুলবেন?"
      },
      {
        icon: "Winpbu",
        title: "Site Admin List",
        date: "",
        image: "https://winpibu.com/wp-content/uploads/2025/03/site-admin-list-2.jpg",
        link:"/side-admin-list"
      },
      {
        icon: "Winpbu",
        title: "WINPBU তে কিভাবে লেনদেন করবেন?",
        date: "",
        image: "https://winpibu.com/wp-content/uploads/2025/03/MONEY-TRANSFER-2.png",
        link:"/WINPBU-তে-কিভাবে-লেনদেন-করবেন?"
      },
]

  

function OpenAccount() {
  return (
    <div>
        <div className='open-account-div2'>
            <div className='open-account-container'>
                <div className='open-account-left'>
                    <div className='open-account-left-top'>
                        <img className='open-account-img' src="https://winpibu.com/wp-content/uploads/2025/03/REGISTER-1.png" alt="" />
                        <h2 className='open-account-left-top-title'>কিভাবে একাউন্ট খুলবেন?</h2>
                        <p className='open-account-left-top-date'>January 26, 2025</p>
                    </div>


                    <div className='open-account-left-desc left-border'>
                        <p>একাউন্ট আপনি নিজে নিজে খুলতে পারবেন না। তাই একাউন্ট খোলার আগে মনোযোগ দিয়ে পড়ুনঃ</p>
                        <h3>ভেল্কি তে একাউন্ট করতে হলে আপনার এজেন্ট এর মাধ্যমে একাউন্ট খুলতে হবে। এজেন্ট এর মাধ্যমেই টাকা ডিপোজিট এবং উইথড্র করতে হবে। আপনি যে এজেন্ট এর কাছ থেকে একাউন্ট খুলবেন তার সাথেই সব সময় লেনদেন করতে হবে। ঠিক কোন এজেন্ট কে টাকা দিবেন এবং কিভাবে তার সাথে লেনদেন করবেন তার বুঝতে হলে আপনার নিম্বের তথ্য গুলো পড়া জরুরী।</h3>
                        <h3>আমাদের এজেন্ট লিষ্ট দেখতে নিচের লিঙ্ক এ ক্লিক করুনঃ মাষ্টার এজেন্ট লিস্ট</h3>
                    </div>

                    <p className='open-account-bottom-text'>এই এজেন্ট লিষ্ট এর বাইরে কারো সাথে লেনদেন করলে আপনাকে নিজ দ্বায়িত্বে লেনদেন করতে হবে। লিষ্ট এর বাইরে কোন এজেন্ট এর দায়ভার ভেল্কি নিবে না এবং লিষ্ট এর এজেন্ট দের সব দায়ভার ভেল্কি কোম্পানীর। এজেন্ট লিষ্ট এর এজেন্ট দের সাথে ইউজার দের শুধু মাত্র হোয়াটসাপ এর মাধ্যমে যোগাযোগ করতে হবে। হোয়াটসাপ ছাড়া অন্য কোন মাধ্যমে যোগাযোগ করলে বা লেনদেন করলে তা গ্রহনযোগ্য হবে না। হোয়াটসাপ এ যোগাযোগ করতে হলে এজেন্ট লিস্টে হোয়াটসাপ আইকন উপরে ক্লিক করুন অবথা ফোন নাম্বার টি মোবাইলে সেভ করে তাকে হোয়াটসাপ এ মসেজ পাঠাতে পারবেন। হোয়াটসাপ এপ টি আপনার মোবাইলে আগে থেকেই থাকতে হবে। না থাকলে গুগুল প্লে থেকে ইন্সটল করে নিন।</p>
                    <p className='open-account-bottom-text'><br/><br/></p>
                    <p className='open-account-bottom-text'>অন্যান্য সাহায্যের জন্যঃ তথ্যাদি এবং সাহায্যের জন্য হোয়াটসাপ নাম্বারঃ +15797940196 (গুলজার গাজী)</p>
                    <p className='open-account-bottom-text'>ফেসবুক গ্রুপের লিঙ্কঃ https://www.facebook.com/groups/104346778634580 </p>
                    <p className='open-account-bottom-text'>এই ফেসবুক গ্রুপ এবং একটি ব্যাকআপ গ্রুপ ছাড়া আমাদের আর কোন ফেসবুক গ্রুপ নেই।</p>
                    <p className='open-account-bottom-text'>এছাড়া আপনারা আমাদের কাস্টমার সার্ভিস এর সাথে সরাসরি যোগাযোগ করতে পারেন।</p>
                    <p className='open-account-bottom-text'>তাদের নাম্বার গুলো জানতে নিচের লিঙ্কে ক্লিক করুনঃ  কাষ্টমার সার্ভিসে</p>
                    <p className='open-account-bottom-text'>একাউন্ট খোলার আগে নিচের লিঙ্কে ক্লিক করে শর্ত সমুহ জেনে নিন। এই শর্ত সমুহ জানা অত্যন্ত জরুরীঃ নিয়মগুলো জানার জন্য এই লিঙ্ক এ ক্লিক করুন। </p>

                </div>

                <div className='open-account-right'>
                    <div className='open-account-right-form'>
                        <p>Search</p>
                        <div className='open-account-right-form-input'>
                            <input type="text" placeholder='Search...'/>
                            <button>Search</button>
                        </div>
                    </div>

                    <div className='open-account-right-bottom'>
                        <h3 className='open-account-right-list-title'>Recent Posts</h3>
                        <ul className='open-account-right-list'>
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

export default OpenAccount