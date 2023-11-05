import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import About from '../Components/About'
import GetReady from '../Components/GetReady'
import deal from '../Assets/Svgs/deal.svg'
import bus from '../Assets/Svgs/bus.svg'

function AboutUS() {
    return (
        <>
            <Navbar />
            <About
                direction={"row"}
                heading={<h3 className='font-bold mb-6'>How We Are</h3>}
                img={<img src={deal} alt="" className='md:w-5/12 w-full' />}
                more={
                    <div className='w-full'>
                        <p className='w-full mb-4 text-[#727A8F] md:text-base text-sm'>We are the first CAF in Italy completely online . Our service is based on the advanced electronic signature which has absolute legal value. In such a smart world, our idea of ​​offering fast, professional and quality CAF services was born.</p>
                        <p className='w-full mb-4 text-[#727A8F] md:text-base text-sm'>Time saved and the quality of our services are just some of the reasons why more and more people entrust us with their bureaucratic consultancy.</p>
                        <p className='w-full mb-4 text-[#727A8F] md:text-base text-sm'>In fact, you can request the service you want in the comfort of home in 5 minutes via your PC, your tablet or your smartphone, and your application will be processed within 72 hours .</p>
                    </div>
                }
            />
            <About
                direction={"row-reverse"}
                img={<img src={bus} alt="" className='md:w-5/12 w-full' />}
                more={
                    <div className='w-full'>
                        <p className='w-full mb-8 text-[#727A8F] md:text-base text-sm mt-8'>We allow you to avoid the long queues to request a file, we are available seven days a week in a completely digital way.</p>
                        <p className='w-full mb-8 text-[#727A8F] md:text-base text-sm'>You don't need to reach us to sign your documents, thanks to the advanced electronic signature which has absolute legal effect.</p>
                        <p className='w-full mb-8 text-[#727A8F] md:text-base text-sm'>The main advantage offered by digital has been to break down geographical limits, and this is why we guarantee our service throughout the peninsula.</p>
                        <p className='w-full mb-8 text-[#727A8F] md:text-base text-sm'>For any doubt or requirement, do not hesitate to contact our customer service . We will be happy to assist you in every step of your tax and bureaucratic procedures.</p>
                        <h3 className='text-lg font-bold my-6 md:text-base text-sm'>How We Are</h3>
                        <ul className='list-disc text-[#727A8F] pl-4'>
                            <li className='md:text-base text-sm'>No long waits</li>
                            <li className='md:text-base text-sm'>No leave from work</li>
                            <li className='md:text-base text-sm'>More time for yourself and your loved ones</li>
                            <li className='md:text-base text-sm'>Average time for each practice 5 min</li>
                        </ul>
                    </div>
                }
            />
            <GetReady
                mt={"10"}
                heading={"Ready to get started?"}
                firstOrFullName={<div className="md:w-5/12 w-full flex flex-col md:mb-0 mb-6 md:mx-0 md:items-start items-center">
                    <lable className="font-semibold text-xs">First  Name</lable>
                    <input type="text" className="md:w-10/12 w-11/12 bg-[#F5F5F5] px-6 py-4 mt-4 rounded-lg placeholder:text-[#666666] md:placeholder:text-sm placeholder:text-xs" placeholder="kareem Mohamed" />
                </div>}
                lastNameOrEmail={<div className="md:w-5/12 w-full  flex flex-col md:mb-0 mb-2 md:items-start items-center">
                    <lable className="font-semibold text-xs">Last  Name</lable>
                    <input type="text" className="md:w-10/12 w-11/12 bg-[#F5F5F5] px-6 py-4 mt-4 rounded-lg placeholder:text-[#666666] md:placeholder:text-sm placeholder:text-xs" placeholder="Kreem ahmed@gmail.com" />
                </div>}
                emailOrMobile={<div className="md:w-5/12 w-full flex flex-col md:mb-0 mb-6 md:items-start items-center">
                    <lable className="font-semibold text-xs">Your Email</lable>
                    <input type="text" className="md:w-10/12 w-11/12 bg-[#F5F5F5] px-6 py-4 mt-4 rounded-lg placeholder:text-[#666666] md:placeholder:text-sm placeholder:text-xs" placeholder="kareem Mohamed" />
                </div>}
                phone={<div className="md:w-5/12 w-full flex flex-col md:mb-0 mb-2 md:items-start items-center">
                    <lable className="font-semibold text-xs">Your Phone</lable>
                    <div className="md:w-10/12 w-11/12 bg-[#F5F5F5] px-6 h-14 mt-4 rounded-lg flex items-center">
                        <p className="w-10 h-full border-r-[1px] border-[#D9D9D9] mr-2 pr-3 text-[#666666] pt-5 text-xs">+20 </p>
                        <input type="text" className="w-full bg-[#F5F5F5] placeholder:text-[#666666] md:placeholder:text-sm placeholder:text-xs" placeholder="123654154812" />
                    </div>
                </div>}
            />
            <Footer />
        </>
    );
}

export default AboutUS;
