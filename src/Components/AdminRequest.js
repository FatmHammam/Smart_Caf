import Table from "./Table";

function AdminRequest() {
  return (
    <div className="w-full flex items-center justify-center mb-10 rounded-lg">
      <Table
        amount={"Request Cost"}
        statusOrAction={"Status"}
        firstStatus={<button className="w-28 py-1 bg-[#F00] text-white rounded-lg"> Missing Info</button>}
        secStatus={<button className="w-28 py-1 bg-[#FFA800] text-white rounded-lg">Pending </button>}
        thirdStatus={<button className="w-28 py-1 bg-[#243D8C] text-white rounded-lg">New</button>}
        fourthStatus={<button className="w-28 py-1 bg-[#348A52] text-white rounded-lg">Completed</button>}
        fifthStatus={<button className="w-28 py-1 bg-[#F00] text-white rounded-lg"> Missing Info</button>}
        sixStatus={<button className="w-28 py-1 bg-[#FFA800] text-white rounded-lg">Pending</button>}
        seventhStatus={<button className="w-28 py-1 bg-[#006FAD] text-white rounded-lg">In-Progress</button>}
        eightthStatus={<button className="w-28 py-1 bg-[#348A52] text-white rounded-lg">Completed</button>}
        ningthStatus={<button className="w-28 py-1 bg-[#F00] text-white rounded-lg"> Missing Info</button>}
      />
    </div>
  );
}

export default AdminRequest;
