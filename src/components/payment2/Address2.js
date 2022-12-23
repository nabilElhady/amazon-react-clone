import React, { useRef, useState } from "react";
import "../../style/Address2.scss";
import { useSelector, useDispatch } from "react-redux";
import { tokenAction } from "../../store";
import { Visa } from "./Visa";
export const Address2 = () => {
  const street = useRef();
  const city = useRef();
  const state = useRef();
  const zip = useRef();
  const country = useRef();
  const [address, setaddress] = useState({});
  const dispatch = useDispatch();
  const address2 = useSelector((item) => item.token.address);
  const vision = useSelector((item) => item.token.disvision);
  const done = () => {
    setaddress({
      street: street.current.value,
      city: city.current.value,
      state: state.current.value,
      zip: zip.current.value,
      country: country.current.value,
    });
    dispatch(tokenAction.disvision());
  };

  const buy = () => {
    dispatch(tokenAction.buy(address));
  };
  return (
    <div>
      <div className="form">
        <div className="line">
          <input
            type="street"
            className="field st"
            placeholder="street"
            ref={street}
          ></input>
        </div>
        <div className="line">
          <input
            type="city"
            className="field city"
            placeholder="city"
            ref={city}
          ></input>
          <input
            type="state"
            className="field state"
            placeholder="state"
            ref={state}
          ></input>
          <input
            type="zip"
            className="field zip"
            placeholder="zip"
            ref={zip}
          ></input>
        </div>
        <div className="line">
          <input
            type="country"
            className="field country"
            placeholder="country"
            ref={country}
          ></input>
        </div>
        <button
          onClick={done}
          for="rd3"
          className={`button1 ${vision ? "save" : ""}`}
        >
          done
        </button>
        <div
          style={{
            textAlign: "center",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <label
            onClick={buy}
            for="rd2"
            className={`button1 ${!vision ? "save" : ""}`}
          >
            save
          </label>
        </div>
      </div>
    </div>
  );
};
