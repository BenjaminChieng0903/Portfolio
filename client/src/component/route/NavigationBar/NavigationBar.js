import { Outlet, useNavigate } from "react-router-dom";
import "./NavigationBar.css";
import { useState } from "react";

const NavigationBar = () => {
  const navigate = useNavigate();
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
    <div>
      <div className="nav-container">
        <span className="container-el">logo</span>
        <div className="nav-details">
          {navDetailsArray.map((item, index) => {
            return (
              <span
                key={index}
                className={`text-element${
                  activeIndex === index ? "active" : ""
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

      <Outlet />
      <footer>Hi, this is footer</footer>
    </div>
  );
};

export default NavigationBar;
