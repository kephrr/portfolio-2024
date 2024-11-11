import style from "./slider.module.css";

function Slider() {
    return <div className={style.slider}>
        <div className={style.sliderContent}>
            <img src="React.webp" alt="react"/>
            <img src="angular.png" alt="angular"/>
            <img src="csharp.png" alt="csharp"/>
            <img src="bootstrap.png" alt="bootstrap"/>
            <img src="mysql.png" alt="mysql"/>
            <img src="tailwindcss.png" alt="tailwindcss"/>
            <img src="figma.webp" alt="figma"/>
            <img src="symfony.png" alt="symfony"/>
            <img src="springboot.png" alt="springboot"/>
            <img src="flutter.png" alt="flutter"/>
        </div>
    </div>
}

export default Slider;