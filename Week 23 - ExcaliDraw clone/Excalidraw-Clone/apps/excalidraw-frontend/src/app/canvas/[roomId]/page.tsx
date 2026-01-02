"use client";
import { initDraw } from "@/draw";
import React, { useEffect, useRef } from "react";

const page = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      initDraw(canvas);
    }
  }, [canvasRef]);

  return <canvas width={800} height={800} ref={canvasRef}></canvas>;
};

export default page;
