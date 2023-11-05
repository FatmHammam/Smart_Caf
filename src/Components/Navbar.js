import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import logo from '../Assets/Svgs/logo.svg'
import footerLogo from '../Assets/Svgs/footer-logo.svg'
import usa from '../Assets/Svgs/usa.svg'
import chevron from '../Assets/Svgs/chevron.svg'

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
      <div className={`md:flex items-center justify-between py-4 md:px-10 px-7 md:pb-0 ${open ? 'pb-80' : 'pb-0'}`}>
        {colorChange ? <img src={footerLogo} alt="" className='md:ml-8 my-2 w-16' /> : <img src={logo} alt="" className='md:ml-8 my-2 w-16' />}
        <div className='text-3xl absolute right-8 top-8 cursor-pointer md:hidden'
          onClick={() => setOpen(!open)}
        >
          {open ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
        </div>
        <div className={`md:flex md:items-center w-2/3 transition-all duration-500 ease-in absolute md:static md:pb-0 pb-12 w-full l-0 md:mt-0 mt-6
        md:ml-6 ml-2
        ${open ? 'top-20' : 'hidden'}
        `}>
          <ul className='md:flex md:items-center w-2/3 transition-all duration-500 ease-in '>
            {
              links.map((link) => (
                <li className='mr-8' key={link.name}>
                  <a className='text-secondary' href={link.url}>{link.name}</a>
                </li>
              ))
            }
          </ul>
          <div className='md:flex items-center md:pb-0 pb-4  md:ml-4 ' >
            <div className='md:flex items-center mr-6 sm:flex md:my-0 my-4'>
              <img src={usa} alt="" className='mr-2' />
              <p className={open ? 'text-white' : 'text-black'}>EN</p>
              {open ? <span className='text-white ml-2 mt-2'>^</span> : ''}
              <img src={chevron} alt="" />
            </div>
            <div className='flex-col flex md:flex-row'>
              <button onClick={() => goToAdminDashboard()} className='bg-[#8FC045] text-white py-2 px-7 rounded-md md:ml-6 hover:bg-gray-400 hover:text-black duration-500 md:my-0 my-2 w-40 md:w-1/2'>Login</button>
              <button className='bg-[#fff] border-2 border-secondary-500 text-secondary py-2 px-5  rounded-md md:ml-6 hover:bg-gray-400 hover:text-black duration-500 w-40 md:w-1/2' >Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar