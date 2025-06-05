import './BottomGrid.css'
import { Link } from 'react-router-dom'
// const data1 = [
//     {
//       icon: "Winpbu",
//       title: "Customer Service",
//       date: "March 25, 2025",
//       image: "https://winpibu.com/wp-content/uploads/2025/03/1657098452448.jpeg"
//     },
//     {
//       icon: "Winpbu",
//       title: "Master Agent List",
//       date: "March 23, 2025",
//       image: "https://winpibu.com/wp-content/uploads/2025/03/master-agent-1.jpg"
//     },
//     {
//       icon: "Winpbu",
//       title: "Super Agent List",
//       date: "March 23, 2025",
//       image: "https://winpibu.com/wp-content/uploads/2025/03/super-agent-3.jpg"
//     }
// ]

// const data2 = [
//     {
//         icon: "Winpbu",
//         title: "Sub Admin List",
//         date: "March 21, 2025",
//         image: "https://winpibu.com/wp-content/uploads/2025/03/sub-admin.jpg"
//       },
//       {
//         icon: "FAQ",
//         title: "WINPBU তে কিভাবে লেনদেন করবেন?",
//         date: "March 19, 2025",
//         image: "https://winpibu.com/wp-content/uploads/2025/03/MONEY-TRANSFER-2.png"
//       },
//       {
//         icon: "Winpbu",
//         title: "Site Admin List",
//         date: "March 19, 2025",
//         image: "https://winpibu.com/wp-content/uploads/2025/03/site-admin-list-2.jpg"
//       },
//       {
//         icon: "Winpbu",
//         title: "কিভাবে একাউন্ট খুলবেন?",
//         date: "March 19, 2025",
//         image: "https://winpibu.com/wp-content/uploads/2025/03/REGISTER-1.png"
//       },
// ]


function BottomGrid({data1, data2}) {
  return (
        <div className='bottom-grid-div'>
            <h1 className='bottom-grid-title'>You May Also Like</h1>
            <div className='bottom-grid-grid1'>
                {data1.map((slide, index) => (
                    <div className='bottom-grid-slide' key={index}>
                        <Link to={slide.link}>
                            <div className='bottom-grid-slide-image'>
                                <img src={slide.image} alt=''/>
                            </div>
                        </Link>
                            <h2 className='bottom-grid-slide-title'>{slide.title}</h2>
                            <span className='bottom-grid-slide-date'>{slide.date}</span>
                    </div>
                ))}
            </div>
            <div className='bottom-grid-grid2'>
                {data2.map((slide, index) => (
                    <div className='bottom-grid-slide' key={index}>
                        <Link to={slide.link}>
                            <div className='bottom-grid-slide-image'>
                                <img src={slide.image} alt=''/>
                            </div>
                        </Link>
                            <h2 className='bottom-grid-slide-title'>{slide.title}</h2>
                            <span className='bottom-grid-slide-date'>{slide.date}</span>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default BottomGrid