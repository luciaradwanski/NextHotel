import {Footer} from '../Footer'
import { FormTourist } from './FormTourist'
import {ReservaCarousel} from './ReservaCarousel'
import {ReservaDescription} from './ReservaDescription'
import {FormReservation} from './FormReservation'
import EmblaCarousel from './EmblaCarousel'
import {Detail} from './Detail'

const OPTIONS = {}
const SLIDE_COUNT = 10
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function ReservationPage(){
    return (
        <div>
            <ReservaCarousel slides={SLIDES} options={OPTIONS}/>
            <ReservaDescription/>
            <FormTourist/>
            <EmblaCarousel/>
            <FormReservation/>
            <Detail/>
            <Footer/>
        </div>
    )
}