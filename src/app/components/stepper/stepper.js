"use client";
import style from './stepper.module.css';
import React, { useRef, useState, useEffect } from 'react';

function Stepper() {
    // Déclarations
    const [steps] = useState([
        {
            id: 1,
            title: 'Site E-commerce',
            content: 'C\'est un site e-commerce, tout ce qu\'il y\'a de plus normal',
            video: 'video/step1.mp4',
            git : ''
        },
        {
            id: 2,
            title: 'Band UP | Manager de groupe',
            content: 'Solution de création de groupe en y appliquant des contraintes concrètes d\'une entreprise',
            video: 'video/step2.mp4',
            git : 'bandup'
        },
        {
            id: 3,
            title: 'Ger-na',
            content: 'Application web qui permet de dénoncer la fraude au Sénégal',
            video: 'video/step3.mp4',
            git : 'ger-na'
        }
    ]);

    const [activeIndex, setActiveIndex] = useState(-1);
    const [progress, setProgress] = useState(0);
    const [link, setLink] = useState("#");
    const videoRef = useRef(null);

    // Effet pour gérer la lecture de la vidéo et la mise à jour de la barre de progression
    useEffect(() => {
        const videoElement = videoRef.current;

        if (videoElement && activeIndex !== -1) {
            videoElement.currentTime = 0;
            videoElement.play();

            const handleTimeUpdate = () => {
                let progressPercentage = (videoElement.currentTime / videoElement.duration) * 100;
                if (progressPercentage === 100) {
                    setProgress(0);
                    videoElement.currentTime = 0;
                    videoElement.play();
                }
                setProgress(progressPercentage);
            };

            videoElement.addEventListener('timeupdate', handleTimeUpdate);

            return () => {
                videoElement.removeEventListener('timeupdate', handleTimeUpdate);
                setProgress(0);
            };
        }
    }, [activeIndex]);


    // Comportement au survol et à la sortie du survol
    const handleMouseEnter = (index) => {
        setActiveIndex(index);
        setLink("https://github.com/kephrr/"+steps[index].git)
    };


    const handleMouseLeave = () => {
        setActiveIndex(-1);
        if (videoRef.current) {
            videoRef.current.pause();
            setProgress(0);
        }

    };

    // Template
    return (
        <div className={style.stepper}>
            <div className={style.opener}>
                <ul>
                    {steps.map((step, index) => (
                        <li
                            className={style.Step}
                            key={index}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className={style.id}>{index + 1}</div>
                            <div className={style.head}>
                                <p className={style.title}>{step.title}</p>
                                <p className={style.content}>{step.content}</p>
                                {index === activeIndex && (
                                    <div
                                        className={style.progressBar}
                                        style={{width: `${progress}%`}}
                                    ></div>
                                )}
                            </div>
                            {index === activeIndex && (
                                <a href={link}>
                                    <div className={style.github}>source</div>
                                </a>
                            )}
                        </li>
                    ))}
                    <p className={style.commentDev}>
                        Certaines vidéos sont décoratives car celles prévues au développement ne sont pas encore au
                        point
                    </p>
                </ul>
            </div>
            <div className={style.viewer}>
                {activeIndex !== -1 && (
                    <video
                        ref={videoRef}
                        controls
                        className={style.StepVideo}
                        src={steps[activeIndex].video}
                    />
                )}
            </div>
        </div>
    );
}

export default Stepper;
