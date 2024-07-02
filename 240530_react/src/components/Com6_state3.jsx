// 외부 data.js 문서
import { useState } from "react"
import dataList from "../assets/DB/data_list"

const Com6_state3 = () => {
  // const [data, setData] = useState(dataList);
  const [data] = useState(dataList)
  return (
    <div>
      <h2>State - 외부 문서</h2>
      <table border={1}>
        <caption>메뉴</caption>
        <thead>
          <tr>
            <th>커피</th>
            <th>차</th>
            <th>음료</th>
            <th>기타</th>
          </tr>
        </thead>
        <tbody>
          {/*  {
            data.map((elem) => (
            <tr key={elem.id}>
              <td>{elem.coffee}</td>
              <td>{elem.tea}</td>
              <td>{elem.drinks}</td>
              <td>{elem.others}</td>
            </tr>
          ))} */}

          {data.map(({ id, coffee, tea, drinks, others }) => (
            <tr key={id}>
              <td>{coffee}</td>
              <td>{tea}</td>
              <td>{drinks}</td>
              <td>{others}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Com6_state3
