import './Footer.css'

function Footer() {
  return (
    <div className='footer-div'>
        <div className='footer-top'>
            <h2 className='footer-top-item'>Archives</h2>
            <a href="">January 2025</a>
        </div>

        <div className='footer-mid'>
            <h2 className='footer-mid-title'>Categories</h2>
            <div className='footer-mid-item'><a href="">FAQ</a></div>
            <div className='footer-mid-item'><a href="">Uncategorized</a></div>
            <div className='footer-mid-item'><a href="">VELKI</a></div>
            <div className='footer-mid-item'><a href="">Winpbu</a></div>
        </div>

        <div className='footer-bottom'>
            <div className='footer-bottom-container'>
                <span className=''>Copyright © 2025</span>
            </div>
        </div>
    </div>
  )
}

export default Footer