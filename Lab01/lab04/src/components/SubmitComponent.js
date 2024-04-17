import React from "react";

function SubmittedFormComponent({ submittedData, isChecked }) {
  return (
    <div className="submitted-form">
      <p className="title">Thông tin phiếu theo dõi</p>
      <br />
      <p>
        Tên học sinh: {submittedData.name} - Lớp: {submittedData.class}
      </p>
      <br />
      <p>
        Ngày đăng ký: {submittedData.date} - Giáo viên phụ trách:{" "}
        {submittedData.yearOfBirth}
      </p>
      <br />
      <p>
        Những công việc đã được phân công nhưng chưa hoàn thành:
        <br />
        {submittedData.work}
      </p>
      <br />
      <p>
        Cam kết sẽ hoàn thành tại:
        {isChecked()}
      </p>
      <br />
    </div>
  );
}

export default SubmittedFormComponent;
