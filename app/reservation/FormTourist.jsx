'use client'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import {touristPost} from '../../store/touristSlice/touristSlice'
import styles from '../../styles/reservation.module.css'

function validate(input) {
    let errors = {};
    const regexName = /^[A-Za-z0-9\s]+$/g;
    

    if (input.firstName && !regexName.test(input.firstName)) {
        errors.firstName = "can't include special characters or numbers";
    }
    if (!input.firstName) {
        errors.firstName = "Name is required";
    }
    if (input.firstName.length > 20) {
        errors.firstName = "Max 20 characters";
    }
    if (input.firstName.length < 6) {
        errors.firstName = "Min 6 characters";
    }
    if (input.lastName && !regexName.test(input.lastName)) {
        errors.lastName = "can't include special characters or numbers";
    }
    if (!input.lastName) {
        errors.lastName = "Name is required";
    }
    if (input.lastName.length > 20) {
        errors.lastName = "Max 20 characters";
    }
    if (input.lastName.length < 6) {
        errors.lastName = "Min 6 characters";
    }
    
    if (!input.email) {
        errors.email = "Email is required";
    }
    if (!input.password) {
        errors.password = "Password is required";
    }

    if(!input.country) {
        errors.country = "Country is required"
    }

    return errors;
}
/* TOURIST  || id, firstName, lastName, email, password, country */

export function FormTourist(){

    const dispatch = useDispatch()
    const [error, setError] = useState({});

    const [input, setInput] = useState({
        firstName: '', 
        lastName: '',
        email: '',
        password: '',
        country: '',
    })
    
    const handleInputChange = (e) => {
        setError(validate({...input, [e.target.name] : e.target.value}));
        setInput({...input, [e.target.name] : e.target.value})
        console.log(input);
    }

    const handleSubmit = (e) => {
        if(!input.firstName || !input.lastName || !input.email || !input.password || !input.country) {
            return swal('Cannot create contact of tourist', '', 'error')
        } else {
            e.preventDefault();
            console.log(input);
            setError(validate({...input, [e.target.name] : e.target.value}))
            dispatch(touristPost(input))
            swal('Created contact', "", 'success');
            setInput({
                firstName: '', 
                lastName: '',
                email: '',
                password: '',
                country: '',
            })
        }
    };


    return (
        <div className={styles.ContainerFormTourist}>
            <div className={styles.FormTourist}>
                <h1>Contact</h1>
                <form className={styles.FormT} action="" method='POST' encType='multipart/form-data' onSubmit={(e) => handleSubmit(e)}>
                    <div className={styles.ContainerTwo}>
                        <div className={styles.ContainerThree}>
                            <label className={styles.LabelTourist}>First Name</label>
                            <input className={styles.InputTourist} type="text" id="firstName" name="firstName" value={input.firstName} onChange={(e) => handleInputChange(e)}/>
                            {error.firstName && (<p className={styles.ErrorTourist}>{error.firstName}</p>)}
                        </div>
                        <div className={styles.ContainerThree}>
                            <label className={styles.LabelTourist}>Last Name</label>
                            <input className={styles.InputTourist} type="text" id='lastName' name='lastName' value={input.lastName} onChange={(e) => handleInputChange(e)}/>
                            {error.lastName && (<p className={styles.ErrorTourist}>{error.lastName}</p>)}
                        </div>
                    </div>
                    <div className={styles.ContainerTwo}>
                        <label className={styles.LabelTourist}>Email</label>
                        <input className={styles.InputTouristTotal} type="text" id="email" name="email" value={input.email} onChange={(e) => handleInputChange(e)}/>
                        {error.email && (<p className={styles.ErrorTourist}>{error.email}</p>)}
                    </div>
                    <div className={styles.ContainerTwo}>
                        <div className={styles.ContainerThree}>
                                <label className={styles.LabelTourist}>Password</label>
                                <input className={styles.InputTourist} type="text" id='password' name='password' value={input.password} onChange={(e) => handleInputChange(e)}/>
                                {error.password && (<p className={styles.ErrorTourist}>{error.password}</p>)}
                        </div>
                        <div className={styles.ContainerThree}>
                            <label className={styles.LabelTourist}>Country</label>
                            <input className={styles.InputTourist} type="text" id='country' name='country' value={input.country} onChange={(e) => handleInputChange(e)}/>
                            {error.country && (<p className={styles.ErrorTourist}>{error.country}</p>)}
                        </div>
                    </div>
                    <button className={styles.ButtonFormTourist} type="submit">Create</button>
                </form>
            </div>
        </div>
    )
}

