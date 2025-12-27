import axios from "axios";
import { BACKEND_URL } from "../../config";
import ChatRoom from "../../../components/ChatRoom";

async function getRoomId(slug: string) {
  const response = await axios.get(`${BACKEND_URL}/user/room/${slug}`);
  return response.data.roomId;
}

export default async function ChatRoomMain({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const {slug} = await params;
  const roomId = await getRoomId(slug);

  return (
    <>
    <div style={{
      width: "100%",
      height: "100vh",
      backgroundColor: "#070F2B",
      color: "white",
      display: "flex",
      flexDirection: "column",
    }}>
      <ChatRoom roomId={roomId} />
    </div>
    </>
  );
}
