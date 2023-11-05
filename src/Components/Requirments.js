function Requirments({ width, Rwidth, img, heading, firstService, secondService, thirdService, fourthService, more, color }) {
  return (
    <div className={`w-${Rwidth} md:w-${width}`}>
      {heading}
      <div className="w-fit flex mb-4">
        {img}
        <p className={`w-full md:text-lg text-xs text-${color}`}>{firstService}</p>
      </div>
      <div className="w-fit flex mb-4">
        {img}
        <p className={`w-full md:text-lg text-xs text-${color}`}> {secondService}</p>
      </div>
      <div className="w-fit flex mb-4">
        {img}
        <p className={`w-full md:text-lg text-xs text-${color}`}>{thirdService} </p>
      </div>
      <div className="w-fit flex mb-4">
        {img}
        <p className={`w-full md:text-lg text-xs text-${color}`}>{fourthService} </p>
        {more}
      </div>
    </div>
  );
}

export default Requirments;
