import React from "react";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="font-bold badge badge-secondary absolute right-0 mr-4 lg:mr-16 mt-4 px-4">$ {price}</div>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="mt-4 btn btn-outline btn-primary border-0 border-b-8">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
