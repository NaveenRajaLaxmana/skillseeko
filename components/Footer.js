import Link from 'next/link'
import {GiWorld} from 'react-icons/gi'

const Footer = () => {
  return (
    <div className="footer space-y-4 p-14 bg-black text-white flex flex-col flex-wrap justify-around">
        <div className='footer-main-large-div flex lg:flex-row flex-col justify-around'>
        <div className='footer-main-div flex lg:flex-row flex-col justify-around'>
        <div className="footer-div flex flex-col text-sm mx-2 my-1 justify-around">
           <Link href="#"><a>SkillSeeko Business</a></Link> 
           <Link href="#"><a>Teach on SkillSeeko</a></Link> 
           <Link href="#"><a>About Us</a></Link> 
           <Link href="#"><a>Contact Us</a></Link> 
        </div>
        <div className="footer-div flex flex-col text-sm mx-2 my-1">
           <Link href="#"><a>Careers</a></Link> 
           <Link href="#"><a>Blog</a></Link> 
           <Link href="#"><a>Help and Support</a></Link> 
           <Link href="#"><a>Affiliate</a></Link> 
        </div>
        <div className="footer-div flex flex-col text-sm mx-2 my-1">
           <Link href="#"><a>Terms and Conditions</a></Link> 
           <Link href="#"><a>Privacy policy</a></Link> 
           <Link href="#"><a>Cookie Settings</a></Link> 
           <Link href="#"><a>Sitemap</a></Link> 
        </div>
        </div>
        <div className='language'>
            <button className='border border-white py-1 px-3 space-x-1.5 items-center flex flex-row'>
            <GiWorld size={20}/>
            <p>English</p>
            </button>
        </div>
        </div>
        <div className='footer-main-large-div flex lg:flex-row flex-col justify-around'>
            <h5 className='font-bold text-lg'>SkillSeeko</h5>
            <p>&copy; 2022 SkillSeeko</p>
        </div>
    </div>
  )
}

export default Footer