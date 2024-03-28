import { useState } from "react";
import './App.css';

function App() {
  const [diemhk1,setdiemhk1]=useState('0')
  const [diemhk2,setdiemhk2]=useState('0')
  const handlebutton=()=>{
    let dtb=diemhk1/2+diemhk2/2
    document.querySelector('#dtb').value=dtb
    document.querySelector('#kq').value=dtb>=5?'Được lên lớp':'Ở lại lớp'
    if(dtb>=8) {
      document.querySelector('#xeploai').value='Giỏi'
    }
    else if(dtb>6.5) {
      document.querySelector('#xeploai').value='Khá'
    }
    else if(dtb>=5) {
      document.querySelector('#xeploai').value='Trung bình'
    }
    else {
      document.querySelector('#xeploai').value='Yếu'
    }
   
  }
  return (

    <form>
      <label id='title'>KẾT QUẢ HỌC TẬP</label>
      <div>
        <label>Điểm HK1:</label>
        <input type='number' onChange={(x)=>{setdiemhk1(x.target.value)}}></input>
      </div>
      <div>
        <label>Điểm HK2:</label>
        <input type='number' onChange={(x)=>{setdiemhk2(x.target.value)}}></input>
      </div>
      <div>
        <label>Điểm trung bình:</label>
        <input type='number' disabled id="dtb"></input>
      </div>
      <div>
        <label>Kết quả:</label>
        <input type='text' disabled id='kq'></input>
      </div>
      <div>
        <label>Xếp loại học lực:</label>
        <input type='text' disabled id="xeploai"></input>
      </div>
      <input type='button' value='Xem kết quả' onClick={()=>{handlebutton()}} id='button'></input>
    </form>
  );
}

export default App;
