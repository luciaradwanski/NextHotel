'use client'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataCart = createAsyncThunk('carta/getC', async(arg, {rejectWithValue}) => {
    try {
        const {data} = await axios.get('http://localhost:3001/roomCart')
        console.log(data);
        return data;
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})

export const nameCartRoom = createAsyncThunk('carta/nameC', async(name, {rejectWithValue}) => {
    try {
        const {data} = await axios.get(`http://localhost:3001/roomCart?name=${name}`)
        console.log(data);
        return data;
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})

export const detailCart = createAsyncThunk('carta/detailCa', async(id, {rejectWithValue}) => {
    try {
        const {data} = await axios.get(`http://localhost:3001/roomCart/${id}`)
        console.log(data);
        return data;
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})

export const cartPost = createAsyncThunk('carta/postC', async(payload) => {
    const {data} = await axios.post('http://localhost:3001/roomCart', payload)
    return data;
})
export const cartDelete = createAsyncThunk('carta/deleteC', async(id) => {
    const {data} = await axios.delete(`http://localhost:3001/roomCart/${id}`)
    return data;
})


const initialState = {
    cart: [],
    allCart: [],
    detailCart: {},
    isSuccess: false,
    alertas: [],
    loading: false,
    message: "",
    error: null
}

export const cartSlice = createSlice({
    name: 'carta',
    initialState,
    reducers: {
        getCart: (state, action) => {
            state.cart = action.payload;
            state.allCart = action.payload;
        },
        getNameCart: (state, action) => {
            state.cart = action.payload;
        },
        cartDetail: (state, action) => {
            state.detailCart = action.payload;
        },
        postCart: (state, action) => {

        },
        deleteCart: (state, action) => {
            const id = action.payload;
            return state.filter((c) => c.id !== id)
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(getDataCart.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(getDataCart.fulfilled, (state, action) => {
            state.loading = false;
            state.cart = action.payload;
            state.allCart = action.payload;
            state.isSuccess = true;
        }),
        builder.addCase(getDataCart.rejected, (state, action) => {
            state.message = action.payload;
            state.loading = false;
            state.isSuccess = false;
        }),
        builder.addCase(nameCartRoom.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(nameCartRoom.fulfilled, (state, action) => {
            state.loading = false;
            state.cart = action.payload;
            state.allCart = action.payload;
            state.isSuccess = true;
        }),
        builder.addCase(nameCartRoom.rejected, (state, action) => {
            state.message = action.payload;
            state.loading = false;
            state.isSuccess = false;
        }),
        builder.addCase(detailCart.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(detailCart.fulfilled, (state, action) => {
            state.loading = false;
            state.detailCart = action.payload;
            state.isSuccess = true;
        }),
        builder.addCase(detailCart.rejected, (state, action) => {
            state.message = action.payload;
            state.loading = false;
            state.isSuccess = false;
        }),
        builder.addCase(cartPost.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(cartPost.fulfilled, (state, action) => {
            state.loading = false;
            state.cart.push(action.payload);
            state.alertas.push({
                type: 'success',
                message: 'Room created Successfully',
                id: new Date().getTime()
            })
        }),
        builder.addCase(cartPost.rejected, (state, action) => {
            state.message = action.payload;
            state.alertas.push({
                type: 'error',
                message: action.error.message,
                id: new Date().getTime()
            })
        }),
        builder.addCase(cartDelete.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(cartDelete.fulfilled, (state, action) => {
            state.loading = false;
            state.isSuccess = true;
            state.message = "RoomCart deleted Successfully";
            const index = state.cart.findIndex((r) => r.id === action.payload.id);
            if (index !== -1) {
                state.cart.splice(index, 1);
            }
        }),
        builder.addCase(cartDelete.rejected, (state, action) => {
            state.loading = false;
            state.isSuccess = false;
            state.message = "Could not delete roomCart";
            state.error = action.error.message;
        })
    }
})

export const {
    getCart,
    getNameCart,
    cartDetail,
    postCart,
    deleteCart,
    setLoading
} = cartSlice.actions;

export default cartSlice.reducer;