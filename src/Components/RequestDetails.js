import wtiming from '../Assets/Svgs/wtiming.svg'
import patropic from '../Assets/Svgs/patroPic.svg'

function RequestDetails({ more }) {
    return (
        <div className="w-full flex flex-col items-center justify-center md:mt-24 mt-20 bg-footerBg py-20">
            <div className="w-10/12  flex items-start justify-between md:pr-52 pr-0 md:flex-row flex-col">
                <div className='md:w-3/4 w-full'>
                    <h2 className='text-white text-xl mb-6'>Disoccupazione Naspi</h2>
                    <p className='text-white opacity-75 md:w-5/6 w-full mb-6 text-lg'>E’ un contributo economico, erogato dall’INPS, spettante alle madri che hanno partorito, adottato o ricevuto in affidamento preadottivo un bambino.</p>
                    <img src={wtiming} alt="" className='mb-6' />
                    {more}
                </div>
                <div className='md:w-2/4 w-full md:mt-0 mt-8'>
                    <img src={patropic} alt="" className='w-full' />
                </div>
            </div>
        </div>
    );
}

export default RequestDetails;