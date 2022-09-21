import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState('');

  function handleToggle(){
    setIsOn(!isOn);
  }

  const color = isOn ? "red" : "white";

  return <button style={{ background: color }} onClick={handleToggle}>{isOn ? 'ON' : 'OFF'}</button>;
}

export default Toggle;
