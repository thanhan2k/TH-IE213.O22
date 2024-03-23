import { useState } from "react";
import './App.css';

function App() {
  const [ten,setten]=useState('')
  const [gv,setgv]=useState('')
  const [lop,setlop]=useState('')
  const [ngay,setngay]=useState('')
  const [noidung,setnoidung]=useState('')
  const [lc1,setlc1]=useState(false)
  const [lc2,setlc2]=useState(false)
  
  const handlebutton=()=>{
    document.getElementById('content').innerHTML=`
    <div>Tên học sinh: ${ten}-Lớp: ${lop}</div>
    <div>Ngày đăng ký: ${ngay}-Giáo viên phụ trách:${gv}</div>
    <div>Những công việc đã được phân công nhưng chưa hoàn thành:</div>
    <div>${noidung}</div>
    <div>Cam kết sẽ hoàn thành tại: ${lc1?'Tại lớp':''}${lc1&&lc2?'-':''}${lc2?'Tại nhà':''}</div>
    `
  }
  return (
    <div>
      <form>
        <label id='title'>THEO DÕI HỌC TẬP</label>
        <div id='box1'>
          <div id='box-child1'>
            <div class='line' >
              <label >Họ tên học sinh:</label>
              <input class='name' type='text' onChange={(x)=>{setten(x.target.value)}}></input>
            </div>
            <div class='line' >
              <label>Giáo viên phụ trách:</label>
              <input class='name' type='text' onChange={(x)=>{setgv(x.target.value)}}></input>
            </div>
            <div class='line' >
              <label>Lớp:</label>
              <input type='text' onChange={(x)=>{setlop(x.target.value)}}></input>
              <label>Ngày:</label>
              <input type='date' onChange={(x)=>{setngay(x.target.value)}}></input>
            </div>
            <div class='line' id='note'>
              <label >Những công việc chưa làm:</label>
              <textarea rows="5" cols="60" onChange={(x)=>{setnoidung(x.target.value)}}></textarea>
            </div>
          </div>
          <div id='box-child2'>
          <img src={require('./img.png')} width={200} height={200} alt='logo'/>
          </div>
        </div>
        <div>Chọn hình thức hoàn thành</div>
        <div class='line'>
          <input type='checkbox' onChange={()=>setlc1(!lc1)}></input>
          <label>Những việc chưa làm sẽ được hoàn thành ngay tại lớp</label>
        </div>
        <div class='line'>
          <input type='checkbox' onChange={()=>setlc2(!lc2)}></input>
          <label>Sẽ hoàn thành những việc chưa làm tại nhà và nộp lại cho giáo viên vào ngày hôm sau</label>
        </div>
        
      </form>
      <button onClick={()=>{handlebutton()}}>Ghi nhận</button>
      <div id='kq'>
        <div id="title2">Thông tin phiếu theo dõi</div>
        <div id='content'></div>
      </div>
    </div>  
    
  );
}

export default App;
