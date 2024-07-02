/* 
  (props)
  컴포넌트에 전달할 정보를 담고 있는 자바스크립트 객체이자
  리액트 컴포넌트 속성
  부모 -> 자식 컴포넌트 전달
  객체형으로 속성을 키로 인식

  <자식 컴포넌트 props= 전달값/>
  전달값: {숫자}, '문자', {논리연산}, {state}, {function} ...
*/

// 하위 컴포넌트 생성
// props = { name: '커피' } 객체 형태로 받아오기 때문에 객체 방식으로 읽음
const Coffee = (props) => {
  return (
    <>
      <h3>{props.name}컴포넌트</h3>
    </>
  )
}
const Tea = (props) => {
  // 구조분해할당, 비구조할당
  const {name} = props;

  return (
    <>
      <h3>{name}컴포넌트</h3>
    </>
  )
}
const Drink = ({name}) => {
  return (
    <>
      <h3>{name}컴포넌트</h3>
    </>
  )
}

const Com1_props = () => {
  return (
    <div>
      <h2>props</h2>
      <ul>
        <li>부모 컴포넌트에서 자식 컴포넌트로 전달되는 데이터</li>
        <li>자식에서 부모로 데이터(props)만 전달될 수는 없음</li>
        <li>읽기 전용</li>
      </ul>

      <hr />

      {/* 자식컴포넌트: Coffee, Tea, Drink */}
      <Coffee name="커피"/>
      <Tea name="차"/>
      <Drink name="음료"/>
    </div>
  );
};

export default Com1_props;