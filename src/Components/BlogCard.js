import { useNavigate } from "react-router-dom"
import category from '../Assets/Svgs/category.svg'

function BlogCard() {
  const navigate = useNavigate();
  const goToSingleBlog = () => {
    navigate('/single-blog')
  }
  return (
    <div className={`w-full flex items-center justify-between  mt-6 cursor-pointer`} onClick={goToSingleBlog} >
      <div className="md:w-11/12 w-full flex md:items-start m-0 items-center flex-col shadow-lg border border-lg">
        <img src={category} alt="" className='w-full' />
        <div className='w-full flex items-center justify-between px-6 mt-4'>
          <h3 className='font-semibold'>Caregory 1</h3>
          <p className='text-secondary'>21/11/2022</p>
        </div>
        <span className='px-6 my-4 text-secondary font-semibold'>What is Lorem Ipsum?</span>
        <p className='px-6 text-sm mb-4 text-[#727272]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
      </div>
    </div>
  );
}

export default BlogCard;