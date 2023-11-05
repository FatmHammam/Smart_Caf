import ServiceCard from "./ServiceCard"
import { useNavigate } from "react-router-dom"
import whiteCaf from '../Assets/Svgs/whiteCaf.svg'
import isee from '../Assets/Svgs/isee.svg'
import empty from '../Assets/Svgs/empty.svg'
import up from '../Assets/Svgs/up.svg'
import down from '../Assets/Svgs/down.svg'
import rightArrow from '../Assets/Svgs/arrow-right.svg'
import timing from '../Assets/Svgs/timing.svg'

function OurService({ width, mt, title }) {
  const navigate = useNavigate();
  const goToProntage = () => {
    navigate("/patronage");
  }
  return (
    <div className={`mt-${mt} w-full flex items-center`}>
      <div className={`md:w-${width} w-9/12 flex items-start m-auto flex-col`}>
        <h2 className="md:ml-4 ml-0 mb-6 text-2xl font-medium">{title}</h2>
        <div className="flex w-full md:flex-row flex-col">
          <ServiceCard
            width={'1/4'}
            bg={'secondary'}
            shadow={"shadow-2xl"}
            img={<div className="w-3/12 border-1 p-2 bg-[#a5cd6a] rounded-lg mr-4">
              <img src={whiteCaf} alt='' className='mr-6' />
            </div>
            }
            title={<div><p className='text-lg font-bold leading-relaxed text-white'>CAF</p>
              <p className="text-white"> 24 service</p>
            </div>}
            more={
              <img src={up} alt='' className='absolute mt-16 ml-20' />
            }
          />
          <ServiceCard
            width={'1/4'}
            shadow={"shadow-2xl"}
            img={<div className="w-3/12 border-1 p-2 bg-[#eaf3dc] rounded-lg mr-4">
              <img src={isee} alt='' className='mr-6' />
            </div>
            }
            title={<div><p className='text-lg font-bold leading-relaxed'>ISEE 2022</p>
              <p className="text-[#727272]"> 24 service</p>
            </div>}
            more={
              <img src={down} alt='' className='absolute mt-16 ml-20' />
            }
          />
          <ServiceCard
            width={'1/4'}
            shadow={"shadow-2xl"}
            img={<div className="w-3/12 border-1 p-2 bg-[#eaf3dc] rounded-lg mr-4">
              <img src={empty} alt='' className='mr-6' />
            </div>
            }
            title={<div><p className='text-lg font-bold leading-relaxed '>Patronato</p>
              <p className="text-[#727272]"> 24 service</p>
            </div>}
            more={
              <img src={down} alt='' className='absolute mt-16 ml-20' />
            }
          />
          <ServiceCard
            width={'1/4'}
            shadow={"shadow-2xl"}
            img={<div className="w-3/12 border-1 p-2 bg-[#eaf3dc] rounded-lg mr-4">
              <img src={empty} alt='' className='mr-6' />
            </div>
            }
            title={<div><p className='text-lg font-bold leading-relaxed'>Immigrazione</p>
              <p className="text-[#727272]"> 24 service</p>
            </div>}
            more={
              <img src={down} alt='' className='absolute mt-16 ml-20' />
            }
          />
        </div>
        <div className="flex mt-12 md:flex-row flex-col">
          <ServiceCard
            width={'9/12'}
            border={"border-2"}
            bColor={"[#727272]"}
            title={<p className='text-lg font-medium leading-relaxed my-2'>ASSEGNO DI MATERNITÀ</p>}
            text={"E’ un contributo economico, erogato dall’INPS, spettante alle madri che hanno partorito, adottato o ricevuto in affidamento preadottivo un bambino."}
            textColor={"[#727272]"}
            more={
              <div className="flex flex-col">
                <img alt="" src={timing} className="mt-6 md:w-80 w-60" />

                <div onClick={() => goToProntage()} className="w-40 flex mt-4 py-2 px-4 bg-secondary rounded-lg mb-2 cursor-pointer">
                  <span className='text-white text-sm font-semibold mr-2 '>Add Request</span>
                  <img alt="" src={rightArrow} />
                </div>

              </div>}
          />
          <ServiceCard
            width={'9/12'}
            title={<p className='text-lg font-medium leading-relaxed my-2 '>730 2022</p>}
            text={"E’ un contributo economico, erogato dall’INPS, spettante alle madri che hanno partorito, adottato o ricevuto in affidamento preadottivo un bambino."}
            textColor={"[#727272]"}
            border={"border-2"}
            bColor={"[#727272]"}
            more={
              <div className="flex flex-col">
                <img alt="" src={timing} className="mt-6 md:w-80 w-60" />

                <div onClick={() => goToProntage()} className="w-40 flex mt-4 py-2 px-4 bg-secondary rounded-lg mb-2 cursor-pointer">
                  <span className='text-white text-sm font-semibold mr-2 '>Add Request</span>
                  <img alt="" src={rightArrow} />
                </div>
              </div>}
          />
          <ServiceCard
            width={'9/12'}
            border={"border-2"}
            bColor={"[#727272]"}
            title={<p className='text-lg font-medium leading-relaxed my-0'>Modello Redditi</p>}
            text={"E’ un contributo economico, erogato dall’INPS, spettante alle madri che hanno partorito, adottato o ricevuto in affidamento preadottivo un bambino."}
            textColor={"[#727272]"}
            more={
              <div className="flex flex-col">
                <img alt="" src={timing} className="mt-6 md:w-80 w-60" />

                <div onClick={() => goToProntage()} className="w-40 flex mt-4 py-2 px-4 bg-secondary rounded-lg mb-2 cursor-pointer">
                  <span className='text-white text-sm font-semibold mr-2 '>Add Request</span>
                  <img alt="" src={rightArrow} />
                </div>

              </div>}
          />
        </div>
      </div>
    </div>
  );
}
//bg-[#eaf3dc]
export default OurService;
