import styles from '../styles/Home.module.css'


export default function Portada(){
    return (
        <div className={styles.ContainerHome}>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://cdn.blastness.info/media/307/Top-55/thumbs/full/1600esterno01.jpg" className="d-block w-100" alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn.blastness.info/media/307/Top-55/thumbs/full/1600cameradoppia03.jpg" className="d-block w-100" alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn.blastness.info/media/307/Top-55/thumbs/full/1600roma(1).jpg" className="d-block w-100" alt="" />
                    </div>
                </div>
            </div>
            <div className={styles.ContainerButtonMoreHome}>
                <div className={styles.IconArrow}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-arrow-down" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                    </svg>
                    <button className={styles.ButtonMoreHome}><a href="#more">Show More</a></button>
                </div>
            </div>
            
        </div>
    )
}