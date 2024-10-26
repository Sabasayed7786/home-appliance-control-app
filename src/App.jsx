import React, { useState } from "react";
import CardLayout from "./components/CardLayout";
import GridLayout from "./components/GridLayout";
import ListView from "./components/ListView";
import "./App.css";

const App = () => {
  const [layout, setLayout] = useState("card");

  const appliances = [
    { id: 1, type: "Fan", on: false, speed: 1 },
    { id: 2, type: "Air Conditioner", on: false, temperature: 24 },
    { id: 3, type: "TV", on: false },
    { id: 4, type: "Light", on: false, brightness: 50, color: "#ffffff" },
    { id: 5, type: "Bulb", on: false, brightness: 50, color: "#ffffff" },
  ];

  const renderLayout = () => {
    switch (layout) {
      case "grid":
        return <GridLayout appliances={appliances} />;
      case "list":
        return <ListView appliances={appliances} />;
      default:
        return <CardLayout appliances={appliances} />;
    }
  };

  return (
    <div className="app">
      <h1>Home Appliance Control</h1>
      <div className="layout-selector">
        <button onClick={() => setLayout("card")}>Card Layout</button>
        <button onClick={() => setLayout("grid")}>Grid Layout</button>
        <button onClick={() => setLayout("list")}>List View</button>
      </div>
      <div className="layout-container">{renderLayout()}</div>
    </div>
  );
};

export default App;
