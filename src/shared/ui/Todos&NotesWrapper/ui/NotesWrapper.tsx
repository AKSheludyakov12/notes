import { MouseEventHandler, MutableRefObject, ReactNode, RefObject } from "react"
import cls from "./NotesWrapper.module.scss"
import { ClassNames } from "shared/lib/ClassNames/ClassNames"

interface TodosNotesWrapperProps {
    className?:string,
    children?: ReactNode,
    backgroundColor?: string,
    title?: string,
    text?: string,
    onClick: MouseEventHandler<HTMLDivElement>;
    ref?: RefObject<HTMLDivElement>
}

export const NotesWrapper = (props:TodosNotesWrapperProps) =>{
    const {
        className,
        children,
        backgroundColor,
        title,
        onClick,
        ref,
        text} = props 

    return (
        <div 
        className={ClassNames(cls.NotesWrapper , {}, [className])}
        style={{ backgroundColor: backgroundColor }}
        onClick={onClick}>
            <div className={cls.content}
            ref={ref}
            >
                <div className={cls.title}>{title}</div>
                <div className={cls.text}>{text} </div>
            </div>
            {children}
        </div>
    )

}