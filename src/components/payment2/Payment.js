import React from "react";
import { useSelector } from "react-redux";
import { Paper } from "@mui/material";
import { Address } from "./Address";
import logo from "../../images/logo.png";

export const Payment = () => {
  const many = useSelector((item) => item.basket.many);
  const email = useSelector((item) => item.token.email);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        <img
          className="logo"
          src={logo}
          style={{ display: "inline-block", position: "relative", top: "8px" }}
        ></img>
        CheckOut({many}items)
      </h1>
      <Paper className="payment">
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Address</h3>
          </div>
          <div className="payment__address">
            <p>{email}</p>
            <Address></Address>
          </div>
        </div>
        <div className="payment__section"></div>
        <div className="payment__section"></div>
      </Paper>
    </div>
  );
};
