'use client'
import React, { useEffect } from 'react'
import styles from '../styles/home/Home.module.css'
import Link from 'next/link'

export default function LinksRutas(){

    useEffect(() => {
        AOS.init();
     }, []);
    return (
        <div className={styles.FotosHome}>
                <div>
                    <h4 className={styles.TitleLink}>Rooms & Suites</h4>
                    <br />
                    <div className={styles.photoContainer} data-aos="zoom-in-down">
                        <img className={styles.photo} src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-guestroom-0196-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width='300px'/>
                    </div>
                    <Link className={styles.LinkD} href='/rooms'>View More</Link>
                </div>
                <div>
                    <h4 className={styles.TitleLink}>Gastronomy</h4>
                    <br />
                    <div className={styles.photoContainer} data-aos="zoom-in-down">
                        <img className={styles.photo} src="https://s7d1.scene7.com/is/image/marriotts7prod/mc-hnmmc-kapa-somen-salad-202204-25860:Classic-Hor?wid=1215&fit=constrain" alt="" width='300px'/>
                    </div>
                    <Link className={styles.LinkD} href='/gastronomy'>View More</Link>
                </div>
                <div>
                    <h4 className={styles.TitleLink}>Activities</h4>
                    <br />
                    <dir className={styles.photoContainer} data-aos="zoom-in-down">
                        <img className={styles.photo} src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-pool-7809-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width='300px'/>
                    </dir>
                    <Link className={styles.LinkD} href='/activities'>View More</Link>
                </div>
            </div>
    )
}