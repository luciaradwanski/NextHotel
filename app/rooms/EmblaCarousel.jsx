'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styles from '../../styles/rooms/ListOfRooms.module.css'
import Autoplay from 'embla-carousel-autoplay'

const EmblaCarousel = () => {

    // const [emblaRef] = useEmblaCarousel()
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

    return (
        <div>
            <div className={styles.ContainerCarousel}>
                <div>
                    <h6><b>Suites & Rooms of</b></h6>
                    <h4 className={styles.TitleDescription}>Almarena Apart & Hotel</h4>
                    <h6><b>New York</b></h6>
                    <p className={styles.parrafoCarousel}>Our rooms offer a complete experience of comfort and luxury. From the moment you enter, you will find a cozy living room, designed to provide you with a space for relaxation and socialization. With comfortable sofas and armchairs, it is the perfect place to rest, watch TV or simply enjoy a good book. In addition, our bathrooms are equipped with high-quality amenities, such as large rainfall showers and deep soaking tubs for a relaxing soak. Our goal is to provide you with an oasis of tranquility and rejuvenation during your stay. Whether you're looking for moments of privacy in your bedroom, relaxation in the living room, or a spa experience in the bathroom, we're committed to making your stay exceptional in every way.
                    </p>
                </div>
                <div className={styles.embla} ref={emblaRef}>
                    <div className={styles.embla__container}>
                        <div className={styles.embla__slide}>
                        <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-suite-0161-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>    
                        </div>
                        <div className={styles.embla__slide}>
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-suite-0163-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>
                        </div>
                        <div className={styles.embla__slide}>
                            <img src="https://s7d1.scene7.com/is/image/marriotts7prod/mc-hnmmc-oceanfront-sundeck-37941-80269:Classic-Hor?wid=1215&fit=constrain" alt="" width="400px"/>
                        </div>
                        <div className={styles.embla__slide}>
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-living-0132-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>
                        </div>
                        <div className={styles.embla__slide}>
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-suite-0170-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>
                        </div>
                        <div className={styles.embla__slide}>
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-suite-0173-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>
                        </div>
                        <div className={styles.embla__slide}>
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-sundeck-0203-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>
                        </div>
                        <div className={styles.embla__slide}>
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-suite-0166-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>
                        </div>
                        <div className={styles.embla__slide}>
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-suite-0198-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>
                        </div>
                        <div className={styles.embla__slide}>
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-suite-0175-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>
                        </div>
                        <div className={styles.embla__slide}>
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-second-bedroom-5863-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>
                        </div>
                        <div className={styles.embla__slide}>
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-suite-0174-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>
                        </div>
                        <div className={styles.embla__slide}>
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-suite-0171-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>
                        </div>
                        <div className={styles.embla__slide}>
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-bathroom-2567-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>
                        </div>
                        <div className={styles.embla__slide}>
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-bathroom-0118-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>
                        </div>
                        <div className={styles.embla__slide}>
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-second-bathroom-5862-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>
                        </div>
                        <div className={styles.embla__slide}>
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-bathroom-5872-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>
                        </div>
                        <div className={styles.embla__slide}>
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-bathroom-5869-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="" width="400px"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmblaCarousel