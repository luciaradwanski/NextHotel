'use client'
import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import {reservationPost} from '../../store/reservationSlice/reservationSlice'
import styles from '../../styles/reservation.module.css'

function validate(input) {
    let errors = {};
    const regexName = /^[A-Za-z0-9\s]+$/g;
    const regexDate = /\b\d{4}-\d{2}-\d{2}\b/;
    const regexPrice = /^[0-9]+(\.[0-9]{1,2})?$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexMessage = /.*/;
    const regexPhone = /^\+\d{2} \d{10}$/;
    const regexRooms = /^[1-4]$/;
    const regexAdults = /^[1-10]$/;
    const regexChildrens = /^[0-6]$/;
    const regexCountry = /^[a-zA-Z]+$/;

    if (!input.startDate) {
        errors.startDate = "Start date is required";
    } else if (!regexDate.test(input.startDate)) {
        errors.startDate = "Invalid startDate format";
    }     
    if (!input.endDate) {
        errors.endDate = "End date is required";
    } else if (!regexDate.test(input.endDate)) {
        errors.endDate = "Invalid endDate format";
    } 
    
    if (!input.touristName) {
        errors.touristName = "Name is required";
    } else {
        if (!regexName.test(input.touristName)) {
            errors.touristName = "Can't include special characters or numbers";
        }
        if (input.touristName.length > 20) {
            errors.touristName = "Max 20 characters";
        }
        if (input.touristName.length < 2) {
            errors.touristName = "Min 6 characters";
        }
    }
    
    if (!input.email) {
        errors.email = "Email is required";
    } else if (!regexEmail.test(input.email)) {
        errors.email = "Invalid email format";
    }

    if (!input.price) {
        errors.price = "Price is required";
    } else if (!regexPrice.test(input.price)) {
        errors.price = "Invalid price format";
    }

    if (!input.message) {
        errors.message = "Message is required";
    } else if (!regexMessage.test(input.message)) {
        errors.message = "Invalid message format";
    }

    if (!input.phone) {
        errors.phone = "Phone is required";
    } else if (!regexPhone.test(input.phone)) {
        errors.phone = "Invalid phone format";
    }

    if (!input.rooms) {
        errors.rooms = "Number of rooms is required";
    } else if (!regexRooms.test(input.rooms)) {
        errors.rooms = "Invalid number of rooms";
    }

    if (!input.adults) {
        errors.adults = "Number of adults is required";
    } else if (!regexAdults.test(input.adults)) {
        errors.adults = "Invalid number of adults";
    }

    if (!input.children) {
        errors.children = "Number of children is required";
    } else if (!regexChildrens.test(input.children)) {
        errors.children = "Invalid number of children";
    }

    if (!input.country) {
        errors.country = "Country is required";
    } else if (!regexCountry.test(input.country)) {
        errors.country = "Invalid country format";
    }

    return errors;
}


