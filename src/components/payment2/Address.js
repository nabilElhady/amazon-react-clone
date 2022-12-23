import React, { useState } from "react";
import { Paper } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../../style/Address.scss";
import { Address2 } from "./Address2";
import { useSelector, useDispatch } from "react-redux";
import { tokenAction } from "../../store";
import { Visa } from "./Visa";
import { Cart } from "../checkOut/Cart";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
export const Address = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const vison = useSelector((item) => item.token.disvision);
  const name = useSelector((item) => item.token.name);
  const address = useSelector((item) => item.token.address);

  return (
    <div>
      <paper>
        <div class="row">
          <div class="col">
            <div class="tabs">
              <div class="tab">
                <input type="radio" id="rd1" name="rd" />
                <label
                  onClick={() => {
                    dispatch(tokenAction.true());
                  }}
                  class="tab-label"
                  for="rd1"
                >
                  <div className="shipping">
                    <h2>shipping address</h2>
                    <div className="shipping__info">
                      <p>{name}</p>
                      <p>{address.street}</p>
                      <p>
                        {address.city} {address.state}
                      </p>
                    </div>
                  </div>
                </label>
                <div class="tab-content">
                  <Address2></Address2>
                </div>
                <label for="rd3">save</label>
              </div>
              <div class="tab">
                <input type="radio" id="rd2" name="rd" />
                <label class="tab-label" for="rd2">
                  payment
                </label>
                <div class="tab-content">
                  <Visa></Visa>
                </div>
              </div>
              <div class="tab">
                <input type="radio" id="rd4" name="rd" />
                <label class="tab-label" for="rd4">
                  review your items
                </label>
                <div class="tab-content">
                  <Cart></Cart>
                  <button
                    onClick={() => {
                      history.push("/");
                    }}
                  >
                    end
                  </button>
                </div>
              </div>
              <div class="tab">
                <input type="radio" id="rd3" name="rd" />
              </div>
            </div>
          </div>
        </div>
      </paper>
    </div>
  );
};
