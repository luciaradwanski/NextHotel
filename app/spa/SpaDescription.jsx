'use client'
import { useEffect } from 'react';
import styles from '../../styles/home/Home.module.css'
import Link from 'next/link'

export default function SpaDescription(){

    useEffect(() => {
        AOS.init();
    }, []);
    
    return (
        <div className={styles.ContainerHome}>
            <div id='more' className={styles.ContainerDescription}>
                <div data-aos="fade-down">
                    <img data-aos="zoom-out" className={styles.imgDescription} src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/462026141.jpg?k=eaf937bfa1e69ce3eefdf1ab86b76d370f761b802d87b09ef54169c524e03209&o=&hp=1" alt="" width="600px" />
                </div>
                <div data-aos="zoom-in-left">
                    <h6><b>Welcome to Spa of </b></h6>
                    <h4 className={styles.TitleDescription}>Almarena Hotel</h4>
                    <h6><b>SWIMMING POOL</b></h6>
                    <p>Our spa pool is designed to provide you with a calm and serene environment, where you can enjoy hydromassage jets that massage your body and relieve stress, as well as rest areas immersed in bubbles that will envelop you in a feeling of complete relaxation. In addition, the pool-spa has soft lighting and background music, creating a perfect environment to disconnect and revitalize. We invite you to immerse yourself in this unique experience and pamper yourself with quality time for your well-being during your stay at our hotel. We hope you enjoy the therapeutic benefits and tranquility that our pool-spa offers and create moments of deep relaxation and rejuvenation!</p>
                    
                </div>
            </div>
            <div id='more' className={styles.ContainerDescription}>
                <div data-aos="zoom-in-right">
                    <h6><b>MASSAGE ROOM</b></h6>
                    <h4 className={styles.TitleDescription}>Spa</h4>
                    <p>Summer fun meets good eats with Amarena Resort's new Sunset Cookout, an oceanside buffet perfect for the warm balmy nights. Join us at Luau Gardens for a masterfully crafted Sunset Cookout featuring giant yard games, live music, keiki activities and fire dance finale. Enjoy casual dining at picnic tables with a delectable spread of fresh starters like watermelon salad, fire-grilled meats, fish, and veggies, and a selection of desserts including a DIY gourmet s'mores station.</p>
                    
                </div>
                <div>
                    <img data-aos="zoom-out" className={styles.imgDescription} src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-cabanas-5977-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="600px" />
                </div>
            </div>
            <div id='more' className={styles.ContainerDescription}>
                <div>
                    <img data-aos="zoom-out" className={styles.imgDescription} src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/462023262.jpg?k=ffc38b7fb577fb7be256617c54c2ceb532d030a591eafe004811413c43b3f3a3&o=&hp=1" alt="" width="600px" />
                </div>
                <div data-aos="zoom-in-left">
                    <h6><b>FACIAL BEAUTY</b></h6>
                    <h4 className={styles.TitleDescription}>Spa</h4>
                    <p>Our specialized therapists use high-quality products and advanced techniques to customize each treatment to your specific needs. From hydrating and revitalizing facials to exfoliating and rejuvenating treatments, we are committed to enhancing your skin's natural beauty and revitalizing its appearance. Our treatments are designed to purify, nourish and balance the skin, leaving it radiant and luminous.</p>
                    
                </div>
            </div>
        </div>
    )
}