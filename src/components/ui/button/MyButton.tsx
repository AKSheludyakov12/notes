import React, { ButtonHTMLAttributes, ReactNode, } from 'react'
import cls from "./MyButton.module.scss"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

export const Button = (props: ButtonProps) =>{
    const {children, 
    }= props
    return ( 
        <button
         className={cls.myBtn}>
            {children}
        </button>
    )
}
