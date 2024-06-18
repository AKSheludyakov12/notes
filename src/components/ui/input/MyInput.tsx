import React,{ InputHTMLAttributes, ReactNode } from 'react'
import cls from './MyInput.module.scss'
interface InputProps extends InputHTMLAttributes<HTMLElement>{
    children?: ReactNode
}
export const MyInput = ({children, ...props}: InputProps) =>{
    return ( 
        <input {...props} className={cls.myInp
        }
        >
            {children}
        </input>
    )
}