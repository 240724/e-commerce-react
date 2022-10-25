import Button from "react-bootstrap/Button";
import { Card, Col } from "react-bootstrap";

const Products = ({ prod }) => {
  console.log(prod);
  return (
    <>
      {prod?.map((item) => {
        return (
          <Col key={item.id}>
            <Card style={{ width: "18rem" }} className="m-auto p-2" id="card">
              <div
                style={{ height: "18rem" }}
                className="d-flex justify-content-center"
              >
                <Card.Img
                  className="mt-4"
                  variant="top"
                  src={item.image}
                  id="card-img"
                  style={{ height: "15rem", width: "15rem" }}
                />
              </div>
              {/* <Card.Body> */}
              <Card.Title className="text-truncate">{item.title}</Card.Title>
              <Card.Text>{item.category}</Card.Text>
              <Card.Text>${item.price}</Card.Text>
              <div className="d-flex g-1 justify-content-evenly">
                <Button variant="primary" className="text-center">
                  Go Detail
                </Button>
                <Button variant="success" className="text-center">
                  Add to Cart
                </Button>
              </div>
              {/* </Card.Body> */}
            </Card>
          </Col>
        );
      })}
    </>
  );
};
export default Products;
