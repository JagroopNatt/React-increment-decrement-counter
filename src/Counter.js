import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <p>{count}</p>
      <span className="buttons">
        <button onClick={() => setCount(count + 1)}>
          <i class="fa-solid fa-plus"></i>
        </button>
        <button onClick={() => (count > 0 ? setCount(count - 1) : setCount(0))}>
          <i class="fa-solid fa-minus"></i>
        </button>
      </span>
    </div>
  );
}
