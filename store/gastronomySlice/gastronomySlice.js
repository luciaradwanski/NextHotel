'use client'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataGastronomy = createAsyncThunk('restaurante/getR', async(arg, {rejectWithValue}) => {
    try {
        const {data} = await axios.get('http://localhost:3001/gastronomy')
        console.log(data);
        return data;
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})

export const nameGastronomy = createAsyncThunk('restaurante/nameR', async(name, {rejectWithValue}) => {
    try {
        const {data} = await axios.get(`http://localhost:3001/gastronomy?name=${name}`)
        console.log(data);
        return data;
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})

export const detailGastronomy = createAsyncThunk('restaurante/detailR', async(id, {rejectWithValue}) => {
    try {
        const {data} = await axios.get(`http://localhost:3001/gastronomy/${id}`)
        console.log(data);
        return data;
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})

export const gastronomyPost = createAsyncThunk('restaurante/postR', async(payload) => {
    const {data} = await axios.post('http://localhost:3001/gastronomy', payload)
    return data;
})
export const gastronomyDelete = createAsyncThunk('restaurante/deleteR', async(id) => {
    const {data} = await axios.delete(`http://localhost:3001/gastronomy/${id}`)
    return data;
})


const initialState = {
    restaurant: [],
    allRes: [],
    detailRes: {},
    isSuccess: false,
    alertas: [],
    loading: false,
    message: "",
    error: null
}

export const gastronomySlice = createSlice({
    name: 'restaurante',
    initialState,
    reducers: {
        getGastronomy: (state, action) => {
            state.restaurant = action.payload;
            state.allRes = action.payload;
        },
        getNameGastronomy: (state, action) => {
            state.restaurant = action.payload;
        },
        gastronomyDetail: (state, action) => {
            state.detailRes = action.payload;
        },
        postGastronomy: (state, action) => {

        },
        deleteGastronomy: (state, action) => {
            const id = action.payload;
            return state.filter((c) => c.id !== id)
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(getDataGastronomy.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(getDataGastronomy.fulfilled, (state, action) => {
            state.loading = false;
            state.restaurant = action.payload;
            state.allRes = action.payload;
            state.isSuccess = true;
        }),
        builder.addCase(getDataGastronomy.rejected, (state, action) => {
            state.message = action.payload;
            state.loading = false;
            state.isSuccess = false;
        }),
        builder.addCase(nameGastronomy.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(nameGastronomy.fulfilled, (state, action) => {
            state.loading = false;
            state.restaurant = action.payload;
            state.allRes = action.payload;
            state.isSuccess = true;
        }),
        builder.addCase(nameGastronomy.rejected, (state, action) => {
            state.message = action.payload;
            state.loading = false;
            state.isSuccess = false;
        }),
        builder.addCase(detailGastronomy.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(detailGastronomy.fulfilled, (state, action) => {
            state.loading = false;
            state.detailRes = action.payload;
            state.isSuccess = true;
        }),
        builder.addCase(detailGastronomy.rejected, (state, action) => {
            state.message = action.payload;
            state.loading = false;
            state.isSuccess = false;
        }),
        builder.addCase(gastronomyPost.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(gastronomyPost.fulfilled, (state, action) => {
            state.loading = false;
            state.restaurant.push(action.payload);
            state.alertas.push({
                type: 'success',
                message: 'Restaurant created Successfully',
                id: new Date().getTime()
            })
        }),
        builder.addCase(gastronomyPost.rejected, (state, action) => {
            state.message = action.payload;
            state.alertas.push({
                type: 'error',
                message: action.error.message,
                id: new Date().getTime()
            })
        }),
        builder.addCase(gastronomyDelete.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(gastronomyDelete.fulfilled, (state, action) => {
            state.loading = false;
            state.isSuccess = true;
            state.message = "Restaurant deleted Successfully";
            const index = state.restaurant.findIndex((r) => r.id === action.payload.id);
            if (index !== -1) {
                state.restaurant.splice(index, 1);
            }
        }),
        builder.addCase(gastronomyDelete.rejected, (state, action) => {
            state.loading = false;
            state.isSuccess = false;
            state.message = "Could not delete restaurant";
            state.error = action.error.message;
        })
    }
})

export const {
    getGastronomy,
    getNameGastronomy,
    gastronomyDetail,
    postGastronomy,
    deleteGastronomy,
    setLoading
} = gastronomySlice.actions;

export default gastronomySlice.reducer;