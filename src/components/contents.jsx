import { Col, Row } from "react-bootstrap";
import Aside from "./Aside/aside";
import Products from "./products";

const Contents = ({ products, pageName }) => {
  console.log(products);
  console.log(pageName);
  return (
    <>
      <div className="container">
        <h1 className="text-center mt-3">Electronics</h1>
        <Row>
          <Col>
            <Aside prod={products} />
          </Col>
          <Col xs={10}>
            <Row className="g-3">
              <Products
                prod={products.filter((item) => item.category == `${pageName}`)}
                summary
              />
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Contents;
