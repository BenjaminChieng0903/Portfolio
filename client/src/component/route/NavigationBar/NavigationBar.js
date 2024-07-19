import { Outlet, useNavigate } from "react-router-dom";
import "./NavigationBar.css";
import { useRef, useState } from "react";

const NavigationBar = () => {
  const navigate = useNavigate();
  const navRef = useRef(null);
  const navDetailsArray = [
    "_home",
    "_about",
    "_portoflio",
    "_services",
    "_resume",
    "_contact",
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="fixed-image-container">
        <img
          src={`${process.env.PUBLIC_URL}/images/code-line.jpg`}
          class="fixed-image"
        />
      </div>
      <div className=" nav-container" ref={navRef}>
        <span className="container-el">logo</span>
        <div className="nav-details">
          {navDetailsArray.map((item, index) => {
            return (
              <span
                key={index}
                className={`text-element${
                  activeIndex === index ? "-active" : ""
                }`}
                onClick={() => {
                  if (index == 0) {
                    navigate("/");
                  } else {
                    navigate(`/${navDetailsArray[index].substring(1)}`);
                  }
                  setActiveIndex(index);
                }}
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>

      <Outlet context={navRef} />
      {/* <div className="background-image-container">
        <div class="scrollable-content"></div>
      </div> */}
      <footer className=" footer">Hi, this is footer</footer>
    </>
  );
};

export default NavigationBar;
