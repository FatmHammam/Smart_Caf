

function Table({ data, width, mr, raw, amount, headers, statusOrAction }) {
    return (
        <div className="w-full relative flex items-center justify-center">
            <div className="w-full block p-4 m-4 flex items-center justify-center overflow-auto">
                <table className="w-full border border-[#999] rounded-lg overflow-auto">
                    <thead className="py-10 rounded rounded-lg ">
                        <tr className="border border-bottom border-[#999] rounded-lg">
                            {/* {headers.map(header => (
                                <th className="py-4 text-[#9FA2B4] w-16 md:text-base text-xs">{header.title}</th>
                            ))} */}
                            <th className="py-4 text-[#9FA2B4] w-16 md:text-base text-xs">#</th>
                            <th className="text-[#9FA2B4] lg:text-base text-xs">Request No.</th>
                            <th className="text-[#9FA2B4] lg:text-base text-xs">Client</th>
                            <th className="text-[#9FA2B4] lg:text-base text-xs">Services</th>
                            <th className="text-[#9FA2B4] lg:text-base text-xs">Request Date`</th>
                            <th className="text-[#9FA2B4] lg:text-base text-xs">DUE Date</th>
                            <th className="text-[#9FA2B4] lg:text-base text-xs">{amount}</th>
                            <th className={`text-[#9FA2B4] w-${width} mr-${mr} lg:text-base text-xs`}>{statusOrAction}</th>
                        </tr>
                    </thead>
                    <tbody >
                        {/* {data.map((rawData) => raw(rawData))} */}
                        <tr className="mt-20">
                            <td className="text-center py-4 text-[#262F39]"></td>
                            <td className="text-center text-[#262F39]"></td>
                            <td className="text-center text-[#262F39]"></td>
                            <td className="text-center text-[#262F39]"></td>
                            <td className="text-center text-[#262F39]"></td>
                            <td className="text-center text-[#262F39]"></td>
                            <td className="text-center text-[#262F39]"></td>
                            <td className="text-center text-[#9FA2B4] py-8">{`< 1/80 >`}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;
