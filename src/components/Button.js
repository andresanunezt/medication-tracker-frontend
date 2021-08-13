import { useState } from "react";

function IncrementButton() {
  const array = useState(0);
  const number = array[0];
  const setNumber = array[1];
  return (
    <button
      onClick={() => {
        setNumber(number + 1);
      }}
      z
    >
      {number}
    </button>
  );
}

export default IncrementButton;
