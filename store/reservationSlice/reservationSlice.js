'use client'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataReservation = createAsyncThunk('reserva/getReserv', async(arg, {rejectWithValue}) => {
    try {
        const {data} = await axios.get('http://localhost:3001/reservation')
        console.log(data);
        return data;
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})

export const nameReservation = createAsyncThunk('reserva/nameReserv', async(name, {rejectWithValue}) => {
    try {
        const {data} = await axios.get(`http://localhost:3001/reservation?name=${name}`)
        console.log(data);
        return data;
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})

export const detailReservation = createAsyncThunk('reserva/detailReserv', async(id, {rejectWithValue}) => {
    try {
        const {data} = await axios.get(`http://localhost:3001/reservation/${id}`)
        console.log(data);
        return data;
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})

export const reservationPost = createAsyncThunk('reserva/postReserv', async(payload) => {
    const {data} = await axios.post('http://localhost:3001/reservation', payload)
    return data;
})
export const reservationDelete = createAsyncThunk('reserva/deleteReserv', async(id) => {
    const {data} = await axios.delete(`http://localhost:3001/reservation/${id}`)
    return data;
})


const initialState = {
    reservation: [],
    allReservation: [],
    detailReservation: {},
    isSuccess: false,
    alertas: [],
    loading: false,
    message: "",
    error: null
}

export const reservationSlice = createSlice({
    name: 'reserva',
    initialState,
    reducers: {
        getReservation: (state, action) => {
            state.reservation = action.payload;
            state.allReservation = action.payload;
        },
        getNameReservation: (state, action) => {
            state.reservation = action.payload;
        },
        reservationDetail: (state, action) => {
            state.detailReservation = action.payload;
        },
        postReservation: (state, action) => {

        },
        deleteReservation: (state, action) => {
            const id = action.payload;
            return state.filter((c) => c.id !== id)
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(getDataReservation.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(getDataReservation.fulfilled, (state, action) => {
            state.loading = false;
            state.reservation = action.payload;
            state.allReservation = action.payload;
            state.isSuccess = true;
        }),
        builder.addCase(getDataReservation.rejected, (state, action) => {
            state.message = action.payload;
            state.loading = false;
            state.isSuccess = false;
        }),
        builder.addCase(nameReservation.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(nameReservation.fulfilled, (state, action) => {
            state.loading = false;
            state.reservation = action.payload;
            state.allReservation = action.payload;
            state.isSuccess = true;
        }),
        builder.addCase(nameReservation.rejected, (state, action) => {
            state.message = action.payload;
            state.loading = false;
            state.isSuccess = false;
        }),
        builder.addCase(detailReservation.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(detailReservation.fulfilled, (state, action) => {
            state.loading = false;
            state.detailReservation = action.payload;
            state.isSuccess = true;
        }),
        builder.addCase(detailReservation.rejected, (state, action) => {
            state.message = action.payload;
            state.loading = false;
            state.isSuccess = false;
        }),
        builder.addCase(reservationPost.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(reservationPost.fulfilled, (state, action) => {
            state.loading = false;
            state.reservation.push(action.payload);
            state.alertas.push({
                type: 'success',
                message: 'Reservation created Successfully',
                id: new Date().getTime()
            })
        }),
        builder.addCase(reservationPost.rejected, (state, action) => {
            state.message = action.payload;
            state.alertas.push({
                type: 'error',
                message: action.error.message,
                id: new Date().getTime()
            })
        }),
        builder.addCase(reservationDelete.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(reservationDelete.fulfilled, (state, action) => {
            state.loading = false;
            state.isSuccess = true;
            state.message = "Reservation deleted Successfully";
            const index = state.reservation.findIndex((r) => r.id === action.payload.id);
            if (index !== -1) {
                state.reservation.splice(index, 1);
            }
        }),
        builder.addCase(reservationDelete.rejected, (state, action) => {
            state.loading = false;
            state.isSuccess = false;
            state.message = "Could not delete reservation";
            state.error = action.error.message;
        })
    }
})

export const {
    getReservation,
    getNameReservation,
    reservationDetail,
    postReservation,
    deleteReservation,
    setLoading
} = reservationSlice.actions;

export default reservationSlice.reducer;