// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import UsedCarListing from "./UsedCarListing"; // Movendo o conteúdo principal para um componente separado
import MechanicAI from "./MechanicAI"; // Importar o componente MechanicAI
import VeichleDetails from "./VeichleDetails"; // Importar o componente VeichleDetails
import Header from "./Header";
import Footer from "./Footer";
import AboutPage from './AboutPage'; // Página sobre nós
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<UsedCarListing />} />
        <Route path="/mechanic-opinion/:carId" element={<MechanicAI />} />
        <Route path="/vehicle-details/:carId" element={<VeichleDetails />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
