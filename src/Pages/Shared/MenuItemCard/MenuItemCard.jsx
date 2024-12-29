import React from "react";

const MenuItemCard = ({ item }) => {
  const { name, image, recipe } = item;
  return (
    <div>
      <div className="card card-compact bg-base-100 h-full w-full p-5 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center mt-3">
            <button className="btn btn-primary btn-outline border-0 border-b-8 mt-10">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
