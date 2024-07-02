import styles from "./BusinessItem.module.css";

const BusinessItem = ({ data }) => {
  const { imgUrl, title, subTitle, desc } = data;
  // 이미지 파일이 있는 경우 CRA 제공 환경 변수 사용
  const path = process.env.PUBLIC_URL;

  return (
    <li className={styles.businessItem}>
      <a href="#">
        <div className={styles.businessImg}>
          <img src={path + imgUrl} alt={title} />
        </div>
        <h3 className={styles.title}>
          <strong>{title}</strong>
          {subTitle}
        </h3>
        <p className={styles.desc}>{desc}</p>
      </a>
    </li>
  );
};

export default BusinessItem;
