import unemp from '../Assets/Svgs/unemp.svg'

function Unemployment() {
    return (
        <div className="w-full flex items-center mt-20 md:pr-20 pr-0">
            <div className="w-9/12 flex m-auto flex-col items-start justify-between">
                <div>
                    <span className='text-[#484848] md:text-lg text-sm'>{`Services > Patronato > `}</span>
                    <span className='font-bold md:text-lg text-sm'>Disoccupazione Naspi</span>
                </div>
                <div className='flex w-full mt-10 md:flex-row flex-col'>
                    <div>
                        <h3 className='mb-6 text-secondary font-bold text-xl'>What is Disoccupazione Naspi?</h3>
                        <p className='md:w-7/12 w-full text-[#5C5C5C] '>We offer our services in a completely digital way, integrating the Advanced Electronic Signature in our processes, saving you the time that you could waste in the long lines and bureaucracy</p>
                    </div>
                    <img src={unemp} alt="" className='md:w-2/6 w-full md:my-0 my-10 pr-10' />
                </div>
            </div>
        </div>
    );
}

export default Unemployment;
