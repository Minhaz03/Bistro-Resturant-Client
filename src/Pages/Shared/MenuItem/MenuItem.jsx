import React from "react";

const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div className="flex-col md:flex lg:flex-row space-x-2">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[100px]"
        src={image}
        alt={name}
      />
      <div>
        <h3 className="uppercase">{name}--------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-600 pl-[160px]">${price}</p>
    </div>
  );
};

export default MenuItem;
