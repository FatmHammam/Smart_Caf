import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import logo from '../Assets/Svgs/logo.svg'
import footerLogo from '../Assets/Svgs/footer-logo.svg'
import usa from '../Assets/Svgs/usa.svg'

function Navbar() {
  const navigate = useNavigate();
  let [open, setOpen] = useState(false)
  const [colorChange, setColorchange] = useState(false);
  let links = [
    { name: 'Home', url: '/' },
    { name: 'Service', url: '/services' },
    { name: 'About us', url: '/about-us' },
    { name: 'Contact us', url: '/contact-us' },
  ]
  const changeNavbarColor = () => {
    if (window.scrollY >= 60) {
      setColorchange(true);
    }
    else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);
  const goToAdminDashboard = () => {
    navigate('/admin-dashboard')
  }
  return (
    <div className={`shadow-md w-full md:pb-4 fixed top-0 left-0 ${open ? 'mb-24 bg-footerBg' : 'mb-0'} ${colorChange ? 'bg-footerBg z-10' : 'z-10'}`}>
      <div className={`md:flex items-center justify-between py-4 md:px-10 px-7 md:pb-0 ${open ? 'pb-32' : 'pb-0'}`}>
        {colorChange ? <img src={footerLogo} alt="" className='md:ml-8 my-2 w-16' /> : <img src={logo} alt="" className='md:ml-8 my-2 w-16' />}
        <div className='text-3xl absolute right-8 top-8 cursor-pointer md:hidden'
          onClick={() => setOpen(!open)}
        >
          {open ? <FontAwesomeIcon icon={faXmark} color="#fff" /> : <FontAwesomeIcon icon={faBars} color={!colorChange ? "footerBg" : "#fff"} />}
        </div>
        <div className={`flex md:flex-row flex-col items-center relative md:static w-full 
        ${open ? 'top-6' : 'justify-around top-[-300px] h-[20px]'}
        `}>
          <ul className='flex items-center md:w-6/12 w-full transition-all duration-500 ease-in '>
            {
              links.map((link) => (
                <li className='mx-auto md:mr-8 md:mx-0 md:mt-0 mt-4' key={link.name}>
                  <a className='text-secondary md:text-base text-sm' href={link.url}>{link.name}</a>
                </li>
              ))
            }
          </ul>
          <div className='flex md:flex-row flex-col items-center md:w-4/12 w-full ' >
            <div className='md:w-6/12 w-full flex items-center justify-center md:mr-6 md:my-0 my-4 '>
              <img src={usa} alt="" className='mr-2' />
              <p className={open || colorChange ? 'text-white' : 'text-black'}>EN</p>
              <p className={`ml-2 mt-2 ${open || colorChange ? 'text-white' : 'text-black'}`}>^</p>
            </div>
            <div className='md:w-8/12 w-full flex items-center justify-around'>
              <button onClick={() => goToAdminDashboard()} className='md:w-36 w-40 py-2 mx-2 bg-[#8FC045] text-white rounded-md hover:bg-gray-400 hover:text-black duration-500'>Login</button>
              <button className='md:w-36 w-40 bg-[#fff] border-2 border-secondary-500 py-2 text-secondary rounded-md hover:bg-gray-400 hover:text-black duration-500 ' >Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar