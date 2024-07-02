import { useNavigate } from "react-router-dom";
import styles from "./ReservationNotice.module.css";

function ReservationNotice({ onCancel }) {
  const nav = useNavigate();

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <h2>예약 주의사항</h2>
        <h3>주차장 사용 안내</h3>
        <p>내용 1</p>
        <p>이용 요금</p>
        <button onClick={() => nav("/reservation")}>확인했습니다</button>
        <button onClick={onCancel}>취소</button>
      </div>
    </div>
  );
}

export default ReservationNotice;
