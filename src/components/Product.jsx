import React, { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";

const MAX_RATING = 5;
const MIN_RAITING = 1;

function Product({ id, title, price, description, category, image }) {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RAITING + 1)) + MIN_RAITING
  );
  const [hasPrime] = useState(Math.random() < 0.5);
  return (
    <div className="relative z-30 flex flex-col p-10 m-5 bg-white">
      <p className="absolute top-2 right-2">{category}</p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill(0)
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500 " />
          ))}
      </div>

      <p className="my-2 text-xs line-clamp-2">{description}</p>
      <div className="mb-5">
        <p className="">{price}</p>
      </div>
      {hasPrime && (
        <div className="flex items-center -mt-5 space-x-2">
          <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}
      <button className="mt-auto button">Add to Bascket</button>
    </div>
  );
}

export default Product;
