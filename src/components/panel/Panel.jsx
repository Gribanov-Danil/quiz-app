import styles from "./panel.module.css"
import {QuizTemplate} from "../quizTemplate/QuizTemplate";
import {quizData} from "../../utils/quizData";
import {useState} from "react";
import { motion } from "framer-motion";


export const Panel = () => {
    const [guessValue, setGuessValue] = useState(false)
    const [findReplacement, setFindReplacement] = useState(false)
    const onGuessValueClick = () => setGuessValue(true)
    const onFindReplacementClick = () => setFindReplacement(true)
    let boxStyles = !guessValue && !findReplacement ? `${styles.quiz_box} ${styles.quiz_box_menu}` : `${styles.quiz_box}`
    return (
        <div className={styles.layout}>
            <div className={styles.quiz_layout}>
                <div className={boxStyles} id="quiz">
                    {
                        !guessValue && !findReplacement &&
                        <>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                onClick={onGuessValueClick}
                                className={styles.btn}
                            >
                                Игра &laquo;Угадай значение заимствеованного слова&raquo;
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                onClick={onFindReplacementClick}
                                className={styles.btn}
                            >
                                Игра &laquo;Найди замену заиствованному слову&raquo;
                            </motion.button>
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