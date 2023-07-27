import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SubTitle = ({ title, btnTitle, btnPath }) => {
  return (
    <>
      {title && <div className="d-flex justify-content-between align-items-center my-3">
        <h3>{title}</h3>
        {btnTitle && <Link to={btnPath}><Button variant="outline-dark" className="rounded-4">{btnTitle}</Button></Link>}
      </div>}
    </>
  );
};

export default SubTitle;
