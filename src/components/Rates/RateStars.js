import ReactStars from "react-rating-stars-component"

const RateStars = () => {
  return (
    <ReactStars 
      count={5}
      isHalf={true}
      size={24}
      emptyIcon={<i className="far fa-star"></i>}
      halfIcon={<i className="far fa-star-half-stroke text-warning"></i>}
      filledIcon={<i className="fas fa-star text-warning"></i>}
    />
  );
}

export default RateStars;
