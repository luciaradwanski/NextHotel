'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styles from '../../styles/Recreation.module.css'
import Autoplay from 'embla-carousel-autoplay'

export function Carousel() {

    // const [emblaRef] = useEmblaCarousel()
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

    return (
        <div>
            <div className={styles.ContainerCarousel}>
                <div>
                    <h6><b>Recreation & Fitness</b></h6>
                    <h4 className={styles.TitleDescription}>Almarena Apart & Hotel</h4>
                    <h6><b>New York</b></h6>
                    <p className={styles.parrafoCarousel}>Dear guests, at our hotel we want your experience to be extraordinary, full of fun and variety. In addition to the wonderful facilities and activities mentioned above, we are pleased to inform you that we have a wide range of additional activities for your enjoyment. From relaxing bike rides in the surrounding countryside, to exhilarating hikes through the beautiful natural landscapes, to rejuvenating spa sessions and interactive cooking classes, there is something for everyone. <br/>To get a fuller look at these exciting options, we invite you to explore the images on the attached carousel, which capture the essence of each activity. We are excited to provide you with a complete and varied experience during your stay with us. We hope you enjoy all the activities we offer to the fullest and create unforgettable memories at our hotel!
                    </p>
                </div>
                <div className={styles.emblaRecreation} ref={emblaRef}>
                    <div className={styles.EmblaContainerRecreation}>
                        <div className={styles.EmbleSlideRecreation}>
                        <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-pool-8081-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>    
                        </div>
                        <div className={styles.EmbleSlideRecreation}>
                            <img src="https://s7d1.scene7.com/is/image/marriotts7prod/mc-hnmmc-nalu-adventure-pool22598-00708:Classic-Hor?wid=1215&fit=constrain" alt="" width="400px"/>
                        </div>
                        <div className={styles.EmbleSlideRecreation}>
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-waterslides-0213-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>
                        </div>
                        <div className={styles.EmbleSlideRecreation}>
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-maluhia-0146-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>
                        </div>
                        <div className={styles.EmbleSlideRecreation}>
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-casabella-7782-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>
                        </div>
                        <div className={styles.EmbleSlideRecreation}>
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-fitness-0215-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>
                        </div>
                        <div className={styles.EmbleSlideRecreation}>
                            <img src="https://s7d1.scene7.com/is/image/marriotts7prod/mc-hnmmc-splash-zone-26861:Classic-Hor?wid=1215&fit=constrain" alt="" width="400px"/>
                        </div>
                        <div className={styles.EmbleSlideRecreation}>
                            <img src="https://s7d1.scene7.com/is/image/marriotts7prod/mc-hnmmc-waterfalls-15130:Classic-Hor?wid=1215&fit=constrain" alt="" width="400px"/>
                        </div>
                        <div className={styles.EmbleSlideRecreation}>
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-game-space-2280-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>
                        </div>
                        <div className={styles.EmbleSlideRecreation}>
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-paddle-0192-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>
                        </div>
                        <div className={styles.EmbleSlideRecreation}>
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-game-0149-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>
                        </div>
                        <div className={styles.EmbleSlideRecreation}>
                            <img src="https://s7d1.scene7.com/is/image/marriotts7prod/mc-hnmmc-outrigger-canoe-10777:Classic-Hor?wid=1215&fit=constrain" alt="" width="400px"/>
                        </div>
                        <div className={styles.EmbleSlideRecreation}>
                            <img src="https://s7d1.scene7.com/is/image/marriotts7prod/mc-hnmmc-outrigger-canoe-37801:Classic-Hor?wid=1215&fit=constrain" alt="" width="400px"/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}