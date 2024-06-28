import { Button, ButtonTheme } from "components/ui/button/MyButton"
import { ReactNode, useState } from "react"
import { CheckboxDone } from "shared/svg/checkboxDone"
import { CheckboxEmpty } from "shared/svg/checkboxEmpty"
import cls from './Chekbox.module.scss'
import { useDispatch, useSelector } from "react-redux"
import { todoDataAction } from "App/Providers/Redux/Slice/TodoDataSlice"
import { StateSchema } from "App/Providers/Redux/config/StateScheme"
import { stat } from "fs"
import { validate } from "webpack"
import { ClassNames } from "shared/lib/ClassNames/ClassNames"

interface ChekboxProps {
    text?:string,
    isCheked?:boolean,
    index?:number, 
    children?:ReactNode,
    className?:string,
    textColor?: string
    disabled?: boolean,
    svgColor?: string,
    todoId?: string
    chekboxCompleted?:boolean,
    handleChekboxClick?: (index) => void
}

export const Chekbox = ({text, isCheked, index, className, disabled, textColor, svgColor, todoId, chekboxCompleted, handleChekboxClick}:ChekboxProps) => {
    const dispatch = useDispatch();



    if (isCheked) {
        return (
            <div className={ClassNames(cls.checkbox, {}, [className])}>
                <Button className={cls.size} theme={ButtonTheme.CLEAR} onClick={handleChekboxClick}
                disabled={disabled}>
                    <div className={cls.chekboxSVG_done}>
                        <CheckboxDone svgColor={svgColor} /> 
                    </div>
                </Button>
                    <span className={cls.chekboxText_done} style={{color:textColor}}><s>{text}</s></span>
            </div>
        );
    } else {
        return (
            <div className={ClassNames(cls.checkbox, {}, [className])}>
                <Button className={cls.size} theme={ButtonTheme.CLEAR} onClick={handleChekboxClick}
                disabled={disabled}>
                    <div className={cls.chekboxSVG}>
                        <CheckboxEmpty svgColor={svgColor}/> 
                    </div>
                </Button>
                <span className={cls.chekboxText} style={{color:textColor}}>{text}</span>
            </div>
        );
    }
}