import { useState } from "react";

// const tour = {
//   img: "https://www.course-api.com/images/tours/tour-1.jpeg",
//   price: "$1,995",
//   title: "Best Of Paris In 7 Days Tour",
//   info: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
// };

function Tour({ id, image, info, name, price, removeTour }) {
  const [readMore, setReadMore] = useState(false);

  // const { img, price, title, info } = tour;
  return (
    <div className="mx-3 relative rounded shadow-lg my-4 pb-8">
      <img alt="#" className="object-cover h-[320px] w-full rounded-t" src={image} />
      <div className="bg-[#10b981] text-white inline-block px-2 text-center h-[32px] leading-[32px] text-base absolute top-0 right-0 rounded-tr">
        {price}
      </div>
      <h3 className="text-xl font-semibold text-center pt-6">{name}</h3>
      <p className="text-[#64748b] p-4">
        {readMore ? `${info} ` : `${info.substring(0, 200)}... `}
        <button
          className="text-[#10b981] font-bold"
          type="button"
          onClick={() => {
            setReadMore(!readMore);
          }}
        >
          {readMore ? "Show less" : "Read more"}
        </button>
      </p>
      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => {
            removeTour(id);
          }}
          className="border-[1px] border-[#10b981] rounded w-4/5 shadow text-[#10b981] text-sm py-1.5 hover:bg-[#10b981] hover:text-white"
        >
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default Tour;
