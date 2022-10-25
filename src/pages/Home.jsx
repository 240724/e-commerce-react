import React, { useEffect, useState } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Products from "../components/products";
import Navbar from "../components/navbar";
import Aside from "../components/Aside/aside";
// import Products from "../components/products";
// import Navbar from "./components/navbar";
// import Aside from "./components/Aside/aside";

function Home() {
  const [card, setCard] = useState([]);
  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const { data } = await axios(url);
    setProducts(data);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Navbar cardTotal={card.length} />
      <div className="container">
        <h1 className="text-center mt-3">Our Store</h1>
        <Row>
          <Col>
            <Aside prod={products} />
          </Col>
          <Col xs={10}>
            <Row className="g-3">
              <Products prod={products} />
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;
