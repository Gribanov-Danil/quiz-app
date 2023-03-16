import modalStyles from "./modal.module.css"
import {useEffect} from "react";
import {createPortal} from "react-dom";
import {ModalOverlay} from "../modalOverlay/ModalOverlay";
import { motion } from "framer-motion";

export const Modal = ({active, onClick, children, title}) => {
    useEffect(() => {
        const closeOnEscapeKey = e => e.key === "Escape" ? onClick() : null;
        document.body.addEventListener("keydown", closeOnEscapeKey);
        return () => {
            document.body.removeEventListener("keydown", closeOnEscapeKey);
        };
    }, [onClick]);

    const modalOverlayStyle = active ? `${modalStyles.modal} ${modalStyles.active}` : modalStyles.modal

    return createPortal( (
            <ModalOverlay overlayClass={modalOverlayStyle} onClick={onClick}>
                <motion.div
                    className={modalStyles.modal_content}
                    onClick={(e => e.stopPropagation())}
                    initial={{ opacity: 0, scale: 0.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1.2,
                        delay: 0.7,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    <div className={`${modalStyles.header}`}>
                        <h2 className={modalStyles.title}>{title}</h2>
                        <div className={modalStyles.close} onClick={onClick}>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 22.3333L11.8333 30.5C11.5278 30.8055 11.1389 30.9583 10.6667 30.9583C10.1944 30.9583 9.80556 30.8055 9.5 30.5C9.19444 30.1944 9.04167 29.8055 9.04167 29.3333C9.04167 28.8611 9.19444 28.4722 9.5 28.1666L17.6667 20L9.5 11.8333C9.19444 11.5277 9.04167 11.1388 9.04167 10.6666C9.04167 10.1944 9.19444 9.80551 9.5 9.49996C9.80556 9.1944 10.1944 9.04163 10.6667 9.04163C11.1389 9.04163 11.5278 9.1944 11.8333 9.49996L20 17.6666L28.1667 9.49996C28.4722 9.1944 28.8611 9.04163 29.3333 9.04163C29.8056 9.04163 30.1944 9.1944 30.5 9.49996C30.8056 9.80551 30.9583 10.1944 30.9583 10.6666C30.9583 11.1388 30.8056 11.5277 30.5 11.8333L22.3333 20L30.5 28.1666C30.8056 28.4722 30.9583 28.8611 30.9583 29.3333C30.9583 29.8055 30.8056 30.1944 30.5 30.5C30.1944 30.8055 29.8056 30.9583 29.3333 30.9583C28.8611 30.9583 28.4722 30.8055 28.1667 30.5L20 22.3333Z" fill="#4CBB94"/>
                            </svg>
                        </div>
                    </div>
                    {children}
                </motion.div>
            </ModalOverlay>
        )
        , document.body
    )
}