import quizStyles from "./quizTemplate.module.css"
import {useCallback, useEffect, useState} from "react";
import uuid from "react-uuid";
import {motion} from "framer-motion";
import {Result} from "../result/Result";
import {Modal} from "../modal/Modal";
import {InterestingFact} from "../interestingFact/InterestingFact";
import {facts} from "../../utils/factsData";

export const QuizTemplate = ({quizData}) => {
    const data = quizData
    const [factsList, setFactsList] = useState(facts)
    const [state, setState] = useState({
        currentFact: "",
        quiz: data[0],
        currentQuiz: 1
    })
    const [score, setScore] = useState(0)
    const [isModalVisible, setModalVisible] = useState(false)
    const handleCloseModal = useCallback( () => {
        setModalVisible(false)
    }, [])
    const handleToggleModal = useCallback( () => {
        setModalVisible(true)
    }, [])
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
    useEffect(() => {
        if (state.currentQuiz % 3 === 0) {
            handleToggleModal()
            let fact = factsList[Math.floor(Math.random() * factsList.length)]
            setState({
                ...state,
                currentFact: fact
            })
            setFactsList(factsList.filter((currentFact) => currentFact !== fact))
        }
    }, [handleToggleModal, state.currentQuiz])
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
                <Result score={score} totalLength={data.length} />
            }
            <Modal active={isModalVisible} onClick={handleCloseModal} title={`Интересный факт`}>
                <InterestingFact factText={state.currentFact}/>
            </Modal>
        </div>
    )
}

