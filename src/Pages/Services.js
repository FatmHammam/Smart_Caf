import Navbar from '../Components/Navbar'
import OurService from '../Components/OurService'
import Footer from '../Components/Footer'

function Services() {
    return (
        <>
            <Navbar />
            <OurService
                width={"9/12"}
                mt={"40"}
                title={"Services"}
            />
            <Footer />
        </>
    );
}

export default Services;
