'use client'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataHotel = createAsyncThunk('h/getH', async(arg, {rejectWithValue}) => {
    try {
        const {data} = await axios.get('http://localhost:3001/hotel')
        console.log(data);
        return data;
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})

export const nameHotel = createAsyncThunk('h/nameH', async(name, {rejectWithValue}) => {
    try {
        const {data} = await axios.get(`http://localhost:3001/hotel?name=${name}`)
        console.log(data);
        return data;
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})

export const detailHotel = createAsyncThunk('h/detailH', async(id, {rejectWithValue}) => {
    try {
        const {data} = await axios.get(`http://localhost:3001/hotel/${id}`)
        console.log(data);
        return data;
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})

export const hotelPost = createAsyncThunk('h/postH', async(payload) => {
    const {data} = await axios.post('http://localhost:3001/hotel', payload)
    return data;
})
export const hotelDelete = createAsyncThunk('h/deleteH', async(id) => {
    const {data} = await axios.delete(`http://localhost:3001/hotel/${id}`)
    return data;
})


const initialState = {
    hotel: [],
    allHotel: [],
    detailHotel: {},
    isSuccess: false,
    alertas: [],
    loading: false,
    message: "",
    error: null
}

export const hotelSlice = createSlice({
    name: 'h',
    initialState,
    reducers: {
        getHotel: (state, action) => {
            state.hotel = action.payload;
            state.allHotel = action.payload;
        },
        getNameHotel: (state, action) => {
            state.hotel = action.payload;
        },
        hotelDetail: (state, action) => {
            state.detailHotel = action.payload;
        },
        postHotel: (state, action) => {

        },
        deleteHotel: (state, action) => {
            const id = action.payload;
            return state.filter((c) => c.id !== id)
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(getDataHotel.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(getDataHotel.fulfilled, (state, action) => {
            state.loading = false;
            state.hotel = action.payload;
            state.allHotel = action.payload;
            state.isSuccess = true;
        }),
        builder.addCase(getDataHotel.rejected, (state, action) => {
            state.message = action.payload;
            state.loading = false;
            state.isSuccess = false;
        }),
        builder.addCase(nameHotel.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(nameHotel.fulfilled, (state, action) => {
            state.loading = false;
            state.hotel = action.payload;
            state.allHotel = action.payload;
            state.isSuccess = true;
        }),
        builder.addCase(nameHotel.rejected, (state, action) => {
            state.message = action.payload;
            state.loading = false;
            state.isSuccess = false;
        }),
        builder.addCase(detailHotel.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(detailHotel.fulfilled, (state, action) => {
            state.loading = false;
            state.detailHotel = action.payload;
            state.isSuccess = true;
        }),
        builder.addCase(detailHotel.rejected, (state, action) => {
            state.message = action.payload;
            state.loading = false;
            state.isSuccess = false;
        }),
        builder.addCase(hotelPost.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(hotelPost.fulfilled, (state, action) => {
            state.loading = false;
            state.hotel.push(action.payload);
            state.alertas.push({
                type: 'success',
                message: 'Hotel created Successfully',
                id: new Date().getTime()
            })
        }),
        builder.addCase(hotelPost.rejected, (state, action) => {
            state.message = action.payload;
            state.alertas.push({
                type: 'error',
                message: action.error.message,
                id: new Date().getTime()
            })
        }),
        builder.addCase(hotelDelete.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(hotelDelete.fulfilled, (state, action) => {
            state.loading = false;
            state.isSuccess = true;
            state.message = "Hotel deleted Successfully";
            const index = state.hotel.findIndex((h) => h.id === action.payload.id);
            if (index !== -1) {
                state.hotel.splice(index, 1);
            }
        }),
        builder.addCase(hotelDelete.rejected, (state, action) => {
            state.loading = false;
            state.isSuccess = false;
            state.message = "Could not delete hotel";
            state.error = action.error.message;
        })
    }
})

export const {
    getHotel,
    getNameHotel,
    hotelDetail,
    postHotel,
    deleteHotel,
    setLoading
} = hotelSlice.actions;

export default hotelSlice.reducer;