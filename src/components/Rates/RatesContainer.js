import Pagination from "../utils/Pagination/Pagination";
import RateForm from "./RateForm";
import UserRate from "./UserRate";

const RatesContainer = () => {
  return (
    <div className="bg-white p-3 my-5 shadow-sm">
      <div>
        <span className="fs-4 fw-bold ">التقييمات </span>
        <span className="text-warning"><i className="fas fa-star"></i> 4.3 </span>
        <span className="text-secondary">(1520 تقييم)</span>
      </div>
      <RateForm/>

      <UserRate/>
      <UserRate/>
      <UserRate/>
      <UserRate/>
      <UserRate/>
      <UserRate/>
      <Pagination pageCount={40}/>
    </div>
  );
}

export default RatesContainer;
