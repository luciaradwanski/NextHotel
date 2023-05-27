'use client'
import React, { useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styles from '../../styles/spa/Spa.module.css'
import Autoplay from 'embla-carousel-autoplay'
import imageIndex from './ImageIndex'


export function SpaCarousel(props){

    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)
    //const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay(options)])
    
    

    return (
        <div>

            <div className={styles.embla}>
                <div className={styles.embla__viewport} ref={emblaRef}>
                    <div className={styles.embla__container}>
                    {slides.map((index) => (
                        <div className={styles.embla__slide} key={index}>
                        <div className={styles.embla__slide__number}>
                            <span>{index + 1}</span>
                        </div>
                        <img
                            className={styles.embla__slide__img}
                            src={imageIndex(index)}
                            alt="Your alt text"
                        />
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            <div className={styles.ContainerButtonMoreSpa}>
                <div className={styles.IconArrow}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-arrow-down" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                    </svg>
                </div>
                <button className={styles.ButtonMoreSpa}><a href="#more">Show More</a></button>
            </div>
        </div>
    )
}
