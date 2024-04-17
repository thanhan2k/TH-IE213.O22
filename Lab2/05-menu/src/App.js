import { useState } from "react";
import dishes from "./data";
import Categories from "./components/Categories";
import Menu from "./components/Menu";

function App() {
  const [menu, setMenu] = useState(dishes);
  const categories = ["all", ...new Set(dishes.map((dish) => dish.category))];
  const fillterItems = (category) => {
    if (category === "all") setMenu(dishes);
    else {
      const newDishes = dishes.filter((dish) => dish.category === category);
      setMenu(newDishes);
    }
  };

  return (
    <div className="py-20 bg-[#F8FAFC]">
      <div className="flex flex-col items-center">
        <h1 className="text-[40px] text-[#0f172a]">Our Menu</h1>
        <div className="w-[112px] h-1 bg-[#f59e0b] mt-1" />
      </div>
      <Categories categories={categories} fillterItems={fillterItems} />
      <div className="flex justify-center">
        <Menu menu={menu} />
      </div>
    </div>
  );
}

export default App;
