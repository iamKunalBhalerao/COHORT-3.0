"use client";
import { initDraw } from "@/draw";
import React, { useEffect, useRef, useState } from "react";

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedTool, setSelectedTool] = useState<"rect" | "circle">("rect");

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      initDraw(canvas, selectedTool);
    }
  }, [selectedTool]);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;

      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);

      return () => window.removeEventListener("resize", resizeCanvas);
    }
  }, []);

  return (
    <>
      <div>
        <canvas
          style={{
            display: "block",
          }}
          ref={canvasRef}
        ></canvas>
        <div className="absolute bottom-0 right-0 flex gap-2">
          <button
            onClick={() => setSelectedTool("rect")}
            className={`p-2 rounded-xl cursor-pointer ${selectedTool === "rect" ? "bg-blue-500 text-white" : "bg-white text-black"} text-xl`}
          >
            Rect
          </button>
          <button
            onClick={() => setSelectedTool("circle")}
            className={`p-2 rounded-xl cursor-pointer ${selectedTool === "circle" ? "bg-blue-500 text-white" : "bg-white text-black"} text-xl`}
          >
            Clircle
          </button>
        </div>
      </div>
    </>
  );
};

export default Canvas;
