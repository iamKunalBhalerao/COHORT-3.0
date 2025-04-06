import React from "react";

const ToggleBulbState = ({ setBulbState }) => {
  function changeBulbState() {
    setBulbState((prevState) => !prevState);
  }
  return (
    <>
      <button
        style={{
          padding: "10px",
          border: "none",
          backgroundColor: "blue",
          borderRadius: "10px",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={changeBulbState}
      >
        Toggle
      </button>
    </>
  );
};

export default ToggleBulbState;
