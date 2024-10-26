import React from "react";
import ApplianceCard from "./ApplianceCard";
import "../styles/ListView.css";

const ListView = ({ appliances }) => (
  <div className="list-container">
    {appliances.map((appliance) => (
      <ApplianceCard key={appliance.id} appliance={appliance} />
    ))}
  </div>
);

export default ListView;
