import React from "react";
import pencilImg from "../img/pencil-background-removed.png";
function FormComponent({ formData, handleChange, handleCheck, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <p className="form-title">Theo dõi học tập</p>

      <div className="form-row-1">
        <div className="student-information">
          <label className="form-information form-name">
            <p>Họ tên:</p>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label className="form-information form-teacher">
            <p>Giáo viên phụ trách:</p>
            <input
              type="text"
              name="yearOfBirth"
              value={formData.yearOfBirth}
              onChange={handleChange}
            />
          </label>
          <div className="form-information">
            <label className="form-class">
              <p>Lớp:</p>
              <input
                type="text"
                name="class"
                value={formData.class}
                onChange={handleChange}
              />
            </label>
            <label className="form-date">
              <p>Ngày:</p>
              <input
                type="text"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </label>
          </div>
          <br />
          <label className="form-information form-work">
            <p>Những việc phân công chưa làm:</p>
            <textarea
              name="work"
              value={formData.work}
              onChange={handleChange}
            ></textarea>
          </label>
        </div>
        <div className="pencil-image">
          <img src={pencilImg} alt="pencil" />
        </div>
      </div>

      <div className="form-row-2">
        <p>Chọn những hình thức hoàn thành</p>
        <div>
          <input
            type="checkbox"
            name="homeworkAtClass"
            checked={formData.homeworkAtClass}
            onChange={handleCheck}
          />
          <span>Những việc chưa làm sẽ được hoàn thành tại lớp</span>
        </div>
        <div>
          <input
            type="checkbox"
            name="homeworkAtHome"
            checked={formData.homeworkAtHome}
            onChange={handleCheck}
          />
          <span>
            Sẽ hoàn thành những việc chưa làm tại nhà và nộp lại cho giáo viên
            vào ngày hôm sau
          </span>
        </div>
        <div className="submit-button">
          <button type="submit">Ghi nhận</button>
        </div>
      </div>
    </form>
  );
}

export default FormComponent;
