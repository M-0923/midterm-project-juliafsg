import React from "react";
import buddyLogo from '/buddy-full-logo.png'
import './Navbar.css'
import { Search } from "../Search/Search";

export const Navbar: React.FC = () => {
  return (
    <nav>
      <a href="https://vitejs.dev" target="_blank">
        <img src={buddyLogo} className="logo" alt="Buddy logo" />
      </a>
      <Search />
    </nav>
  )
}