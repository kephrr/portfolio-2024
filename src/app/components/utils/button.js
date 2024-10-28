import styles from  "./button.module.css";
import globals from "../../globals.css";



function RegularButton({text}){
    return <button className={styles.regularButton}
        >{text}</button>

}

export default RegularButton;