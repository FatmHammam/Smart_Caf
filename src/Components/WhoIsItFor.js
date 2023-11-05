import { useNavigate } from "react-router-dom"
import check from '../Assets/Svgs/check.svg'
import rightArrow from '../Assets/Svgs/rightArrow.svg'
import Requirments from './Requirments'

function WhoIsItFor() {
    const navigate = useNavigate();
    const goToAddRequest = () => {
        navigate('/add-request')
    }
    return (
        <div className="w-full flex flex-col items-center md:pb-20 mt-0">
            <div className='flex flex-col md:items-start items-center justify-center md:w-9/12'>
                <h2 className="md:text-3xl  text-secondary font-semibold mb-6 text-center text-medium">Who is it for?</h2>
                <p className='mb-6 md:w-5/12 w-9/12 md:text-lg text-sm'>NASpI is for employees with an employment relationship who have involuntarily lost their employment,<span className='font-bold'>including:</span></p>
            </div>
            <div className="w-9/12 flex m-auto flex-col items-center justify-between">
                <div className='bg-howItWorksBg w-full p-8'>
                    <Requirments
                        width={"9/12"}
                        img={<img src={check} alt="" className='mr-4' />}
                        firstService={"apprentices"}
                        secondService={"working members of cooperatives with an employment relationship with the same cooperatives"}
                        thirdService={"artistic personnel with a subordinate employment relationship"}
                        fourthService={"artistic personnel with a subordinate employment relationship"}
                        color={"[#5C5C5C]"}
                    />
                </div>
                <div className='bg-howItWorksBg w-full p-8 mt-6'>
                    <Requirments
                        heading={<h2 className='text-secondary md:text-xl  text-sm mb-6 font-bold'>Required Papers</h2>}
                        img={<img src={rightArrow} alt="" className='mr-4' />}
                        firstService={"Carta d’identità"}
                        secondService={"Ultima Busta Paga in possesso."}
                        thirdService={"Lettera di Licenziamento o Contratto di lavoro Scaduto."}
                        fourthService={"Coordinate Bancarie (IBAN)"}
                        more={<div onClick={() => goToAddRequest()} className="md:w-64 w-48 absolute md:right-52 flex md:mt-4 mt-8 md:py-4 py-2  md:px-4 px-0 bg-secondary rounded-lg cursor-pointer items-center justify-center">
                            <span className='text-white text-sm font-semibold'>Add Request</span>
                        </div>}
                    />
                </div>
            </div>
        </div>
    );
}

export default WhoIsItFor;
