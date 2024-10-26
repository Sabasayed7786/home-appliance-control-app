import React from "react";
import ApplianceCard from "./ApplianceCard";
import "../styles/CardLayout.css";

const CardLayout = ({ appliances }) => (
  <div className="card-container">
    {appliances.map((appliance) => (
      <ApplianceCard key={appliance.id} appliance={appliance} />
    ))}
  </div>
);

export default CardLayout;
