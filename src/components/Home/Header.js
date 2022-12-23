import React, { useState } from "react";
import "../../style/header.scss";
import Search from "./Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { Link, Router, BrowserRouter } from "react-router-dom";
import { fontSize } from "@mui/system";
import { tokenAction } from "../../store";
export const Header = () => {
  const isloggedIn = useSelector((item) => item.token.isLoggedIn);
  const name = useSelector((item) => item.token.name);
  const dispatch = useDispatch();
  const items = useSelector((item) => item.basket.many);
  const isLoggedIn = useSelector((item) => item.token.isLoggedIn);
  const logout = () => {
    dispatch(tokenAction.logout(""));
    console.log(isLoggedIn);
  };
  return (
    <div className="bighead">
      <div className="header">
        <Link to="">
          <img
            className="logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
          ></img>
        </Link>
        <Search></Search>
        <div className="header__buttons">
          <div className="header__nav">
            <span className="header_optionLineOne">
              {!isloggedIn ? "hello guest" : `hi ${name}`}
            </span>
            {!isloggedIn && (
              <Link to="/SignIn" style={{ textDecoration: "none" }}>
                {" "}
                <span
                  className="header_optionLineTwo"
                  style={{ textDecoration: "none" }}
                >
                  {!isloggedIn ? "sign in" : `log out`}
                </span>
              </Link>
            )}
            {isloggedIn && (
              <span
                onClick={logout}
                style={{
                  color: "white",
                  width: "100%",
                }}
              >
                log out
              </span>
            )}
          </div>
          <div className="header__nav">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
          <div className="header__nav">
            <span className="header_optionLineOne">your</span>
            <span className="header_optionLineTwo">prime</span>
          </div>
        </div>
        <div className="header__basket">
          <Link to="/checkOut">
            <ShoppingBasketIcon sx={{ color: "white" }}></ShoppingBasketIcon>{" "}
          </Link>

          <span className="header_optionLineTwo header__baskeCount">
            {items}
          </span>
        </div>
      </div>
      <div className="sechead">
        <div className="sechead__ALL">
          <MenuIcon></MenuIcon>
          ALL
        </div>
        <div className="sechead__buttons">
          <span className="sechead__button">Today's deal</span>
          <span className="sechead__button"> customer Service</span>
          <span className="sechead__button">Registry</span>
          <span className="sechead__button">Gift Card</span>
          <span className="sechead__button"> Sell</span>
        </div>
      </div>
    </div>
  );
};
