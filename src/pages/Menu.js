import React from "react";
import Layout from "../layout/Layout";
import { MenuList } from "../data/MenuList";
import MenuItem from "../components/MenuItem";
import "../style/Menu.css";

function Menu() {
  return (
    <div>
      <Layout>
        <div className="menu">
          <h1 className="menuTitle">Jelajahi Sekarang!</h1>
          <div className="menuList">
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
      </Layout>
    </div>
  );
}

export default Menu;
