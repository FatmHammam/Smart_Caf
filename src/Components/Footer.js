import { useNavigate } from "react-router-dom"
import footerLogo from '../Assets/Svgs/footer-logo.svg'
import google from '../Assets/Svgs/google.svg'
import location from '../Assets/Svgs/location.svg'
import messenger from '../Assets/Svgs/messenger.svg'
import whatsapp from '../Assets/Svgs/whatsapp.svg'
import fb from '../Assets/Svgs/fb.svg'
import instgram from '../Assets/Svgs/instagram.svg'
import linkedin from '../Assets/Svgs/linkedin.svg'

function Footer() {
  const navigate = useNavigate();
  const goToFaqs = () => {
    navigate('/faqs')
  }
  const goToBlog = () => {
    navigate('/blog')
  }
  return (
    <div className="bg-footerBg md:mt-28 mt-28 flex flex-col items-center justify-between">
      <div className="md:w-10/12  w-full flex flex-col md:items-start items-center justify-between">
        <img src={footerLogo} alt="" className="md:mt-12 mt-16 mb-6 " />
        <div className="flex md:flex-row flex-col justify-between md:items-start items-center w-full ">
          <div className="flex flex-col justify-center md:w-3/12 w-9/12 md:mb-0 mb-6 md:items-start items-center">
            <p className='text-white opacity-75 mb-6 md:text-base text-sm md:text-start text-center'>Siamo il primo CAF in Italia completamente Online. Il nostro servizio si basa sulla firma elettronica avanzata che ha assoluto valore legale.</p>
            <div className="flex items-start">
              <p className='text-white opacity-75 mb-6'>Powered By :</p>
              <img src={google} alt="" className='ml-2 mt-1' />
            </div>
            <div className="flex md:items-start items-center">
              <img src={location} alt="" className='mr-2' />
              <p className='text-white'>23 street, Milano, Italy</p>
            </div>
          </div>
          <div className="flex flex-col md:items-start items-center justify-center  md:w-2/12 w-9/12 md:pl-8 pl-0 md:pb-0 pb-4 ">
            <h3 className='text-white mb-2'>Link veloci</h3>
            <p className='text-white opacity-75 mb-1'>Chi siamo</p>
            <p className='text-white opacity-75 mb-1'>Modulo Revoca</p>
            <p className='text-white opacity-75 mb-1 cursor-pointer' onClick={() => goToBlog()}>Blogs</p>
            <p className='text-white opacity-75 mb-1 cursor-pointer' onClick={() => goToFaqs()}>FAQ</p>
          </div>
          <div className="flex flex-col md:items-start items-center justify-center  md:w-2/12  w-9/12 md:pb-0 pb-4">
            <h3 className='text-white mb-2'>Informazioni</h3>
            <p className='text-white opacity-75 mb-1'>Termini e condizioni</p>
            <p className='text-white opacity-75 mb-1'>Privacy Policy</p>
            <p className='text-white opacity-75 mb-1'>Cookie Policy</p>
            <p className='text-white opacity-75 mb-1'>Manuale Operativo FEA</p>
          </div>
          <div className="flex flex-col md:items-start items-center justify-center md:w-2/12 w-9/12 md:pb-0 pb-4">
            <h3 className='text-white mb-2'>Richiedi una rapida
              consultazione!</h3>
            <p className='text-white opacity-75'>Contattaci</p>
            <span className='text-footerContact opacity-75 mt-2 mb-2 text-sm'>Contattaci in Live Chat</span>
            <div className="flex">
              <img src={whatsapp} alt="" className='mr-2' />
              <img src={messenger} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-2 border-footerContact mt-6 mb-6"></div>
      <div className="w-10/12 flex md:items-start items-center justify-between pb-6 md:flex-row flex-col ">
        <p className='text-white md:text-base text-sm md:text-start text-center'>copyright © 2010-2023 smartcaf Company All rights reserved.</p>
        <div className="w-3/12 flex md:items-start items-center justify-center md:pt-0 pt-4 ">
          <img src={fb} alt="" className='ml-6 mr-2' />
          <img src={instgram} alt="" className='ml-2 mr-2' />
          <img src={linkedin} alt="" className='ml-2 mr-2' />
        </div>
      </div>
    </div>
  );
}

export default Footer;
