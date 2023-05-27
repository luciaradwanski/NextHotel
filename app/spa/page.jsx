import { Suspense } from 'react'
import {SpaCarousel} from './SpaCarousel'
import SpaDescription from "./SpaDescription";
import YouTubeVideo from './YouTubeVideo'
import {Footer } from '../Footer'
import {EmblaCarousel} from './EmblaCarousel';

const OPTIONS = { axis: 'y' }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function SpaPage(){
    return (
        <section>
            <Suspense fallback={<p>Cargando rooms...</p>}>
                <SpaCarousel slides={SLIDES} options={OPTIONS}/>
                <SpaDescription/>
                <YouTubeVideo />
                <EmblaCarousel/>
                <Footer/>
            </Suspense>
        </section>
    )
}