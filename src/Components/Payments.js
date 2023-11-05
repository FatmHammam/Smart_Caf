import Table from "./Table";

const data = [
    {name: 'Ahmed', status: 'pending', id: '1'},
    {name: 'Mohamed', status: 'completed', id: '2'},
    {name: 'Fatma', status: 'progress'},
];

const headers = [
    {title: '#', customCSS: ""},
    {title: 'request', customCSS: ""},
    {title: 'name', customCSS: ""},
];

const statuses = {
    pending: '#FFA800',
    completed: '#348A52',
    progress: '#006FAD',
};

function Payments() {
    return (
        <div className="w-full flex items-center justify-center mb-10">
            <Table
                data={data}
                headers={headers}
                amount={"Amount"}
                statusOrAction={"Status"}
                raw={(raw) => (
                    <tr>
                        <td className="whitespace-nowrap text-center py-4 text-[#262F39] lg:text-base text-xs">1</td>
                        <td className="whitespace-nowrap text-center text-[#262F39] lg:text-base text-xs">{raw.id}</td>
                        <td className="whitespace-nowrap text-center text-[#262F39] lg:text-base text-xs">{raw.name}</td>
                        <td className="whitespace-nowrap text-center text-[#262F39] lg:text-base text-xs">Patronato</td>
                        <td className="whitespace-nowrap text-center text-[#262F39] lg:text-base text-xs">02/08/2022</td>
                        <td className="whitespace-nowrap text-center text-[#262F39] lg:text-base text-xs">02/08/2022</td>
                        <td className="whitespace-nowrap text-center text-[#262F39] lg:text-base text-xs">734.230 EGP</td>
                        <td className="whitespace-nowrap text-center text-[#262F39] lg:text-base text-xs">
                            <button className={`w-28 py-1 text-white rounded-lg bg-[${statuses[raw.status]}]`}>{raw.status}</button>
                        </td>
                    </tr>
                )}
                // firstStatus={<button className="w-28 py-1 bg-[#FFA800] text-white rounded-lg">Pending </button>}
                // secStatus={<button className="w-28 py-1 bg-[#FFA800] text-white rounded-lg">Pending </button>}
                // thirdStatus={<button className="w-28 py-1 bg-[#006FAD] text-white rounded-lg">Overdue</button>}
                // fourthStatus={<button className="w-28 py-1 bg-[#348A52] text-white rounded-lg">Paid</button>}
                // fifthStatus={<button className="w-28 py-1 bg-[#FFA800] text-white rounded-lg">Pending</button>}
                // sixStatus={<button className="w-28 py-1 bg-[#FFA800] text-white rounded-lg">Pending</button>}
                // seventhStatus={<button className="w-28 py-1 bg-[#006FAD] text-white rounded-lg">Overdue</button>}
                // eightthStatus={<button className="w-28 py-1 bg-[#348A52] text-white rounded-lg">Paid</button>}
                // ningthStatus={<button className="w-28 py-1 bg-[#006FAD] text-white rounded-lg">Overdue</button>}
            />
        </div>
    );
}

export default Payments;