import styles from './present-card.module.css'
import { SquareUserRound, GraduationCap,Flame, Cpu, History, LogOut } from 'lucide-react';
import ButtonCV from "@/app/components/utils/button-cv/button";


function PresentCard(){
    const strokeWidth = 1.5;
    const profileImg ='./pp.jpg';
    return <div className={styles.container}>
        <div className={styles.left}>
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
        <div className={styles.mid}>
            <div className={styles.hero}>
                <img src={profileImg} alt=""/>
                <div>
                    <span className={styles.label}>Just Graduated</span>
                    <p className={styles.name}>Kephren NZE</p>
                    <div className={styles.infos}>
                        <div>School <span> ISM Digital Campus</span></div>
                        <div>Age <span> 19</span></div>
                        <div>Class <span> Security of Information System Management</span></div>
                        <div>Level <span> MBA 1</span></div>
                    </div>
                    <ButtonCV text="View All Profile" type={true}></ButtonCV>
                </div>
            </div>
            <div className={styles.grid}>
                <div>
                    <div className={styles.head}>
                        <div className={styles.h2}>Area centers</div>
                        <div className={styles.more}>More</div>
                    </div>
                    <div className={styles.infos}>
                        <div>School <span> ISM Digital Campus</span></div>
                    </div>
                </div>
                <div>
                    <div className="head">
                        <div className={styles.h2}>Area centers</div>
                        <a >More</a>
                    </div>
                    <div className={styles.infos}>
                        <div>School <span> ISM Digital Campus</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.right}></div>
    </div>
}

export default PresentCard;