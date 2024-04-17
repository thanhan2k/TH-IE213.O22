import Tour from "./Tour";

function Tours({ tours, removeTour }) {
  return (
    <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 items-start mx-4">
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
      })}
    </div>
  );
}

export default Tours;
