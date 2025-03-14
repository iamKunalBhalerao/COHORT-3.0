const ProfileCard = () => {
  const divStyle = {
    width: 200,
    borderRadius: 10,
    backgroundColor: "white",
    boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
    padding: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
  };
  return (
    <div style={divStyle}>
      <img src="" alt="" />
      <h4>KUNAL BHALERAO</h4>
      <p>Lorem ipsum dolor sit amet.</p>
      <p className="location">Ahilyanagar, Maharashtra</p>
    </div>
  );
};

export default ProfileCard;
