import { Routes, Route } from 'react-router-dom';
import DashboardHeader from '../Components/DashboardHeader'
import AdminRequest from '../Components/AdminRequest'
import AdminServices from '../Components/AdminServices'
import Payments from '../Components/Payments'
import Clients from '../Components/Clients'
import SideBar from '../Components/SideBar'
import Statistics from '../Components/Statistics';

function AdminDashboard() {
  return (
    <div className='w-full flex md:flex-row flex-col'>
      <div className='md:w-1/6 w-full md:min-h-screen relative'>
        <SideBar />
      </div>
      <div className='md:w-5/6 w-full flex flex-col'>
        <DashboardHeader title={"Dashboard"} />
        <Routes>
          <Route path="/" element={<Statistics />} />
          <Route path="request" element={<AdminRequest />} />
          <Route path="admin-services" element={<AdminServices />} />
          <Route path="payments" element={<Payments />} />
          <Route path="clients" element={<Clients />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminDashboard;