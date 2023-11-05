import searchIcon from '../Assets/Svgs/searchIcon.svg'
import BlogCard from './BlogCard';

function BlogContainer() {
    return (
        <div className={`w-full flex items-center mt-24`}>
            <div className="w-9/12 flex m-auto md:items-start items-center justify-around py-6 flex-col">
                <h2 className="font-semibold text-xl">Blog</h2>
                <div className='md:w-96 w-52 md:my-6 my-2 flex bg-[#ECECEC]  mt-2 rounded-lg items-center justify-between py-3 px-4 '>
                    <p className='text-[#6B6B6B] text-sm'>Search</p>
                    <img src={searchIcon} alt="" className='w-5' />
                </div>
                <div className='w-full flex items-center justify-between md:flex-row flex-col '>
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
                <div className='w-full flex items-center justify-between md:flex-row flex-col'>
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
            </div>
        </div>
    );
}

export default BlogContainer;
