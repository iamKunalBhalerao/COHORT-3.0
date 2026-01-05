"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

const CreateRoom = () => {
  const [roomName, setRoomName] = useState<string>("");
  const router = useRouter();

  const createRoom = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:3003/api/v1/user/create-room",
        {
          roomName: roomName,
        },
        {
          withCredentials: true,
        }
      );

      if (!data.succss) {
        console.log("Error occured white Creating Room");
      }

      router.push(`/canvas/${data.room.id}`);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data?.message || "An error occurred");
      } else {
        console.log("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="w-full h-screen absolute text-black flex items-center justify-center p-4">
      <div className="p-5 flex flex-col gap-2 bg-white rounded-xl border border-gray-300">
        <h1 className="text-2xl text-center font-bold mb-2">Create Room</h1>
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setRoomName(e.target.value)
          }
          type="text"
          className="px-3 py-2 rounded-lg border border-gray-300 text-black outline-none bg-gray-100"
          placeholder={"Enter Room Name"}
        />
        <button
          onClick={createRoom}
          className="w-full p-2 bg-blue-600 cursor-pointer rounded-lg text-xl text-white hover:bg-blue-700"
        >
          Create Room
        </button>
        <p className="text-lg text-gray-700 text-center">
          Want to{" "}
          <Link className="text-blue-600" href="/join-room">
            Join Room ?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CreateRoom;
