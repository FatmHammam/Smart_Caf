function ServiceCard({ width, img, title, more, start, end, closingquotes, text, bg, textColor, border, bColor, shadow, onClick }) {
  return (
    <div onClick={onClick} className={`${border} ${bColor} ${shadow} md:w-${width} bg-${bg} md:mx-4 mx-0 my-2 w-full flex rounded rounded-lg md:px-4 px-2 pt-6 pb-2 md:mb-0 mb-8 items-center justify-center`}>
      {start}
      <div className="flex items-start flex-col">
        <div className="flex items-center mb-6">
          {img}
          {title}
        </div>
        <p className={`md:w-full w-10/12 text-${textColor} md:text-base text-xs md:ml-0 ml-4`}>{text} <span>{closingquotes}</span> </p>
        {more}
      </div>
      {end}
    </div>
  );
}

export default ServiceCard;
