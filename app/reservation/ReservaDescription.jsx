'use client'
import { useEffect } from 'react';
import styles from '../../styles/home/Home.module.css'
import Link from 'next/link'

export function ReservaDescription(){

    useEffect(() => {
        AOS.init();
    }, []);
    
    return (
        <div className={styles.ContainerHome}>
            <div id='more' className={styles.ContainerDescription}>
                <div data-aos="fade-down">
                    <img data-aos="zoom-out" className={styles.imgDescription} src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-center-0216-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="600px" />
                </div>
                <div data-aos="zoom-in-left">
                    <h6><b>Welcome to Reservation</b></h6>
                    <h4 className={styles.TitleDescription}>Almarena Hotel</h4>
                    <h6><b>Aloha</b></h6>
                    <p>¡Welcome to our city! We are pleased that you have decided to visit our wonderful Hotel. We are here to make your experience unforgettable. Before you can make your reservation, we kindly ask you to upload your personal data. This is necessary to ensure that all information is correctly recorded and to ensure that your reservation goes smoothly.</p>
                </div>
            </div>
        </div>
    )
}