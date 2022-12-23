import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Checkbox } from "@mui/material";
import { basketActions } from "../../store";
import "../../style/ChecKOut.scss";

export const Cart = () => {
  const dispatch = useDispatch();
  const boxed = useSelector((state) => state.basket.basket);
  const shopCart = boxed.map((item, index) => {
    const deleteitem = (item, index) => {
      // const newboxed = newbox.filter((item2) => item2.id != item.id);
      // console.log(newboxed);

      dispatch(basketActions.removerFromBasket(index));
    };
    return (
      <div className="cartmain">
        <div className="cartmain">
          <Checkbox></Checkbox>
          <img className="secimg" src={item.img}></img>
        </div>
        <div className="titpr">
          <h4>{item.title}</h4>
          <p>in stock</p>
          <p
            style={{ margin: "1rem 2rem" }}
            className="deleteitem"
            onClick={() => deleteitem(item, index)}
          >
            delete
          </p>
        </div>

        <div>
          <h3 style={{ marginRight: "2rem" }}>{item.price}$</h3>
        </div>
      </div>
    );
  });
  return <div>{shopCart}</div>;
};
