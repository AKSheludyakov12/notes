import React, { ButtonHTMLAttributes, ReactNode, } from 'react'
import cls from "./MyButton.module.scss"
import { ClassNames } from 'shared' 
export enum ButtonTheme {
    DEFAULT = "default",
    CLEAR = "clear", 
    CIRCLE = "circle",
    POPUP = "popup_Btn"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode,
    theme?: ButtonTheme,
    className?: string,
    onClick?: () => void
}


export const Button = (props: ButtonProps) =>{
    const {children, 
        theme = ButtonTheme.DEFAULT,
        className,
        onClick
    }= props
    return ( 
        <button
         className={ClassNames(cls.myBtn, {}, [className, cls[theme]])} 
         onClick={onClick} >
            {children}
        </button>
    )
}
