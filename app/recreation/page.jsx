import {Footer} from '../Footer'
import {RecreationEmble} from './RecreationEmble'
import {RecreationDescription} from './RecreationDescription'
import {Carousel} from './Carousel'
import {ListOfActivities} from './ListOfActivities'

const OPTIONS = { dragFree: true }
const SLIDE_COUNT = 4
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function RecreationPage(){
    return (
        <div>
            <RecreationEmble slides={SLIDES} options={OPTIONS}/>
            <RecreationDescription/>
            <ListOfActivities/>
            <Carousel/>
            <Footer/>
        </div>
    )
}