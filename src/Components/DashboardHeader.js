import searchIcon from '../Assets/Svgs/searchIcon.svg'
import chevron from '../Assets/Svgs/chevron.svg'
import aDown from '../Assets/Svgs/aDown.svg'
import admin from '../Assets/Svgs/admin.svg'
import notify from '../Assets/Svgs/notify.svg'

function DashboardHeader({ title }) {
    return (
        <div className='w-full md:pb-4 flex items-center justify-center'>
            <div className='md:w-full w-11/12 md:flex items-center justify-between py-4 md:px-10 px-7 md:pb-0'>
                <div className='md:w-4/12 w-full flex items-center justify-center'>
                    <p className='mr-4 font-semibold'>{title}</p>
                    <div className='md:w-80 w-80 md:my-6 my-2 flex bg-[#ECECEC]  mt-2 rounded-lg items-center justify-between py-3 px-4 '>
                        <p className='text-[#6B6B6B] text-sm'>Search</p>
                        <img src={searchIcon} alt="" className='w-5' />
                    </div>
                </div>
                <div className='flex md:items-start items-center md:justify-center justify-around'>
                    <div className='w-6/12 flex items-center md:mr-6 mr-0 md:my-0 my-4'>
                        <p className='md:mr-2 mr-0'>EN</p>
                        <img src={chevron} alt="" />
                        <img src={notify} alt="" className='ml-4' />
                    </div>
                    <div className='flex bg-[#F6F6F6] w-52 h-12 px-2 py-2 items-center rounded-lg justify-between'>
                        <img src={admin} alt="" className='h-10' />
                        <p className='md:text-base text-xs'>Mohammed Ali</p>
                        <img src={aDown} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardHeader;
