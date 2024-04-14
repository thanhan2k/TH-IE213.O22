import { useState } from "react";
import data from "./data";
import List from "./components/List";

export default function App() {
  const [people, setPeople] = useState(data);
  return (
    <div className="flex items-center justify-center bg-[#FAE8FF] min-h-[700px]">
      <div className="w-[600px] bg-white rounded shadow-md">
        <h3 className="ml-4 text-3xl p-4 mt-2">{people.length} birthdays today</h3>
        {people.map((person) => {
          return (
            <List 
              name={person.name}
              age={person.age}
              img={person.image}
            />
          );
        })}
        <div className="flex w-full justify-center my-4 ">
          <button
            className="bg-[#d342e8] w-[536px] text-center rounded text-white h-[28px] leading-[28px] hover:bg-[#a21caf] hover:shadow"
            type="button"
            onClick={() => {
              setPeople([]);
            }}
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}
