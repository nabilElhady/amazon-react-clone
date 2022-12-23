import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "../../style/header.css";
export const Slider = () => {
  return (
    <div
      className="swipe"
      style={{
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <AwesomeSlider style={{ width: "100%" }}>
        <div
          style={{
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {" "}
          <img
            className="backphoto"
            src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"
          ></img>
        </div>
        <div>
          {" "}
          <img
            className="backphoto"
            src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
          ></img>
        </div>
        <div style={{ width: "100%" }}>
          <img
            className="backphoto"
            src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
          ></img>
        </div>

        <div style={{ width: "100%" }}>
          {" "}
          <img
            className="backphoto"
            src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
          ></img>
        </div>
      </AwesomeSlider>
    </div>
  );
};
