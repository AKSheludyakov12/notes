import { MouseEventHandler, ReactNode } from "react"
import cls from "./NotesWrapper.module.scss"
import { ClassNames } from "shared/lib/ClassNames/ClassNames"
import { Chekbox } from "shared/ui/checkBox"
import { todoPointSchema } from "App/Providers/Redux/config/StateScheme"

interface TodosNotesWrapperProps {
    className?:string,
    children?: ReactNode,
    backgroundColor?: string,
    title?: string,
    point:todoPointSchema[],
    onClick: MouseEventHandler<HTMLDivElement>;

}

export const TodosWrapper = (props:TodosNotesWrapperProps) =>{
    const {
        className,
        children,
        backgroundColor,
        title,
        point,
        onClick
        } = props 

    return (
        <div 
        className={ClassNames(cls.NotesWrapper , {}, [className])}
        style={{ backgroundColor: backgroundColor }}
        onClick={onClick}
        >
            <div className={cls.content}>
                <div className={cls.title}>{title}</div>
                    {point.map((point=><Chekbox  svgColor="#3B3B3B" disabled={true}  textColor="#3B3B3B" className={cls.text} text={point.todoText} isCheked={point.todoCompleted}/>))}
            </div>
            {children}
        </div>
    )

}