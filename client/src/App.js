import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./component/route/HomePage/homePage";
import NavigationBar from "./component/route/NavigationBar/NavigationBar";
import AboutPage from "./component/route/AboutPage/AboutPage";
import ServicesPage from "./component/route/ServicesPage/ServicesPage";
import Portoflio from "./component/route/Portoflio/Portoflio";
import ContactPage from "./component/route/ContactPage/ContactPage";
import Resume from "./component/route/Resume/Resume";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<HomePage />}></Route>
        <Route path="about" element={<AboutPage />}></Route>
        <Route path="services" element={<ServicesPage />}></Route>
        <Route path="portoflio" element={<Portoflio />}></Route>
        <Route path="contact" element={<ContactPage />}></Route>
        <Route path="resume" element={<Resume />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
