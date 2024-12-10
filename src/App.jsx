import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";
import Header from "./components/Header/Header";
import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
