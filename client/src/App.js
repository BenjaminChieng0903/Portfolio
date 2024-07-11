import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./component/route/HomePage/homePage";
import NavigationBar from "./component/route/NavigationBar/NavigationBar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<HomePage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
