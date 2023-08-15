import { NavLink } from "react-router-dom";

const SideBarLink = (props={to:""}) => {
  return (
    <NavLink {...props} className="btn border-bottom border-0 rounded-0 w-100 fw-bold ">
        {props.children}
    </NavLink>
  );
}

export default SideBarLink;
