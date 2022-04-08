import React, { useState } from "react";
import Image from "next/image";
import {StarIcon} from '@heroicons/react/solid'


const MAX_RATING = 5;
const MIN_RAITING = 1;

function Product({ id, title, price, description, category, image }) {
  const [rating]=useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RAITING + 1)) + MIN_RAITING
  )
  return (
    <>
      <p className="">{category}</p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4>{title}</h4>
      <div className="flex">
      {Array(rating).fill(0).map((_,i)=>(<StarIcon className="h-5" />))}

      </div>
      
    </>
  );
}

export default Product;
