import Faq from '../Components/Faq';
import plus from '../Assets/Svgs/plus.svg'
import min from '../Assets/Svgs/min.svg'

function FaqsContainer({ info, moreInfo, img }) {

    return (
        <div className={`w-full flex items-center mt-28`}>
            <div className="md:w-9/12 w-11/12 flex m-auto flex-col items-start justify-around md:px-5 px-2 py-4 ">
                <h2 className='text-2xl font-semibold'>FAQs</h2>
                <div className='w-full flex md:flex-row flex-col items-start justify-between'>
                    <div className='flex flex-col w-full'>
                        <Faq
                            img={<img src={plus} alt="" />}
                        />
                        <Faq
                            img={<img src={min} alt="" />}
                            info={<p className='text-[#262F39] md:text-sm text-xs mt-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>}
                            moreInfo={<p className='text-[#262F39] md:text-sm text-xs mt-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>}
                        />
                        <Faq
                            img={<img src={plus} alt="" />}
                        />
                        <Faq
                            img={<img src={plus} alt="" />}
                        />
                        <Faq
                            img={<img src={plus} alt="" />}
                        />
                    </div>
                    <div className='flex flex-col w-full'>
                        <Faq
                            img={<img src={min} alt="" />}
                            info={<p className='text-[#262F39] md:text-sm text-xs mt-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>}
                            moreInfo={<p className='text-[#262F39] md:text-sm text-xs mt-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>}
                        />
                        <Faq
                            img={<img src={plus} alt="" />}
                        />
                        <Faq
                            img={<img src={plus} alt="" />}
                        />
                        <Faq
                            img={<img src={plus} alt="" />}
                        />
                        <Faq
                            img={<img src={plus} alt="" />}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FaqsContainer;