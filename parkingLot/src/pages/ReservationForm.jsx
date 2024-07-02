import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ReservationForm = () => {
  const nav = useNavigate();
  // 사용자가 선택한 시간
  const [reservationTime, setReservationTime] = useState("");
  const [pay, setPay] = useState("");

  // Date 객체의 toISOString() 메서드는 날짜와 시간을 ISO 표준 문자열로 변환.
  // .split("T")[0] T를 기준으로 분리하기 위해
  // .toLocaleString(); 사용자에게 단순히 보여주기만 할 때 유용
  // .toISOString(); 데이터 처리나 백엔드와의 통신에서 유용. 일관된 형식을 가짐
  // 2024-06-05T00:44:23.722Z
  const todayDate = new Date().toISOString().split("T")[0];

  // 예정시간 폼의 상태가 변경되면 실행하는 함수
  const handleTimeChange = (e) => {
    const target = e.target.value; //사용자가 선택한 시간
    const selectedTime = new Date(`${todayDate}T${target}`); // 날짜와 시간
    const currentTime = new Date();

    // 현재 시간과 선택된 시간을 비교
    if (selectedTime <= currentTime) {
      alert("현재 시간 이후로만 예약 가능합니다");
      setReservationTime(""); // 초기화
      return; //선택할 수 없게 종료
    }
    setReservationTime(target);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!pay) {
      alert("결제 수단을 선택해 주세요");
      return;
    }

    /*   
    if (!reservationTime) {
      alert("시간을 선택해 주세요");
      return;
    } 
    */
    const formData = {
      date: todayDate, //오늘날짜
      time: reservationTime, //선택 시간
      payment: pay, // 선택 결제
    };

    console.log(formData);

    alert("예약이 완료되었습니다");
    // encodeURIComponent(); URI(인터넷상의 모든 자원 혹은 데이터)의 일부로 사용될 특수문자 포함된 데이터의 문자열을 인코딩하여 전달
    // Confirmation 페이지에서 time의 값을 가져가 사용할 수 있음
    nav(`/confirm?time=${encodeURIComponent(reservationTime)}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>예약 페이지</h2>
      <div>
        <label htmlFor="today">오늘 날짜</label>
        <input type="text" value={todayDate} id="today" readOnly />
      </div>

      <div>
        <label htmlFor="parkingTime">입차 예정 시간</label>
        <input
          type="time"
          id="parkingTime"
          value={reservationTime}
          onChange={handleTimeChange}
          required
        />
      </div>

      <div>
        <label>결제 수단</label>
        <div>
          <label htmlFor="">
            <input
              type="radio"
              name="pay"
              value="toss"
              onChange={(e) => setPay(e.target.value)}
              checked={pay === "toss"}
            />
            토스페이
          </label>
          <label htmlFor="">
            <input
              type="radio"
              name="pay"
              value="naver"
              onChange={(e) => setPay(e.target.value)}
              checked={pay === "naver"}
            />
            네이버페이
          </label>
          <label htmlFor="">
            <input
              type="radio"
              name="pay"
              value="samsung"
              onChange={(e) => setPay(e.target.value)}
              checked={pay === "samsung"}
            />
            삼성페이
          </label>
        </div>
      </div>

      <button type="submit">결제</button>
    </form>
  );
};

export default ReservationForm;
