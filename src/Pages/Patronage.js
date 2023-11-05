import { useNavigate } from "react-router-dom"
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import RequestDetails from '../Components/RequestDetails'
import WhoIsItFor from '../Components/WhoIsItFor'
import Unemployment from '../Components/Unemployment'

function Patronage() {
    const navigate = useNavigate();
    const goToAddRequest = () => {
        navigate('/add-request')
    }
    return (
        <>
            <Navbar />
            <RequestDetails
                more={
                    <button onClick={() => goToAddRequest()} className='text-white bg-secondary py-3 px-12 rounded-lg mt-6'>Add Request</button>
                } />
            <Unemployment />
            <WhoIsItFor />
            <Footer />
        </>
    );
}

export default Patronage;
