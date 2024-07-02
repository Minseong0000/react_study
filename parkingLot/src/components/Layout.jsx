import { useNavigate } from "react-router-dom";
import styles from "./Layout.module.css";

function Layout({ children }) {
  const nav = useNavigate();

  const handleClickHome = () => {
    nav("/");
  };
  return (
    <div>
      <h1 onClick={handleClickHome} className={styles.title}>
        세진브론즈빌 주차 예약 시스템
      </h1>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
