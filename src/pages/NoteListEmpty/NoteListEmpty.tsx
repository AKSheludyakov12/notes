import empty from "../img/rafiki.png";
import React from "react";
import cls from "./NoteListEmpry.module.scss"
import add from "../img/add.svg";
import { Link } from "react-router-dom";

export const NoteListEmpry = () =>{
    return (

  
  <div className="note_empty">
  <img src={empty}></img>
    <p>Create your first note !</p>
  </div>
  

    )
}

