import React from "react";
import "../../style/ChecKOut.scss";
import img from "../../images/check_out_ad.png";
import { Paper } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import Checkbox from "@mui/material/Checkbox";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { basketActions } from "../../store";
import { Header } from "../Home/Header";
import { Flipper, Flipped } from "react-flip-toolkit";
import { Cart } from "./Cart";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
export const CheckOut = () => {
  const history = useHistory();
  const many = useSelector((item) => item.basket.many);
  const totalPrice = useSelector((item) => item.basket.totalPrice);
  const dispatch = useDispatch();

  const boxed = useSelector((state) => state.basket.basket);
  const deleteitem = (item, index) => {
    // const newboxed = newbox.filter((item2) => item2.id != item.id);
    // console.log(newboxed);

    dispatch(basketActions.removerFromBasket(index));
  };
  // const shopCart = boxed.map((item, index) => {
  //   return (
  //     <div className="cartmain">
  //       <div className="cartmain">
  //         <Checkbox></Checkbox>
  //         <img className="secimg" src={item.img}></img>
  //         <Divider></Divider>
  //       </div>
  //       <div className="titpr">
  //         <h4>{item.title}</h4>
  //         <p>in stock</p>
  //         <p
  //           style={{ margin: "1rem 2rem" }}
  //           className="deleteitem"
  //           onClick={() => deleteitem(item, index)}
  //         >
  //           delete
  //         </p>
  //       </div>

  //       <div>
  //         <h3 style={{ marginRight: "2rem" }}>{item.price}$</h3>
  //       </div>
  //       <Divider></Divider>
  //     </div>
  //   );
  // });

  return (
    <Flipped flipId="square">
      <div>
        <Header></Header>
        <div>
          <div style={{ textAlign: "center" }}>
            <img className="checkOut__ad" src={img}></img>
          </div>
          <div className="checkOut">
            <div className="checkOut__left">
              <Paper elevation={3}>
                <div className="shop__head">
                  <h1>Shopping Cart</h1>
                  {!many && <p>no item selected</p>}
                  <button className="deleteA">select all items</button>
                  <p className="price_tage">price</p>
                  <div
                    style={{
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Divider
                      sx={{
                        width: "90%",
                        textAlign: "center",
                        borderWidth: "1px",
                      }}
                    ></Divider>
                  </div>
                  <Cart></Cart>
                </div>
              </Paper>
            </div>
            <div className="checkOut__right">
              <p>
                subtotal ({many} items)total {totalPrice}${" "}
              </p>
              <button
                onClick={() => {
                  history.push("/Payment");
                }}
              >
                procced tocheck out
              </button>
            </div>
          </div>
        </div>
      </div>
    </Flipped>
  );
};
