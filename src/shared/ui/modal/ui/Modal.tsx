import { ChangeEvent, ReactNode, useCallback, useEffect, useRef, useState } from "react";
import cls from "./Modal.module.scss"
import { ClassNames } from "shared/lib/ClassNames/ClassNames";
import {randomColor} from  "randomcolor"
import { useDispatch } from "react-redux";
import { NoteDataAction } from "App/Providers/Redux/Slice/NoteDataSlice";
interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
}

export const Modal = ( props: ModalProps) => {
  const dispatch = useDispatch()

  const noteBackgroundColor = randomColor({
    luminosity: 'light',
 })

  const [isClosing, setIsClosing] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const { 
    className,
    children,
    isOpen,
    onClose } =  props

    const timeRef = useRef<ReturnType<typeof setTimeout>>()

    const closeHandler = useCallback(()=>{
      if(onClose){
        setIsClosing(true)
        timeRef.current = setTimeout(() => {
          onClose()
          setIsClosing(false)
        }, 300);
    }
    },[onClose])


    const onContentClick = (e: React.MouseEvent ) => {
      e.stopPropagation()
  }


  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if(e.key == 'escape'){
        closeHandler
    }
}, [closeHandler])


useEffect(()=>{

  if(isOpen){
      window.addEventListener('keydown', onKeyDown)
  }

  return () => {
      clearTimeout(timeRef.current)
      window.removeEventListener('keydown', onKeyDown)
  }

}, [isOpen, onKeyDown])

useEffect(()=>{
  if(isOpen){
      setIsMounted(true)
  }
}, [isOpen])

const mods: Record<string, boolean> = {
  [cls.opened]: isOpen,
  [cls.closed]: isClosing
}



    return (
        <div className={ClassNames(cls.Modal, mods, [className])}>
          
            <div className={cls.note__title}>
              <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}