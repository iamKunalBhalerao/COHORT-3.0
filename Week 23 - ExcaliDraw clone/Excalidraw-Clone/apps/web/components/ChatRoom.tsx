import axios from "axios";
import { BACKEND_URL } from "../app/config";
import ChatRoomClient from "./ChatRoomClient";

export async function getAllChats(roomId: string) {
  const response = await axios.get(`${BACKEND_URL}/user/chats/${roomId}`);
  return response.data.messages;
}

export default async function ChatRoom({ roomId }: { roomId: string }) {
  const messages = await getAllChats(roomId);
  return (
    <>
      <ChatRoomClient id={roomId} messages={messages} />
    </>
  );
}
