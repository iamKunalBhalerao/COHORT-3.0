import RoomCanvas from "@/components/RoomCanvas";
import { cookies } from "next/headers";

export default async function page({
  params,
}: {
  params: {
    roomId: string;
  };
}) {
  // Extract roomId from route
  const { roomId } = await params;
  
  // Find the token fro cookie
  const cookieStore = cookies();
  const token = (await cookieStore).get("token") as {
    name: string;
    value: string;
  };

  return (
    <>
      <div>
        <RoomCanvas roomId={roomId} userToken={token?.value} />
      </div>
    </>
  );
}
