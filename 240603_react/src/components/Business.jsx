import styles from "./Business.module.css";
import businessData from "../assets/DB/businessData.json";
import BusinessList from "./BusinessList";
import { useState } from "react";
import { useEffect } from "react";

const Business = () => {
  const [data, setData] = useState(businessData);

  // useEffect(()=>{}) 외부 API를 통해 데이터를 불러올 때

  return (
    <article className={styles.business}>
      <h2>business</h2>
      <p>고객이 신뢰하는 글로벌 에너지 자원 선도 기업</p>
      {/* 
        data={data} 자식 컴포넌트에 businessData 전달
        data={data}와 같이 동일하게 이름을 부여하는 것은 props라는 것을 헷갈리지 않게 하기 위해 관용적으로 사용
      */}
      <BusinessList data={businessData} />
      <a href="#" className={styles.primaryBtn}>
        view more
      </a>
    </article>
  );
};

export default Business;
