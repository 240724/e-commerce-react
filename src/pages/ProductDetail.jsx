import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Products from "../components/products";
const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const url = "https://fakestoreapi.com/products";
  const { id } = useParams();
  useEffect(() => {
    fetch(`${url}/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct([data]));
  }, []);

  console.log(product);

  return (
    <div>
      <Products prod={product} card={true} />
    </div>
  );
};

export default ProductDetail;
