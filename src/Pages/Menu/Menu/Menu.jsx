import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import desertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../Hooks/UseManu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div className="space-y-10">
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover title="Our Menu" img={menuImg}></Cover>
      {/* main cover */}
      <SectionTitle
        subHeading="Don't Miss"
        heading="Todays Offer"
      ></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* desserts menu items */}
      <MenuCategory
        coverImg={desertImg}
        items={dessert}
        title="Desert"
      ></MenuCategory>
      {/* pizza */}
      <MenuCategory
        coverImg={pizzaImg}
        items={pizza}
        title="Pizza"
      ></MenuCategory>
      {/* salads */}
      <MenuCategory
        coverImg={saladImg}
        items={salad}
        title="Salads"
      ></MenuCategory>
      {/* soup */}
      <MenuCategory
        coverImg={soupImg}
        items={soup}
        title="Soups"
      ></MenuCategory>
    </div>
  );
};

export default Menu;
