import styles from "./panel.module.css"
import {QuizTemplate} from "../quizTemplate/QuizTemplate";
import {quizData} from "../../utils/quizData";
import {HomeButton} from "../homeButton/HomeButton";
import {Route, Routes, useNavigate} from "react-router-dom";
import {Menu} from "../menu/Menu";
import {NotFoundPage} from "../../pages/notFoundPage/NotFoundPage";


export const Panel = () => {
    const navigate = useNavigate()
    const onClick = () => navigate('/', { replace: true })
    return (
        <div className={styles.layout}>
            <div className={styles.quiz_layout}>
                <div className={styles.quiz_box} id="quiz">
                    <Routes>
                        <Route path={'/'} element={<Menu/>}/>
                        <Route path={'/guessValueGame'} element={<QuizTemplate  quizData={quizData}/>}/>
                        <Route path={'*'} element={<NotFoundPage/>}/>
                    </Routes>
                </div>
                <HomeButton onClick={onClick}/>
            </div>
        </div>
    )
}