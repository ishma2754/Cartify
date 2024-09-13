import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, onClick, style }) => {
  const handleStarClick = (index) => {
    if(onClick) onClick(index + 1)
  }
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => handleStarClick(i)} style={style}>
          {rating > i ? (
            <AiFillStar fontSize="15px" className="text-yellow-500 cursor-pointer" />
          ) : (
            <AiOutlineStar fontSize="15px" className="text-gray-300 cursor-pointer" />
          )}
        </span>
      ))}
    </>
  );
};

export default Rating;