"use client";
import TextInput from "@repo/ui/TextInput";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          width: "100%",
          backgroundColor: "white",
          position: "relative",
        }}
        // className="min-h-screen w-full bg-white relative"
      >
        {/* Purple Gradient Grid Left Background */}
        <div
          // className="absolute inset-0 z-0"
          style={{
            position: "absolute",
            inset: "0",
            zIndex: "0",
            backgroundImage: `
        linear-gradient(to right, #f0f0f0 1px, transparent 1px),
        linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
        radial-gradient(circle 800px at 0% 200px, #d5c5ff, transparent)
      `,
            backgroundSize: "96px 64px, 96px 64px, 100% 100%",
          }}
        />
        {/* Your Content/Components */}

        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              padding: "15px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              backgroundColor: "white",
              border: "1px solid gray",
              borderRadius: "10px",
            }}
          >
            <div style={{
              fontSize: "40px",
              fontWeight: "600",
              paddingBottom: "10px"
            }} className="heading">Enter Room Id</div>
            <TextInput
              type={"text"}
              onChange={() => {
                alert("Hello");
              }}
              placeholder={"Enter Room Name"}
            />
            <button
              style={{
                width: "100%",
                backgroundColor: "blue",
                color: "white",
                borderRadius: "5px",
                padding: "10px",
                fontSize: "20px",
                border: "0px",
                cursor: "pointer",
              }}
              onClick={() => router.push("/chat/123")}
            >
              Join Room
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
