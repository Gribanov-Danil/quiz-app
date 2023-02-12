import quizStyles from "./quizTemplate.module.css"

export const QuizTemplate = ({quizData}) => {
    return(
        <div className={quizStyles.quiz_layout}>
            <div className={quizStyles.quiz_box} id="quiz">
                <div className={quizStyles.quiz_header}>
                    <h2 id="question">Question text</h2>
                    <ul>
                        <li>
                            <input type="radio" name="answer" id="a" className="answer"/>
                            <label htmlFor="a" id="a_text">Question</label>
                        </li>
                        <li>
                            <input type="radio" name="answer" id="b" className="answer"/>
                            <label htmlFor="b" id="b_text">Question</label>
                        </li>
                        <li>
                            <input type="radio" name="answer" id="c" className="answer"/>
                            <label htmlFor="c" id="c_text">Question</label>
                        </li>
                    </ul>
                </div>
                <button id="submit">Submit</button>
            </div>
        </div>

    )
}