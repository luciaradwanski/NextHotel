'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styles from '../../styles/rooms/ListOfRooms.module.css'
import Autoplay from 'embla-carousel-autoplay'

export function EmblaCarousel(){

    // const [emblaRef] = useEmblaCarousel()
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

    return (
        <div>
            <div className={styles.ContainerCarousel}>
                <div>
                    <h6><b>Spa & more</b></h6>
                    <h4 className={styles.TitleDescription}>Almarena Apart & Hotel</h4>
                    <h6><b>HAWÁI</b></h6>
                    <p className={styles.parrafoCarousel}>Our spa offers additional options such as body wraps and essential oil massages that will complement and enhance the benefits of skin treatments. Allow yourself some time for pampering and personal care in our spa, where our goal is to provide a holistic and rejuvenating experience for your skin. Discover the transformative power of our skin treatments and feel the confidence and freshness that radiant skin can offer during your stay at our hotel!
                    </p>
                </div>
                <div className={styles.embla} ref={emblaRef}>
                    <div className={styles.embla__container}>
                        <div className={styles.embla__slide}>
                        <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-spa-0218-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>    
                        </div>
                        <div className={styles.embla__slide}>
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-cabanas-5977-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>
                        </div>
                        <div className={styles.embla__slide}>
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-spa-0217-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>
                        </div>
                        <div className={styles.embla__slide}>
                            <img src="https://s7d1.scene7.com/is/image/marriotts7prod/mc-hnmmc-kg-86-mandara-spa-lounge-26000:Classic-Hor?wid=1215&fit=constrain" alt="" width="400px"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}