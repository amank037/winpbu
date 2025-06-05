import './SuperAgentList.css'
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
    { id: "312", number: "+601112648239" },
    { id: "487", number: "+601112834672" },
    { id: "563", number: "+601112193857" },
    { id: "129", number: "+601112349182" },
    { id: "705", number: "+601112736495" },
    { id: "641", number: "+601112947382" },
    { id: "853", number: "+601112102938" },
    { id: "276", number: "+601112857493" },
    { id: "398", number: "+601112483920" },
    { id: "521", number: "+601112574829" },
    { id: "903", number: "+601112239475" },
    { id: "340", number: "+601112658473" },
    { id: "115", number: "+601112984205" },
    { id: "758", number: "+601112305917" },
    { id: "486", number: "+601112846320" },
    { id: "267", number: "+601112729384" },
    { id: "894", number: "+601112675839" },
    { id: "730", number: "+601112198374" },
    { id: "612", number: "+601112938572" },
    { id: "403", number: "+601112203948" },
    { id: "184", number: "+601112583720" },
    { id: "375", number: "+601112498305" },
    { id: "246", number: "+601112629384" },
    { id: "819", number: "+601112857203" },
    { id: "952", number: "+601112734895" },
    { id: "334", number: "+601112938405" },
    { id: "120", number: "+601112204958" },
    { id: "673", number: "+601112837194" },
    { id: "410", number: "+601112678203" },
    { id: "501", number: "+601112382049" },
    { id: "769", number: "+601112574839" },
    { id: "298", number: "+601112947502" },
    { id: "823", number: "+601112384726" },
    { id: "361", number: "+601112104958" },
    { id: "239", number: "+601112382947" },
    { id: "194", number: "+601112274938" },
    { id: "627", number: "+601112948372" },
    { id: "510", number: "+601112845920" },
    { id: "445", number: "+601112390472" },
    { id: "388", number: "+601112103948" },
    { id: "137", number: "+601112938475" },
    { id: "298", number: "+601112729384" },
    { id: "689", number: "+601112837402" },
    { id: "594", number: "+601112230984" },
    { id: "731", number: "+601112948375" },
    { id: "342", number: "+601112394820" },
    { id: "420", number: "+601112839402" },
    { id: "574", number: "+601112194837" },
    { id: "638", number: "+601112284739" },
    { id: "765", number: "+601112294837" },
    { id: "809", number: "+601112204857" }
  ]
  

function SuperAgentList() {
  return (
    <div>
        <div className='super-agent-div2'>
            <div className='super-agent-container'>
                <div className='super-agent-left'>
                    <div className='super-agent-left-top'>
                        <img className='super-agent-img' src="https://winpibu.com/wp-content/uploads/2025/03/super-agent-3.jpg" alt="" />
                        <h2 className='super-agent-left-top-title'>Super Agent List</h2>
                        <p className='super-agent-left-top-date'>January 31, 2025</p>
                    </div>

                    <p className='super-agent-left-form-title'>এজেন্ট এর আইডি নাম্বার দিয়ে খুজুনঃ</p>

                    <div className='super-agent-left-form'>
                        <AgentForm />
                    </div>

                    <div className='super-agent-left-desc'>
                        <p>এজেন্ট দের সাথে লেনদেন এর আগে WINPIBU এর নিয়ম গুলো জেনে নিন!!</p>
                        <p>**প্রতারনার হাত থেকে বাচতে সবার আগে ভিজিট করুন WINPIBU.COM **হোয়াটসঅ্যাপ ব্যাতিত অন্য কোন এপ এর মাধ্যমে যোগাযোগ বা লেনদেন করা যাবে না এবং করলে তা গ্রহনযোগ্য হবে না। **এজেন্ট পাসোয়ার্ড পরিবর্তন করে দিলে – আপনি একাউন্টে ঢুকে আবার পাসোয়ার্ড পরিবর্তন করে নিবেন। এজেন্ট যাতে কোন ভাবেই আপনার পাসোয়ার্ড না জানে। আপনার পাসোয়ার্ড আপনি কাউকেই দিবেন না – সে যেই হউক না কেন। **সকাল ৯ঃ৪৫ এর আগে এবং রাত ৯ঃ৪৫ এর পরে কোন ইউজার যদি এজেন্ট কে টাকা পাঠায় – অই টাকার দায়ভার WINPIBU নিবে না। **প্রতিবার এজেন্ট এর কাছ থেকে পয়েন্ট নেবার আগে – এজেন্ট এর কাছে লেনদেন এর তথ্য জেনে নিতে হবে। যেহেতু এজেন্ট এক এক সময় এক ভাবে লেনদেন করে সেহেতু এই তথ্য জানা জরুরী। **এজেন্ট এর বিরুদ্ধে কোন অভিযোগ থাকলে এজেন্ট এর নামের শেষে অভিযোগ বাটন এ ক্লিক করলে যে হোয়াটসঅ্যাপ নাম্বার আসবে – তাকে অভিযোগ করতে হবে।</p>
                    </div>

                    <div className='super-agent-left-table'>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID NO</th>
                                    <th>TYPE</th>
                                    <th>SITE</th>
                                    <th>WHTS</th>
                                    <th>PH NUMBER</th>
                                    <th>COMPLAIN</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listData.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>মাষ্টার এজেন্ট</td>
                                        <td>|| VELKI ✅</td>
                                        <td>
                                            <a href=''>
                                                <img className='super-agent-left-table-wa-img' 
                                                     src="https://winpibu.com/wp-content/uploads/2025/03/whatsappex.png" 
                                                     alt="" />
                                            </a>
                                        </td>
                                        <td>{item.number}</td>
                                        <td>অভিযোগ</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='super-agent-right'>
                    <div className='super-agent-right-form'>
                        <p>Search</p>
                        <div className='super-agent-right-form-input'>
                            <input type="text" placeholder='Search...'/>
                            <button>Search</button>
                        </div>
                    </div>

                    <div className='super-agent-right-bottom'>
                        <h3 className='super-agent-right-list-title'>Recent Posts</h3>
                        <ul className='super-agent-right-list'>
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

export default SuperAgentList