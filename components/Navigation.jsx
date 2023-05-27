
import Link from "next/link";
import styles from './Navigation.module.css'


const links = [{
    label: 'Home',
    route: '/'
}, {
    label: 'Suites & Rooms',
    route: '/rooms',
},{
    label: 'Food & Drinks',
    route: '/dining'
}, {
    label: 'Spa & more',
    route: '/spa',
}, {
    label: 'Recreation & Fitness',
    route: '/recreation',
},{
    label: 'Contact',
    route: '/reservation'
}]

export function Navigation(){

    

    return  (
        <header className={styles.header}>
            <nav>
                <ul className={styles.navigation}>
                    <ion-icon name="bed-outline"></ion-icon>
                    {links.map(({label, route}) => (
                        <li key={route}>
                        <Link href={route}>{label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}