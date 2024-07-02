/* 
state
  상태. 상태 변화를 위해 사용하는 hook
  랜더링이 될때마다 화면에 새롭게 그려내는 방식이므로 상태 유지를 하지 못함
  새롭게 재랜더링되어 함수, 변수 등 다시 초기화 됨
  그래서 값을 유지하기 위해 hook을 사용
  상태 값이 변경되는 경우 useState()

  const [state, setState] = useState(초기값);
  const [상태데이터(변수), 상태값을 변경하기 위한 함수] = useState(초기값);
  초기값: 숫자, 문자, 논리, 배열, 객체 등등
*/

import { useState } from "react";

const Com4_state1 = () => {
  // set 함수: 변수의 값을 받아서 상태를 업데이트하는 함수
  const [name, setName] = useState('메뉴 이름');
  const [price, setPrice] = useState(4000);
  const [color, setColor] = useState('#ddd');

  const onCoffee1 = () => setName('아메리카노');
  const onCoffee2 = () => setName('카페라떼');
  const onCoffee3 = () => setName('바닐라라떼');

  const onColor1 = () => setColor('orange');
  const onColor2 = () => setColor('lightblue');
  const onColor3 = () => setColor('salmon');


  return (
    <div>
      <h2>state 1</h2>
      <p>주문 커피는 이곳에서 확인하세요</p>
      <h3 style={{ backgroundColor : color }}>커피: {name} / 가격: {price} / 배경색: {color}</h3>
      <hr />
      <p>주문할 커피를 선택해 주세요</p>
      <button onClick={onCoffee1}>아메리카노</button>
      <button onClick={onCoffee2}>카페라떼</button>
      <button onClick={onCoffee3}>바닐라라떼</button>
      <hr />
      <button onClick={()=>setPrice(4500)}>4500원</button>
      <button onClick={()=>setPrice(5000)}>5000원</button>
      <button onClick={()=>setPrice(5500)}>5500원</button>
      <hr />
      {/* 버튼을 클릭하면 h3의 배경색이 변경 */}
      <button onClick={onColor1}>orange</button>
      <button onClick={onColor2}>lightblue</button>
      <button onClick={onColor3}>salmon</button>
    </div>
  );
};

export default Com4_state1;