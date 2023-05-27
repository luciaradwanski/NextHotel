import styles from '../styles/Footer.module.css'

export function Footer(){
    return  (
        <footer className={styles.ContainerFooter}>
            <div className={styles.FooterContact}>
                <h6 className={styles.FooterTitle}><ion-icon name="navigate-outline"></ion-icon> Hawái</h6>
                <h6 className={styles.FooterTitle}><ion-icon name="mail-outline"></ion-icon> amarenahotel@gmail.com</h6>
                <h6 className={styles.FooterTitle}><ion-icon name="phone-portrait-outline"></ion-icon> +1 808-879-1922</h6>
            </div>
            <div className={styles.Detalle}>
                <h6>Almarena Apart & Hotel</h6>
            </div>
        </footer>
    )
}