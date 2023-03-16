import styles from "./factStyle.module.css"
export const InterestingFact = ({factText}) => {
    return (
        <p className={styles.text}>{factText}</p>
        )
}