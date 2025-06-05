import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Faq from './pages/Faq/Faq'
import SearchAgentPhone from './pages/SearchAgentPhone/SearchAgentPhone'
import MasterAgentList from './pages/MasterAgentList/MasterAgentList'
import SuperAgentList from './pages/SuperAgentList/SuperAgentList'
import SubAdminList from './pages/SubAdminList/SubAdminList'
import SiteAdminList from './pages/SiteAdminList/SiteAdminList'
import CustomerService from './pages/CustomerService/CustomerSerivce'
import WinpbuTrade from './pages/WinpbuTrade/WinpbuTrade'
import OpenAccount from './pages/OpenAccount/OpenAccount'
import Rules from './pages/Rules/Rules'
import HowAgent from './pages/HowAgent/HowAgent'
import VelkiSite from './pages/VelkiSite/VelkiSite'

function App() {

  return (
    <Router>
      <div className='App'>
        <Header/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/search-agent-by-phone" element={<SearchAgentPhone />} />
          <Route path="/master-agent-list" element={<MasterAgentList />} />
          <Route path="/super-agent-list" element={<SuperAgentList />} />
          <Route path="/sub-admin-list" element={<SubAdminList />} />
          <Route path="/site-admin-list" element={<SiteAdminList />} />
          <Route path="/customer-service" element={<CustomerService />} />
          <Route path="/WINPBU-তে-কিভাবে-লেনদেন-করবেন?" element={<WinpbuTrade />} />
          <Route path="/কিভাবে-একাউন্ট-খুলবেন?" element={<OpenAccount />} />
          <Route path="/rules-and-regulations-for-open-account" element={<Rules />} />
          <Route path="/how-to-be-a-agent" element={<HowAgent />} />
          <Route path="/ভেল্কি-সাইট" element={<VelkiSite />} />
        </Routes>
        
        <Footer/>
      </div>
    </Router>
  )
}

export default App
