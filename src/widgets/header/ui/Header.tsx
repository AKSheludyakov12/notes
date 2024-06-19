import { MyInput } from "components/ui/input/MyInput"
import { ClassNames } from "shared"
import  cls from "./Header.module.scss"


interface HeaderProps {
    className?: string;
    searchQuery?:string;
    onChangeInput?: (e) => void
}

export const Header = (props:HeaderProps) => {
    const {
        className,
        searchQuery, 
        onChangeInput,
        ...otherProps
     } = props
    return (
        <div className={ClassNames(cls.header, {}, [className])}>
            <MyInput
              value={searchQuery}
              placeholder="Search by the keyword..."
              onChange={onChangeInput}
            ></MyInput>
            <h1 className={cls.title} >Notes</h1>
        </div>
    )
} 