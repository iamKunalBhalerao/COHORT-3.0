import React, { useState } from "react";
import ToggleBulbState from "./ToggleBulbState";
import BulbState from "./BulbState";

const Light = () => {
  const [bulbState, setBulbState] = useState(true);
  return (
    <div style={{ padding: "1rem" }}>
      <BulbState bulbState={bulbState} />
      <ToggleBulbState setBulbState={setBulbState} />
    </div>
  );
};

export default Light;
