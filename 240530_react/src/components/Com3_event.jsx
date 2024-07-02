

const Com3_event = () => {
  const handleClick = () => {
    console.log('handleClick');
  }

  const num = (elem) => console.log(elem + elem);

  return (
    <div>
      <h2>event</h2>
      <p>'on-'접두어 + 첫글자 대문자로 이벤트명 작성</p>
      {/* js: onclick, onsubmit, etc.. */}
      {/* JSX: onClick, onSubmit, etc.. */}
      {/* <button onClick = {함수명}>클릭</button> */}
      {/* <button onClick = {()=>{}}>클릭</button> */}
      <hr />
      <button onClick={() => console.log('직접 작성')}>클릭</button>
      <button onClick={handleClick}>클릭</button>
      <hr />
      {/* 버튼이 렌더링이 되면 함수 호출되기 때문에 즉시 실행 */}
      <button onClick={num(50)}>숫자 출력1</button>
      <button onClick={() => num(100)}>숫자 출력2</button>
    </div>
  );
};

export default Com3_event;