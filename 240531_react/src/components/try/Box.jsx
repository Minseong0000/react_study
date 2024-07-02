const Box = ({ width, height, bgcolor, border }) => {
  const borderStyle = border || ["1px", "solid", "#000"];

  const boxStyle = {
    width: width || 150,
    height: height || 150,
    backgroundColor: bgcolor || "#eee",
    margin: "20px auto",
    textAlign: "center",
    fontWeight: "bold",
    borderWidth: borderStyle[0],
    borderStyle: borderStyle[1],
    borderColor: borderStyle[2],
  };
  return <div style={boxStyle}>box</div>;
};
// Box.deffaultProps = {}
export default Box;
