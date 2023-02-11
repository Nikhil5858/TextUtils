import React, { useState } from "react";

export default function About(props) {
  const [mystyle, setmystyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btntext, setbtntext] = useState("Enable Dark Mode");
  return (
    <div>
      <div className="container" style={mystyle}>
      </div>
    </div>
  );
}
