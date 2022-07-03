import React from "react";
import { MenuList } from "../../data/MenuList";
import MenuItem from "../../components/MenuItem";
import "../../style/pages/Menu.css";

function Menu() {
  return (
    <div>
      <div className="menu">
        <h1 className="menuTitle">Jelajahi Sekarang!</h1>
        <div className="menuList mb-3">
          {MenuList.map((menuItem, key) => {
            return (
              <MenuItem
                image={menuItem.image}
                name={menuItem.name}
                quote={menuItem.quote}
                btn={menuItem.btn}
                key={key}
                link={menuItem.link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Menu;
