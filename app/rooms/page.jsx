
import { Suspense } from 'react'
import RoomCarousel from './RoomCarousel'
import RoomDescription from './RoomDescription'
import {ListOfRooms} from './ListOfRooms'
import { Footer } from '../Footer'
import EmblaCarousel from './EmblaCarousel'

const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


export default async function PostsPage(){
    return (
        <section>
            <Suspense fallback={<p>Cargando rooms...</p>}>
                <RoomCarousel slides={SLIDES} options={OPTIONS} />
                <RoomDescription/>
                <ListOfRooms/>
                <EmblaCarousel />
                <Footer/>
            </Suspense>
        </section>
    )
}
