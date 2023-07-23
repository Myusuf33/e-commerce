import Style from './footer.module.css'

import Link from 'next/link'
import {FaTwitter} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
export default function Footer()
{
    return(
        <footer className={Style.footer}>
       <div className={Style.gridFooter}>
       <div className={Style.footerCol1}>
       <Link href={'/'}><img src="https://hackathon-dine-market.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.83c5fd82.png&w=256&q=75" alt="logo"></img></Link>
      <p className={Style.footer_content1}>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
       <div>
        <a href='https://twitter.com/'><button><FaTwitter size={24}/></button></a>
        <a href='https://facebook.com/'><button><FaFacebookF size={24}/></button></a>
        <a href='https://linkedin.com/'><button><FaLinkedinIn size={24}/></button></a>
       </div>
       </div>
       <div className={Style.footerCol2}>
        <h3>Company</h3>
        <ul>
            <li>About</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>How it Works</li>
            <li>Contact Us</li>
        </ul>
       </div>
       <div className={Style.footerCol2}>
        <h3>Support</h3>
        <ul>
            <li>Support Career</li>
            <li>24h Service</li>
            <li>Quick Chat</li>
        </ul>
       </div>
       <div className={Style.footerCol2}>
        <h3>Contact</h3>
        <ul>
            <li>Whatsapp</li>
            <li>Support 24h</li>
        </ul>
       </div>
       </div>
       <hr className={Style.hr}/>
       <div className={Style.finalFooter}>
       <div className={Style.copyright}>Copyright &nbsp;<span><AiOutlineCopyrightCircle size={13}/></span>&nbsp; 2023 Dine Market</div>
       <div><p>Design by.<span> Weird Design Studio</span></p></div>
       <div><p>Code by.<span className={Style.code}><a href='https://github.com/Myusuf33'> Muhammad Yousaf on Github</a></span></p></div>
       </div>
        </footer>
    )
}