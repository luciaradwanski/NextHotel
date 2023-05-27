'use client'
import { useEffect } from 'react';
import styles from '../../styles/home/Home.module.css'
import Link from 'next/link'

export function Detail(){

    useEffect(() => {
        AOS.init();
    }, []);
    
    return (
        <div className={styles.ContainerHome}>
            <div id='more' className={styles.ContainerDescription}>
                <div data-aos="zoom-in-left">
                    <h6><b>Thank you for booking at our</b></h6>
                    <h4 className={styles.TitleDescription}>Almarena Hotel</h4>
                    <h6><b>Aloha</b></h6>
                    <p>Thank you very much for providing your information and making the reservation! We are excited to welcome you and we hope you enjoy your stay with us to the fullest. We are waiting with open arms!</p>
                </div>
                <div data-aos="fade-down">
                    <img data-aos="zoom-out" className={styles.imgDescription} src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-view-0205-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="600px" />
                </div>
            </div>
        </div>
    )
}