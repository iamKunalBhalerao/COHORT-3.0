import TextInput from "@repo/ui/TextInput";

export default function Home() {
  return (
    <>
      <div
        style={{
          height: "100vh",
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
          <input
            style={{
              backgroundColor: "white",
              padding: "10px",
              border: "1px solid gray",
              borderRadius: "5px",
              outline: "none",
            }}
            type="text"
            placeholder="Enter Room Id here"
          />
          <TextInput type={"text"} placeholder={"Enter Room Name"} />
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
          >
            Join Room
          </button>
        </div>
      </div>
    </>
  );
}
