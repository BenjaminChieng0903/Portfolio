import { Outlet } from "react-router-dom";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <div>
      <div className="nav-container">
        <span className="container-el">logo</span>
        <div className="nav-details">
          <span>_home</span>
          <span>_about</span>
          <span>_portoflio</span>
          <span>_services</span>
          <span>_resume</span>
          <span>_contact</span>
        </div>
      </div>

      <Outlet />
      <footer>Hi, this is footer</footer>
    </div>
  );
};

export default NavigationBar;
