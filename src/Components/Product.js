import React from "react";
import "./Product.css";
import eShopData from "./Data";
import { useDispatch } from "react-redux";
import { ItemCount } from "../actions";

const Product = (props) => {
  const dispatch = useDispatch();
  const eShopData = [
    {
      id: "1",
      title:
        "Lenovo IdeaPad Slim 3 Intel Core i5 11th Gen 15.6 inches (39.62cm) FHD Thin Light Business Laptop 8GB/512GB SSD/Windows 11/MSOffice/Backlit Keyboard/Arctic Grey/1.65Kg 82H802XTIN",
      price: 40000,
      image:
        "https://m.media-amazon.com/images/I/51tbcILVglL._SY300_SX300_.jpg",
    },
    {
      id: "2",
      title:
        "HP 15s-Ryzen 3 3250U 8GB SDRAM/256GB SSD 15.6inch(39.6cm) HD, Micro-Edge Laptop/AMD Radeon Graphics/Dual Speakers/Win 11 Home/MS Office/Fast Charge/Jet Black/1.69Kg, 15s-ey1508AU",
      price: 30000,
      image:
        "https://m.media-amazon.com/images/I/41dirg9pWSL._SY300_SX300_.jpg",
    },
    {
      id: "3",
      title:
        "Apple 2020 MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver",
      price: 85000,
      image:
        "https://m.media-amazon.com/images/I/31ilq3hPhEL._SX342_SY445_.jpg",
    },
    {
      id: "4",
      title:
        "MOKOBARA The Work Backpack 15.6 Inch Laptop | Travel Backpack For Men And Women",
      price: 8000,
      image: "https://m.media-amazon.com/images/I/71PV9z4Xi9L._UX679_.jpg",
    },
    {
      id: "5",
      title:
        "Bagneeds Men's Black Synthetic Leather Briefcase Best Laptop Messenger Bag Satchel for Men",
      price: 1000,
      image: "https://m.media-amazon.com/images/I/81EASQlMkSS._UY575_.jpg",
    },
  ];

  const handelData = (e) => {
    console.log("e", e);
    dispatch(ItemCount(e));
  };

  return (
    <div>
      {eShopData.map((e, i) => {
        return (
          <div className="product">
            <div className="product_info">
              <p>{e.title}</p>
              <p className="product_price">
                <small> ₹ </small>
                <strong>{e.price}</strong>
              </p>
            </div>
            <img src={e.image} alt="" />
            <button
              key={i}
              onClick={() => {
                handelData(e);
              }}
            >
              Add To Basket
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
