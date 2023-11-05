import ServiceCard from './ServiceCard'
import qoutesOpen from '../Assets/Svgs/qoutesOpen.svg'
import qoutesClose from '../Assets/Svgs/qoutesClose.svg'
import dots from '../Assets/Svgs/dots.svg'
import person from '../Assets/Svgs/person.svg'
import stars from '../Assets/Svgs/stars.svg'
import rightArrow from '../Assets/Svgs/rightArrow.svg'
import rArrow from '../Assets/Svgs/rArrow.svg'
import lArrow from '../Assets/Svgs/lArrow.svg'

function ClientsFeedback() {
  return (
    <div className="w-full flex items-center justify-center my-40">
      <div className="w-9/12 flex md:flex-row flex-col items-center">
        <div className='w-8/12 flex flex-col md:items-start items-center'>
          <img src={qoutesOpen} alt="" className='mb-6' />
          <h2 className='text-secondary font-bold mb-6 md:text-base text-sm'>Clients Feedback</h2>
          <p className='w-8/12 md:text-left text-center font-bold mb-6 md:text-xl text-sm'>Don’t take our word for it, You can trust our clients’ words</p>
          <div className='md:w-4/12 w-11/12 border border-secondary rounded-lg flex items-center justify-center py-4 md:mb-0 mb-6'>
            <span className='text-sm text-secondary font-semibold mr-2'>View More Reviews</span>
            <img src={rightArrow} alt="" />
          </div>
        </div>
        <ServiceCard
          width={"8/12"}
          shadow={"shadow-2xl"}
          img={<img src={person} alt="" className='mr-6' />}
          text={'Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'}
          textColor={'[#727272]'}
          title={
            <div>
              <p className='md-text-base text-xs'>Mohamed Ahmed Mohamed</p>
              <img src={stars} alt="" />
            </div>
          }
          closingquotes={<img src={qoutesClose} alt="" className='w-3.5 ml-4 inline' />}
          start={<img src={lArrow} alt="" className='md:px-4 px-0 md:pr-8 pr-0 md:w-20 w-2.5 md:ml-0 ml-4' />}
          end={<img src={rArrow} alt="" className='md:px-4 px-0 md:pl-8 pl-0  md:w-20 w-2.5 md:mr-0 mr-4' />}
          more={<img src={dots} alt="" className='md:w-14 w-10 mx-auto py-6' />}
        />
      </div>
    </div>
  );
}

export default ClientsFeedback;
