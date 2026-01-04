type Shape =
  | {
      type: "rect";
      x: number;
      y: number;
      width: number;
      height: number;
    }
  | {
      type: "circle";
      centerX: number;
      centerY: number;
      radius: number;
    };

export function initDraw(
  canvas: HTMLCanvasElement,
  tool: "rect" | "circle" = "rect"
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const existingShapes: Shape[] = [];

  let isDrawing = false;
  let startX = 0;
  let startY = 0;

  canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    startX = e.clientX;
    startY = e.clientY;
  });

  canvas.addEventListener("mouseup", (e) => {
    isDrawing = false;

    if (tool === "rect") {
      const width = e.clientX - startX;
      const height = e.clientY - startY;
      existingShapes.push({
        type: "rect",
        x: startX,
        y: startY,
        width,
        height,
      });
    } else if (tool === "circle") {
      const radius = Math.sqrt(
        Math.pow(e.clientX - startX, 2) + Math.pow(e.clientY - startY, 2)
      );

      existingShapes.push({
        type: "circle",
        centerX: startX,
        centerY: startY,
        radius,
      });
    }
  });

  canvas.addEventListener("mousemove", (e) => {
    if (isDrawing) {
      clearCanvas(existingShapes, canvas, ctx);

      if (tool === "rect") {
        const width = e.clientX - startX;
        const height = e.clientY - startY;

        ctx.strokeStyle = "rgb(255, 255, 255)";
        ctx.strokeRect(startX, startY, width, height);
      } else if (tool === "circle") {
        const radius = Math.sqrt(
          Math.pow(e.clientX - startX, 2) + Math.pow(e.clientY - startY, 2)
        );

        ctx.strokeStyle = "rgb(255, 255, 255)";
        ctx.beginPath();
        ctx.arc(startX, startY, radius, 0, 2 * Math.PI);
        ctx.stroke();
      }
    }
  });
}

function clearCanvas(
  existingShapes: Shape[],
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D
) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  existingShapes.map((shape) => {
    ctx.strokeStyle = "rgb(255, 255, 255)";

    if (shape.type === "rect") {
      ctx.strokeRect(shape.x, shape.y, shape.width, shape.height);
    } else if (shape.type === "circle") {
      ctx.beginPath();
      ctx.arc(shape.centerX, shape.centerY, shape.radius, 0, 2 * Math.PI);
      ctx.stroke();
    }
  });
}

export function clearDrawing(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
