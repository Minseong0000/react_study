import Box from "./Box";

const Try1 = () => {
  return (
    <div>
      <h2>연습 1</h2>
      {/* 스타일 값을 props로 자식 컴포넌트에 넘겨줌 */}
      <Box width={100} height={100} bgcolor={"orange"} />
      <Box border={[6, "solid", "maroon"]} />
    </div>
  );
};

export default Try1;