export function FormReservation(){

    const dispatch = useDispatch()
    const [error, setError] = useState({});

    const [input, setInput] = useState({
        startDate: '',
        endDate: '', 
        price: 0, 
        touristName: '', 
        touristEmail: '', 
        message: '', 
        phone: '', 
        rooms: 1, 
        adults: 1, 
        children: 0, 
        country: ''
    })
    
    const handleInputChange = (e) => {
        setError(validate({...input, [e.target.name] : e.target.value}));
        setInput({...input, [e.target.name] : e.target.value})
        console.log(input);
    }

    /* id, startDate, endDate, price, touristName, touristEmail, message, phone, rooms, adults, children, country */
    const handleSubmit = (e) => {
        if(!input.startDate || !input.endDate || !input.price || !input.touristName || !input.touristEmail || !input.message || !input.phone || !input.rooms || !input.adults || !input.children || !input.country) {
            return swal('Cannot create reservation of tourist', '', 'error')
        } else {
            e.preventDefault();
            console.log(input);
            setError(validate({...input, [e.target.name] : e.target.value}))
            dispatch(reservationPost(input))
            swal('Created reservation', "", 'success');
            setInput({
                startDate: '', 
                endDate: '', 
                price: 0, 
                touristName: '', 
                touristEmail: '', 
                message: '', 
                phone: '', 
                rooms: 1, 
                adults: 1, 
                children: 0, 
                country: ''
            })
        }
    };

    

    return (
        <div className={styles.ContainerFormReservation}>
            <div className={styles.FormReservation}>
                <h1>Reservation</h1>

                <form className={styles.FormR} action="" method='POST' encType='multipart/form-data' onSubmit={(e) => handleSubmit(e)}>
                    <div className={styles.ContainerTwo}>
                        <div className={styles.ContainerReservationThree}>
                            <label for="startDate" className={styles.LabelReservation}>Start Date</label>
                            <input className={styles.InputReservation} type="date" id="startDate" name="startDate" value={input.startDate} onChange={handleInputChange}
                            min="2023-05-24" max="2024-12-31"/>
                            {error.startDate && (<p className={styles.ErrorTourist}>{error.startDate}</p>)}
                        </div>
                        <div className={styles.ContainerReservationThree}>
                            <label for="endDate" className={styles.LabelReservation}>End Date</label>
                            <input className={styles.InputReservation} type="date" id="endDate" name='endDate' value={input.endDate} onChange={(e) => handleInputChange(e)}/>
                            {error.endDate && (<p className={styles.ErrorTourist}>{error.endDate}</p>)}
                        </div>
                    </div>
                    <div className={styles.ContainerTwo}>
                        <div className={styles.ContainerReservationThree}>
                            <label className={styles.LabelReservation}>Name</label>
                            <input className={styles.InputReservation} placeholder='Lucy Anderson' type="text" id="touristName" name="touristName" value={input.touristName} onChange={(e) => handleInputChange(e)}/>
                            {error.touristName && (<p className={styles.ErrorTourist}>{error.touristName}</p>)}
                        </div>
                        <div className={styles.ContainerReservationThree}>
                            <label className={styles.LabelReservation}>Email</label>
                            <input className={styles.InputReservation} placeholder='lucyanderson@gmail.com' type="text" id='touristEmail' name='touristEmail' value={input.touristEmail} onChange={(e) => handleInputChange(e)}/>
                            {error.touristEmail && (<p className={styles.ErrorTourist}>{error.touristEmail}</p>)}
                        </div>
                    </div>
                    <div className={styles.ContainerTwo}>
                        <div className={styles.ContainerReservationThree}>
                                <label className={styles.LabelReservation}>Phone</label>
                                <input className={styles.InputReservation} placeholder='+54 3364310718' type="text" id='phone' name='phone' value={input.phone} onChange={(e) => handleInputChange(e)}/>
                                {error.phone && (<p className={styles.ErrorTourist}>{error.phone}</p>)}
                        </div>
                        <div className={styles.ContainerReservationThree}>
                            <label className={styles.LabelReservation}>Price</label>
                            <input className={styles.InputReservation} type="number" min={1} id='price' name='price' value={input.price} onChange={(e) => handleInputChange(e)}/>
                            {error.price && (<p className={styles.ErrorTourist}>{error.price}</p>)}
                        </div>
                    </div>
                    <div className={styles.ContainerTwo}>
                        <div className={styles.ContainerReservationThree}>
                            <label className={styles.LabelReservation}>Rooms</label>
                            <input className={styles.InputReservation} type="number" min={1} max={4} id='rooms' name='rooms' value={input.rooms} onChange={(e) => handleInputChange(e)}/>
                            {error.rooms && (<p className={styles.ErrorTourist}>{error.rooms}</p>)}
                        </div>
                        <div className={styles.ContainerReservationThree}>
                            <label className={styles.LabelReservation}>Country</label>
                            <input className={styles.InputReservation} type="text" id='country' name='country' value={input.country} onChange={(e) => handleInputChange(e)}/>
                            {error.country && (<p className={styles.ErrorTourist}>{error.country}</p>)}
                        </div>
                    </div>
                    <div className={styles.ContainerTwo}>
                        <div className={styles.ContainerReservationThree}>
                            <label className={styles.LabelReservation}>Adults</label>
                            <input className={styles.InputReservation} type="number" min={1} id='adults' name='adults' value={input.adults} onChange={(e) => handleInputChange(e)}/>
                            {error.adults && (<p className={styles.ErrorTourist}>{error.adults}</p>)}
                        </div>
                        <div className={styles.ContainerReservationThree}>
                            <label className={styles.LabelReservation}>Childrens</label>
                            <input className={styles.InputReservation} type="number" min={0} id='children' name='childrens' value={input.children} onChange={(e) => handleInputChange(e)}/>
                            {error.children && (<p className={styles.ErrorTourist}>{error.children}</p>)}
                        </div>
                    </div>
                    <div className={styles.ContainerMessage}>
                        <label className={styles.LabelReservation}>Message:</label>
                        <textarea className={styles.InputMessage} rows='10'id="message" name="message" value={input.message} onChange={(e) => handleInputChange(e)}/>
                        {error.message && (<p>{error.message}</p>)}
                    </div>
                    <button className={styles.ButtonFormReservation} type="submit">Create</button>
                </form>
            </div>
        </div>
    )
}










