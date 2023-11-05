function About({ heading, more, direction, img }) {
  return (
    <div className="w-full flex items-center mt-40">
      <div className={`w-9/12 flex m-auto flex-col md:flex-${direction} items-start justify-between`}>
        {img}
        <div className='md:w-6/12 w-full md:mt-0 mt-6'>
          {heading}
          {more}
        </div>
      </div>
    </div>
  );
}

export default About;