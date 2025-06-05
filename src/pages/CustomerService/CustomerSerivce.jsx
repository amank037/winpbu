import './CustomerService.css'
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

const listData = [
    { id: "1", number: "+601117602729", span:" (Head)" },
    { id: "2", number: "+601124326590" },
    { id: "3", number: "+601125743975" },
    { id: "4", number: "+601117993089" },
    { id: "5", number: "+601123211473" },
    { id: "6", number: "+601125744366" },
  ]
  

function CustomerService() {
  return (
    <div>
        <div className='site-admin-div2'>
            <div className='site-admin-container'>
                <div className='site-admin-left'>
                    <div className='site-admin-left-top'>
                        <img className='site-admin-img' src="https://winpibu.com/wp-content/uploads/2025/03/1657098452448.jpeg" alt="" />
                        <h2 className='site-admin-left-top-title'>Customer Service</h2>
                        <p className='site-admin-left-top-date'>January 31, 2025</p>
                    </div>

                    <div className='site-admin-left-desc'>
                        <p>**প্রতারনার হাত থেকে বাচতে সবার আগে ভিজিট করুন বাজিওয়ালার সাইটঃ</p>
                        <p>https://winpibu.com  **কাস্টমার সার্ভিসের কাউকেই আপনি আপনার একাউন্টের পাসোয়ার্ড দিবেন না।</p>
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
                                        <td>কাস্টমার সার্ভিস <span>{item.span}</span></td>
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

export default CustomerService