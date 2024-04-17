import React, { useState, useEffect } from "react";
import Tours from "./components/Tours";
import Loading from "./components/Loading";

const url = "https://www.course-api.com/react-tours-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center mt-16">
        <Loading />
      </div>
    );
  }

  if (tours.length === 0) {
    return (
      <div className="flex flex-col items-center mt-16">
        <h1 className="text-[40px]">No Tour Left</h1>
        <button
          className="bg-[#10b981] text-white text-sm px-4 py-1 rounded shadow mt-4 hover:bg-[#047857] hover:shadow-lg"
          onClick={() => {
            fetchTours();
          }}
        >
          Refresh
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <div className="flex flex-col items-center mt-16">
          <h1 className="text-[40px]">Our Tours</h1>
          <div className="w-28 h-1 bg-[#10b981] mt-2" />
        </div>
        <Tours tours={tours} removeTour={removeTour} />
      </div>
    );
  }
};

export default App;
