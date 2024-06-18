import empty from "../../img/rafiki.png"

export const NoteListEmpty = () =>{
    return (
  <div className="note_empty">
  <img src={empty}></img>
    <p>Create your first note !</p>
  </div>  
    )
}

