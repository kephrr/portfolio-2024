import {useState} from "react";
import styles from "@/app/components/utils/button.module.css";
import globals from "../../globals.css";


function CopyButton(){
    const [textToCopy] = useState("kephnze@gmail.com");
    const [text,setText]=useState("Copier");


    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                // Afficher Copié! pendant 3 secondes lorsque le contenu a été copié
                setText('Copié!')
                const timer = setTimeout(() => {
                    setText('Copier')
                }, 3000);
            })
            .catch(err => {
                console.error("Erreur lors de la copie : ", err);
            });
    };

    return <button onClick={handleCopy}
                className={styles.copyButton}
        >{text}</button>
}

export default CopyButton;