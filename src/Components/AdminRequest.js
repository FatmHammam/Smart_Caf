import Table from "./Table";

function AdminRequest() {
  const data = [
    { name: 'Yahia Mohammed', status: 'Progress', id: '1756' },
    { name: 'Mohamed Gamal', status: 'Completed', id: '25566' },
    { name: 'Fatma Refaat', status: 'Completed', id: '12345' },
    { name: 'Menna Gamal', status: 'Missing', id: '1756' },
    { name: 'Mohamed Ali', status: 'Missing', id: '25566' },
    { name: 'Salma Refaat', status: 'Progress', id: '12345' },
    { name: 'Ahmed Magdy', status: 'Pending', id: '1756' },
    { name: 'Ali Ibrahim', status: 'Completed', id: '25566' },
    { name: 'Hamdy Elmarghany', status: 'Progress', id: '12345' },
  ];
  const headers = ["#", "Request No.", "Client", "Services", "Request Date", "DUE Date", "Cost Paid", "Status"];
  const statuses = {
    Pending: '#FFA800',
    Completed: '#348A52',
    Progress: '#006FAD',
    Missing: '#d80000',
  };

  return (
    <div className="w-full flex items-center justify-center mb-10">
      <Table
        data={data}
        headers={headers}
        renderRow={(rowData) => (
          <tr>
            <td className="whitespace-nowrap text-center py-4 text-[#262F39] lg:text-base text-xs">1</td>
            <td className="whitespace-nowrap text-secondary hover:underline md:text-lg text-xs font-semibold text-center lg:text-base text-xs">{rowData.id}</td>
            <td className="whitespace-nowrap text-center text-[#262F39] lg:text-base text-xs">{rowData.name}</td>
            <td className="whitespace-nowrap text-center text-[#262F39] lg:text-base text-xs">Patronato</td>
            <td className="whitespace-nowrap text-center text-[#262F39] lg:text-base text-xs">02/08/2022</td>
            <td className="whitespace-nowrap text-center text-[#262F39] lg:text-base text-xs">02/08/2022</td>
            <td className="whitespace-nowrap text-center text-[#262F39] lg:text-base text-xs">734.230 EGP</td>
            <td className="whitespace-nowrap text-center text-[#262F39] lg:text-base text-xs">
              <button className={`w-28 py-1 text-white rounded-lg bg-[${statuses[rowData.status]}]`}>{rowData.status}</button>
            </td>
          </tr>
        )}
      />
    </div>
  );
}

export default AdminRequest;
