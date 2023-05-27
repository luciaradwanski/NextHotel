'use client'
import { useEffect } from 'react';
import styles from '../../styles/home/Home.module.css'
import Link from 'next/link'

export default function RoomDescription(){

    useEffect(() => {
        AOS.init();
    }, []);
    
    return (
        <div className={styles.ContainerHome}>
            <div id='more' className={styles.ContainerDescription}>
                <div data-aos="fade-down">
                    <img data-aos="zoom-out" className={styles.imgDescription} src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-suite-0172-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="600px" />
                </div>
                <div data-aos="zoom-in-left">
                    <h6><b>Welcome to Rooms & Suites of </b></h6>
                    <h4 className={styles.TitleDescription}>Almarena Hotel</h4>
                    <h6><b>BED ROOM</b></h6>
                    <p>Dear guests, our rooms have been carefully designed to provide comfort, elegance and a cozy atmosphere that will make you feel at home. From our standard rooms, which offer all the modern comforts you need for a pleasant stay, to our spacious suites, equipped with luxurious details and separate living areas for an even more special experience, we have the perfect option for each of you. In addition, our rooms and suites are beautifully decorated with a touch of unique style and have breathtaking views that complement your experience. Whatever choice you make, we assure you an unforgettable stay and quality rest.</p>
                    
                </div>
            </div>
            <div id='more' className={styles.ContainerDescription}>
                <div data-aos="zoom-in-right">
                    <h4 className={styles.TitleDescription}>Rooms & Suites</h4>
                    <h6><b>BATHROOM</b></h6>
                    <p>We have designed our bathrooms to provide you with a space for relaxation and rejuvenation. They will enjoy spacious rain showers, deep soaking tubs to soak in a relaxing bath, and a selection of high-quality personal care products. Additionally, our restrooms are spotlessly clean and well lit, creating a fresh and rejuvenating environment. We want them to feel pampered and completely refreshed after each visit to the bathroom. We hope you enjoy this luxurious experience and delight in every detail during your stay at our hotel!</p>
                    
                </div>
                <div>
                    <img data-aos="zoom-out" className={styles.imgDescription} src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-bathroom-5872-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="600px" />
                </div>
            </div>
            <div id='more' className={styles.ContainerDescription}>
                <div>
                    <img data-aos="zoom-out" className={styles.imgDescription} src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-suite-0179-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="600px" />
                </div>
                <div data-aos="zoom-in-left">
                    <h6><b>LIVING ROOM</b></h6>
                    <h4 className={styles.TitleDescription}>Rooms & Suites</h4>
                    <p>Our living rooms are designed with a focus on sophistication and comfort, offering you a warm and welcoming environment to rest and socialize. Each living room has comfortable sofas and armchairs where you can sit and enjoy your favorite program on the flat screen TV, or simply relax while reading a good book. We have also created functional workspaces in case you need to stay connected during your stay. With a careful selection of furniture and elegant decoration, our living room becomes the perfect place to rest and enjoy quiet moments in the privacy of your room.</p>
                </div>
            </div>
        </div>
    )
}