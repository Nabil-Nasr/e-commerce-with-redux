import { Button } from "react-bootstrap";
import UserAddressesContainer from "../../components/User/UserAddressesContainer";
import { Link } from "react-router-dom";

const UserAddressesPage = () => {
  return (
    <div className="d-grid">
      <h3 className="fw-bold">دفتر العناوين</h3>
      <UserAddressesContainer/>
      <Link to="add-address" className="mx-auto"><Button variant="dark" className="py-2 rounded-0">أضف عنوان جديد</Button></Link>
    </div>
  );
}

export default UserAddressesPage;
