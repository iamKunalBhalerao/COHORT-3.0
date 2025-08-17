export default function ChatRoom() {
  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          width: "100%",
          backgroundColor: "white",
          position: "relative",
        }}
      >
        {/* Morning Haze */}
        <div
          style={{
            position: "absolute",
            inset: "0",
            zIndex: "0",
            backgroundImage: `
          radial-gradient(circle at 50% 100%, rgba(253, 224, 71, 0.4) 0%, transparent 60%),
          radial-gradient(circle at 50% 100%, rgba(251, 191, 36, 0.4) 0%, transparent 70%),
          radial-gradient(circle at 50% 100%, rgba(244, 114, 182, 0.5) 0%, transparent 80%)
        `,
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
              height: "80%",
              width: "100%",
              maxWidth: "1080px",
              backgroundColor: "rgba(255, 255, 255, 0.717)",
              border: "1px solid rgb(198, 198, 198)",
              borderRadius: "15px",
              display: "flex",
              flexDirection: "column",
              alignItems: "cenyer",
              justifyContent: "center",
              gap: "5px",
              padding: "10px",
              boxShadow:
                "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
            }}
          >
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgb(198, 198, 198)",
                borderRadius: "10px",
                padding: "10px",
              }}
              className="chatBox"
            >
              <div
                style={{
                  width: "100%",
                  padding: "10px",
                  borderBottom: "1px solid rgb(198, 198, 198)",
                  backgroundColor: "white"
                }}
                className="topbar"
              >
                Room Id
              </div>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  opacity: "90%",
                }}
                className="chatSpace"
              ></div>
            </div>
            <div
              style={{
                padding: "10px",
                border: "1px solid rgb(198, 198, 198)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "2px",
                backgroundColor: "white",
              }}
              className="sendmessage"
            >
              <input
                style={{
                  //   padding: "5px",
                  outline: "none",
                  border: "none",
                  backgroundColor: "white",
                  fontSize: "20px",
                  color: "black",
                  width: "100%",
                }}
                type="text"
                placeholder="Send message here..."
              />
              <button
                style={{
                  padding: "10px",
                  backgroundColor: "crimson",
                  color: "white",
                  fontWeight: "700",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}