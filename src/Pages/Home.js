import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Welcome from '../Components/Welcome'
import HowItWorks from '../Components/HowItWorks'
import Purchase from '../Components/Purchase'
import Service from '../Components/Service'
import ClientsFeedback from '../Components/ClientsFeedback'

function Home() {
  return (
    <>
      <Navbar />
      <Welcome />
      <HowItWorks />
      <Purchase />
      <Service />
      <ClientsFeedback />
      <Footer />
    </>
  );
}

export default Home;
