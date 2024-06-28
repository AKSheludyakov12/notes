import { MyInput } from "components/ui/input/MyInput"
import { ClassNames } from "shared"
import  cls from "./Header.module.scss"
import { useState } from "react";


interface HeaderProps {
    className?: string;
    searchQuery?:string;
    sort: string;
    setSort: (name:string) => void;
    onChangeInput?: (e) => void
}

export const Header = (props:HeaderProps) => {
    const {
        className,
        searchQuery, 
        onChangeInput,
        sort,
        setSort,
        ...otherProps
     } = props

     const filterList = [
        {name: "ALL"},
        {name: "Notes"},
        {name: "Todos"}
    ]

    return (
        <div className={ClassNames(cls.header, {}, [className])}>
            <MyInput
              value={searchQuery}
              placeholder="Search by the keyword..."
              onChange={onChangeInput}
              className={cls.search_input}
            ></MyInput>
            <div className={cls.filters}>
                {filterList.map((filter, index)=> (
                    <span className={filter.name === sort ? cls.active : cls.nonActive} onClick={()=>setSort(filter.name)}>{filter.name}</span>
                ))} 
            </div>
        </div>
    )
} 