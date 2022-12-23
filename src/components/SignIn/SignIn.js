import React, { useState } from "react";
import logo from "../../images/logo.png";
import { Paper } from "@mui/material";
import "../../style/SignIn.scss";
import { useRef } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import { tokenAction } from "../../store";
export const SignIn = () => {
  const islog = useSelector((item) => item.token.isLoggedIn);
  const dispatch = useDispatch();
  const history = useHistory();
  const [log, setlog] = useState(false);
  const name = useRef("");
  const name2 = useRef("");
  const password = useRef("");
  let url2 = "";
  if (islog == false) {
    url2 =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD1JGYmIKjl4m8JErs_owj-d9S6TxilFUE";
  } else {
    url2 =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD1JGYmIKjl4m8JErs_owj-d9S6TxilFUE";
  }
  const signin = (e) => {
    fetch(url2, {
      method: "POST",
      body: JSON.stringify({
        email: name.current.value,
        password: password.current.value,
        displayName: name2.current.value,

        returnSecureToken: true,
      }),

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            console.log(data);
          });
        }
      })
      .then((data) => {
        if (islog == false) {
          dispatch(
            tokenAction.login({
              token: data.idToken,
              name: data.displayName,
              email: name.current.value,
            })
          );
        } else {
          dispatch(
            tokenAction.signUp({
              token: data.idToken,
              name: name2.current.value,
              email: name.current.value,
            })
          );
        }
        console.log(data);
        history.push("/");
      });
  };
  const create = () => {
    dispatch(tokenAction.logout(""));
    // fetch(
    //   "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD1JGYmIKjl4m8JErs_owj-d9S6TxilFUE",
    //   {
    //     method: "POST",
    //     body: JSON.stringify({
    //       email: name.current.value,
    //       password: password.current.value,
    //       displayName: "nabil",

    //       returnSecureToken: true,
    //     }),
    //     displayName: "nabil",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // )
    //   .then((res) => {
    //     if (res.ok) {
    //       return res.json();
    //     } else {
    //       return res.json().then((data) => {
    //         console.log(data);
    //       });
    //     }
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   });
  };
  return (
    <div className="bogo">
      <div className="signinlogo">
        <img src={logo}></img>
      </div>
      <div className="biggest centerd">
        <Paper className="bigger">
          {!islog ? <h1>Sign In</h1> : <h1>sign up</h1>}
          {islog && (
            <div className="label name">
              <label>name</label>
              <input ref={name2} className="show"></input>
            </div>
          )}
          <div className="label email">
            <label>E-mail</label>
            <input ref={name} className="show"></input>
          </div>
          <div className="label password">
            <label>Password</label>
            <input type="password" ref={password} className="show"></input>
          </div>
          <button className="signin button-29 " onClick={signin}>
            {!islog ? `sign in` : "sign up"}
          </button>
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
        </Paper>
      </div>
      <div className="centerd">
        <button className="create" onClick={create}>
          {!islog ? "create new account" : "already have account"}
        </button>
      </div>
    </div>
  );
};
