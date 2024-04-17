import Review from "./components/Review";
import people from "./data"
function App() {
  return (
    <div className="flex justify-center mt-[5%]">
        <Review people={people}/>
    </div>
  );
}

export default App;
