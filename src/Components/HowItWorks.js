import React from 'react';
import doc from '../Assets/Svgs/doc.svg'
import send2 from '../Assets/Svgs/send2.svg'
import form from '../Assets/Svgs/form.svg'
import whatsapp from '../Assets/Svgs/whatsapp.svg'

function HowItWorks() {
  return (
    <div className="w-full flex flex-col items-center justify-between bg-howItWorksBg md:py-20 py-12 mt-20 relative">
      <div className='flex flex-col items-center justify-center'>
        <p className='mb-2 font-medium md:text-3xl text-lg'>How Smart CAF Works?</p>
        <div className='border border-solid w-2/12 border-secondary mb-12 border-2'></div>
      </div>
      <div className="border border-dashed md:w-9/12 w-0 border-[#cdcfd2] absolute bottom-[200px] right-[270px]"></div>
      <div className="w-9/12 flex md:flex-row flex-col items-center justify-between">
        <img src={form} alt='' className='md:mb-0 mb-4' />
        <img src={send2} alt='' className='md:mb-0 mb-4' />
        <img src={doc} alt='' className='md:mb-0 mb-4' />
        <img src={whatsapp} alt='' className='w-20 md:mb-8 mb-0 md:ml-2 ml-0' />
      </div>
    </div>
  );
}

export default HowItWorks;
