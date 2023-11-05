import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import Services from "./Pages/Services"
import Patronage from './Pages/Patronage'
import AddRequest from "./Pages/AddRequest"
import ThankYou from "./Pages/ThankYou"
import AboutUs from "./Pages/AboutUS"
import ContactUS from "./Pages/ContactUs"
import Faqs from "./Pages/Faqs"
import Blog from "./Pages/Blog"
import SingleBlog from "./Pages/SingleBlog"
import AdminDashboard from "./Pages/AdminDashboard";
import AdminRequest from './Components/AdminRequest'
import AdminServices from './Components/AdminServices'
import Payments from './Components/Payments'
import Clients from './Components/Clients'
import Statistics from './Components/Statistics';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/patronage" element={<Patronage />} />
        <Route path="/add-request" element={<AddRequest />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUS />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/single-blog" element={<SingleBlog />} />
        <Route path="/admin-dashboard/*" element={<AdminDashboard />} >
          <Route index element={<Statistics />} />
          <Route path="request" element={<AdminRequest />} />
          <Route path="admin-services" element={<AdminServices />} />
          <Route path="payments" element={<Payments />} />
          <Route path="clients" element={<Clients />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
