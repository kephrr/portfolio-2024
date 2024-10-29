"use client";
import RegularButton from "@/app/components/utils/button";
import style from "./header.module.css";
import globals from "../../globals.css";
import CopyButton from "@/app/components/utils/copyButton";


function Header() {
    const TwitterLink = "https://x.com/KephJS";
    const BehanceLink = "https://www.behance.net/gallery/160429559/Kreative-PORTFOLIO-2023";
    const LinkedInLink = "https://www.linkedin.com/in/kephren-emmanuel-evoung-a54158252/";

    return (
        <header className={style.header}>
            <header className={style.contain}>
                <div className={style.headerItem}>
                    <div className={style.buttonContainer}>
                        <p>kephrrv2@gmail.com</p>
                        <CopyButton ></CopyButton>
                    </div>
                        <RegularButton mode={true} text="CV">
                        </RegularButton>
                </div>
                <div className={style.headerItem}>
                    <ul className={style.links}>
                        <a href={LinkedInLink}>
                            <li>LinkedIn</li>
                        </a>/
                        <a href={TwitterLink}>
                            <li>Twitter</li>
                        </a>/
                        <a href={BehanceLink}>
                            <li>behance</li>
                        </a>
                    </ul>
                </div>
            </header>
        </header>
    );
}

export default  Header;