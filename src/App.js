import { useState } from "react";
import Question from "./components/Question";

function App() {

  const [questions, setQuestions] = useState(
    [
      {
        id: 0,
        title: 'Should dogs be allowed to fly?',
        answers: [
          {
            id: 0,
            name: 'yes',
            count: 18,
          },
          {
            id: 1,
            name: 'no',
            count: 1,
          },
          {
            id: 2,
            name: 'osef frero',
            count: 28,
          }
        ],
        answer: '',
      },
      {
        id: 1,
        title: 'Should Developers use IDEs?',
        answers: [
          {
            id: 0,
            name: 'yes',
            count: 5,
          },
          {
            id: 1,
            name: 'no',
            count: 81,
          },
          {
            id: 2,
            name: 'osef frero',
            count: 18,
          }
        ],
        answer: '',
      },
      {
        id: 2,
        title: 'Should doors be shut at night?',
        answers: [
          {
            id: 0,
            name: 'yes',
            count: 2,
          },
          {
            id: 1,
            name: 'no',
            count: 17,
          },
          {
            id: 2,
            name: 'osef frero',
            count: 8,
          },
          {
            id: 3,
            name: 'La réponse D',
            count: 8,
          }
        ],
        answer: '',
      }
    ]
  );


  return (
    <div className="Ap container">
      {questions.map(question => {
        return (
          <Question key={question.id} data={question} />
        )
      })}
    </div>
  );

}

export default App;
