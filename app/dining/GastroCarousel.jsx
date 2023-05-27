'use client'
import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image';
import styles from '../../styles/gastronomy/Gastronomy.module.css'
import Autoplay from 'embla-carousel-autoplay'
import { flushSync } from 'react-dom'
import imageIndex from './ImageIndex'

const TWEEN_FACTOR = 4.2
const numberWithinRange = (number, min, max) => {
    Math.min(Math.max(number, min), max)
}

const GastroCarousel = (props) => {

    const { slides, options } = props
    //const [emblaRef, emblaApi] = useEmblaCarousel(options)
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay(options)])
    const [tweenValues, setTweenValues] = useState([])

    const onScroll = useCallback(() => {
        if (!emblaApi) return

        const engine = emblaApi.internalEngine()
        const scrollProgress = emblaApi.scrollProgress()

        const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
        let diffToTarget = scrollSnap - scrollProgress

        if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target()
            if (index === loopItem.index && target !== 0) {
                const sign = Math.sign(target)
                if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress)
                if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress)
            }
            })
        }
        const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR)
        return numberWithinRange(tweenValue, 0, 1)
        })
        setTweenValues(styles)
    }, [emblaApi, setTweenValues])

    useEffect(() => {
        if (!emblaApi) return

        onScroll()
        emblaApi.on('scroll', () => {
        flushSync(() => onScroll())
        })
        emblaApi.on('reInit', onScroll)
    }, [emblaApi, onScroll])


    return (
        <div className={styles.embla}>
            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                {slides.map((index) => (
                    <div
                    className={styles.embla__slide}
                    key={index}
                    style={{
                        ...(tweenValues.length && { opacity: tweenValues[index] }),
                    }}
                    >
                    <div className={styles.embla__slide__number}>
                        <span>{index + 1}</span>
                    </div>
                    <Image
                        className={styles.embla__slide__img}
                        src={imageIndex(index)}
                        alt="Your alt text"
                    />
                    </div>
                ))}
                </div>
            </div>
            <div className={styles.ContainerButtonMoreGastro}>
                <div className={styles.IconArrow}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-arrow-down" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                    </svg>
                </div>
                <button className={styles.ButtonMoreGastro}><a href="#more">Show More</a></button>
            </div>
        </div>
    )
}

export default GastroCarousel
