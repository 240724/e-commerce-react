import Button from "react-bootstrap/Button";
import { Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Products = ({ prod, card, detail, summary }) => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(1);
  return (
    <>
      {summary &&
        prod?.map((item) => {
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
                  <Button
                    variant="primary"
                    className="text-center"
                    onClick={() => navigate(`/${item.id}`)}
                  >
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
      {detail &&
        prod?.map((item) => {
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
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>{item.category}</Card.Text>
                <Card.Text>${item.price}</Card.Text>
                <div className="d-flex">
                  <Card.Text>Rating :</Card.Text>
                  <Card.Text>{item.rating.rate}</Card.Text>
                  <Card.Text className="ms-5">Count :</Card.Text>
                  <Card.Text>{item.rating.count}</Card.Text>
                </div>
                <div className="d-flex g-1 justify-content-evenly">
                  <Button
                    variant="primary"
                    className="text-center"
                    onClick={() => navigate(-1)}
                  >
                    Go Back
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
      {card &&
        prod?.map((item) => {
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
                <Card.Text>${item.price}</Card.Text>
                <div>
                  <Button
                    variant="primary"
                    className="text-center"
                    onClick={() => setAmount(amount - 1)}
                  >
                    -
                  </Button>
                  <span>{amount}</span>
                  <Button
                    variant="primary"
                    className="text-center"
                    onClick={() => setAmount(amount + 1)}
                  >
                    +
                  </Button>
                </div>
                <div className="d-flex g-1 justify-content-center">
                  <Button
                    variant="primary"
                    className="text-center"
                    onClick={() => navigate(`/${item.id}`)}
                  >
                    Go Detail
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
