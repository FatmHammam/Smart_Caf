import social from '../Assets/Svgs/social.svg'
import Requirments from './Requirments';

function Grazie() {
    return (
        <div className="w-full flex items-center mt-40 md:pr-20 pr-0">
            <div className="w-9/12 flex m-auto flex-col items-center justify-between">
                <h2 className='md:text-lg text-sm font-semibold '>Grazie per aver scelto <span className='md:text-lg text-sm font-semibold text-secondary'> smartcaf</span></h2>
                <p className='text-[#7D7D7D] mt-2 font-semibold md:text-base text-xs md:mb-0 mb-4'>le confermiamo che abbiamo ricevuto la sua richiesta</p>
                <div className='w-full'>
                    <h3 className='text-secondary font-semibold md:mb-6 mb-2 md:text-base text-sm'>che cosa succede ora?</h3>
                    <div className='bg-howItWorksBg p-6 pb-0 rounded-lg'>
                        <Requirments
                            color={"[#5C5C5C]"}
                            firstService={"1. riceverai una email per la firma elettronica del mandato diassistenza"}
                            secondService={"2. entro 6 ore, se tutti i documenti sono corretti, riceverai la firma del modello 730"}
                            thirdService={"3. una volta firmato troverai il modello 730 nell'areapersonale"}
                        />
                    </div>
                </div>
                <p className='md:w-96 w-9/12 text-center mt-6 text-[#5C5C5C] md:text-base text-sm'>per qualsiasi esigenza contatta la nostra assistenza via chat o
                    telefonicamente al 02 91443332 dalle 9.00 alle 20.00
                    dal lunedì al Sabato</p>
                <p className='my-6 text-[#5C5C5C] md:text-base text-xs'>SEGUICI SUI NOSTRI SOCIAL</p>
                <img src={social} alt="" className='md:w-56 w-40' />
            </div>
        </div>
    );
}

export default Grazie;