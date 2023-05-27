'use client'
import { useEffect } from 'react';
import styles from '../styles/home/Home.module.css'
import Link from 'next/link'

export default function Description(){

    useEffect(() => {
        AOS.init();
    }, []);
    
    return (
        <div className={styles.ContainerHome}>
            <div id='more' className={styles.ContainerDescription}>
                <div data-aos="fade-down" className={styles.divDescription}>
                    <h6><b>Welcome to</b></h6>
                    <h4 className={styles.TitleDescription}>Almarena Hotel</h4>
                    <h6><b>HAWÁI</b></h6>
                    <p>Immersed in the forest and with dream views of the sea, is Almarena Apart & Hotel Boutique. The ideal place to give or treat yourself to a moment of reconnection at any time of the year. Couples, families and groups of friends choose us for the warmth and excellence of the staff, for the technological
                    equipment and for the fresh and modern decoration.
                    </p>

                    <Link className={styles.LinkD} href='/recreation'>Read More</Link>
                </div>
                <div data-aos="zoom-out">
                    <img className={styles.imgDescription} src="https://s7d1.scene7.com/is/image/marriotts7prod/mc-hnmmc-soak-up-the-sun-23623:Classic-Hor?wid=1336&fit=constrain" alt="" width="600px" />
                </div>
            </div>
            <div id='more' className={styles.ContainerDescription}>
                <div data-aos="zoom-in">
                    <img className={styles.imgDescription} src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-torches-0134-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*" alt="" width="600px" />
                </div>
                <div data-aos="fade-left" className={styles.divDescription}>
                    <h6><b>New sunset cookot</b></h6>
                    <h4 className={styles.TitleDescription}>Amarena Hotel</h4>
                    <p>Summer fun meets good eats with Amarena Resort's new Sunset Cookout, an oceanside buffet perfect for the warm balmy nights. Join us at Luau Gardens for a masterfully crafted Sunset Cookout featuring giant yard games, live music, keiki activities and fire dance finale. Enjoy casual dining at picnic tables with a delectable spread of fresh starters like watermelon salad, fire-grilled meats, fish, and veggies, and a selection of desserts including a DIY gourmet s'mores station.</p>
                    <Link className={styles.LinkD} href='/reservation'>Read More</Link>
                </div>
            </div>
            <div id='more' className={styles.ContainerDescription}>
                <div data-aos="fade-right" className={styles.divDescription}>
                    <h6><b>Sundeck Collection</b></h6>
                    <h4 className={styles.TitleDescription}>Amarena Hotel</h4>
                    <p>Our newly launched, highly coveted Sundeck Collection offers an elevated experience among Amarena hotel suites. Leaning into Hawaiian hospitality and the simple sophistication, these ground-level rooms offer an additional 150 square feet of expansive outdoor living space directly off your guest room, and convenient access and proximity to the beach walk, lawn, and pools. Perfectly positioned close to the ocean's edge, featuring expansive lanais, each accommodation has been designed to be a seamless indoor/outdoor experience.</p>
                    <Link className={styles.LinkD} href='/rooms'>Read More</Link>
                </div>
                <div data-aos="zoom-out">
                    <img className={styles.imgDescription} src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-sundeck-5873-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="600px" />
                </div>
            </div>
        </div>
    )
}