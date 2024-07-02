// 하위 컴포넌트
const Coffee = ({name, price}) => {
  // 주문한 커피는 xxx이고 가격은 xxx입니다
  return (
    <>
      <h3>주문한 커피는 {name} 이고, 가격은 {price}원 입니다.</h3>
    </>
  )
}
const border = { border: "1px solid #000", width: '80%', padding: 10};

const Com2_props = () => {
  const latte = {name: '카페라떼', price: 4500};
  const vanilla = {name: '바닐라라떼', price: 5000, size: 'tall', done: true};

  return (
    <div style={border}>
        <h2>props2</h2>
        <Coffee name="아메리카노" price="4000" />
        <Coffee name={latte.name} price={latte.price} />
        <Coffee {...vanilla} />
    </div>
  );
};

export default Com2_props;