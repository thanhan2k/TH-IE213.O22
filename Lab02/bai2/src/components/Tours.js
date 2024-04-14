import Tour from "./Tour";

function Tours({ tours, removeTour }) {
  return (
    <div className="">
        <div className="flex flex-wrap justify-center">
          {tours.map((tour) => {
            return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
          })}  
        </div>
    </div>
  );
}

export default Tours;
