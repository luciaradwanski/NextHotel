import Link from "next/link"
import styles from '../../../styles/rooms/ListOfRooms.module.css'

const fetchSinglePost = (id) => {
    return fetch(`http://localhost:3001/gastronomy/${id}`, {
        next: {
            revalidate: 60
        }
    })
    .then(res => res.json())
}

export default async function Post({ children, params }) {

    const {id} = params
    const room = await fetchSinglePost(id)

    return (
        <article className={styles.ContainerId}>
            <div>
                <h1>{room.name}</h1>
                <p>{room.number}</p>
                <p>Capacity: {room.capacity}</p>
                <p>Price: ${room.price}</p>
                <img src={room.image.secure_url} alt="" width='300px'/>
            </div>
            <div>
                <p>Description: {room.description}</p>
                <p>Status: {room.status}</p> 
                <p>Bed Sheets: {room.bedSheets}</p> 
                <p>Decor: {room.decor}</p> 
            </div>
            <div>
                <p>Entertaiment: {room.entertainment}</p> 
                <p>Characteristics: {room.characteristics}</p> 
                <p>Foods and Drinks: {room.foodsDrinks}</p> 
                <p>Bathroom: {room.bathroom}</p> 
                <p>Internet and phone: {room.internetCel}</p> 
            </div>
            <Link href={`/rooms/${id}/comments`}>Ver comentarios</Link>
            {children}
        </article>
    )
}