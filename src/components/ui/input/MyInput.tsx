import React,{ ChangeEvent, InputHTMLAttributes, ReactNode } from 'react'
import cls from './MyInput.module.scss'
import { useDispatch } from 'react-redux'
import { NoteDataAction } from 'App/Providers/Redux/Slice/NoteDataSlice'
import { ClassNames } from 'shared'
interface InputProps extends InputHTMLAttributes<HTMLElement>{
    children?: ReactNode,
    className?: string
}
export const MyInput = ({children, className, ...props}: InputProps) =>{
    return ( 
        <input {...props} className={ClassNames(cls.input, {}, [className])}
        >
            {children}
        </input>
    )
}