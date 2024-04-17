import { useState } from "react";

function App() {
  const [scoresHK1, setScoresHK1] = useState();
  const [scoresHK2, setScoresHK2] = useState();
  const [calculate, setCalculate] = useState();
  const [resultCondition, setResultCondition] = useState();
  const [ratingCondition, setRatingCondition] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    let HK1 = scoresHK1;
    let HK2 = scoresHK2;
    if (scoresHK1 === undefined && scoresHK2 === undefined) {
      HK1 = 0;
      HK2 = 0;
      setScoresHK1(HK1);
      setScoresHK2(HK2);
    }
    const newCalculate = ((Number(HK1) + Number(HK2) * 2) / 3).toFixed(2);
    setCalculate(newCalculate);
    setResultCondition(() => {
      if (newCalculate >= 5) {
        return "Ðược lên lớp";
      }
      return "Ở lại lớp";
    });
    setRatingCondition(() => {
      if (newCalculate >= 8) {
        return "Giỏi";
      } else if (6.5 < newCalculate && newCalculate < 8) {
        return "Khá";
      } else if (5 <= newCalculate && newCalculate < 6.5) {
        return "Trung bình";
      } else if (newCalculate < 5) {
        return " Yếu";
      }
    });
    console.log(typeof scoresHK1);
    console.log(typeof scoresHK2);
    console.log(typeof calculate);
    console.log(typeof resultCondition);
    console.log(typeof ratingCondition);

    // console.log(calculate);
    // console.log(Number(((scoresHK1 + scoresHK2 * 2) / 3).toFixed(2)));
    // console.log(((Number(scoresHK1) + Number(scoresHK2) * 2) / 3).toFixed(2));
  }
  return (
    <div className="study-result-page">
      <div className="study-result-container">
        <h1 className="title">KẾT QUẢ HỌC TẬP</h1>
        <form className="study-result-form" onSubmit={handleSubmit}>
          <div className="label-input">
            <label>Điểm HK1:</label>
            <input
              type="text"
              value={scoresHK1}
              onChange={(e) => {
                setScoresHK1(e.target.value);
              }}
            ></input>
          </div>
          <div className="label-input">
            <label>Ðiểm HK2:</label>
            <input
              type="text"
              value={scoresHK2}
              onChange={(e) => {
                setScoresHK2(e.target.value);
              }}
            ></input>
          </div>
          <div className="label-input">
            <label>Ðiểm trung bình:</label>
            <input type="text" value={calculate}></input>
          </div>
          <div className="label-input">
            <label>Kết quả:</label>
            <input type="text" value={resultCondition}></input>
          </div>
          <div className="label-input">
            <label>Xếp loại học lực:</label>
            <input type="text" value={ratingCondition}></input>
          </div>
          <div className="button-click">
            <button>Xem kết quả:</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
