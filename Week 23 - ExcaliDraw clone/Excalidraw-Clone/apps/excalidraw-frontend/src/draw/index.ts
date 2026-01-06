import axios from "axios";
import rough from "roughjs";
import { RoughCanvas } from "roughjs/bin/canvas";

interface InitDrawFnProps {
  canvas: HTMLCanvasElement;
  tool: "rect" | "circle";
  theme: "light" | "dark";
  roomId: string;
  socket: WebSocket;
}

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

let mouseDownHandler: ((e: MouseEvent) => void) | null = null;
let mouseUpHandler: ((e: MouseEvent) => void) | null = null;
let mouseMoveHandler: ((e: MouseEvent) => void) | null = null;
let isSocketSetup = false;

export async function initDraw({
  canvas,
  tool,
  theme,
  roomId,
  socket,
}: InitDrawFnProps) {
  try {
    const rc = rough.canvas(canvas);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const existingShapes: Shape[] = await getExistingShapes(roomId);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Join the room first!
    if (!isSocketSetup) {
      if (socket.readyState === WebSocket.OPEN) {
        socket.send(
          JSON.stringify({
            type: "join_room",
            roomId: roomId,
          })
        );
      } else {
        socket.onopen = () => {
          socket.send(
            JSON.stringify({
              type: "join_room",
              roomId: roomId,
            })
          );
        };
      }
    }

    // Web Socket Logic

    socket.onmessage = null;

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);

      if (message.type === "chat") {
        const parsedShape = JSON.parse(message.message);
        existingShapes.push(parsedShape);
        clearCanvas(existingShapes, canvas, ctx, rc, theme);
      }
      isSocketSetup = true;
    };

    //  Finding coordinates Logic
    clearCanvas(existingShapes, canvas, ctx, rc, theme);
    let isDrawing = false;
    let startX = 0;
    let startY = 0;

    if (mouseDownHandler) {
      canvas.removeEventListener("mousedown", mouseDownHandler);
    }
    if (mouseUpHandler) {
      canvas.removeEventListener("mouseup", mouseUpHandler);
    }
    if (mouseMoveHandler) {
      canvas.removeEventListener("mousemove", mouseMoveHandler);
    }

    mouseDownHandler = (e: MouseEvent) => {
      isDrawing = true;
      startX = e.clientX;
      startY = e.clientY;
    };

    mouseUpHandler = (e: MouseEvent) => {
      isDrawing = false;

      const width = e.clientX - startX;
      const height = e.clientY - startY;

      if (tool === "rect") {
        const shape: Shape = {
          type: "rect",
          x: startX,
          y: startY,
          width,
          height,
        };

        socket.send(
          JSON.stringify({
            type: "chat",
            message: JSON.stringify(shape),
            roomId: roomId,
          })
        );
      } else if (tool === "circle") {
        const radius = Math.sqrt(width * width + height * height);

        const shape: Shape = {
          type: "circle",
          centerX: startX,
          centerY: startY,
          radius,
        };

        socket.send(
          JSON.stringify({
            type: "chat",
            message: JSON.stringify(shape),
            roomId: roomId,
          })
        );
      }
    };

    mouseMoveHandler = (e: MouseEvent) => {
      if (isDrawing) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const width = e.clientX - startX;
        const height = e.clientY - startY;
        clearCanvas(existingShapes, canvas, ctx, rc, theme);

        if (tool === "rect") {
          rc.rectangle(startX, startY, width, height, {
            fill: "blue",
            stroke: `${theme === "light" ? "black" : "white"}`,
            fillStyle: "cross-hatch",
            roughness: 2,
            strokeWidth: 2,
          });
        } else if (tool === "circle") {
          const radius = Math.sqrt(width * width + height * height);

          rc.circle(startX, startY, radius, {
            fill: "red",
            stroke: `${theme === "light" ? "black" : "white"}`,
            fillStyle: "cross-hatch",
            roughness: 2,
            strokeWidth: 2,
          });
        }
      }
    };

    canvas.addEventListener("mousedown", mouseDownHandler);
    canvas.addEventListener("mouseup", mouseUpHandler);
    canvas.addEventListener("mousemove", mouseMoveHandler);
  } catch (error) {
    console.log(error);
  }
}

function clearCanvas(
  existingShapes: Shape[],
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  rc: RoughCanvas,
  theme: "light" | "dark"
) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = theme === "light" ? "rgba(255, 255, 255)" : "rgba(0, 0, 0)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  existingShapes.forEach((shape) => {
    if (shape.type === "rect") {
      rc.rectangle(shape.x, shape.y, shape.width, shape.height, {
        fill: "blue",
        stroke: `${theme === "light" ? "black" : "white"}`,
        fillStyle: "cross-hatch",
        roughness: 2,
        strokeWidth: 2,
      });
    } else if (shape.type === "circle") {
      rc.circle(shape.centerX, shape.centerY, shape.radius, {
        fill: "red",
        stroke: `${theme === "light" ? "black" : "white"}`,
        fillStyle: "cross-hatch",
        roughness: 2,
        strokeWidth: 2,
      });
    }
  });
}

export async function getExistingShapes(roomId: string) {
  const res = await axios.get(
    `http://localhost:3003/api/v1/user/chats/${roomId}`
  );
  const messages = res.data.messages;
  console.log(messages);

  const shapes = messages.map((item: { message: string }) => {
    const messageData = JSON.parse(item.message);
    return messageData;
  });
  return shapes;
}
