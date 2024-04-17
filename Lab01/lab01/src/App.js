// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [semester1, setSemester1] = useState("");
  const [semester2, setSemester2] = useState("");
  const [average, setAverage] = useState("");
  const [result, setResult] = useState("");
  const [classification, setClassification] = useState("");

  const calculateResult = () => {
    // Kiểm tra nếu nhập điểm rỗng thì thông báo nhập điểm
    if (semester1 === "" || semester2 === "") {
      alert("Vui lòng nhập điểm!!!");
      return;
    }
    // Lấy giá trị điểm từ HK1 và HK2 và chuyển sang kiểu số

    const semester1Value = parseFloat(semester1);
    const semester2Value = parseFloat(semester2);

    // Tính điểm trung bình
    const averageValue = ((semester1Value + semester2Value * 2) / 3).toFixed(2);
    setAverage(averageValue);

    // Xét kết quả
    let resultValue = "";
    if (averageValue >= 5) {
      resultValue = "Được lên lớp";
    } else {
      resultValue = "Ở lại lớp";
    }
    setResult(resultValue);

    // Xếp loại học lực
    let classificationValue = "";
    if (averageValue >= 8) {
      classificationValue = "Giỏi";
    } else if (averageValue >= 6.5) {
      classificationValue = "Khá";
    } else if (averageValue >= 5) {
      classificationValue = "Trung bình";
    } else {
      classificationValue = "Yếu";
    }
    setClassification(classificationValue);
  };
  return (
    <div className="App">
      <h1 className="App-header-title">Kết Quả Học Tập</h1>
      <form className="App-form" action="Hoc tap" method="post">
        <label className="App-text">
          Điểm HK1:
          <input
            type="number"
            value={semester1}
            onChange={(e) => setSemester1(e.target.value)}
          />
        </label>
        <br />

        <label className="App-text">
          Điểm HK2:
          <input
            type="number"
            value={semester2}
            onChange={(e) => setSemester2(e.target.value)}
          />
        </label>
        <br />
        <label className="App-text">
          Điểm trung bình:
          <input type="text" value={average} readOnly />
        </label>
        <br />
        <label className="App-text">
          Kết quả:
          <input type="text" value={result} readOnly />
        </label>
        <br />

        <label className="App-text">
          Xếp loại học lực:
          <input type="text" value={classification} readOnly />
        </label>
        <br />

        <button type="button" onClick={calculateResult}>
          Xem kết quả
        </button>
        <br />
      </form>
    </div>
  );
}

export default App;
