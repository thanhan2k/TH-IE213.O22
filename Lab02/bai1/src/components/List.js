function List({ name, age, img }) {
  return (
    <div className="flex flex-row mx-4 px-4 mb-6">
      <img className="rounded-full w-[75px] h-[75px] object-cover" alt={name} src={img} />
      <div className="mx-4 ">
          <h3 className="text-[1.563rem] font-medium mt-[4px]">{name}</h3>
          <p className="text-[#64748b]">{age} years</p>
      </div>
    </div>
  );
}

export default List;
