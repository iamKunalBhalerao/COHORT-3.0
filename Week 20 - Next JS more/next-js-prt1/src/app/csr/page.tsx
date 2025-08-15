"use client";
import { useState } from "react";

export default function Csr() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="py-2 pl-22">
        <button
          className="px-4 py-2 rounded-lg border-1 border-slate-500 cursor-pointer"
          onClick={() => setCount((c) => c + 1)}
        >
          Click Me {count}
        </button>
      </div>
    </>
  );
}
