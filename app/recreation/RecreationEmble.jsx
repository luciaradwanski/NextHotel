'use client'
import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import imageByIndex from './imageByIndex'
import styles from '../../styles/Recreation.module.css'
import Image from 'next/image';

export function RecreationEmble(props) {

    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)
    const [scrollProgress, setScrollProgress] = useState(0)

    const onScroll = useCallback((emblaApi) => {
        const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()))
        setScrollProgress(progress * 100)
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onScroll(emblaApi)
        emblaApi.on('reInit', onScroll)
        emblaApi.on('scroll', onScroll)
    }, [emblaApi, onScroll])

    return (
        <div className={styles.EmblaCarouselRecreation}>
            <div className={styles.EmblaViewportCarouselRecreation} ref={emblaRef}>
                <div className={styles.EmblaContainerRecreation}>
                {slides.map((index) => (
                    <div className={styles.EmblaSlideCarouselRecreation} key={index}>
                    <div >
                        <span>{index + 1}</span>
                    </div>
                    <Image
                        className={styles.EmblaSlideCarouselImgRecreation}
                        src={imageByIndex(index)}
                        alt="Your alt text"
                    />
                    </div>
                ))}
                </div>
            </div>
            <div className={styles.EmblaProgressRecreation}>
                <div
                className={styles.EmblaProgressRecreationBar}
                style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
                />
            </div>
            <div className={styles.ContainerButtonMoreRecreation}>
                <div className={styles.IconArrow}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-arrow-down" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                    </svg>
                </div>
                <button className={styles.ButtonMoreRecreation}><a href="#more">Show More</a></button>
            </div>
        </div>
    )
    
};
