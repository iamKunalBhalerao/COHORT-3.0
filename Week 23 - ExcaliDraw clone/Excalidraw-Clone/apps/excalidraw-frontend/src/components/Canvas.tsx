"use client";
import { initDraw } from "@/draw";
import { useEffect, useRef, useState } from "react";
import { FaRegCircle, FaRegSquare } from "react-icons/fa";
import { LuEraser } from "react-icons/lu";
import { TbPencil } from "react-icons/tb";

export default function Canvas({
  roomId,
  socket,
}: {
  roomId: string;
  socket: WebSocket;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [tool, setTool] = useState<"rect" | "circle">("rect");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // To set Canvas Full Screen
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

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;

      initDraw({ canvas, tool, theme, roomId, socket });
    }
  });

  const clearCanvas = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-2xl absolute rounded-lg shadow px-3 py-2 top-4 left-4 bg-white text-blue-600 font-extrabold">
          RoughJS
        </h1>
        <button
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
          className="absolute right-4 top-4 rounded-lg bg-white shadow p-2 cursor-pointer text-black"
        >
          {theme}
        </button>
        <div className="absolute top-6 self-cennter flex gap-2 bg-white p-2 rounded-lg border border-gray-300">
          <button
            onClick={() => setTool("rect")}
            className={`p-2 cursor-pointer rounded-lg ${tool === "rect" ? "bg-blue-500 text-white" : "bg-white text-black"} text-xl shadow`}
          >
            <FaRegSquare />
          </button>
          <button
            onClick={() => setTool("circle")}
            className={`p-2 cursor-pointer rounded-lg ${tool === "circle" ? "bg-blue-500 text-white" : "bg-white text-black"} text-xl shadow`}
          >
            <FaRegCircle />
          </button>
          {/* <button
            onClick={() => setTool("pencil")}
            className={`p-2 cursor-pointer rounded-lg ${tool === "pencil" ? "bg-blue-500 text-white" : "bg-white text-black"} text-xl shadow`}
          >
            <TbPencil />
          </button> */}
          <button
            onClick={clearCanvas}
            className={`p-2 cursor-pointer rounded-lg text-xl shadow hover:bg-blue-500 text-black duration-200 ease-in-out`}
          >
            <LuEraser />
          </button>
        </div>
        <canvas
          ref={canvasRef}
          style={{ display: "block" }}
          className={`${theme === "light" ? "bg-white" : "bg-gray-950"}`}
        ></canvas>
      </div>
    </>
  );
}
