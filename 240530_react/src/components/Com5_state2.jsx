import { useState } from "react";


const Com5_state2 = () => {
/*   
  일반 변수 선언시 화면에 상태 업데이트가 되지않음. 콘솔에서만 업데이트
  
  let count = 0;
  const increase = () => {
    count += 1;
    console.log(count)
  }
  const decrease = () => {
    count -= 1;
    console.log(count)
  } 
*/

  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1); //set 함수는 인수의 값을 받아 연산후 다시 count 변수로 돌려보냄(업데이트)

  const decrease = () => {
    setCount(count - 1);
  }  

  return (
    <div>
      <h2>counter</h2>
      <h3>number: {count}</h3>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>
    </div>
  );
};

export default Com5_state2;