import React from "react";

const ApplianceControls = ({ appliance, onChange }) => {
  // Function to compute the background color based on brightness
  const getBrightnessColor = (brightness) => {
    const brightnessValue = Math.floor((brightness / 100) * 255); 
    return `rgb(${brightnessValue}, ${brightnessValue}, ${brightnessValue})`; 
  };

  return (
    <div className="controls">
      {appliance.type === "Fan" && (
        <div className="control">
          <label>Speed</label>
          <input
            type="range"
            min="1"
            max="5"
            value={appliance.speed}
            onChange={(e) => onChange("speed", e.target.value)}
          />
        </div>
      )}
      {appliance.type === "Air Conditioner" && (
        <div className="control">
          <label>Temperature</label>
          <input
            type="number"
            min="16"
            max="30"
            value={appliance.temperature}
            onChange={(e) => onChange("temperature", e.target.value)}
          />
        </div>
      )}
      {(appliance.type === "Light" || appliance.type === "Bulb") && (
        <div>
          <div className="control" style={{ backgroundColor: getBrightnessColor(appliance.brightness) }}>
            <label>Brightness</label>
            <div className="brightness-controls">
              <button onClick={() => onChange("brightness", Math.min(appliance.brightness + 10, 100))}>
                +
              </button>
              <button onClick={() => onChange("brightness", Math.max(appliance.brightness - 10, 0))}>
                -
              </button>
              <span>{appliance.brightness}%</span>
            </div>
          </div>
          <div className="control">
            <label>Color</label>
            <input
              type="color"
              value={appliance.color}
              onChange={(e) => onChange("color", e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplianceControls;
