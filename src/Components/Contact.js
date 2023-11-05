import GetReady from "./GetReady";
import loc from '../Assets/Svgs/loc.svg'
import clock from '../Assets/Svgs/clock.svg'
import msg from '../Assets/Svgs/msg.svg'
import phone from '../Assets/Svgs/phone.svg'

function Contact() {
  return (
    <div className="w-full flex items-center mt-40 md:pl-20 pl-0 pr-0">
      <div className="w-10/12 flex m-auto md:flex-row flex-col md:items-start items-center justify-center">
        <div className="md:w-8/12 w-full">
          <h2 className="md:text-4xl text-sm font-bold  w-full">Feel free to contact with us for any kind of query.</h2>
          <p className="w-full md:text-lg text-sm mt-4 text-[#8F8F8F]">Thank you for your interest in <span className="text-secondary font-semibold">SmartCaf</span>. We will contact with you soon.</p>
          <div className="w-full flex flex-col mt-6">
            <div className="w-full flex items-center justify-between">
              <div className="w-6/12 flex flex-col p-2">
                <div className="flex items-center mb-4">
                  <img src={loc} alt="" className="md:mr-4 mr-2" />
                  <h2 className="text-secondary md:text-lg text-sm ">Office Address</h2>
                </div>
                <p className="text-[#666666] text-sm">Viale Ungheria, 50, 20123 Milano</p>
                <p className="text-[#666666] text-sm">MI,italie</p>
                <p className="text-[#666666] text-sm">02 91443332</p>
              </div>
              <div className="w-6/12 flex flex-col p-2 ">
                <div className="flex items-center mb-4">
                  <img src={msg} alt="" className="md:mr-4 mr-2" />
                  <h2 className="text-secondary md:text-lg text-sm">Email Address</h2>
                </div>
                <p className="text-[#666666] text-sm mb-12">info@smartcaf.com</p>
              </div>
            </div>
            <div className="w-full flex items-center justify-between mt-4">
              <div className="w-6/12 flex flex-col p-2">
                <div className="flex items-center mb-4">
                  <img src={clock} alt="" className="md:mr-4 mr-2" />
                  <h2 className="text-secondary md:text-lg text-sm">Available Time</h2>
                </div>
                <p className="text-[#666666] text-sm">Sunday-Thursday</p>
                <p className="text-[#666666] text-sm">9.00 AM-18.00 PM</p>
              </div>
              <div className="w-6/12 flex flex-col p-2 mt-4">
                <div className="flex items-center mb-4">
                  <img src={phone} alt="" className="md:mr-4 mr-2" />
                  <h2 className="text-secondary md:text-lg text-sm">Call Us</h2>
                </div>
                <p className="text-[#666666] text-sm mb-10">+39 02 9144 3332</p>
              </div>
            </div>
          </div>
        </div>
        <GetReady
          heading={"Contact us"}
          firstOrFullName={<div className="md:w-6/12 w-full flex flex-col md:mb-0 mb-2 md:items-start items-center">
            <lable className="font-semibold text-xs">Full  Name</lable>
            <input type="text" className="w-11/12 bg-[#F5F5F5] px-6 py-3 mt-2 rounded-lg placeholder:text-[#666666] md:placeholder:text-sm placeholder:text-xs" placeholder="kareem Mohamed" />
          </div>}
          lastNameOrEmail={<div className="md:w-6/12 w-full flex flex-col md:mb-0 mb-2 md:items-start items-center">
            <lable className="font-semibold text-xs">Email</lable>
            <input type="text" className="w-11/12 bg-[#F5F5F5] px-6 py-3 mt-2 rounded-lg placeholder:text-[#666666] md:placeholder:text-sm placeholder:text-xs" placeholder="kareem Mohamed" />
          </div>}
          phone={<div className="md:w-6/12 w-full flex flex-col md:mb-0 mb-2 md:items-start items-center">
            <lable className="font-semibold text-xs">Mobile Number</lable>
            <div className="w-11/12 bg-[#F5F5F5] px-6 h-12 mt-2 rounded-lg flex items-center">
              <p className="w-10 h-full border-r-[1px] border-[#D9D9D9] mr-2 pr-3 text-[#666666] pt-5 text-xs">+20 </p>
              <input type="text" className="w-full bg-[#F5F5F5] placeholder:text-[#666666] md:placeholder:text-sm placeholder:text-xs" placeholder="123654154812" />
            </div>
          </div>}
        />
      </div>
    </div>
  );
}

export default Contact;