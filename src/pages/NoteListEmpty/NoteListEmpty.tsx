import empty from "../../img/rafiki.png"
import cls from "./NoteListEmpry.module.scss"
export const NoteListEmpty = () =>{
    return (
  <div className={cls.note_empty}>
  <img src={empty}></img>
    <p>Create your first note !</p>
  </div>  
    )
}

