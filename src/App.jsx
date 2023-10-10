import { Question } from "./components/Question"
import questions from "./components/data"
function App() {

  return (
    <div className="w-[95%] max-w-xl m-auto mt-8 rounded-md bg-white p-4">
      <h1 className="text-center text-4xl py-4">Questions</h1>
      {questions.map((question)=>{
        return <Question key={question.id} {...question} />
      })}
    </div>
  )
}

export default App
