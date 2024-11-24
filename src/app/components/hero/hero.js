import style from "./hero.module.css";
import RegularButton from "@/app/components/utils/button-basic/button";


function Hero(){
    const linkImg = "pp.jpg";
    return <section>
        <div className={style.person}>
            <div className={style.circleProfile}>
                <img className={style.imgProfile} src={linkImg} alt=""/>
            </div>
            <button className={style.regularButton}>Kephren Nze</button>
        </div>
        <div className={style.heroText}>
            <h1>I Build digital
                solutions, brands, and
                services.</h1>
            <RegularButton mode={false} text="Last project"> </RegularButton>
        </div>
    </section>
}


export default Hero;