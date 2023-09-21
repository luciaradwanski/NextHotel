
import styles from '../styles/Home.module.css'
import {Footer} from './Footer'

import Portada from './Portada'
import Description from './Description'
import EmblaCarousel from './EmblaCarousel'
import LinksRutas from './LinksRutas'

export default function HomePage(){
    return (
        <div className={styles.ContainerHome}>
            <Portada/>
            <Description/>
            <EmblaCarousel/>
            <LinksRutas/>
            <Footer/>
        </div>
    )
}