'use client'

import { configureStore } from "@reduxjs/toolkit";
import activityReducer from './activitySlice/activitySlice'
import cartReducer from './cartSlice/cartSlice'
import hotelReducer from './hotelSlice/hotelSlice'
import reservationReducer from './reservationSlice/reservationSlice'
import roomReducer from './roomSlice/roomSlice'
import touristReducer from './touristSlice/touristSlice'
import typeRoomReducer from './typeSlice/typeSlice'
import gastronomyReducer from './gastronomySlice/gastronomySlice'
import mealtypeReducer from './mealtypeSlice/mealtypeSlice'

export const store = configureStore({
    reducer: {
        actividad: activityReducer,
        carta: cartReducer,
        h: hotelReducer,
        reserva: reservationReducer,
        suites: roomReducer,
        turista: touristReducer,
        tipos: typeRoomReducer,
        restaurante: gastronomyReducer,
        comida: mealtypeReducer
    }
})