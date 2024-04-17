import { FaAngleDoubleRight } from "react-icons/fa";

function Info({ jobs, value }) {
  const { company, dates, duties, title } = jobs[value];
  return (
    <div className="w-2/3 mt-[-4px]">
      <h3 className="text-3xl font-normal tracking-[1px] capitalize">
        {title}
      </h3>
      <div className="text-[#334155] bg-[#cbd5e1] uppercase px-3 py-0.5 rounded mt-3 inline-block">
        {company}
      </div>
      <p className="text-[#64748b] tracking-[1px] mb-8">{dates}</p>
      {duties.map((duty, index) => {
        return (
          <div key={index} className="flex justify-between items-center">
            <FaAngleDoubleRight className="text-[#14b8a6] " />
            <p className="w-[90%] leading-normal text-[#334155] py-1.5">
              {duty}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Info;
