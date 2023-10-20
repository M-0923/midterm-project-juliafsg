import React from "react";
import './ItemsList.css'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import { items } from '../../mocks/items.json'

export function ItemsList() {
  return (
    <div className="list">

      {items.map(({ name, price, image, stars }) => {
        return (
          <div key={`${name}`} className="card">
            <img src={image} />
            <p>{name} </p>
            <div>
              {stars > 1 ? <AiFillStar /> : <AiOutlineStar />}
              {stars > 2 ? <AiFillStar /> : <AiOutlineStar />}
              {stars > 3 ? <AiFillStar /> : <AiOutlineStar />}
              {stars > 4 ? <AiFillStar /> : <AiOutlineStar />}
              {stars > 5 ? <AiFillStar /> : <AiOutlineStar />}
            </div>
            <p className="price">{price}</p>
            <div className="button-container">
              <button>Buy</button>
              <button className="see-button">See</button>
            </div>
          </div>
        )
      })}
    </div >
  )
}