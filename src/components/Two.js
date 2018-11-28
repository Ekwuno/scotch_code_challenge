import React, { useState } from "react";

function Two() {
  const [activeUser, changeUser] = useState("john");

  const change = () => {
    changeUser("Bolingo!");
  };

  return (
    <div style={{ marginBottom: "50px" }}>
      <h2>Challenge 2</h2>
      <p>Active User is: {activeUser}</p>
      <button onClick={change}>Change Me!</button>
    </div>
  );
}

export default Two;
