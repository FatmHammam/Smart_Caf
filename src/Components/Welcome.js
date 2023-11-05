import idea from '../Assets/Svgs/idea.svg'

function Welcome() {
  return (
    <div className="w-full flex items-center justify-between mt-36">
      <div className='w-9/12 md:flex-row flex-col flex m-auto items-center justify-between bg-red'>
        <div className=" md:w-6/12 w-full flex flex-col  justify-between md:items-start items-center">
          <p className="md:text-left text-center font-bold md:text-base text-sm text-title tracking-widest ">Welcome To Smart Caf</p>
          <div className="md:w-52 w-44 border border-solid border-secondary opacity-50 font-arial"></div>
          <p className="text-bold md:text-2xl text-sm md:mt-12 mt-6 md:text-left text-center ">Avoid the queues, we are the first
            CAF in Italy completely <span className='font-bold'>online!</span></p>
          <p className="text-500 text-secondary font-semibold md:text-lg text-sm mt-8 mb-12 md:text-left text-center ">Easy, Fast, Smartcaf</p>
          <button className='bg-secondary md:px-6 md:py-3 px-4 py-2 rounded-md text-white md:text-sm text-xs font-medium'>Check Our Services!</button>
        </div>
        <img src={idea} alt="" className='md:w-6/12 w-full md:mt-0 mt-4' />
      </div>
    </div>
  );
}

export default Welcome;
