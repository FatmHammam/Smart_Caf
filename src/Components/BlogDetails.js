import category2 from '../Assets/Svgs/category2.svg'
import check from '../Assets/Svgs/check.svg'
import arrowcircledown from '../Assets/Svgs/arrowcircledown.svg'
import Requirments from './Requirments';

function BlogDetails() {
    return (
        <div className={`w-full flex items-center mt-24`}>
            <div className="w-9/12 flex m-auto md:items-start items-center justify-around py-6 flex-col">
                <img src={category2} alt="" className='mb-6' />
                <div className="w-full flex m-auto md:items-start items-center justify-between md:flex-row flex-col ">
                    <div className='md:w-7/12'>
                        <h2 className='text-lg font-semibold mb-6'>category 1</h2>
                        <h3 className='text-lg text-secondary font-semibold mb-6'>What is Lorem Ipsum?</h3>
                        <div className='w-full bg-howItWorksBg mt-6 p-8'>
                            <Requirments
                                img={<img src={check} alt="" className='mr-4' />}
                                color={"[#5C5C5C]"}
                                firstService={"Cose"}
                                secondService={"A Chi spetta"}
                                thirdService={"Chi deve fare domanda bouns 150 euro"}
                                fourthService={"fixed-term employees of public administrations."}
                            />
                        </div>
                        <p className='mt-6 w-full text-sm text-[#262F39]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        <button className='bg-secondary text-white px-8 py-3 rounded-lg mt-6'>Purchase</button>
                    </div>
                    <div className='md:w-4/12 w-full md:mt-0 mt-6 bg-howItWorksBg p-6 rounded-lg flex flex-col md:flex-start'>
                        <h2 className='md:text-lg text-sm font-semibold mb-6'>Servizi del caf confsal</h2>
                        <div className='w-11/12 flex items-center justify-between  mx-auto'>
                            <ul className='list-disc'>
                                <li className='text-secondary font-medium md:text-lg text-sm'>Modello ISEE</li>
                            </ul>
                            <img src={arrowcircledown} alt="" />
                        </div>
                        <div className='w-full bg-[#CFCFCF] border border-2 my-4'></div>

                        <div className='w-11/12 flex items-center justify-between  mx-auto'>
                            <ul className='list-disc'>
                                <li className='text-secondary font-medium md:text-lg text-sm'>Modello 730</li>
                            </ul>
                            <img src={arrowcircledown} alt="" />
                        </div>
                        <div className='w-full bg-[#CFCFCF] border border-2 my-4'></div>
                        <div className='w-11/12 flex items-center justify-between  mx-auto'>
                            <ul className='list-disc'>
                                <li className='text-secondary font-medium md:text-lg text-sm'>Modello RED INPS</li>
                            </ul>
                            <img src={arrowcircledown} alt="" />
                        </div>
                        <div className='w-full bg-[#CFCFCF] border border-2 my-4'></div>
                        <div className='w-11/12 flex items-center justify-between  mx-auto'>
                            <ul className='list-disc'>
                                <li className='text-secondary font-medium md:text-lg text-sm'>Modello prestazioni INPS</li>
                            </ul>
                            <img src={arrowcircledown} alt="" />
                        </div>
                        <div className='w-full bg-[#CFCFCF] border border-2 my-4'></div>
                        <div className='w-11/12 flex items-center justify-between  mx-auto'>
                            <ul className='list-disc'>
                                <li className='text-secondary font-medium md:text-lg text-sm'>Modello F24 telematico</li>
                            </ul>
                            <img src={arrowcircledown} alt="" />
                        </div>
                        <div className='w-full bg-[#CFCFCF] border border-2 my-4'></div>
                        <div className='w-11/12 flex items-center justify-between  mx-auto'>
                            <ul className='list-disc'>
                                <li className='text-secondary font-medium md:text-lg text-sm'>Modello PF</li>
                            </ul>
                            <img src={arrowcircledown} alt="" />
                        </div>
                        <div className='w-full bg-[#CFCFCF] border border-2 my-4'></div>
                        <div className='w-11/12 flex items-center justify-between  mx-auto'>
                            <ul className='list-disc'>
                                <li className='text-secondary font-medium md:text-lg text-sm'>Modello di locazione</li>
                            </ul>
                            <img src={arrowcircledown} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetails;
