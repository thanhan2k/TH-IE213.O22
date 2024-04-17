import React, { useState } from "react";
import "./App.css";
import FormComponent from "./components/FormComponent";
import SubmittedFormComponent from "./components/SubmitComponent";

function App() {
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
  };

  return (
    <div className="App">
      <header className="App-header">
        <FormComponent
          formData={formData}
          handleChange={handleChange}
          handleCheck={handleCheck}
          handleSubmit={handleSubmit}
        />
        {submittedData && (
          <SubmittedFormComponent
            submittedData={submittedData}
            isChecked={isChecked}
          />
        )}
      </header>
    </div>
  );
}

export default App;
