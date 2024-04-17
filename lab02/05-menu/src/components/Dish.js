function Dish({ dish }) {
  const { title, price, img, desc } = dish;
  console.log(dish);
  return (
    <div className="rounded shadow">
      <img alt={title} src={img} className="rounded-t object-cover w-full h-60"/>
      <div className="p-6">
          <div className="flex justify-between my-4">
            <h4 className="font-medium text-xl capitalize tracking-[1px]">{title}</h4>
            <span className="bg-[#f59e0b] text-white rounded px-2 py-0.5 tracking-[1px]">{`$${price}`}</span>
          </div>
          <p className="mt-1 text-[#64748b] leading-loose">{desc}</p>
      </div>
    </div>
  );
}

export default Dish;
