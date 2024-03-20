// import { useState } from "react";

function MyForm() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   teacher: "",
  //   class: "",
  //   birthday: "",
  //   job: "",
  // });

  // setFormData("");
  // function handleSubmit(e) {
  //   e.preventDefault();
  // }
  return (
    <div className="my-form">
      <div className="form-page">
        <h1 className="title">THEO DÕI HỌC TẬP</h1>
        <form className="form-container">
          <div className="infor-image">
            <div className="infor">
              <div className="form-label-input">
                <label className="form-label">Họ tên học sinh:</label>
                <input
                  type="text"
                  // value={formData.name}
                  // onChange={e.target.value}
                ></input>
              </div>
              <br />
              <div className="form-label-input">
                <label className="form-label">Giáo viên phụ trách:</label>
                <input
                  type="text"
                  // value={formData.teacher}
                  // onChange={e.target.value}
                ></input>
              </div>
              <br />
              <div className="infor-class-date">
                <div className="form-label-input">
                  <label className="form-label">Lớp: </label>
                  <input
                    type="text"
                    // value={formData.class}
                    // onChange={e.target.value}
                  ></input>
                </div>
                <div className="form-label-input">
                  <label className="form-label">Ngày: </label>
                  <input
                    type="text"
                    // value={formData.birthday}
                    // onChange={e.target.value}
                  ></input>
                </div>
              </div>
              <div>
                <label className="form-label">
                  Những việc phân công chưa làm:
                </label>
                <br />
                <textarea
                  type="text"
                  // value={formData.job}
                  // onChange={e.target.value}
                ></textarea>
              </div>
            </div>
            <div className="image">
              <img
                src="https://png.pngtree.com/png-clipart/20230914/original/pngtree-book-and-pen-vector-png-image_12146032.png"
                alt="study-images"
              />
            </div>
            <br />
          </div>

          <p>Chọn hình thức hoành thành</p>
          <div>
            <label className="form-label">
              <input type="checkbox"></input>
              Những việc chưa làm sẽ được hoàn thành ngay tại lớp
            </label>
          </div>
          <br />
          <div>
            <label className="form-label">
              <input type="checkbox"></input>
              Sẽ hoành thành những việc chưa làm tại nhà và nộp cho giáo viên
              vào ngày hôm sau
            </label>
          </div>
          <br />
          <div className="button">
            <button>Ghi nhận</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MyForm;
