import React from "react";
import Rating from "@mui/material/Rating";
import "../../style/Box.scss";
import { useSelector, useDispatch } from "react-redux";
import Divider from "@mui/material/Divider";
import { basketActions } from "../../store";

export const Product = ({ title, price, rating, img, id }) => {
  const totalPrice2 = useSelector((item) => item.basket.numberofeachelem);
  const dispatch = useDispatch();
  const boxed = useSelector((state) => state.basket.basket);
  const addItem = () => {
    dispatch(
      basketActions.AddToBasket({
        title: title,
        price: price,
        rating: rating,
        id: id,
        img: img,
        quantity: 1,
      })
    );
    console.log(totalPrice2, boxed);
  };
  return (
    <div className=" text-red-500">
      <p>{title}</p>
      <h3 className="product__price">{price}$</h3>
      <Rating
        name="half-rating-read"
        defaultValue={rating}
        precision={0.5}
        readOnly
      />
      <img src={img}></img>
      <button onClick={addItem}>Add to Basket</button>
    </div>
  );
};
