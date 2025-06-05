import './SiteAdminList.css'
import { Link } from 'react-router-dom'
import AgentForm from '../../components/AgentForm/AgentForm'
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

const listData = [
    { id: "1", number: "+447446143563" },
    { id: "1", number: "+971564994640" },
    { id: "1", number: "+15797940196" },
  ]
  

function SiteAdminList() {
  return (
    <div>
        <div className='site-admin-div2'>
            <div className='site-admin-container'>
                <div className='site-admin-left'>
                    <div className='site-admin-left-top'>
                        <img className='site-admin-img' src="https://winpibu.com/wp-content/uploads/2025/03/site-admin-list-3.jpg" alt="" />
                        <h2 className='site-admin-left-top-title'>Site Admin List</h2>
                        <p className='site-admin-left-top-date'>January 31, 2025</p>
                    </div>

                    <p className='site-admin-left-form-title'>এজেন্ট এর আইডি নাম্বার দিয়ে খুজুনঃ</p>

                    <div className='site-admin-left-form'>
                        <AgentForm />
                    </div>

                    <div className='site-admin-left-desc'>
                        <p>এজেন্ট দের সাথে লেনদেন এর আগে WINPIBU এর নিয়ম গুলো জেনে নিন!!</p>
                        <p>**প্রতারনার হাত থেকে বাচতে সবার আগে ভিজিট করুন WINPIBU.COM **হোয়াটসঅ্যাপ ব্যাতিত অন্য কোন এপ এর মাধ্যমে যোগাযোগ বা লেনদেন করা যাবে না এবং করলে তা গ্রহনযোগ্য হবে না। **এজেন্ট পাসোয়ার্ড পরিবর্তন করে দিলে – আপনি একাউন্টে ঢুকে আবার পাসোয়ার্ড পরিবর্তন করে নিবেন। এজেন্ট যাতে কোন ভাবেই আপনার পাসোয়ার্ড না জানে। আপনার পাসোয়ার্ড আপনি কাউকেই দিবেন না – সে যেই হউক না কেন। **সকাল ৯ঃ৪৫ এর আগে এবং রাত ৯ঃ৪৫ এর পরে কোন ইউজার যদি এজেন্ট কে টাকা পাঠায় – অই টাকার দায়ভার WINPIBU নিবে না। **প্রতিবার এজেন্ট এর কাছ থেকে পয়েন্ট নেবার আগে – এজেন্ট এর কাছে লেনদেন এর তথ্য জেনে নিতে হবে। যেহেতু এজেন্ট এক এক সময় এক ভাবে লেনদেন করে সেহেতু এই তথ্য জানা জরুরী। **এজেন্ট এর বিরুদ্ধে কোন অভিযোগ থাকলে এজেন্ট এর নামের শেষে অভিযোগ বাটন এ ক্লিক করলে যে হোয়াটসঅ্যাপ নাম্বার আসবে – তাকে অভিযোগ করতে হবে।</p>
                    </div>

                    <div className='site-admin-left-table'>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID NO</th>
                                    <th>TYPE</th>
                                    <th>TELEGRAM</th>
                                    <th>WHTS</th>
                                    <th>WHATSAPP</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listData.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>মাষ্টার এজেন্ট</td>
                                        <td>Admin</td>
                                        <td>
                                            <a href=''>
                                                <img className='site-admin-left-table-wa-img' 
                                                     src="https://winpibu.com/wp-content/uploads/2025/03/whatsappex.png" 
                                                     alt="" />
                                            </a>
                                        </td>
                                        <td>{item.number}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='site-admin-right'>
                    <div className='site-admin-right-form'>
                        <p>Search</p>
                        <div className='site-admin-right-form-input'>
                            <input type="text" placeholder='Search...'/>
                            <button>Search</button>
                        </div>
                    </div>

                    <div className='site-admin-right-bottom'>
                        <h3 className='site-admin-right-list-title'>Recent Posts</h3>
                        <ul className='site-admin-right-list'>
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

export default SiteAdminList