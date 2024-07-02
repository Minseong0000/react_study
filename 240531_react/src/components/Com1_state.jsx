import { useState } from "react";

const btnStyle = {
  border: "1px solid #000",
  backgroundColor: "#fff",
  padding: 10,
  fontWeight: "bold",
  fontSize: 30,
};

const bgColors = [
  { id: 1, bg: "tomato" },
  { id: 2, bg: "orange" },
  { id: 3, bg: "salmon" },
  { id: 4, bg: "lightblue" },
];

const Com1_state = () => {
  const [bgs, setBgs] = useState(bgColors);
  const [btnTxt, setBtnTxt] = useState("OFF");
  const [isBg, setIsBg] = useState(false);

  const toggleBtn = () => {
    // 버튼의 내용을 변경
    setBtnTxt((txt) => (txt === "OFF" ? "ON" : "OFF"));
    // 배경색 on/off
    setIsBg(!isBg);
  };

  const addBg = () => {
    const newBg = { id: bgs.length + 1, bg: "maroon" };
    setBgs([...bgs, newBg]);
  };

  return (
    <div>
      <h2>연산자</h2>
      <button style={btnStyle} onClick={toggleBtn}>
        {btnTxt}
      </button>
      <hr />

      <button onClick={addBg}>maroon 색상 추가</button>

      <ul style={{ fontWeight: "bold", fontSize: 20, lineHeight: 1.6 }}>
        {/*     {bgColors.map(({ id, bg }) => (
          <li key={id} style={{ backgroundColor: bg }}>
            {bg}
          </li>
        ))} */}
        {bgs.map((bg) => (
          <li
            key={bg.id}
            style={{ backgroundColor: isBg ? bg.bg : "transparent" }}
          >
            {bg.bg}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Com1_state;
