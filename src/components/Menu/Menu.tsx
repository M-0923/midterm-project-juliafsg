/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useRef, useState } from "react";
import './Menu.css'
import { BsEyeglasses } from "react-icons/bs";
import { BiBone, BiMenu } from "react-icons/bi";
import { GiClothes } from "react-icons/gi";
import { LuBedDouble } from "react-icons/lu";

export const Menu: React.FC = () => {
  const menuRef = useRef(null)
  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      //@ts-ignore
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {

      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <nav ref={menuRef} className={openMenu ? "open-menu menu" : "menu"}>
      <button onClick={() => setOpenMenu((prev) => !prev)}><BiMenu /> Menu</button>
      <div className="menu-options" onClick={() => { alert('Not implemented yet! :)') }} >
        <a><BsEyeglasses />Acessories</a>
        <a><GiClothes /> Clothing </a>
        <a><LuBedDouble />Furniture</a>
        <a><BiBone />Treats</a>
      </div>
    </nav >
  )
}