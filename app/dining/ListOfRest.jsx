'use client'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from '../../styles/gastronomy/Gastronomy.module.css'
import Link from 'next/link'
import {getDataMealtype} from '../../store/mealtypeSlice/mealtypeSlice'

export function ListOfRest(){
    const [loading, setLoading] = useState(true)
    const comidas = useSelector((state) => state.comida.mealtype)
    const dispatch = useDispatch()

    useEffect(() => {
        async function fetchData() {
            await dispatch(getDataMealtype())
            setLoading(false)
        }
        fetchData()
    }, [dispatch])

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <div className={styles.ContainerRest}>
            <h1 className={styles.Title}>Foods</h1>
            {comidas.slice(0,8).map(r => (
                <div className={styles.CartRest} key={r.id}>
                    <div>
                        <img src={r.image} alt="" width='300px' height='200px'/>
                    </div>
                    <div className={styles.TitleDescriptionRest}>
                        <h2 className={styles.RestTitle}>{r.name}</h2>
                        <p className={styles.RestParrafo}>Ingredients: {r.ingredients}</p>
                        <p className={styles.RestParrafo}>$ {r.price}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}