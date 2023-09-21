'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styles from '../../styles/reservation.module.css'
import Autoplay from 'embla-carousel-autoplay'

const EmblaCarousel = () => {

    // const [emblaRef] = useEmblaCarousel()
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

    return (
        <div>
            <div className={styles.ContainerCarousel}>
                <div>
                    <h6><b>Reservation of</b></h6>
                    <h4 className={styles.TitleDescription}>Almarena Apart & Hotel</h4>
                    <h6><b>New York</b></h6>
                    <p className={styles.parrafoCarousel}>Your privacy is of the utmost importance to us, so you can rest easy knowing that your data will be treated confidentially and in compliance with all data protection regulations. Thank you for trusting us and enjoy your stay in our city!
                    </p>
                </div>
                <div className={styles.EmblaReserva} ref={emblaRef}>
                    <div className={styles.EmblaContainerReserva}>
                        <div className={styles.EmblaSlideReserva}>
                        <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-suite-0161-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>    
                        </div>
                        <div className={styles.EmblaSlideReserva}>
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-suite-0163-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>
                        </div>
                        <div className={styles.EmblaSlideReserva}>
                            <img src="https://s7d1.scene7.com/is/image/marriotts7prod/mc-hnmmc-oceanfront-sundeck-37941-80269:Classic-Hor?wid=1215&fit=constrain" alt="" width="400px"/>
                        </div>
                        <div className={styles.EmblaSlideReserva}>
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-living-0132-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>
                        </div>
                        <div className={styles.EmblaSlideReserva}>
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-suite-0170-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>
                        </div>
                        <div className={styles.EmblaSlideReserva}>
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-suite-0173-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>
                        </div>
                        <div className={styles.EmblaSlideReserva}>
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-sundeck-0203-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>
                        </div>
                        <div className={styles.EmblaSlideReserva}>
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-suite-0166-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>
                        </div>
                        <div className={styles.EmblaSlideReserva}>
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-suite-0198-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>
                        </div>
                        <div className={styles.EmblaSlideReserva}>
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-suite-0175-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>
                        </div>
                        <div className={styles.EmblaSlideReserva}>
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-second-bedroom-5863-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>
                        </div>
                        <div className={styles.EmblaSlideReserva}>
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-suite-0174-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>
                        </div>
                        <div className={styles.EmblaSlideReserva}>
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-suite-0171-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>
                        </div>
                        <div className={styles.EmblaSlideReserva}>
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-bathroom-2567-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>
                        </div>
                        <div className={styles.EmblaSlideReserva}>
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-bathroom-0118-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>
                        </div>
                        <div className={styles.EmblaSlideReserva}>
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-second-bathroom-5862-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>
                        </div>
                        <div className={styles.EmblaSlideReserva}>
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-bathroom-5872-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>
                        </div>
                        <div className={styles.EmblaSlideReserva}>
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-bathroom-5869-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmblaCarousel