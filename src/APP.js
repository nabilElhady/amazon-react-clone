import React from "react";
import { Header } from "./components/Home/Header";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { CheckOut } from "./components/checkOut/CheckOut";
import { Home } from "./components/Home";
import { SignIn } from "./components/SignIn/SignIn";
import { Payment } from "./components/payment2/Payment";
const APP = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <div path='/' >
      <Home></Home>
    </div> */}
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/checkout" exact component={CheckOut}></Route>
          <Route path="/signin" exact component={SignIn}></Route>
          <Route path="/Payment" exact component={Payment}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default APP;
