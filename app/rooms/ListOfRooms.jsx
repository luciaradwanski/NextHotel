'use client'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from '../../styles/rooms/ListOfRooms.module.css'
import { getDataRooms } from '../../store/roomSlice/roomSlice'
import Link from "next/link"

export function ListOfRooms(){
    const [loading, setLoading] = useState(true)
    const rooms = useSelector((state) => state.suites.room)
    const dispatch = useDispatch()

    useEffect(() => {
        async function fetchData() {
            await dispatch(getDataRooms())
            /* getDataTypeRoom */
            setLoading(false)
        }
        fetchData()
    }, [dispatch])

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <div className={styles.ContainerCart}>
            <h1 className={styles.Title}>Rooms & Suites</h1>
            {rooms.slice(0,5).map(r => (
                <div className={styles.CartRoom} key={r.id}>
                    <div>
                        <img src={r.image.secure_url} alt="" width='350px'/>
                    </div>
                    <div className={styles.TitleDescriptionRoom}>
                        <h2 className={styles.RoomTitle}>{r.name}</h2>
                        <p className={styles.RoomParrafo}>{r.description}</p>
                        <Link href="/rooms/[id]" as={`/rooms/${r.id}`}>
                            <h2 className={styles.RoomTitle}>More</h2>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}