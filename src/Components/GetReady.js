function GetReady({ heading, lastNameOrEmail, emailOrMobile, phone, firstOrFullName, mt }) {
    return (
        <div className={`w-full flex items-center mt-${mt}`}>
            <div className="md:w-9/12 w-11/12 flex m-auto flex-col md:items-start items-center justify-between border border-lg py-6 md:px-10 px-0 rounded-lg">
                <h2 className="text-secondary font-bold mb-6 md:text-lg">{heading}</h2>
                <div className="w-full flex mb-6 md:flex-row flex-col ">
                    {firstOrFullName}
                    {lastNameOrEmail}
                </div>
                <div className="w-full flex md:flex-row flex-col mb-6">
                    {emailOrMobile}
                    {phone}
                </div>
                <div className="w-11/12 flex flex-col">
                    <lable className="font-semibold text-xs">WHAT CAN WE DO FOR YOU?</lable>
                    <input type="text" className=" mb-6 w-full bg-[#F5F5F5] px-6 py-8 mt-4 rounded-lg placeholder:text-[#949494] md:placeholder:text-sm placeholder:text-xs" placeholder="Describe in at least 250 characters" />
                </div>
                <div className="w-full flex items-center justify-center">
                    <button className="text-white bg-secondary py-3 px-8 rounded-lg mr-6">SEND MESSAGE</button>
                </div>
            </div>
        </div>
    );
}

export default GetReady;