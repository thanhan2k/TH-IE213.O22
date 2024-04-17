function Sidebar({ jobs, setValue, value }) {
  return (
    <div className="w-[200px] flex flex-col basic-1/3 text-sm">
      {jobs.map((job, index) => {
        return (
          <button
            key={index}
            className={`tracking-[1px] mb-4 ${
              index === value &&
              "text-[#14b8a6] shadow-[-2px_0px_rgba(20,184,166,1)]"
            }`}
            onClick={() => {
              setValue(index);
            }}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
}

export default Sidebar;
