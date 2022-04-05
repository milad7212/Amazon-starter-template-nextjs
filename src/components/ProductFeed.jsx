import React from "react";

function ProductFeed({ products }) {
  return (
    <div className="">
      <h1>Products here...</h1>
      {products.map(({ id, title, price, description, category, image }) => (
        <>
          <p>{title}</p>
        </>
      ))}
    </div>
  );
}

export default ProductFeed;
