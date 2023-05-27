'use client'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from '../../styles/Recreation.module.css'
import { getDataActivity } from '../../store/activitySlice/activitySlice'
import Link from "next/link"

export function ListOfActivities(){
    const [loading, setLoading] = useState(true)
    const actividad = useSelector((state) => state.actividad.activity)
    const dispatch = useDispatch()

    useEffect(() => {
        async function fetchData() {
            await dispatch(getDataActivity())
            /* getDataTypeRoom */
            setLoading(false)
        }
        fetchData()
    }, [dispatch])

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <div className={styles.ContainerActivity}>
            <h1 className={styles.Title}>Activities</h1>
            {actividad.slice(0,8).map(r => (
                <div className={styles.CartActivity} key={r.id}>
                    <div>
                        <img src={r.image} alt="" width='300px'/>
                    </div>
                    <div className={styles.TitleDescriptionAct}>
                        <h2 className={styles.ActivityTitle}>{r.name}</h2>
                        <p className={styles.ActivityParrafo}>{r.description}</p>
                    </div>
                    <Link href="/recreation/[id]" as={`/recreation/${r.id}`}>
                    </Link>
                </div>
            ))}
        </div>
    )
}