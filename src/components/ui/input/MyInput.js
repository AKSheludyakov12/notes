import classes from './MyInput.module.css'

const MyInput = ({children, ...props}) =>{
    return ( 
        <input {...props} className={classes.myInp
        }
        >
            {children}
        </input>
    )
}

export default MyInput