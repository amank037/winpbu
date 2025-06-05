import './Rules.css'
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
        link:"/rules-and-regulations-for-rules"
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

  

function Rules() {
  return (
    <div>
        <div className='rules-div2'>
            <div className='rules-container'>
                <div className='rules-left'>
                    <div className='rules-left-top'>
                        <img className='rules-img' src="https://winpibu.com/wp-content/uploads/2025/03/rules-and-regulations-1.png" alt="" />
                        <h2 className='rules-left-top-title'>একাউন্ট খোলার নিয়ম বা শর্ত গুলো কি কি?</h2>
                        <p className='rules-left-top-date'>January 26, 2025</p>
                    </div>


                    <div className='rules-left-desc left-border'>
                        <p>WINPIBU – শর্ত এবং নিয়ম</p>
                        <p>এই শর্ত গুলো না পড়ে আপনারা কখনোই একাউন্ট খুলবেন না!!</p>
                        <h3>সকল সুপার এবং মাস্টার এজেন্ট এবং সকল ইউজার এই নিয়মের অন্তর্গত।</h3>
                        <h3>** ওয়েবসাইট টি যেহেতু বেটফেয়ার এর মাধ্যমে চলে – সেহেতু বেটফেয়ার এর নিয়ম এবং স্বিদ্ধান্ত অনুযায়ী সব কিছু হয়। এই বেট সাইটে বেট করতে হলে আপনাকে বেটফেয়ার এবং WINPIBU র ম্যানেজমেন্ট যে কোন স্বিদ্ধান্ত আপনাকে বিনা শর্তে মেনে নিতে হবে।</h3>
                        <h3>ইউজার এর জন্য নির্দেশনা এবং শর্তঃ</h3>
                        <h3>** প্রতিবার এজেন্ট এর কাছ থেকে পয়েন্ট নেবার আগে – এজেন্ট এর কাছে লেনদেন এর তথ্য জেনে নিতে হবে। যেহেতু এজেন্ট এক এক সময় এক ভাবে লেনদেন করে সেহেতু এই তথ্য জানা জরুরী।</h3>
                        <h3>** সকাল ৯ঃ৪৫ এর আগে এবং রাত ৯ঃ৪৫ এর পরে কোন ইউজার যদি এজেন্ট কে টাকা পাঠায় – অই টাকার দায়ভার WINPIBU নিবে না।</h3>
                        <h3>** বিকাশ/নগদ এ টাকা পাঠানোর ২ ঘন্টার মধ্যে এজেন্ট এর সাথে যোগাযোগ করে পয়েন্ট নিতে হবে। ২ ঘন্টা পরে – টাকা কাউন্ট করা হবে না।</h3>
                    </div>

                    <p className='rules-bottom-text'>** প্রতিদিন বাংলাদেশ সময় ৯ঃ৩০ মিনিট এ – একাউন্ট এ কত পয়েন্ট আছে – তার একটা স্ক্রীনশট রাখতে হবে। যদি আপনি পয়েন্ট এর হিসাব না বুঝেন – তাহলে এই তথ্য আপনাকে সাহায্য করবে।</p>
                    <p className='rules-bottom-text'>** এজেন্ট ইউজার এর অনুমতি ব্যাতীত কোন পয়েন্ট ডিপোজিট বা উইথড্র করলে – সঙ্গে সঙ্গে এজেন্ট কে অভিযোগ করতে হবে – যদি এজেন্ট উত্তর না দেয় – তাহলে তার সুপার এজেন্ট কে অভিযোগ করতে হবে। যদি সুপার এজেন্ট উত্তর না দেয় – তাহলে এডমিন কে অভিযোগ করতে হবে।</p>
                    <p className='rules-bottom-text'>** এজেন্ট যদি ভুল করে কোন পয়েন্ট ডিপোজিট করে ফেলে – তাহলে ইউজার অই পয়েন্ট দিয়ে কোন ভাবেই বেট ধরতে পারবেন না। যদি পয়েন্ট দিয়ে বেট ধরে ফেলেন – এজেন্ট বা WINPIBU ম্যানেজমেন্ট এর যে কোন স্বিদ্ধান্ত ইউজার কে মেনে তে নিতে হবে।</p>
                    <p className='rules-bottom-text'>** এজেন্ট এর সাথে আপনার হোয়াটসাপ বা মেসেঞ্জার এর তথ্যাদি এবং সব লেনদেন এর তথ্যাদি অন্তত ১৫ দিন সংরক্ষন করতে হবে।</p>
                    <p className='rules-bottom-text'>** WINPIBU তে হোয়াটসাপ ছাড়া আর কোন এপ দিয়ে লেনদেন করা যাবে না।।</p>
                    <p className='rules-bottom-text'>** WINPIBU এর একটি আইডি র জন্য একজন ইউজার একের অধিক হোয়াটসাপ ব্যবহার করতে পারবে না।</p>
                    <p className='rules-bottom-text'>** WINPIBU তে একটি হোয়াটসাপ দিয়ে একের অধিক আইডি খোলা যাবে না।</p>
                    <p className='rules-bottom-text'>** খেলা শেষ হয়ে গেলে – বেট স্যাটেল হতে অথবা পয়েন্ট ফেরত দিতে ১৫ মিনিট থেকে ১ ঘন্টা সময় লাগে। তাই ১ ঘন্টার আগে কেন পয়েন্ট ফেরত আসলো না এই বিষয়ে অভিযোগ করা যাবে না।</p>
                    <p className='rules-bottom-text'>** ইউজার কে ক্যাসিনো খেলার আগে ক্যাসিনো খেলার সব নিয়ম জানার জন্য নির্দেশ দেয়া হচ্ছে।</p>
                    <p className='rules-bottom-text'>** সাইটে অন্য গেইম গুলো খেলার আগে – নিয়ম গুলো জেনে নিন। কোন কিছু না বুঝলে ফেইসবুক গ্রুপে পোষ্ট করতে হবে।</p>
                    <p className='rules-bottom-text'>** মাঝে মাঝে বেটফেয়ার স্কোর ভুল দেখায় – এই জন্য ইউজারদের কে, WINPIBU এর পাশাপাশি অন্য সাইট থেকেও স্কোর দেখার জন্য নির্দেশ দেয়া হচ্ছে।</p>
                    <p className='rules-bottom-text'>** বেট করার পরে ইউজার দের বেট ম্যাচ হয়েছে কিনা তা দেখার জন্য অনুরোধ করা হলো। বেট ম্যাচ না হলে পরে সেই বেট ক্যান্সেল হয়ে যায়।</p>
                    <p className='rules-bottom-text'>** খেলা শেষ হয়ে গেলে – বেট স্যাটেল হতে অথবা পয়েন্ট ফেরত দিতে ১৫ মিনিট থেকে ১ ঘন্টা সময় লাগে। কিছু কিছু ক্ষেত্রে এই সময় ২৪ ঘন্টা পর্যন্ত যেতে পারে।</p>
                    <p className='rules-bottom-text'>** পয়েন্ট এর হিসাব এর কোন অভিযোগ যদি বেটফেয়ার কে করা হয়, তাদের দেয়া সমাধান ইউজার কে মেনে নিতে হবে। কারন এজেন্ট এর এই খানে কিছুই করার নেই।</p>
                    <p className='rules-bottom-text'><br/><br/></p>
                    <h3>বেটফেয়ার বা WINPIBU সাইটের শর্তঃ</h3>
                    <p className='rules-bottom-text'><br/><br/></p>
                    <p className='rules-bottom-text'>** বেটফেয়ার কোন কোন সময় বেট স্যাটেল করতে ভুল করতে পারে।</p>
                    <p className='rules-bottom-text'>** যদি বেটফেয়ার কোন বেট স্যাটেল করতে ভুল করে – তা পরে রিস্যাটেল করতে পারে বা করে।</p>
                    <p className='rules-bottom-text'>** বেটফেয়ার বেট যখন স্যাটেল করে তখন সে তার নিজস্ব স্কোর দেখে স্যাটেল করে। তাদের নিজস্ব স্কোর এর সাথে অন্যান্য ওয়েবসাইট এর স্কোর এর মিল নাও থাকতে পারে।</p>
                    <p className='rules-bottom-text'>** কোন বেট এ কে কত পয়েন্ট পাবে – তার স্বিদ্ধান্ত হয় বেটফেয়ার এর মাধ্যমে। যদি বেটফেয়ার এর কোন ভুল এর কারনে কোন পয়েন্ট কাটা যায় – সেই ক্ষেত্রে ইউজার রা অভিযোগ করতে পারবেন ফেসবুক গ্রূপে অথবা তার এজেন্ট কে অথবা কাস্টমার্সাভিস এ।</p>
                    <p className='rules-bottom-text'>** সার্ভার এর সমস্যা বা টেকনিক্যাল কোন সমস্যার জন্য – বেট করতে সমস্যা বা অন্য কোন সমস্যা হয় – সেই ক্ষেত্রে ইউজার বেটফেয়ার বা WINPIBU এর স্বিদ্ধান্ত ই মেনে নিতে হবে।</p>
                    <p className='rules-bottom-text'>** কোন গেইম এর রেজাল্ট এর উপরে ভিত্তি করে – বেট স্যাটেল হয়। কিন্তু বেটফেয়ার এর শর্ত অনুযায়ী তাদের ক্ষমতা আছে যে – তারা কোন গেইম এর বেট কিভাবে স্যাটেল হবে – তারা নিজেরা স্বিদ্ধান্ত নিতে পারে। তার মানে রেজাল্ট এর বাইরেও তাদের স্বিদ্ধান্ত মেনে নিতে হবে।</p>
                    <p className='rules-bottom-text'><br/><br/></p>
                    <h3>বেট ভয়েড বা বাতিলঃ</h3>
                    <p className='rules-bottom-text'><br/><br/></p>
                    <p className='rules-bottom-text'>** বেটফেয়ার বা WINPIBU যে কোন বেট যে কোন সময়ে বাতিল করতে পারে।</p>
                    <p className='rules-bottom-text'>** বেট বাতিল এর হাজার হাজার নিয়ম আছে। এই নিয়ম এর জন্য বেট ভয়েড রুলস এর লিঙ্ক দেখতে হবে।</p>
                    <p className='rules-bottom-text'>** বেট বাতিল হলে – অই বেট এর লাভ লস কিছুই হবে না।</p>
                    <p className='rules-bottom-text'>** বেট কেন বাতিল হল – তার কারন আমরা জানার চেষ্টা করতে পারি – WINPIBU বা বেটফেয়ার থেকে। কারন হিসাবে তারা যাই বলবে তাই ইউজার কে মেনে নিতে হবে।</p>
                </div>

                <div className='rules-right'>
                    <div className='rules-right-form'>
                        <p>Search</p>
                        <div className='rules-right-form-input'>
                            <input type="text" placeholder='Search...'/>
                            <button>Search</button>
                        </div>
                    </div>

                    <div className='rules-right-bottom'>
                        <h3 className='rules-right-list-title'>Recent Posts</h3>
                        <ul className='rules-right-list'>
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

export default Rules