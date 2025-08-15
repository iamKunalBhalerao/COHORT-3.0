// Client side rendered code
import { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button
        className="px-4 py-2 rounded-lg border-1 border-slate-500 hover:border-blue-800"
        onClick={() => setCount((c) => c + 1)}
      >
        Click Me {count}
      </button>
    </>
  );
};

export default Button;
