function Faq({ info, moreInfo, img }) {
    return (
        <div className={`md:w-11/12 w-full flex items-center mt-6`}>
            <div className="w-full flex m-auto items-start justify-around border border-lg md:px-5 px-2 py-4 rounded-lg shadow-lg">
                <div className='w-full flex flex-col '>
                    <p className='font-semibold mt-2 md:text-base text-xs'>Lorem Ipsum is simply dummy text of the printing</p>
                    {info}
                    {moreInfo}
                </div>
                {img}
            </div>
        </div>
    );
}

export default Faq;