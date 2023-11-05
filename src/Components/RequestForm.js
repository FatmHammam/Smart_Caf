import rect from '../Assets/Svgs/rect.svg'
import picSpace from '../Assets/Svgs/picSpace.svg'
import { useNavigate } from "react-router-dom"

function RequestForm() {
  const navigate = useNavigate();
  const goToThankYou = () => {
    navigate('/thank-you')
  }
  return (
    <div className="w-full flex items-center mt-20 md:pr-20 pr-0">
      <div className="w-9/12 flex m-auto flex-col items-center justify-between">
        <p className='mb-6 font-semibold md:text-base text-sm'>Please, Fill this form to add your request</p>
        <img src={picSpace} alt='' className='mb-6' />
        <img src={rect} alt='' className='mb-4' />
        <div className='md:w-10/12 w-full md:flex-row flex-col flex md:items-start items-center justify-between ms:px-4 px-0'>
          <p className='font-semibold py-4'>Cancel</p>
          <div className='flex'>
            <button className='mx-2 border border-lg border-secondary py-3 px-4 rounded-lg font-semibold md:text-base text-xs'>Save For Later</button>
            <button onClick={() => goToThankYou()} className='mx-2  bg-secondary py-3 px-12 rounded-lg text-white font-semibold md:text-base text-xs'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestForm;