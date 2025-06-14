import './Home.css'
import HomeSlider from '../../components/HomeSlider/HomeSlider'
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
function Home() {
  return (
    <div>
        <div className='home-slider-div'>
            <HomeSlider/>
        </div>

        <div className='home-mid-div'>
            <h1 className='home-mid-title'>WINPBU তে স্বাগতম</h1>
            <p className='home-mid-desc'>এজেন্ট এর আইডি নাম্বার দিয়ে খুজুনঃ</p>
            <div className='agent-form-div'>
                <AgentForm/>
            </div>
            <div className='home-mid-bottom'>
                <p>WINPBU বাংলাদেশ – বাংলাদেশের শীর্ষস্থানীয় অনলাইন গেমিং এবং বেটিং প্ল্যাটফর্ম পরিচালনা প্রতিষ্টান। আমদের সাইট গুলো হচ্ছে এজেন্ট বেইজড সাইট। এই খানে এজেন্ট এর মাধ্যমে লেনদেন করতে হবে। এজেন্ট আপনাকে একাউন্ট খুলে দিবে এবং এজেন্টই আপনাকে ডিপোজিট বা উইথড্র করে দিবে। আমাদের সাইট গুলোর মধ্যে আছে – ভেল্কি /// বাজিওয়ালা /// বাজি৩৬৫। উপরে আপনি আপনার এজেন্ট সার্চ করে বের করুন। আমাদের লিষ্টের এজেন্ট ছাড়া আপনি যদি লেনদেন করেন তার দায়ভার আপনাকেই নিতে হবে।</p>
                <span className='text-bold'>কিভাবে একাউন্ট খুলবেনঃ</span>
                <p>  আমাদের সাইটে একাউন্ট করতে হলে আপনার এজেন্ট এর মাধ্যমে একাউন্ট খুলতে হবে। এজেন্ট এর মাধ্যমেই টাকা ডিপোজিট এবং উইথড্র করতে হবে। আপনি যে এজেন্ট এর কাছ থেকে একাউন্ট খুলবেন তার সাথেই সব সময় লেনদেন করতে হবে। ঠিক কোন এজেন্ট কে টাকা দিবেন এবং কিভাবে তার সাথে লেনদেন করবেন তার বুঝতে হলে আপনার নিম্বের তথ্য গুলো পড়া জরুরী।</p>
                <span className='text-bold'>এজেন্ট লিস্টঃ</span>
                <p>  একাউন্ট খুলতে নিম্বের অনলাইন এজেন্ট লিস্ট এ ক্লিক করুন। এজেন্ট লিষ্ট এর এজেন্ট দের সাথে ইউজার দের শুধু মাত্র হোয়াটসাপ এর মাধ্যমে যোগাযোগ করতে হবে। হোয়াটসাপ ছাড়া অন্য কোন মাধ্যমে যোগাযোগ করলে বা লেনদেন করলে তা গ্রহনযোগ্য হবে না। হোয়াটসাপ এ যোগাযোগ করতে হলে এজেন্ট লিস্টে হোয়াটসাপ আইকন উপরে ক্লিক করুন অথবা ফোন নাম্বার টি মোবাইলে সেভ করে তাকে হোয়াটসাপ এ মসেজ পাঠাতে পারবেন। হোয়াটসাপ এপ টি আপনার মোবাইলে আগে থেকেই থাকতে হবে। না থাকলে গুগুল প্লে থেকে ইন্সটল করে নিন।</p>
            </div>
        </div> 

        <BottomGrid data1={data1} data2={data2}/>

    </div>
  )
}

export default Home