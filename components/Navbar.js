import {FaSearch,FaShoppingCart,FaBars} from 'react-icons/fa'
import {useRouter} from 'next/router'
import Link from 'next/link'
import { logout, useAuthUser } from 'contexts/AuthContext'
import { useAuthTutor,logoutTutor } from 'contexts/TutorContext'
import { useMemo } from 'react'
import {destroyCookie, parseCookies} from 'nookies'

const Navbar = () => {
    const router = useRouter()
    const {dispatch} = useAuthUser()
    const {dispatch:tdispatch} = useAuthTutor()
    const cookies = parseCookies()
   

    const Logout = () => {
        logout(dispatch)
        logoutTutor(tdispatch)
        router.push('/')
    }
    return (
        <div className="w-full h-16 z-10 sticky bg-white flex flex-row lg:justify-around items-center lg:p-0 px-2 shadow-2xl mb-0 justify-between">
            <FaBars fontSize={15} className="lg:hidden cursor-pointer hover:text-blue"/>
            <Link href={'/'}><a className="justify-self-center text-best-seller-box font-Roboto font-bold text-xl cursor-pointer">SkillSeeko</a></Link>
            <h5 className="hidden lg:flex text-black hover:text-blue cursor-pointer">Categories</h5>
            <div className='hidden lg:flex w-2/5 h-3/5 rounded-3xl border bg-greyinput outline-none p-2 flex-row items-center'>
                <FaSearch fontSize={15}/>
            <input className="lg:w-full h-full outline-none border-0 ml-2 bg-greyinput" placeholder='Search for Anything'/>
            </div>
            <Link href={'/tutor/login'}><a className="hidden lg:flex text-black hover:text-blue cursor-pointer">Teach on SkillSeeko</a></Link>
            <div className='mobile-search-cart-icon lg:hidden w-1/6 flex flex-row justify-around'>
            <FaSearch fontSize={15}  className="cursor-pointer hover:text-blue"/>
            <FaShoppingCart fontSize={19} className="cursor-pointer hover:text-blue" onClick={() => router.push('/cart')}/>
            </div>
            <FaShoppingCart fontSize={19} className="hidden lg:flex cursor-pointer hover:text-blue" onClick={() => router.push('/cart')}/>
            {!cookies.tutor && !cookies.user ? <Link href={'/login'}>
                <a className='hidden lg:flex py-1 px-2 border border-black bg-white text-black'>
                    Log in
                </a>
            </Link> : ''
            }       
            {!cookies.tutor && !cookies.user ? <Link href={'/login/register'}>
            <a className='hidden lg:flex py-1 px-2 border border-white bg-black text-white'>
                Sign up
            </a>
            </Link>
            : ''
            }
            {cookies.tutor || cookies.user ? 
                <button onClick={Logout} className='hidden lg:flex py-1 px-2 border border-black bg-white text-black'>Logout</button> : ''
            }
            
        </div>
    ) 
}

export default Navbar