import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center column-gap-3 ">
      <Spinner className="p-3" animation="grow" />
      <Spinner className="p-3" animation="grow" variant="danger" />
      <Spinner className="p-3" animation="grow" />
      <Spinner className="p-3" animation="grow" variant="danger" />
      <Spinner className="p-3" animation="grow" />
    </div>
  );
};

export default Loading;
