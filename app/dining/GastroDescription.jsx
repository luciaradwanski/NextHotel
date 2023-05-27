'use client'
import { useEffect } from 'react';
import styles from '../../styles/home/Home.module.css'
import Link from 'next/link'

export default function GastroDescription(){

    useEffect(() => {
        AOS.init();
    }, []);
    
    return (
        <div className={styles.ContainerHome}>
            <div id='more' className={styles.ContainerDescription}>
                <div data-aos="fade-up" data-aos-duration="3000">
                    <h6><b>Welcome to Gastronomy of </b></h6>
                    <h4 className={styles.TitleDescription}>Almarena Hotel</h4>
                    <h6><b>New York</b></h6>
                    <p>Dear guests, at our hotel we offer you an exceptional culinary experience in our various restaurants. With a variety of dining options, we are sure you will find the perfect place to satisfy your tastes and cravings. From haute cuisine restaurants that offer gourmet dishes prepared by talented chefs, to cozy cafes where you can enjoy delicious desserts and quality coffee, our gastronomic offer is designed to please all palates. 
                        
                    </p>
                    
                </div>
                <div data-aos="zoom-out">
                    <img className={styles.imgDescription} src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/272985360.jpg?k=1d7000834b15053d672d2cf7d3c5e91fad99cee435e59f79f03168601e49272b&o=&hp=1" alt="" width="600px" />
                </div>
            </div>
            <div id='more' className={styles.ContainerDescription}>
                <div data-aos="zoom-out">
                    <img className={styles.imgDescription} src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-breakfast-1047-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="600px" />
                </div>
                <div data-aos="fade-up" data-aos-duration="3000">
                    <h6><b>BEST FOOD</b></h6>
                    <h4 className={styles.TitleDescription}>Breakfast Buffet</h4>
                    <p>Our breakfast is a complete experience, carefully prepared to satisfy all your tastes and preferences. From a variety of freshly baked breads, fresh fruits, and yogurts to hot options like scrambled eggs, bacon, and delicious pastries, each dish is made with high-quality ingredients and presented with attention to detail. In addition, we offer a selection of drinks such as fresh coffee, aromatic tea and refreshing juices to accompany your morning meal. We invite you to enjoy our delicious breakfast and start each morning of your stay on a tasty and satisfying note at our hotel!</p>
                    
                </div>
            </div>
            <div id='more' className={styles.ContainerDescription}>
                <div data-aos="fade-up" data-aos-duration="3000">
                    <h6><b>BEST FOOD</b></h6>
                    <h4 className={styles.TitleDescription}>Dinner Buffet</h4>
                    <p>We pride ourselves on using fresh, seasonal ingredients to provide you with an authentic dining experience and exceptional flavors. Whether you desire a romantic dinner, a relaxed brunch or a wine tasting experience, our restaurants are ready to delight your senses and make every meal a special occasion. We invite you to visit our restaurants and enjoy unforgettable moments full of flavor and culinary excellence during your stay at our hotel.</p>
                    
                </div>
                <div data-aos="zoom-out">
                    <img className={styles.imgDescription} src="https://s7d1.scene7.com/is/image/marriotts7prod/mc-hnmmc-kapa-beet-salad-202202-32488:Classic-Hor?wid=1215&fit=constrain" alt="" width="600px" />
                </div>
            </div>
            <div id='more' className={styles.ContainerDescription}>
                <div data-aos="zoom-out">
                    <img className={styles.imgDescription} src="https://s7d1.scene7.com/is/image/marriotts7prod/mc-hnmmc-guest-enjoying-a-cocktail-33928:Classic-Hor?wid=1215&fit=constrain" alt="" width="600px" />
                </div>
                <div data-aos="fade-up" data-aos-duration="3000">
                    <h6><b>BEST DRINK</b></h6>
                    <h4 className={styles.TitleDescription}>Cockteils</h4>
                    <p>Dear guests, immerse yourself in the exquisite world of mixology with our exclusive Wahai cocktails, prepared with passion and creativity in our hotel. Each of our bartenders is an expert in creating these irresistible tropical drinks, designed to transport you to the paradise beaches of Hawaii. From the classic Mai Tai to the refreshing Piña Colada to the bold Blue Hawaiian, each sip is an explosion of exotic flavors and freshness. Our Wahai cocktails are carefully made with selected ingredients, such as premium rum, natural juices and touches of tropical decoration. Whether you want to enjoy them by the pool, in our elegant bar or in the comfort of your room, these cocktails are the perfect option to relax and toast an unforgettable vacation. Discover the magic of our Wahai cocktails and let yourself be carried away by the vibrant and tropical spirit that they offer in each sip at our hotel!</p>
                    
                </div>
            </div>
        </div>
    )
}