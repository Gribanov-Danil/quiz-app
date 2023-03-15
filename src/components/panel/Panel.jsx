import styles from "./panel.module.css"
import {QuizTemplate} from "../quizTemplate/QuizTemplate";
import {quizData} from "../../utils/quizData";
import {useState} from "react";


export const Panel = () => {
    const [guessValue, setGuessValue] = useState(false)
    const [findReplacement, setFindReplacement] = useState(false)
    const onGuessValueClick = () => setGuessValue(true)
    const onFindReplacementClick = () => setFindReplacement(true)
    return (
        <div className={styles.layout}>
            <div className={styles.quiz_layout}>
                <div className={styles.quiz_box} id="quiz">
                    {
                        !guessValue && !findReplacement &&
                        <>
                            <button onClick={onGuessValueClick} className={styles.btn}>Игра &laquo;Угадай значение заимствеованного слова&raquo;</button>
                            <button onClick={onFindReplacementClick} className={styles.btn}>Игра &laquo;Найди замену заиствованному слову&raquo;</button>
                        </>
                    }
                    {
                        guessValue && !findReplacement && <QuizTemplate  quizData={quizData}/>
                    }
                    {
                        !guessValue && findReplacement && <p>Данная игра находится в разработке (☞ﾟヮﾟ)☞</p>
                    }
                    {
                        guessValue && findReplacement && <p>Упс! Что-то пошло не так ¯\_(ツ)_/¯. Пожалуйста, обновите страницу</p>
                    }
                </div>
            </div>
        </div>
    )
}