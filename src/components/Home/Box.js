import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import "../../style/Box.scss";
import { Product } from "./Product";
export const Box = () => {
  return (
    <div className="headBox">
      <div className="headBox_threeBoxes">
        <Paper className="paper">
          <Product
            title=" Logitech MK270 Wireless Keyboard And Mouse Combo For Windows, 2.4
            GHz Wireless, Compact Mouse, 8 Multimedia And Shortcut Keys, For PC,
            Laptop - Black"
            price="25"
            rating="4"
            img="https://m.media-amazon.com/images/I/61pUul1oDlL._AC_SL1500_.jpg"
            id="1"
          ></Product>
        </Paper>
        <Paper className="paper">
          <Product
            title="  Sceptre 24 Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA
            Build-in Speakers, Machine Black (E248W-19203R Series)"
            price="125"
            rating="5"
            img="https://m.media-amazon.com/images/I/71rXSVqET9L._AC_SL1257_.jpg"
            id="12"
          ></Product>
        </Paper>

        <Paper className="paper">
          <Product
            title="  HP DeskJet 2755e Wireless Color All-in-One Printer with Bonus 6
            Months Instant Ink with HP+"
            price="125"
            rating="5"
            img="https://m.media-amazon.com/images/I/61iD0U2YwqL._AC_SL1500_.jpg"
            id="11"
          ></Product>
        </Paper>
      </div>
      <div className="headBox_threeBoxes">
        <Paper className="paper">
          <Product
            title="    Original HP 67XL Black High-yield Ink Cartridge | Works with HP
            DeskJet 1255, 2700, 4100 Series, HP ENVY 6000, 6400 Series |
            Eligible for Instant Ink | 3YM57AN"
            price="5"
            rating="4"
            img="https://m.media-amazon.com/images/I/71Llge105IL._AC_SL1500_.jpg"
            id="13"
          ></Product>
        </Paper>
        <Paper className="paper">
          <Product
            title="      Logitech C920x HD Pro Webcam, Full HD 1080p/30fps Video Calling,
            Clear Stereo Audio, HD Light Correction, Works with Skype, Zoom,
            FaceTime, Hangouts, PC/Mac/Laptop/Macbook/Tablet - Black"
            price="75"
            rating="4.5"
            img="https://m.media-amazon.com/images/I/71iNwni9TsL._AC_SL1500_.jpg"
            id="15"
          ></Product>
        </Paper>
        <Paper className="paper">
          <Product
            title="        2020 Apple MacBook Air Laptop: Apple M1 Chip, 13??? Retina Display,
            8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera,
            Touch ID. Works with iPhone/iPad; Gold"
            price="775"
            rating="5"
            img="https://m.media-amazon.com/images/I/71vFKBpKakL._AC_SL1500_.jpg"
            id="1231"
          ></Product>
        </Paper>
      </div>
      <div className="headBox_threeBoxes">
        <Paper className="paper">
          <Product
            title="Logitech G920 Driving Force Racing Wheel and Floor Pedals, Real Force Feedback, Stainless Steel Paddle Shifters, Leather Steering Wheel Cover for Xbox Series X|S, Xbox One, PC, Mac - Black"
            price="50"
            rating="4"
            img="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61O7HHu181L._AC_SL1500_.jpg"
            id="18"
          ></Product>
        </Paper>
        <Paper className="paper">
          <Product
            title="Apple iPad (2018 Model) with Wi-Fi only 32GB Apple 9.7in iPad - Space Gray (Renewed)"
            price="100"
            rating="4.5"
            img="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61aeen0K1NL._AC_SL1000_.jpg"
            id="19"
          ></Product>
        </Paper>
        <Paper className="paper">
          <Product
            title="SAMSUNG 970 EVO Plus SSD 2TB NVMe M.2 Internal Solid State Drive w/ V-NAND Technology, Storage and "
            price="400"
            rating="5"
            img="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51Brl+iYtvL._AC_SL1001_.jpg"
            id="1231"
          ></Product>
        </Paper>
      </div>
      {/* <div className="headBox_oneBoxes">
        <Paper className="paper3">
          <Product
            title="        2020 Apple MacBook Air Laptop: Apple M1 Chip, 13??? Retina Display,
            8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera,
            Touch ID. Works with iPhone/iPad; Gold"
            price="775"
            rating="5"
            img="https://m.media-amazon.com/images/I/71vFKBpKakL._AC_SL1500_.jpg"
            id="1231"
          ></Product>
        </Paper>
      </div> */}
    </div>
  );
};
