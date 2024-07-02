import styles from "./ParkingSpot.module.css";

function ParkingSpot({ number, status, onSelect, isSelected }) {
  return (
    // 선택 상황에 따라 스타일 적용. (true/ false) ? styles.selected : ""
    <div
      className={`${styles.parkingSpot} ${styles[status]} ${
        isSelected ? styles.selected : ""
      }`}
      onClick={() => onSelect(number)}
    >
      <h2>{number}</h2>
    </div>
  );
}

export default ParkingSpot;
