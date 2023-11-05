import Table from "./Table";
import edit from '../Assets/Svgs/edit.svg'
import receipt from '../Assets/Svgs/receipt.svg'

function Clients() {
  return (
    <div className="w-full flex items-center justify-center mb-10 rounded-lg">
      <Table
        width={"52"}
        mr={"10"}
        amount={"Paid Amount"}
        statusOrAction={"Actions"}
        firstStatus={<div className="flex w-full items-center justify-evenly">
          <button className="w-28 py-2 bg-[#8FC045] text-white rounded-lg">+ Request</button>
          <button className=" py-2 px-2 bg-[#8FC045] text-white rounded-lg"><img src={edit} alt="" /></button>
          <img src={receipt} alt="" />
        </div>}
        secStatus={<div className="flex w-full items-center justify-evenly">
          <button className="w-28 py-2 bg-[#8FC045] text-white rounded-lg">+ Request</button>
          <button className=" py-2 px-2 bg-[#8FC045] text-white rounded-lg"><img src={edit} alt="" /></button>
          <img src={receipt} alt="" />
        </div>}
        thirdStatus={<div className="flex w-full items-center justify-evenly">
          <button className="w-28 py-2 bg-[#8FC045] text-white rounded-lg">+ Request</button>
          <button className=" py-2 px-2 bg-[#8FC045] text-white rounded-lg"><img src={edit} alt="" /></button>
          <img src={receipt} alt="" />
        </div>}
        fourthStatus={<div className="flex w-full items-center justify-evenly">
          <button className="w-28 py-2 bg-[#8FC045] text-white rounded-lg">+ Request</button>
          <button className=" py-2 px-2 bg-[#8FC045] text-white rounded-lg"><img src={edit} alt="" /></button>
          <img src={receipt} alt="" />
        </div>}
        fifthStatus={<div className="flex w-full items-center justify-evenly">
          <button className="w-28 py-2 bg-[#8FC045] text-white rounded-lg">+ Request</button>
          <button className=" py-2 px-2 bg-[#8FC045] text-white rounded-lg"><img src={edit} alt="" /></button>
          <img src={receipt} alt="" />
        </div>}
        sixStatus={<div className="flex w-full items-center justify-evenly">
          <button className="w-28 py-2 bg-[#8FC045] text-white rounded-lg">+ Request</button>
          <button className=" py-2 px-2 bg-[#8FC045] text-white rounded-lg"><img src={edit} alt="" /></button>
          <img src={receipt} alt="" />
        </div>}
        seventhStatus={<div className="flex w-full items-center justify-evenly">
          <button className="w-28 py-2 bg-[#8FC045] text-white rounded-lg">+ Request</button>
          <button className=" py-2 px-2 bg-[#8FC045] text-white rounded-lg"><img src={edit} alt="" /></button>
          <img src={receipt} alt="" />
        </div>}
        eightthStatus={<div className="flex w-full items-center justify-evenly">
          <button className="w-28 py-2 bg-[#8FC045] text-white rounded-lg">+ Request</button>
          <button className=" py-2 px-2 bg-[#8FC045] text-white rounded-lg"><img src={edit} alt="" /></button>
          <img src={receipt} alt="" />
        </div>}
        ningthStatus={<div className="flex w-full items-center justify-evenly">
          <button className="w-28 py-2 bg-[#8FC045] text-white rounded-lg">+ Request</button>
          <button className=" py-2 px-2 bg-[#8FC045] text-white rounded-lg"><img src={edit} alt="" /></button>
          <img src={receipt} alt="" />
        </div>}
      />
    </div>
  );


}

export default Clients;
