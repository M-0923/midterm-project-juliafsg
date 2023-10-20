import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import './Search.css'

export const Search: React.FC = () => {
  return (
    <div className="search">
      <input type="text" placeholder="What does your pet need?" />
      <button type="submit"><AiOutlineSearch /></button>
    </div>
  )
}