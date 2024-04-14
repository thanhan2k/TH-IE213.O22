import Question from "./components/Question";
import questions from "./data";

function App() {
  return (
    <div className='flex justify-center bg-[#cffafe]'>
      <div className='lg:w-2/3 w-[90%]  flex flex-col items-center bg-white shadow-lg rounded  py-10 my-20' >
        <h1 className='text-center text-5xl text-gray-700 mb-[48px]'>Questions</h1>
        {questions.map((question) => {
          return <Question title={question.title} info={question.info}/>
        })}
      </div>
    </div>
  )
}

export default App;
