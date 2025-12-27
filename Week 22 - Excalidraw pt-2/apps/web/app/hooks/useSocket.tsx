import { useEffect, useState } from "react";
import { WS_URL } from "../config";

export function useSocket() {
  const [loading, setLoading] = useState(true);
  const [socket, setSocket] = useState<WebSocket>();

  const dummyToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQ2YjUxMWFhLWQwZWUtNDY3MC1hNDc5LTg0M2Y3YTgzYTMwMSIsImVtYWlsIjoidXNlcjFAdXNlci5jb20iLCJpYXQiOjE3NjY4NjIzMTEsImV4cCI6MTc2NzQ2NzExMX0.A2ENoUJ6F37v1kOOIO5Iva9dFoC-NR4F2YJDfxcN8t8"

  useEffect(() => {
    const ws = new WebSocket(`${WS_URL}?token=${dummyToken}`);
    ws.onopen = () => {
      setLoading(false);
      setSocket(ws);
    };
  }, []);

  return { socket, loading };
}
