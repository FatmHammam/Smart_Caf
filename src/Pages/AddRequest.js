import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import RequestDetails from '../Components/RequestDetails'
import RequestForm from '../Components/RequestForm'

function AddRequest() {
  return (
    <>
      <Navbar />
      <RequestDetails />
      <RequestForm />
      <Footer />
    </>
  );
}

export default AddRequest;