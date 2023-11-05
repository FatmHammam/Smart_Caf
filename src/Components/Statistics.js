import StatisticsCard from '../Components/StatisticsCard'
import society from '../Assets/Svgs/society.svg'
import sandClock from '../Assets/Svgs/sandClock.svg'
import inProgress from '../Assets/Svgs/inProgress.svg'
import missingInfo from '../Assets/Svgs/missingInfo.svg'
import completed from '../Assets/Svgs/completed.svg'

function Statistics() {
  return (
    <div className='w-full flex flex-wrap items-start justify-between mt-10'>
      <div className='w-full px-5 flex flex-wrap'>
        <div className="md:w-4/12 w-full flex items-center justify-center">
          <StatisticsCard
            src={society}
            title={"Clients"}
            info={"Client"}
          />
        </div>
        <div className="md:w-4/12 w-full flex items-center justify-center">
          <StatisticsCard
            src={sandClock}
            title={"Pending"}
            info={"Pending"}
          />
        </div>
        <div className="md:w-4/12 w-full flex items-center justify-center">
          <StatisticsCard
            src={inProgress}
            title={"In-Progress"}
            info={"In-Progress"}
          />
        </div>
        <div className="md:w-4/12 w-full flex items-center justify-center">
          <StatisticsCard
            src={missingInfo}
            title={"Missing Info"}
            info={"Missing"}
          />
        </div>
        <div className="md:w-4/12 w-full flex items-center justify-center">
          <StatisticsCard
            src={completed}
            title={"Completed"}
            info={"Completed"}
          />
        </div>
      </div>
    </div>
  );
}

export default Statistics;
