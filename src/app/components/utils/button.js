import styles from  "./button.module.css";


function RegularButton({text,mode}){
    return <button className={mode?styles.regularButton:styles.regularButtonDark}
        >{text}</button>
}

export default RegularButton;