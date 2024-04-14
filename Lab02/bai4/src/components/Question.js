import { useState } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="w-[90%] bg-white mb-8 px-6 py-4 rounded  border-2 border-gray-200 shadow-lg ">
      <div className="flex justify-between">
        <h3 className="text-xl text-gray-700 font-medium capitalize tracking-wider leading-8">
          {title}
        </h3>
        <button
          onClick={() => {
            setShowInfo(!showInfo);
          }}
          className="text-4xl text-[#164e63]"
        >
          {showInfo ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
        </button>
      </div>
      {showInfo && <p className="text-gray-500 leading-loose mt-4">{info}</p>}
    </div>
  );
};

export default Question;
