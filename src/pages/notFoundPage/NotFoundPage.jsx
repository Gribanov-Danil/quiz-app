import {useNavigate} from "react-router-dom";
import styles from "./404styles.module.css"

export const NotFoundPage = () => {
    const navigate = useNavigate()
    const onClick = () => navigate('/', { replace: true })
    return (
        <div className={`${styles.container} mt-20`}>
            <div className={styles.content}>
                <h1 className={styles.head}>Упс! Ошибка 404</h1>
                <p className={styles.error_discr}>Данной страницы не существует ¯\_(ツ)_/¯</p>
                <p className={styles.error_discr}>Проверьте адресс или вернитесь на&nbsp;
                    <a onClick={onClick} className={styles.btn}>
                        главную страницу
                    </a>
                </p>
            </div>
        </div>
    )
}