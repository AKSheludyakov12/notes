import React,{ InputHTMLAttributes, ReactNode } from 'react'
import classes from './MyInput.module.css'
interface InputProps extends InputHTMLAttributes<HTMLElement>{
    children?: ReactNode
}
export const MyInput = ({children, ...props}: InputProps) =>{
    return ( 
        <input {...props} className={classes.myInp
        }
        >
            {children}
        </input>
    )
