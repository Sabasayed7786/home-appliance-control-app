import React, { useState } from "react";
import ApplianceControls from "./ApplianceControls";
import "../styles/ApplianceCard.css";

const ApplianceCard = ({ appliance }) => {
  const [state, setState] = useState(appliance);
  const [expanded, setExpanded] = useState(false);

  const togglePower = () => {
    setState({ ...state, on: !state.on });
  };

  const handleControlChange = (controlType, value) => {
    setState({ ...state, [controlType]: value });
  };

  return (
    <div className={`appliance-card ${state.on ? "card-on" : "card-off"}`}>
      <h2>{state.type}</h2>
      <button onClick={togglePower}>{state.on ? "Turn Off" : "Turn On"}</button>
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? "Hide Controls" : "Show Controls"}
      </button>
      {expanded && <ApplianceControls appliance={state} onChange={handleControlChange} />}
    </div>
  );
};

export default ApplianceCard;
