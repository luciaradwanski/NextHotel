import React, { Suspense } from 'react'
import { ListOfRest } from './ListOfRest';
import { Footer } from '../Footer';
import GastroCarousel from './GastroCarousel'
import GastroDescription from './GastroDescription'

const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const pageDining = () => {
    return (
        <section>
            <Suspense fallback={<p>Cargando...</p>}>
                <GastroCarousel slides={SLIDES} options={OPTIONS} />
                <GastroDescription/>
                <ListOfRest/>
                <Footer/>
            </Suspense>
        </section>
    )
}

export default pageDining;