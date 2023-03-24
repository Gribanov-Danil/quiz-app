import styles from "./resultStyles.module.css"
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";
import {FC} from "react";

interface IResult {
    score: number
    totalLength: number
}

export const Result: FC<IResult> = ({score, totalLength}) => {
    const navigate = useNavigate()
    const onRestartClick = () => navigate(0)
    const onHomeClick = () => navigate('/')
    return (
        <>
            <h2 className={styles.result}>{`Ваш результат: ${Math.round(score / totalLength  * 100) } %`}</h2>
            <motion.button
                onClick={onRestartClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className={styles.btn}
            >
                Начать заново
            </motion.button>
            <motion.button
                onClick={onHomeClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className={styles.btn}
            >
                На главную
            </motion.button>
        </>

    )
}