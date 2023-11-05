import check from '../Assets/Svgs/check.svg'
import Requirments from './Requirments';

function Purchase() {
    return (
        <div className="w-full flex items-center bg-howItWorksBg md:py-20 py-12 mt-20">
            <div className="w-9/12 flex m-auto md:flex-row flex-col items-center justify-between">
                <div className='flex flex-col md:items-start items-center justify-center md:w-6/12 w-full md:pl-8 pl-0'>
                    <h2 className="md:text-3xl font-semibold mb-6  text-center text-medium">Perche scegliere <span className="text-secondary">SmartCaf</span></h2>
                    <p className="md:text-base text-sm text-[#727272] md:w-8/12 w-full md:text-start text-center md:mb-0 mb-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                </div>
                <Requirments
                    color={"[#5C5C5C]"}
                    width={"6/12"}
                    Rwidth={"full"}
                    img={<img src={check} alt="" className='mr-4' />}
                    firstService={"Online - ii servizio e completamente online e senza attesa, 24/7 "}
                    secondService={"Facile - ii tempo medio di compilazione di ogni richiesta e di 3 minuti"}
                    thirdService={"Velocita - tempo medio di elaborazione di ogni pratica e di 6 ore"}
                    fourthService={"Assistenza - la nostra assistenza telefonka e via chat dal Lunedl alSabato dalle 09.00 alle 20.00 Lingua -ii nostro team parla 4 lingue, italiano spagnolo arabo e inglese"}
                />
            </div>

        </div>
    );
}

export default Purchase;
