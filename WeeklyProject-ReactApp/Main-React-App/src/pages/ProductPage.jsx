import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <h1>ProductPage: product id cliccato :{id} </h1>
    </>
  );
};

export default ProductPage;
