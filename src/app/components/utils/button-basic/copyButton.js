import {useState} from "react";
import styles from "@/app/components/utils/button-basic/button.module.css";


function CopyButton(){
    const [textToCopy] = useState("kephnze@gmail.com");
    const [text,setText]=useState("Copier");


    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                // Afficher Copié! pendant 3 secondes lorsque le contenu a été copié
                setText('Copied!')
                const timer = setTimeout(() => {
                    setText('Copy')
                }, 3000);
            })
            .catch(err => {
                console.error("Error while copying the e-mail adress : ", err);
            });
    };

    return <button onClick={handleCopy}
                className={styles.copyButton}
        >{text}</button>;
}

export default CopyButton;