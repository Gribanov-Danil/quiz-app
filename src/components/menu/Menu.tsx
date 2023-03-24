import {motion} from "framer-motion";
import styles from "../panel/panel.module.css";
import React, {FC} from "react";
import {useNavigate} from "react-router-dom";

export const Menu: FC = () => {
    const navigate = useNavigate()
    const onGuessValueClick = () => navigate('/guessValueGame')
    const onFindReplacementClick = () => navigate('/findReplacementGame')
    return (
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
    )
}