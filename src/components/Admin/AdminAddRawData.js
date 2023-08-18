import { Button } from "react-bootstrap";
import useRawData from "../../hooks/useRawData";

const AdminAddRawData = ({ formAction, pageHeader, children }) => {
  const { handleSubmit } = useRawData(formAction);
  
  return (
    <div>
      <h3 className="fw-bold">{pageHeader}</h3>
      <form onSubmit={handleSubmit}>
        <div className="d-grid mt-3 row-gap-2">
          {children}
          <Button type="submit" variant="dark" className="py-2 rounded-0 ms-auto">حفظ التعديلات</Button>
        </div>
      </form>
    </div>
  );
};

export default AdminAddRawData;
