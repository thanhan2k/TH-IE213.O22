import { useState } from "react";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Review({ people }) {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const peopleLength = people.length;

  const prePerson = (index) => {
    let newIndex = (index - 1 + peopleLength) % peopleLength;
    setIndex(newIndex);
  };

  const nextPerson = (index) => {
    let newIndex = Math.abs((index + 1) % peopleLength);
    setIndex(newIndex);
  };

  const randomPerson = (index) => {
    let randomNumber = Math.floor(Math.random() * people.length)
    if(index === randomNumber)
        setIndex((randomNumber + 1) % peopleLength)
    else
        setIndex(randomNumber)
  };

  return (
    <div className="flex flex-col items-center bg-slate-100 w-[90%] sm:w-[600px] p-4 rounded shadow-lg hover:shadow-xl">
      <div className="bg-[#645cff] rounded-full w-[150px] h-[150px] relative right-[-5px]">
        <img
          alt="avt"
          src={image}
          className="rounded-full w-[150px] h-[150px] object-cover absolute top-[5px] right-[10px]"
        />
        <div className="flex justify-center items-center bg-[#645cff] rounded-full w-10 h-10 text z-10 text-white absolute left-0 top-2 ">
          <FaQuoteRight />
        </div>
      </div>
      <h3 className="text-2xl mt-6 capitalize">{name}</h3>
      <p className="text-sm text-[#645cff] uppercase font-medium">{job}</p>
      <p className="text-[#475569] text-center px-4 py-2">{text}</p>
      <div className="text-[#3c3799] text-xl mb-4">
        <button
          onClick={() => {
            prePerson(index);
          }}
        >
          <FaChevronLeft className="hover:text-[#645cff] mx-2" />
        </button>
        <button
          onClick={() => {
            nextPerson(index);
          }}
        >
          <FaChevronRight className="hover:text-[#645cff] mx-2" />
        </button>
      </div>
      <button
        onClick={() => {
            randomPerson(index)
        }}
        className="text-[#645cff] text-sm bg-[#c1beff] hover:text-[#c1beff] hover:bg-[#3c3799] px-4 h-[28px] rounded shadow"
      >
        Surprise Me
      </button>
    </div>
  );
}

export default Review;
