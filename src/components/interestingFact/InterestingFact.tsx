import styles from "./factStyle.module.css"
import {FC} from "react";
interface IInterestingFact {
    factText: string
}

export const InterestingFact: FC<IInterestingFact> = ({factText}) => {
    return (
        <p className={styles.text}>{factText}</p>
        )
}