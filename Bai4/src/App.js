import logo from './logo.svg';
import React, { useState } from 'react';
import pencilImg from './img/pencil-background-removed.png';
import './App.css';

function App() {
  // tao form rong
  const [formData, setFormData] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheck = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  const isChecked = () => {
    let result;

    if (submittedData.homeworkAtClass && submittedData.homeworkAtHome) {
      result = "Tại lớp - Tại nhà";
    } else if (submittedData.homeworkAtClass && !submittedData.homeworkAtHome) {
      result = "Tại lớp";
    } else if (!submittedData.homeworkAtClass && submittedData.homeworkAtHome) {
      result = "Tại nhà";
    } else {
      result = "Không có";
    }

    return result;
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit} className='form-container'>
          <p className='form-title'>Theo dõi học tập</p>

          <div className='form-row-1'>
            <div className='student-information'>
              <label className='form-information form-name'>
                <p>Họ tên:</p>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
              </label>
              <br />
              <label className='form-information form-teacher'>
                <p>Giáo viên phụ trách:</p>
                <input type="text" name="yearOfBirth" value={formData.yearOfBirth} onChange={handleChange} />
              </label>
              <div className='form-information'>
                <label className='form-class'>
                  <p>Lớp:</p>
                  <input type="text" name="class" value={formData.class} onChange={handleChange} />
                </label>
                <label className='form-date'>
                  <p>Ngày:</p>
                  <input type="text" name="date" value={formData.date} onChange={handleChange} />
                </label>
              </div>
              <br />
              <label className='form-information form-work'>
                <p>Những việc phân công chưa làm:</p>
                <textarea name="work" value={formData.work} onChange={handleChange}></textarea>
              </label>
            </div>
            
            <div className='pencil-image'>
              <img src={pencilImg} alt='pencil'/>
            </div>
          </div>
          
          <div className='form-row-2'>
            <p>Chọn những hình thức hoàn thành</p>
            <div>
              <input type='checkbox' name="homeworkAtClass" checked={formData.homeworkAtClass} onChange={handleCheck} />
              <span>Những việc chưa làm sẽ được hoàn thành tại lớp</span>
            </div>

            <div>
              <input type='checkbox' name="homeworkAtHome" checked={formData.homeworkAtHome} onChange={handleCheck} />
              <span>Sẽ hoàn thành những việc chưa làm tại nhà và nộp lại cho giáo viên vào ngày hôm sau</span>
            </div>

            <div className='submit-button'>
              <button type="submit">Ghi nhận</button>
            </div>
          </div>
        </form>

        {submittedData && (
          <div className='submitted-form'>
            <p className='title'>Thông tin phiếu theo dõi</p>
            <br/>
            <p>Tên học sinh: {submittedData.name} - Lớp: {submittedData.class}</p>
            <br/>
            <p>Ngày đăng ký: {submittedData.date} - Giáo viên phụ trách: {submittedData.yearOfBirth}</p>
            <br/>
            <p>Những công việc đã được phân công nhưng chưa hoàn thành:
              <br/>
              {submittedData.work}
            </p>
            <br/>
            <p>
              Cam kết sẽ hoàn thành tại:
              {isChecked()}
            </p>
            <br/>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
