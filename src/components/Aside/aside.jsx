import React, { useState } from "react";
import Category from "./category";
import Rating from "./rating";
import uuid from "react-uuid";

const Aside = ({ prod }) => {
  const [categoryArray, setCategoryArray] = useState([]);
  const [ratingArray, setRatingArray] = useState([]);
  prod.forEach((element) => {
    !categoryArray.includes(element.category) &&
      setCategoryArray([...categoryArray, element.category]);
    !ratingArray.includes(Math.floor(element.rating.rate)) &&
      setRatingArray(
        [...ratingArray, Math.floor(element.rating.rate)].sort((a, b) => a - b)
      );
  });
  !categoryArray.includes("all") && setCategoryArray([...categoryArray, "all"]);
  !ratingArray.includes("all") && setRatingArray([...ratingArray, "all"]);
  return (
    <div>
      <h3>Filtered Menu</h3>
      <h4 className="mt-4">Categories</h4>
      {categoryArray.map((item) => {
        return <Category category={item} key={uuid()} />;
      })}
      <h4 className="mt-4">Ratings</h4>
      {ratingArray.map((item) => {
        return <Rating rates={item} key={uuid()} />;
      })}
    </div>
  );
};

export default Aside;
