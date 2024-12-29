import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div className="space-y-20 pt-8">
      {title && <Cover title={title} img={coverImg}></Cover>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16">
        {items?.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
