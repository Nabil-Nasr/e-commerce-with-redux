import { Button, Form } from "react-bootstrap";
import RateStars from "./RateStars";

const RateForm = () => {
  return (
    <div className="border-bottom py-2 px-4">
      <div className="d-flex column-gap-3 align-items-center mb-3">
        <div>علي محمد </div>
        <div><RateStars/></div>
      </div>
      <div className="d-grid">
          <Form.Control as="textarea" className="bg-body-tertiary fs-5 rounded-0 " rows={3} placeholder="اكتب تعليق..."/>
          <Button variant="dark" className="mt-3 ms-auto py-2 rounded-0 ">أضف تعليق</Button>
      </div>
    </div>
  );
}

export default RateForm;
