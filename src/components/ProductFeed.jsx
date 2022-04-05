import React from "react";

function ProductFeed({ products }) {
  return (
    <div className="">
      <h1>Products here...</h1>
      {products.map((product) => (
        <>
          <p>{product.title}</p>
        </>
      ))}
    </div>
  );
}

export default ProductFeed;
