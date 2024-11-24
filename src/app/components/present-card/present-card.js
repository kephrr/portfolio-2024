import styles from './present-card.module.css'
import { SquareUserRound, GraduationCap,Flame, Cpu, History, LogOut } from 'lucide-react';


function PresentCard(){
    const strokeWidth = 1.5;
    return <div className={styles.container}>
        <div className="left">
            <div className={styles.ul}>
                <div className={styles.li}> <SquareUserRound strokeWidth={strokeWidth}></SquareUserRound> Personal Informations</div>
                <div className={styles.li}> <GraduationCap strokeWidth={strokeWidth}></GraduationCap> Education</div>
                <div className={styles.li}> <Flame strokeWidth={strokeWidth}></Flame> Motivation</div>
                <div className={styles.li}> <Cpu strokeWidth={strokeWidth}></Cpu> Competencies</div>
                <div className={styles.li}><History strokeWidth={strokeWidth}></History> Experiencies</div>
            </div>
            <div className={styles.logout}>
                <LogOut strokeWidth={strokeWidth}></LogOut>Logout
            </div>
        </div>
        <div className={styles.mid}></div>
        <div className={styles.right}></div>
    </div>
}

export default PresentCard;