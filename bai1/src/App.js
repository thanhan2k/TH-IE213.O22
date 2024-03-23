import { useState } from "react";
import Input from "./components/Input";

export default function App() {
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
    <div className="flex justify-center items-center flex-col mt-20">
      <div className="w-[440px] border-4 border-[#db7093]">
        <h1 className="bg-[#b43535] w-full h-14 text-4xl text-center leading-[56px] font-bold text-stone-200">
          Kết Quả Học Tập
        </h1>
        <form className="flex flex-col w-full bg-[#db7093]">
          <Input
            lable="Điểm KH1:"
            type="number"
            value={semester1}
            onChange={(e) => setSemester1(e.target.value)}
          />
          <Input
            lable="Điểm KH2:"
            type="number"
            value={semester2}
            onChange={(e) => setSemester2(e.target.value)}
          />
          <Input
            lable="Điểm trung bình:"
            type="number"
            disabled="true"
            value={average}
          />
          <Input lable="Kết quả:" type="text" disabled="true" value={result} />
          <Input
            lable="Xếp loại học lực:"
            type="text"
            disabled="true"
            value={classification}
          />
          <div className="flex justify-center py-2">
            <button
              type="button"
              className="bg-gray-100 hover:bg-gray-200 px-2 py-1 border-[1px] border-black shadow-xl"
              onClick={calculateResult}
            >
              Xem kết quả
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
