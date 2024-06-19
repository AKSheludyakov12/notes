import React,{ ChangeEvent, InputHTMLAttributes, ReactNode } from 'react'
import cls from './MyInput.module.scss'
import { useDispatch } from 'react-redux'
import { NoteDataAction } from 'App/Providers/Redux/Slice/NoteDataSlice'
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