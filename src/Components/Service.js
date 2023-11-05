import ServiceCard from './ServiceCard'
import caf from '../Assets/Svgs/caf.svg'
import rightArrow from '../Assets/Svgs/rightArrow.svg'
import isee from '../Assets/Svgs/isee.svg'
import empty from '../Assets/Svgs/empty.svg'

function Service() {
  return (
    <div className="w-full flex items-center mt-20">
      <div className="w-9/12 flex flex-col items-center justify-between m-auto">
        <div className="w-full flex md:flex-row flex-col md:items-start items-center justify-between ">
          <div className="md:w-6/12 w-full md:mb-0 mb-4 flex md:items-start items-center flex-col">
            <h3 className="md:text-2xl font-semibold mb-6 ">Our Services</h3>
            <p className="text-[#727272] md:w-full w-8/12 md:m-0 m-auto md:text-start text-center md:text-lg text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          </div>
          <button className="bg-[#8FC045] text-white py-3 rounded-md  hover:bg-gray-400 hover:text-black duration-500  w-6/12 md:w-52 md:text-lg text-sm">Check All Services!</button>
        </div>
        <div className='flex w-full items-center justify-between mt-12 md:flex-row flex-col '>
          <ServiceCard
            width={'10/12'}
            shadow={"shadow-2xl"}
            img={<img src={caf} alt='' className='mr-6' />}
            title={<p className='text-xl font-bold leading-relaxed'>CAF</p>}
            text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'}
            textColor={'[#727272]'}
            more={
              <div className="flex py-4">
                <span className='text-secondary text-sm font-semibold mr-2'>Read More</span>
                <img alt="" src={rightArrow} />
              </div>
            }
          />
          <ServiceCard
            width={'10/12'}
            shadow={"shadow-2xl"}
            img={<img src={isee} alt='' className='mr-6' />}
            title={<p className='text-xl font-bold leading-relaxed'>ISEE 2022</p>}
            text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'}
            textColor={'[#727272]'}
            more={
              <div className="flex py-4">
                <span className='text-secondary text-sm font-semibold mr-2'>Read More</span>
                <img alt="" src={rightArrow} />
              </div>
            }
          />
          <ServiceCard
            width={'10/12'}
            shadow={"shadow-2xl"}
            img={<img src={empty} alt='' className='mr-6' />}
            title={<p className='text-xl font-bold leading-relaxed'>Patronato</p>}
            text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'}
            textColor={'[#727272]'}
            more={
              <div className="flex py-4">
                <span className='text-secondary text-sm font-semibold mr-2'>Read More</span>
                <img alt="" src={rightArrow} />
              </div>
            }
          />
          <ServiceCard
            width={'10/12'}
            shadow={"shadow-2xl"}
            img={<img src={empty} alt='' className='mr-6' />}
            title={<p className='text-xl font-bold leading-relaxed'>Immigrazione</p>}
            text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'}
            textColor={'[#727272]'}
            more={
              <div className="flex py-4">
                <span className='text-secondary text-sm font-semibold mr-2'>Read More</span>
                <img alt="" src={rightArrow} />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Service;
