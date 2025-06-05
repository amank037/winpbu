import './HowAgent.css'
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
        link:"/rules-and-regulations-for-how-agent"
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

  

function HowAgent() {
  return (
    <div>
        <div className='how-agent-div2'>
            <div className='how-agent-container'>
                <div className='how-agent-left'>
                    <div className='how-agent-left-top'>
                        <img className='how-agent-img' src="https://winpibu.com/wp-content/uploads/2025/03/rules-and-regulations-1.png" alt="" />
                        <h2 className='how-agent-left-top-title'>কিভাবে আমি ভেল্কি তে এজেন্ট হতে পারি?</h2>
                        <p className='how-agent-left-top-date'>January 28, 2025</p>
                    </div>


                    <div className='how-agent-left-desc left-border'>
                        <p>লোকাল মাস্টার এজেন্ট হবার সিস্টেম:</p>
                        <h3>এজেন্ট হবার জন্য আমাদের সুপার এজেন্ট দের সাথে যোগাযোগ করতে হবে।</h3>
                        <h3>সুপার এজেন্ট লিস্ট দেখতে এই লিঙ্ক এ ক্লিক করুন।</h3>
                        <p>পয়েন্ট কেনা বেচাঃ</p>
                        <p>** এজেন্ট ভেল্কি থেকে পয়েন্ট কিনবে ৯৩ টাকা করে।</p>
                        <p>** এজেন্ট ইউজার এর কাছে বিক্রি করবে ১০০ টাকা করে।</p>
                        <p>** এই খানে এজেন্ট এর লাভ থাকবে ৭%</p>
                        <p>আবারঃ</p>
                        <p>** এজেন্ট ইউজার এর কাছ থেকে পয়েন্ট কিনবে ১০০ টাকা করে।</p>
                        <p>** এজেন্ট ভেল্কি এর কাছে বিক্রি করবে ৯৩ টাকা করে।</p>
                        <p>** এই খানে এজেন্ট এর লস হবে ৭% – কিন্তু এই খানে কথা আছে</p>
                        <p>**** এজেন্ট যত পয়েন্ট কিনবে ভেল্কি থেকে তার চেয়ে যদি বিক্রি বেশি হয় – এই ৭% লস এর দায় ভার ভেল্কি নিবে।</p>
                    </div>

                    <p className='how-agent-bottom-text'>যেমনঃ এজেন্ট ভেল্কি থেকে ৪ মাসে পয়েন্ট কিনেছে – ৭৫০০ পয়েন্ট। এই খানে তার লাভ হয়েছে – ৭৫০০x৭=৫২,৫০০ টাকা। কিন্তু ৫ নং মাসে গিয়ে দেখা গেল এজেন্ট এর ইউজার রা অনেক জিতেছে এবং এজেন্ট কে বিক্রি করতে হচ্ছে নাইন উইকেটস এর কাছে ৯২০০ পয়েন্ট । তাহলে এজেন্ট এর লাভ থেকে লস হবে ৫২,৫০০ টাকা। কারন এজেন্ট কে ভেল্কির এর কাছে ৭৫০০ পয়েন্ট বিক্রি করতে হবে ৯৩ টাকা রেট এই। বাকি ১৭০০ পয়েন্ট বিক্রি করতে যে লস হবে ১৭০০x৭=১১৯০০ টাকা, এই টাকা ভেল্কি ভর্তুকি দিবে। ভর্তুকি দিবে এই কারণে, যাতে এজেন্ট এর নিজের পকেট থেকে কোন লস না হয়।</p>
                    <p className='how-agent-bottom-text'>তাহলে প্রশ্ন আসতে পারে এজেন্ট হবারএর লাভ কোথায়? এজেন্ট এর মুল লাভ হচ্ছে ২% কমিশন এক্সচেঞ্জ এ। যেমন ১ জন ইউজার দিনে ১০ টা বেট করল । ৫ টা তে জিতল এবং ৫ টা তে হারল। দিন শেষে যে ৫ টা জিতেছে ইউজার – প্রতিবার এজেন্ট কে ২% কমিশন দিয়েছে ইউজার।</p>
                    <p className='how-agent-bottom-text'>একজন এজেন্ট এর যদি ২০ থেকে ৫০ জন একটিভ প্লেয়ার থাকে – তার মাসে ২০ থেকে ৫০ হাজার টাকা কমিশন থাকে।</p>
                    <p className='how-agent-bottom-text'>মোট কথা এজেন্ট না হলে এজেন্ট হবার লাভ কি তা আপনি বুঝতে পারবেন না।</p>
                    <p className='how-agent-bottom-text'><br/><br/></p>
                    <p className='how-agent-bottom-text'>শর্ত সমুহঃ</p>
                    <p className='how-agent-bottom-text'>** এজেন্ট কে ৫০ হাজার টাকার পয়েন্ট কিনে এজেন্ট শুরু করতে হবে।</p>
                    <p className='how-agent-bottom-text'>** ইউজার ব্যালেন্স বাদ দিয়ে – এজেন্ট এর কাছে সব সময় ১৫০০ পয়েন্ট এর ব্যালেন্স থাকতে হবে।</p>
                    <p className='how-agent-bottom-text'>** এজেন্ট ব্যালেন্স যদি ২০০০ পয়েন্ট হয়ে যায় তাহলে এজেন্ট ৫০০ পয়েন্ট ভেল্কি কে বিক্রি করতে পারবেন।</p>
                    <p className='how-agent-bottom-text'>** এজেন্ট – ভেল্কি থেকে ৫০০ পয়েন্ট এর নিচে ক্রয় বিক্রয় করতে পারবেন না।</p>
                    <p className='how-agent-bottom-text'>** এজেন্ট এর কাছে সর্বনিম্ন ৩০ জন একটিভ প্লেয়ার থাকতে হবে।</p>
                    <p className='how-agent-bottom-text'>*** এজেন্ট ইউজার সাথে প্রতি পয়েন্ট কেনা বেচা করবে ১০০ টাকা করে।</p>
                    <p className='how-agent-bottom-text'><br/><br/></p>
                    <p className='how-agent-bottom-text'>পয়েন্ট এর দামঃ</p>
                    <p className='how-agent-bottom-text'>** এজেন্ট ভেল্কি থেকে পয়েন্ট কিনবে ৯৩ টাকা করে। এই পয়েন্ট এর দাম কমতে পারে নিম্নলিখিত কারণে। ৯১ টাকাঃ এজেন্ট যদি চায় তার পয়েন্ট ৯১ টাকা হউক। যেদিন থেকে তার পয়েন্ট এর দাম ৯১ টাকা হবে – সেই দিন থেকে তিনি তার পয়েন্ট এর দাম ফিক্সড ৯১ টাকা। কেনা বেচা উভয় ক্ষেত্রেই সমান । এজেন্ট এর লাভ লস কোন টার ই দায় ভার ভেল্কি নিবে না। এজেন্ট যতই বিক্রি করুক এবং যতই কিনুক ২ ক্ষেত্রেই দাম সমান থাকবে ৯১ টাকা।</p>
                    <p className='how-agent-bottom-text'>৮৯ টাকাঃ এজেন্ট যদি চায় তার পয়েন্ট ৮৯ টাকা হউক। যেদিন থেকে তার পয়েন্ট এর দাম ৮৯ টাকা হবে – সেই দিন থেকে তার পয়েন্ট এর দাম ফিক্সড ৮৯ টাকা। এই ক্ষেত্রে – এজেন্ট ভেল্কি থেকে শুধু পয়েন্ট কিনতেই পারবেন – কিন্তু ভেল্কি এর কাছে কোন পয়েন্ট বিক্রি করতে পারবেন না। এই পয়েন্ট রেট শুধু লোকাল এজেন্ট দের জন্য – অনলাইন এজেন্ট দের জন্য না। </p>
                    <p className='how-agent-bottom-text'><br/><br/></p>
                    <p className='how-agent-bottom-text'>বিকাশ/নগদ/রকেটঃ</p>
                    <p className='how-agent-bottom-text'>** অনেকেই আছেন – নিজের বিকাশ এজেন্ট নাই বা নিজের বিকাশ এজেন্ট এ লেনদেন করতে রিস্ক মনে করেন। সেই ক্ষেত্রে কোম্পানীর বিকাশ এজেন্ট ব্যবহার করতে পারেন। যদি কোম্পানীর বিকাশ – নগদ এজেন্ট ব্যবহার করেন – তাহলে পয়েন্ট এর দাম হবে ৯৫ টাকা। </p>
                    <p className='how-agent-bottom-text'><br/><br/></p>
                    <p className='how-agent-bottom-text'>কি কি কারনে এজেন্ট বাতিল হয়ে যেতে পারেঃ</p>
                    <p className='how-agent-bottom-text'>** একটা বিষয় অবগত করা দরকার। এজেন্ট এর যদি নিজে খেলার অভ্যাস থাকে তাহলে – এজেন্ট হউয়া থেকে বিরত থাকুন। এজেন্ট যদি কখনো নিজে খেলতে গিয়ে ধরা পরেন – তাহলে এজেন্ট একাউন্ট ঐ অবস্থায় সঙ্গে সঙ্গে ব্লক হয়ে যাবে এবং সমস্ত লেনদেন বন্ধ হয়ে যাবে। যদি এজেন্ট নিজে কোন আইডি তে বাজি ধরিয়ে দিতে চান – তাহলে ভেল্কি কে আগেই সেই আইডি র বিষয়ে জানাতে হবে।</p>
                    <p className='how-agent-bottom-text'>** কোন ইউজার এর পয়েন্ট ইউজার কে না জানিয়ে তুলে নিলে। </p>
                    <p className='how-agent-bottom-text'>** ইউজার একাউন্ট থেকে পয়েন্ট তোলার ১ ঘন্টার মধ্যে টাকা টা ইউজার কে বুঝিয়ে না দিলে।</p>
                    <p className='how-agent-bottom-text'>** ইউজার পাসোয়ার্ড ইউজার কে না জানিয়ে পরিবর্তন করলে।</p>
                    <p className='how-agent-bottom-text'>** ইউজার এর একাউন্ট খোলার সময় কোম্পানীর নিয়ম নিতি না মানলে।</p>
                    <p className='how-agent-bottom-text'>** ইউজার এর একাউন্ট খোলার সময় – ইউজার এর ফোন নাম্বার এর বদলে অন্য কারো ফোন নাম্বার ব্যবহার করলে। </p>
                    <p className='how-agent-bottom-text'>** ডিপোজিট বা উইথড্র এর ক্ষেত্রে কোম্পানীর নিয়ম না মানলে।</p>
                    <p className='how-agent-bottom-text'><br/><br/></p>
                    <p className='how-agent-bottom-text'>সিস্টেম জানা শেষ হলে আপনাকে নিচের লিংক এ ক্লিক করে সুপার এজেন্ট লিষ্ট দেখতে হবে।</p>
                    <p className='how-agent-bottom-text'><br/><br/></p>
                    <p className='how-agent-bottom-text'>এই লিষ্ট এর সব সুপার এর সাথে এজেন্ট হবার বিষয় টি নিয়ে আলাপ করেন – যে সুপার সাথে আপনার ভাল লাগবে তার কাছ থেকে এজেন্ট নিতে পারবেন।</p>
                </div>

                <div className='how-agent-right'>
                    <div className='how-agent-right-form'>
                        <p>Search</p>
                        <div className='how-agent-right-form-input'>
                            <input type="text" placeholder='Search...'/>
                            <button>Search</button>
                        </div>
                    </div>

                    <div className='how-agent-right-bottom'>
                        <h3 className='how-agent-right-list-title'>Recent Posts</h3>
                        <ul className='how-agent-right-list'>
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

export default HowAgent