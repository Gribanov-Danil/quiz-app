import {createPortal} from "react-dom";
import {FC, ReactNode} from "react";

interface IModalOverlay {
    overlayClass: string
    children: ReactNode
    onClick: () => void
}

export const ModalOverlay: FC<IModalOverlay> = ({children, overlayClass, onClick}) => {

    return createPortal(
        (
            <div className={overlayClass} onClick={onClick}>
                {children}
            </div>

        ), document.body
    )
}