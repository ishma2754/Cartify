import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, onClick, style, label }) => {
  const handleStarClick = (index) => {
    if (onClick) onClick(index + 1);
  };
  return (
    <div className="col-span-full mb-4">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-100">
        <span className="capitalize"> {label}</span>
      </label>
      <div className="flex items-center space-x-2 mt-2">
        {[...Array(5)].map((_, i) => (
          <span key={i} onClick={() => handleStarClick(i)} style={style}>
            {rating > i ? (
              <AiFillStar
                fontSize="15px"
                className="text-yellow-500 cursor-pointer"
              />
            ) : (
              <AiOutlineStar
                fontSize="15px"
                className="text-gray-300 cursor-pointer"
              />
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Rating;
