import { useState, useRef } from "react";

/* 
  useRef hook
    -DOM에 직접 접근할 때 사용(focus, scroll, querySelector etc...)
    -새로 고침시 초기화 되지 않기 때문에 컴포넌트의 상태와 다른 상태를 가질 수 있음

    설정
    const inputRef = useRef(null);
    사용 .current 속성 반드시 필요
    inputRef.current.focus();

  data = [
    { id:1, list: '점심 먹기'}
  ]
*/

const Com2_state = () => {
  const [data, setData] = useState([]);
  const [txt, setTxt] = useState("");
  const inputRef = useRef();

  const addItems = () => {
    if (txt === "") {
      alert("내용을 입력해 주세요");
      return;
    }
    setData((prevItem) => [...prevItem, { id: prevItem.length, list: txt }]);

    setTxt(""); //빈 텍스트 필드
    inputRef.current.focus(); //입력 필드에 포커스 설정
  };
  const handleChange = (e) => {
    // 내가 클릭한 그 요소의 value 값
    setTxt(e.target.value);
  };

  return (
    <div>
      <h2>간단 todo 리스트</h2>
      <p>입력 폼에 입력한 내용을 리스트에 출력</p>
      <input type="text" onChange={handleChange} value={txt} ref={inputRef} />
      <button onClick={addItems}>추가</button>
      <hr />
      <ul>
        {data.map(({ id, list }) => (
          <li key={id}>{list}</li>
        ))}
      </ul>
    </div>
  );
};

export default Com2_state;
