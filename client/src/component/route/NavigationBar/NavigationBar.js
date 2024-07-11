import { Outlet } from "react-router-dom";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <div>
      <div className="nav-container">
        <span className="container-el">logo</span>
        <div className="nav-details">
          <span className="text-element">_home</span>
          <span className="text-element">_about</span>
          <span className="text-element">_portoflio</span>
          <span className="text-element">_services</span>
          <span className="text-element">_resume</span>
          <span className="text-element">_contact</span>
        </div>
      </div>

      <Outlet />
      <footer>Hi, this is footer</footer>
    </div>
  );
};

export default NavigationBar;
