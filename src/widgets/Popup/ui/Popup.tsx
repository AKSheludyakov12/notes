import { ClassNames, Modal } from "shared";
import cls from "./Popup.module.scss"
import { Ref, useCallback, useDebugValue, useEffect, useRef, useState } from "react";
import { Button, ButtonTheme } from "components/ui/button/MyButton";
import { useDispatch } from "react-redux";
import { NoteDataAction } from "App/Providers/Redux/Slice/NoteDataSlice";
import { NewNote } from "../NewNote";

interface PopupProps { 
    isOpen?: boolean;
    setIsOpenPopup?: (boolean)=>void
    className?: string;
    
}

export const Popup = (props:PopupProps) => {
    const dispatch = useDispatch()
    const {isOpen,setIsOpenPopup,className   } = props
    const popupRef = useRef<HTMLDivElement>(null);
    const [newNoteModal, setNewNoteModal] = useState(false)
    const [newListModal, setNewListModal] = useState(false)

    const showNewNoteModal = () => {
        setNewNoteModal(true)
        
    }
    const showNewListModal = () => {
        setNewListModal(true)
       
    }


    const onCloseModal = useCallback(()=>{
        setNewNoteModal(false)
        setIsOpenPopup(false)

      },[])

if(isOpen){

    return (
        <>
         {newNoteModal && <NewNote
            isOpen={newNoteModal}
            onClose={onCloseModal}/>}

        {newListModal && <Modal
            isOpen={newListModal}/>}
        <div className={cls.overlay} onClick={()=>setIsOpenPopup(false)}>
            <div className={ClassNames(cls.popup)} ref={popupRef}>
                
                <div className={cls.items} onClick={e=> e.stopPropagation()}>
                    <span className={cls.item}>
                        <Button theme={ButtonTheme.POPUP}
                        onClick={showNewNoteModal}>
                        Добавить заметку
                        </Button>
                    </span>
                   
                    <span className={cls.item}>
                        <Button theme={ButtonTheme.POPUP}
                        onClick={showNewNoteModal}>
                        Добавить список
                        </Button>
                    </span>
                </div>
            </div>
        </div>
                            </>
    );

}

};