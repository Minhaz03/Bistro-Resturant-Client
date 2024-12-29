import React, { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuItemCard from "../Shared/MenuItemCard/MenuItemCard";

const ChefRecommends = () => {
  const [menu, setMenu] = useState([]);
  //   console.log(menu)
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const chefRecommends = data.filter((item) => item.category === "soup");
        // console.log(chefRecommends)
        setMenu(chefRecommends);
      });
  }, [menu.length]);

  return (
    <div className="my-28">
      <div>
        <SectionTitle
          heading="CHEF RECOMMENDS"
          subHeading="Should Try"
        ></SectionTitle>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {menu.map((item) => (
          <MenuItemCard key={item._id} item={item}></MenuItemCard>
        ))}
      </div>
    </div>
  );
};

export default ChefRecommends;
