import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Sidebar from "./components/Sidebar";
import Info from "./components/Info";
const url = "https://www.course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  const companies = jobs.map((job) => job.company);
  console.log(companies);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center mt-20">
        <Loading />
      </div>
    );
  }

  return (
    <div className="my-20 mx-[52px] flex justify-between">
      <Sidebar jobs={jobs} setValue={setValue} value={value} />
      <Info jobs={jobs} value={value} />
    </div>
  );
}

export default App;
