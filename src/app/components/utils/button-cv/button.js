import styles  from './button.module.css';

function ButtonCV({text, type}){
    let style = styles.filled;
    if (type) style = styles.outed;
    return <button className={style}>{text}</button>
}

export default ButtonCV;