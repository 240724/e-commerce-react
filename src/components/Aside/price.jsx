import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
const Price = () => {
  return (
    <div>
      <InputGroup className="mb-3">
        <Form.Control
          aria-label="First name"
          className="me-1"
          placeholder="min"
        />
        <span>-</span>
        <Form.Control
          aria-label="Last name"
          className="ms-1"
          placeholder="max"
        />
        <Button
          variant="outline-secondary"
          id="button-addon1"
          className="ms-1"
          style={{ width: "3rem" }}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </Button>
      </InputGroup>
    </div>
  );
};

export default Price;
