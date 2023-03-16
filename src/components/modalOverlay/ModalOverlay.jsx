import {createPortal} from "react-dom";

export const ModalOverlay = ({children, overlayClass, onClick}) => {

    return createPortal(
        (
            <div className={overlayClass} onClick={onClick}>
                {children}
            </div>

        ), document.body
    )
}