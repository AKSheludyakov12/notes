
import {  Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { MainPage } from "../pages/MainPage/ui/MainPage";
import { getNote } from "./Providers/Redux/selectors/getNotes";
import { useSelector } from "react-redux";


const  App = () => {

const notes = useSelector(getNote)
  return (
       <MainPage/>
  );
}

export default App
