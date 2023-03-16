import quizStyles from "./quizTemplate.module.css"
import {useState} from "react";
import uuid from "react-uuid";
import {motion} from "framer-motion";

export const QuizTemplate = ({quizData}) => {
    const data = quizData
    const [state, setState] = useState({
        quiz: data[0],
        currentQuiz: 1
    })
    const [score, setScore] = useState(0)
    const handleChooseAnswer = (answer) => {
        if (answer === state.quiz.correct) {
            setScore(score + 1)
        }
        setState( {
            ...state,
            quiz: data[state.currentQuiz],
            currentQuiz: state.currentQuiz + 1
        })
    }
    return(
        <div className={quizStyles.overlay}>
            {
                state.currentQuiz <= data.length &&
                <>
                    <div className={quizStyles.quiz_header}>
                        <h2 id="question">{state.quiz.question}</h2>
                    </div>
                    <div className={quizStyles.btn_block}>
                        {
                            state.quiz.answerVariants.map((answer) => (
                                <motion.li
                                    key={uuid()}
                                    className={quizStyles.btn_block_item}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                >
                                    <button
                                        className={quizStyles.answer_btn}
                                        onClick={() => handleChooseAnswer(Object.keys(answer)[0])}
                                    >
                                        {Object.values(answer)[0]}
                                    </button>
                                </motion.li>
                            )
                            )
                        }
                    </div>
                </>
            }
            {
                state.currentQuiz > data.length &&
                <h2>{`Ваш результат: ${Math.round(score / data.length  * 100) } %`}</h2>
            }
        </div>
    )
}

