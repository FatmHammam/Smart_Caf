function Table({ data, renderRow, headers }) {
  return (
    <div className="w-full relative flex items-center  justify-center">
      <div className="w-full block p-0 m-4 flex items-center  flex-col justify-center overflow-auto border border-[#999] rounded-lg ">
        <table className="w-full overflow-auto border-b-0">
          <thead className="py-10  rounded rounded-lg ">
            <tr className=" border-b border-[#999] rounded-lg">
              {headers?.map(header => (
                <th className="py-4 text-[#9FA2B4] w-16 md:text-base text-xs">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody >
            {data.map((rowData) => renderRow(rowData))}
          </tbody>
        </table>
        <div className="w-full px-12 py-4 text-end md:text-lg text-xs text-[#999]">{`< 1/80 >`}</div>
      </div>
    </div>
  );
}

export default Table;
