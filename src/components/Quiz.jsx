import React, {useState, useEffect} from 'react';
import he from "he" ;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function Quiz(props) {
    const {results} = props.questions
    const [rightAnwsers, setAnswer] = useState([]);
    const [currentAnswer, setCA] = useState({ question : "" , answer : ""})
    const [decodedResults, setDecodedResults] = useState([]);
    const [shuffledOptions, setShuffledOptions] = useState([])
    const [score, setScore] = useState(0)
    const [index, setIndex] = useState(0)
    const [selectedOptions, setSelectedOptions] = useState({});


    useEffect(() => {
      const decodedData = results.map((question) => {
        const decodedQuestion = {
          ...question,
          question: he.decode(question.question),
          correct_answer: he.decode(question.correct_answer),
          incorrect_answers: question.incorrect_answers.map((answer) =>
            he.decode(answer)
          ),
        };
        setAnswer(prev => {
          return [
            ...prev,
            {
              question: decodedQuestion.question,
              answer: decodedQuestion.correct_answer,
            },
          ];
        });
        setScore(0)
        return decodedQuestion;
      });

      setDecodedResults(decodedData);
      const allOptions = decodedData.map((q) =>
        shuffleArray([q.correct_answer, ...q.incorrect_answers])
      );
      setShuffledOptions(allOptions);
    }, [results]);

    const handleChoice = (qst, ans) => {
      setCA({
        question: qst,
        answer: ans,
      });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      setIndex(prev => prev + 1)
      decodedResults.forEach((q) => {
        const { question, correct_answer } = q;
        if (currentAnswer.question === question) {
          if (currentAnswer.answer === correct_answer) {
            setScore((prevScore) => prevScore + 1); 
          }
        }
      });
    };


    const handleQuestions = () => {
      try {
        return (
          <div className='quiz-form'>
            <p className='question'>{decodedResults[index].question}</p>
            <form className='answers'>
              {shuffledOptions[index].map((option,i) => {
                const optionKey = i.toString(); 
                const isChecked = selectedOptions[index] === option;

                return (
                  <React.Fragment key={i}>
                    <div className='options'>
                      <input
                      type="radio"
                      id={optionKey}
                      name="answer"
                      value={option}
                      checked={isChecked}
                      onChange={() => {
                        handleChoice(decodedResults[index].question, option);
                        setSelectedOptions((prevState) => ({
                          ...prevState,
                          [index]: option,
                        }));
                      }}
                    />
                    <label htmlFor={i}>{option}</label>
                    </div>
                  </React.Fragment>
                );
              })}
            </form>
            <button onClick={handleSubmit} className='confirm-answer'>Confirmer</button>
          </div>
        )
      } catch (error) {
        console.error(error)
        return null
      }
    }
    return (
        <div className='quiz-section'>
          <p className='indice'>You can't generate the same thing 2 times. You must change number of questions*</p>
          <p className='score'>Your score is : {score} / {decodedResults.length}</p>
          {handleQuestions()}
        </div>
    )
}