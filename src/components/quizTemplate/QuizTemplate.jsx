import quizStyles from "./quizTemplate.module.css"
import {useState} from "react";
import {getSelectedInputs} from "../../utils/getSelectedInputs";
import uuid from "react-uuid";

export const QuizTemplate = ({quizData}) => {
    const data = quizData
    const [state, setState] = useState({
        quiz: data[0],
        currentQuiz: 1
    })
    const [score, setScore] = useState(0)

    const handleUpdatePage = () => {
        const answer = getSelectedInputs();
        if (answer) {
            if (answer === state.quiz.correct) {
                setScore(score + 1)
            }
            setState( {
                ...state,
                quiz: data[state.currentQuiz],
                currentQuiz: state.currentQuiz + 1
            })
        }
        const answerElements = document.querySelectorAll('.answer');
        answerElements.forEach(answerEl => answerEl.checked = false)
    }

    return(
        <div className={quizStyles.layout}>
            <div className={quizStyles.quiz_layout}>
                <div className={quizStyles.quiz_box} id="quiz">
                    {
                        state.currentQuiz <= data.length &&
                        <>
                            <div className={quizStyles.quiz_header}>
                                <h2 id="question">{state.quiz.question}</h2>
                                <ul>
                                    {
                                        state.quiz.answerVariants.map((answer) => (
                                            <li key={uuid()}>
                                                <input type="radio" name="answer" id={`${Object.keys(answer)[0]}`} className="answer"/>
                                                <label htmlFor={`${Object.keys(answer)[0]}`} id={`${Object.keys(answer)[0]}_text`}>{Object.values(answer)[0]}</label>
                                            </li>
                                            )
                                        )
                                    }
                                </ul>
                            </div>
                            <button id="submit" onClick={handleUpdatePage}>Submit</button>
                        </>
                    }
                    {
                        state.currentQuiz > data.length &&
                        <h2>{`Ваш результат: ${score} баллов из ${quizData.length} вопросов`}</h2>
                    }

                </div>
            </div>
        </div>
    )
}

