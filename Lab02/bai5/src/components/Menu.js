import Dish from "./Dish";

function Menu({ menu }) {
  console.log(menu);

  return (
    <div className="grid grid-cols-1 w-[400px] lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:w-[90%]">
      {menu.map((dish) => {
        return <Dish key={dish.id} dish={dish}/>
      })}
    </div>
  );
}

export default Menu;
