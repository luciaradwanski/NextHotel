'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styles from '../styles/Home.module.css'
import Autoplay from 'embla-carousel-autoplay'

const EmblaCarousel = () => {

    // const [emblaRef] = useEmblaCarousel()
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

    return (
        <div className={styles.ContainerCarousel}>
            <div>
                <h6><b>Welcome to</b></h6>
                <h4 className={styles.TitleDescription}>Amarena Apart & Hotel</h4>
                <h6><b>HAWÁI</b></h6>
                <p className={styles.parrafoCarousel}>Beyond a pool experience, Amarena is a wellness oasis for the health and vitality of the body. The exclusive adults-only wellness sanctuary offers curated sensory delights designed to relax and rejuvenate mind, body, and soul. With limited spaces available, guests may book full-day access in advance to enjoy culinary programming, bespoke spa treatments, and wellness workshops. Click to book your Amarena experience.
                </p>
            </div>
            <div className={styles.EmblaHome} ref={emblaRef}>
                <div className={styles.EmblaHomeContainerHome}>
                    <div className={styles.EmblaSlideHome}>
                    <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-sundeck-room-0759-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1720px:*" alt="" width="400px"/>    
                    </div>
                    <div className={styles.EmblaSlideHome}>
                        <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-sundeck-room-0472-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1720px:*" alt="" width="400px"/>
                    </div>
                    <div className={styles.EmblaSlideHome}>
                        <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-sundeck-0201-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1720px:*" alt="" width="400px"/>
                    </div>
                    <div className={styles.EmblaSlideHome}>
                        <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-sundeck-exterior-0463-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1720px:*" alt="" width="400px"/>
                    </div>
                    <div className={styles.EmblaSlideHome}>
                        <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-sundeck-5873-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1720px:*" alt="" width="400px"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmblaCarousel