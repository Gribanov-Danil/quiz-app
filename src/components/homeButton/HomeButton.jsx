import styles from "./homeButtonStyles.module.css"
import { motion } from "framer-motion";

export const HomeButton = ({onClick}) => {
    return (
        <motion.button
            onClick={onClick}
            className={styles.home_ntn}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
            <svg width="60" height="60" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 31.6667H15V21.6667H25V31.6667H30V16.6667L20 9.16671L10 16.6667V31.6667ZM10 35C9.08333 35 8.29889 34.6739 7.64667 34.0217C6.99333 33.3684 6.66667 32.5834 6.66667 31.6667V16.6667C6.66667 16.1389 6.785 15.6389 7.02167 15.1667C7.25722 14.6945 7.58333 14.3056 8 14L18 6.50004C18.3056 6.27782 18.625 6.11115 18.9583 6.00004C19.2917 5.88893 19.6389 5.83337 20 5.83337C20.3611 5.83337 20.7083 5.88893 21.0417 6.00004C21.375 6.11115 21.6944 6.27782 22 6.50004L32 14C32.4167 14.3056 32.7433 14.6945 32.98 15.1667C33.2156 15.6389 33.3333 16.1389 33.3333 16.6667V31.6667C33.3333 32.5834 33.0072 33.3684 32.355 34.0217C31.7017 34.6739 30.9167 35 30 35H21.6667V25H18.3333V35H10Z" fill="#4cbb94"/>
            </svg>
        </motion.button>
    )
}