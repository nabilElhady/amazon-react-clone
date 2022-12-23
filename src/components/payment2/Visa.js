import React, { useRef, useState } from "react";
import "../../style/Visa.scss";
import { tokenAction } from "../../store";
import { useDispatch } from "react-redux";
export const Visa = () => {
  const dispatch = useDispatch();
  const [hide, sethide] = useState(false);
  const [visa, setvisa] = useState({});
  const [cardNum, setcard] = useState("");
  const [expire, setexpire] = useState("");
  const cv = useRef("");
  const cardowner = useRef("");
  const change = (e) => {
    setexpire(e.target.value);
  };
  const change2 = (e) => {
    setcard(e.target.value);
  };
  if (expire.length == 2) {
    setexpire(`${expire}/`);
  }
  if (cardNum.length % 5 == 0) {
    setcard(`${cardNum} `);
  }
  const done2 = () => {
    setvisa({
      cardNum: cardNum,
      expire: expire,
      cv: cv.current.value,
      cardowner: cardowner.current.value,
    });
    sethide(!hide);
  };
  const done3 = () => {
    sethide(!hide);
    dispatch(tokenAction.visa(visa));
  };
  return (
    <div>
      <div class="container">
        <div class="page-header text-center">
          <h1>Credit Card Payment Gateway</h1>
        </div>
        <div class="container">
          <div class="row center">
            <div class="col-xs-12 col-md-6 col-md-offset-4">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <div class="row center">
                    <h3 class="text-center">Payment Details</h3>
                    <div class="inlineimage center ">
                      <img
                        class="img-responsive images"
                        src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Mastercard-Curved.png"
                      />
                      <img
                        class="img-responsive images"
                        src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Discover-Curved.png"
                      />
                      <img
                        class="img-responsive images"
                        src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Paypal-Curved.png"
                      />
                      <img
                        class="img-responsive images"
                        src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/American-Express-Curved.png"
                      />
                    </div>
                  </div>
                </div>
                <div class="panel-body total">
                  <form role="form">
                    <div class="row">
                      <div class="col-xs-12">
                        <div class="form-group">
                          {" "}
                          <label>CARD NUMBER</label>
                          <div class="input-group cardnum">
                            {" "}
                            <input
                              maxLength="20"
                              type="tel"
                              class="form-control"
                              placeholder="Valid Card Number"
                              onChange={change2}
                              value={cardNum}
                            />{" "}
                            <span class="input-group-addon">
                              <span class="fa fa-credit-card"></span>
                            </span>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xs-7 col-md-7">
                        <div class="form-group">
                          {" "}
                          <label>
                            <span class="hidden-xs">EXPIRATION</span>
                            <span class="visible-xs-inline">EXP</span> DATE
                          </label>{" "}
                          <input
                            type="tel"
                            class="form-control expdate "
                            placeholder="MM / YY"
                            onChange={change}
                            value={expire}
                            maxLength="5"
                          />{" "}
                        </div>
                      </div>
                      <div class="col-xs-5 col-md-5 pull-right">
                        <div class="form-group">
                          {" "}
                          <label>CV CODE</label>{" "}
                          <input
                            type="tel"
                            class="form-control cvcode"
                            placeholder="CVC"
                            maxLength="3"
                            ref={cv}
                          />{" "}
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xs-12">
                        <div class="form-group">
                          {" "}
                          <label>CARD OWNER</label>{" "}
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Card Owner Name"
                            ref={cardowner}
                          />{" "}
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="panel-footer">
                  <div class="row">
                    <div class="col-xs-12">
                      {" "}
                      <button
                        class={`btn btn-success btn-lg btn-block ${
                          hide ? "hide" : ""
                        }`}
                        onClick={done2}
                      >
                        Confirm info
                      </button>
                      <label
                        for="rd4"
                        onClick={done3}
                        class={`btn btn-success btn-lg btn-block ${
                          !hide ? "hide" : ""
                        }`}
                      >
                        save
                      </label>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
