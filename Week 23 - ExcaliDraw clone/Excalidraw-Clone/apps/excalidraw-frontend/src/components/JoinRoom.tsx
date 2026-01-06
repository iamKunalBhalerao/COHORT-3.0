"use client";
import axios, { AxiosError } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";

const JoinRoom = () => {
  const [roomName, setRoomName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const JoinRoom = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    try {
      if (!roomName || roomName === "") {
        setError("Room Name is Required!");
        return;
      }

      const { data } = await axios.get(
        `http://localhost:3003/api/v1/user/room/${roomName}`,
        {
          withCredentials: true,
        }
      );

      if (data.success) {
        router.push(`/canvas/${data.roomId}`);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<{ message: string }>;

        if (axiosError.response?.status === 400) {
          setError(axiosError.response.data.message || "Room Not Found!");
        } else if (axiosError.response?.status === 401) {
          setError("Please login first!");
        } else {
          setError("Something went wrong. Please try again.");
        }
      } else {
        console.log(error);
        setError("Network error. Please try again.");
      }
    }
  };

  return (
    <>
      <div className="p-4 absolute rounded-xl bg-white flex flex-col gap-2 border border-gray-100 shadow-lg">
        <h1 className="text-center text-3xl text-black font-bold">Join Room</h1>
        <form onSubmit={JoinRoom} className="flex flex-col gap-2 mt-2">
          <input
            type="text"
            name="roomName"
            placeholder="Room Name"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setRoomName(e.target.value)
            }
            className="p-2 w-full bg-gray-50 text-black outline-none rounded-lg border border-gray-100 text-xl"
          />
          <button
            type="submit"
            disabled={roomName === "" || !roomName}
            className="w-full p-2 text-xl cursor-pointer text-white bg-blue-500 hover:bg-blue-600 hover:scale-105 rounded-lg duration-200 ease-in-out disabled:cursor-not-allowed disabled:bg-gray-400 disabled:scale-100"
          >
            Join Room
          </button>
        </form>
        {error && (
          <div className="p-2 bg-red-100 text-red-600 rounded-lg text-center">
            {error}
          </div>
        )}

        <p className="text-lg text-gray-700 text-center">
          Want to{" "}
          <Link href={`/create-room`} className="text-blue-600">
            Create Room?
          </Link>
        </p>
      </div>
    </>
  );
};

export default JoinRoom;
