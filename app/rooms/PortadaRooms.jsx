import styles from '../../styles/Home.module.css'


export default function PortadaRooms(){
    return (
        <div className={styles.ContainerHome}>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://s7d1.scene7.com/is/image/marriotts7prod/jw-mcojw-bedroom-38981:Classic-Hor?wid=1215&fit=constrain" className="d-block w-100" alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://s7d1.scene7.com/is/image/marriotts7prod/jw-mcojw-presidential-suite-11715:Classic-Hor?wid=1215&fit=constrain" className="d-block w-100" alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://s7d1.scene7.com/is/image/marriotts7prod/jw-mcojw-ktichen-38832:Classic-Hor?wid=1215&fit=constrain" className="d-block w-100" alt="" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}