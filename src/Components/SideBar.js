import { useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faChartPie, faPeopleCarryBox, faMoneyBill, faUsers, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import footerLogo from '../Assets/Svgs/footer-logo.svg'
import add from '../Assets/Svgs/add.svg'

const links = [
    { title: 'Dashboard', to: '', icon: faChartPie },
    { title: 'Request', to: 'request', icon: faPenToSquare },
    { title: 'Service', to: 'admin-services', icon: faPeopleCarryBox },
    { title: 'Payment', to: 'payments', icon: faMoneyBill },
    { title: 'Clients', to: 'clients', icon: faUsers }
]
function SideBar() {
    const [active, setActive] = useState("dashboard")
    return (
        <div className="min-h-full bg-[#262F39] flex items-center justify-center">
            <div className="md:w-full w-11/12 flex flex-col md:my-0 my-4 flex-wrap items-center justify-center">
                <div className='w-full items-center flex md:flex-col flex-row md:justify-center justify-between'>
                    <img src={footerLogo} alt="" className="md:w-28 w-20  md:mt-12 mb-12" />
                    <div className='md:w-10/12 w-40 mb-10 flex items-center justify-around bg-[#8FC045] text-white py-2 rounded-md  hover:bg-gray-400 hover:text-black duration-500'>
                        <img src={add} alt="" className="" />
                        <span className='md:text-base text-xs'>New Request</span>
                    </div>
                </div>
                <div className='w-full flex md:flex-col flex-row items-start justify-between md:flex-nowrap flex-wrap'>
                    {links.map(link => (
                        <div onClick={() => setActive(link.title)} className={`md:w-full w-40 flex items-center justify-center  mb-6 py-2 ${active === link.title ? "bg-[#303843]" : "bg-transparent"}`}>
                            <div className='w-10/12 flex'>
                                <FontAwesomeIcon icon={link.icon} size='xl' color={active === link.title ? "#8FC045" : "#fff"} />
                                <Link className='md:text-base text-xs text-white ml-4' to={link.to}>{link.title}</Link>
                            </div>
                        </div>
                    ))}
                    <div className='w-full bg-[#4D4D4D] border my-4'></div>
                    <div onClick={() => setActive("logout")} className={`md:w-full w-40  justify-center flex items-center mb-6 py-2 ${active === "logout" ? "bg-[#303843]" : "bg-transparent"}`}>
                        <div className='w-10/12 flex'>
                            <FontAwesomeIcon icon={faRightFromBracket} size='xl' color={active === "logout" ? "#8FC045" : "#fff"} />
                            <p className='md:text-base text-xs text-white ml-4 cursor-pointer'>Logout</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SideBar;
