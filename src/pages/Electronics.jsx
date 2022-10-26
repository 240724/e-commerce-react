import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Aside from "../components/Aside/aside";
import Contents from "../components/contents";
import Products from "../components/products";

const Electronics = ({ products }) => {
  return (
    <>
      <Contents products={products} pageName="electronics" />
    </>
  );
};

export default Electronics;
