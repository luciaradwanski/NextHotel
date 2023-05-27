'use client'
import { useEffect } from 'react';
import styles from '../../styles/home/Home.module.css'
import Link from 'next/link'

export function RecreationDescription(){

    useEffect(() => {
        AOS.init();
    }, []);
    
    return (
        <div className={styles.ContainerHome}>
            <div id='more' className={styles.ContainerDescription}>
                <div data-aos="fade-down">
                    <img data-aos="zoom-out" className={styles.imgDescription} src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-pool-0212-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="600px" />
                </div>
                <div data-aos="zoom-in-left">
                    <h6><b>Welcome to Recreation & Fitness of </b></h6>
                    <h4 className={styles.TitleDescription}>Almarena Hotel</h4>
                    <h6><b>WATER PARK</b></h6>
                    <p>We have an incredible water park that will delight the little ones. Imagine your children laughing and playing in the water as they slide down the slides and explore the colorful animal figures. Our goal is to provide unforgettable moments of fun during your stay. We hope you enjoy all the exciting activities that we have prepared in our water park to the fullest. We wish you a stay full of laughter and joy for the whole family!</p>
                    
                </div>
            </div>
            <div id='more' className={styles.ContainerDescription}>
                <div data-aos="zoom-in-right">
                    <h4 className={styles.TitleDescription}>Recreation & Fitness</h4>
                    <h6><b>GYM & YOGA</b></h6>
                    <p>Dear guests, we are pleased to share with you a wonderful opportunity to take care of your well-being during your stay at our hotel. We want to invite you to enjoy our outdoor activities, such as gymnastics and yoga. Imagine breathing in the fresh air while stretching your bodies and finding inner peace surrounded by beautiful scenery. Our goal is to provide you with calm and rejuvenating spaces so that you can take care of your mind and body. Take advantage of this opportunity to disconnect from stress and connect with yourself in a serene and revitalizing environment. We wish you a complete wellness experience during your stay at our hotel!.</p>
                    
                </div>
                <div>
                    <img data-aos="zoom-out" className={styles.imgDescription} src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-yoga-0178-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="600px" />
                </div>
            </div>
            <div id='more' className={styles.ContainerDescription}>
                <div>
                    <img data-aos="zoom-out" className={styles.imgDescription} src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-game-space-2281-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="600px" />
                </div>
                <div data-aos="zoom-in-left">
                    <h6><b>VIDEO GAMES</b></h6>
                    <h4 className={styles.TitleDescription}>Recreation & Fitness</h4>
                    <p>Dear guests, we are pleased to share with you an exciting news at our hotel: we have a game room for your enjoyment! We want to offer you a space full of fun and entertainment, where you can get together with friends and family to enjoy exciting games and unforgettable moments. Whether you want to challenge your loved ones to a game of pool, enjoy board games, or indulge in exciting video games, our game room is designed to provide hours of fun. We invite you to explore this space filled with joy and friendly competition. We hope you will immerse yourself in the fun and create lasting memories while staying at our hotel!</p>
                    
                </div>
            </div>
        </div>
    )
}