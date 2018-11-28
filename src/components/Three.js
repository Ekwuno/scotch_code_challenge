import React, { useState } from "react";

function Three() {
  const [car, swapCar] = useState({
    year: 1995,
    type: "Mercedes",
    used: true
  });
  const SwapCar = () => {
    swapCar({
      year: 2018,
      type: "BMW",
      used: false
    });
  };

  return (
    <div style={{ marginBottom: "50px" }}>
      <h2>Challenge 3</h2>
      <h3>Car Spec is:</h3>
      <ul>
        <li>{car.type}</li>
        <li>{car.year}</li>
        <li>{car.used ? "Used Car" : "Brand New!"}</li>
      </ul>
      <button onClick={SwapCar}>Swap Car!</button>
    </div>
  );
}

export default Three;
