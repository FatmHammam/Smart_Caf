function StatisticsCard({ src, title, info }) {
    return (
        <div className='w-full border rounded-lg border-[#AFAFAF] py-4 h-28 mx-5 mb-10'>
            <div className="w-full flex py-2 px-3 items-center justify-evenly">
                <img src={src} alt="" />
                <div>
                    <h3 className='text-[#484848] mb-2'>{title}</h3>
                    <h1 className='font-bold text-2xl'>160 <span className='font-medium text-sm text-[#A0A0A0]'>{info}</span></h1>
                </div>
            </div>
        </div>
    );
}

export default StatisticsCard;
