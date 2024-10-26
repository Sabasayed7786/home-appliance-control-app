import React from "react";
import ApplianceCard from "./ApplianceCard";
import "../styles/GridLayout.css";

const GridLayout = ({ appliances }) => (
  <div className="grid-container">
    {appliances.map((appliance) => (
      <ApplianceCard key={appliance.id} appliance={appliance} />
    ))}
  </div>
);

export default GridLayout;
