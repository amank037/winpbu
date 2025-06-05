import './SearchAgentPhone.css'
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

function SearchAgentPhone() {
  return (
    <div className='search-agent-phone-div'>
        <div className='search-agent-phone-div2'>
            <div className='search-agent-phone-container'>
                <div className='search-agent-phone-left'>
                    <div className='search-agent-phone-left-top'>
                        <img className='search-agent-img' src="https://winpibu.com/wp-content/uploads/2025/03/Selection_141-1.png" alt="" />
                        <h2 className='search-agent-phone-left-top-title'>এজেন্ট কে ফোন নাম্বার দিয়ে খুঁজুন</h2>
                        <p className='search-agent-phone-left-top-date'>January 31, 2025</p>
                    </div>

                    <div className='search-agent-phone-left-bottom'>
                        <p className='search-agent-phone-left-bottom-title'>এজেন্ট কে ফোন নাম্বার দিয়ে খুজুনঃ</p>
                        <div className='search-agent-phone-left-bottom-form'>
                            <p>PHONE NUMBER:</p>
                            <input type="text" />
                            <button>Submit</button>
                        </div>
                        <p className='search-agent-phone-left-bottom-desc'>ফোন নাম্বার প্রদান করুন।</p>
                    </div>
                </div>

                <div className='search-agent-phone-right'>
                    <div className='search-agent-phone-right-form'>
                        <p>Search</p>
                        <div className='search-agent-phone-right-form-input'>
                            <input type="text" placeholder='Search...'/>
                            <button>Search</button>
                        </div>
                    </div>

                    <div className='search-agent-phone-right-bottom'>
                        <h3 className='search-agent-phone-right-list-title'>Recent Posts</h3>
                        <ul className='search-agent-phone-right-list'>
                            <li><Link to="/customer-service">Customer Service</Link></li>
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

export default SearchAgentPhone