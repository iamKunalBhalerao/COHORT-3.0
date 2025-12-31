"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [slug, setSlug] = useState("");
  const router = useRouter();

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#090040",
        }}
      >
        <div
          style={{
            padding: "20px",
            backgroundColor: "#471396",
            borderRadius: "20px",
            border: "1px solid #B13BFF",
            display: "flex",
            gap: "4px"
          }}
        >
          <input
            style={{
              width: "auto",
              padding: "15px 15px",
              borderRadius: "10px",
              backgroundColor: "#090040",
              outline: "none",
              border: "none",
              color: "white"
            }}
            type="text"
            value={slug}
            placeholder="Enter Room Slug"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSlug(e.target.value);
            }}
          />
          <button
          style={{
            padding: "10px",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            borderRadius: "10px",
            backgroundColor: "#FFCC00",
            color: "black",
            border: "none"
          }}
            onClick={() => {
              router.push(`/room/${slug}`);
            }}
          >
            Join Room
          </button>
        </div>
      </div>
    </>
  );
}
