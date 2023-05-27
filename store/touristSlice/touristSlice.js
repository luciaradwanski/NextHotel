'use client'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataTourist = createAsyncThunk('turista/getTour', async(arg, {rejectWithValue}) => {
    try {
        const {data} = await axios.get('http://localhost:3001/tourist')
        console.log(data);
        return data;
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})

export const nameTourist = createAsyncThunk('turista/nameT', async(name, {rejectWithValue}) => {
    try {
        const {data} = await axios.get(`http://localhost:3001/tourist?name=${name}`)
        console.log(data);
        return data;
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})

export const detailTourist = createAsyncThunk('turista/detailTour', async(id, {rejectWithValue}) => {
    try {
        const {data} = await axios.get(`http://localhost:3001/tourist/${id}`)
        console.log(data);
        return data;
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})

export const touristPost = createAsyncThunk('turista/postTour', async(payload) => {
    const {data} = await axios.post('http://localhost:3001/tourist', payload)
    return data;
})
export const touristDelete = createAsyncThunk('turista/deleteTourist', async(id) => {
    const {data} = await axios.delete(`http://localhost:3001/tourist/${id}`)
    return data;
})


const initialState = {
    tourist: [],
    allTourist: [],
    detailTourist: {},
    isSuccess: false,
    alertas: [],
    loading: false,
    message: "",
    error: null
}

export const touristSlice = createSlice({
    name: 'turista',
    initialState,
    reducers: {
        getTourist: (state, action) => {
            state.tourist = action.payload;
            state.allTourist = action.payload;
        },
        getNameTourist: (state, action) => {
            state.tourist = action.payload;
        },
        touristDetail: (state, action) => {
            state.detailTourist = action.payload;
        },
        postTourist: (state, action) => {

        },
        deleteTourist: (state, action) => {
            const id = action.payload;
            return state.filter((c) => c.id !== id)
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(getDataTourist.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(getDataTourist.fulfilled, (state, action) => {
            state.loading = false;
            state.tourist = action.payload;
            state.allTourist = action.payload;
            state.isSuccess = true;
        }),
        builder.addCase(getDataTourist.rejected, (state, action) => {
            state.message = action.payload;
            state.loading = false;
            state.isSuccess = false;
        }),
        builder.addCase(nameTourist.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(nameTourist.fulfilled, (state, action) => {
            state.loading = false;
            state.tourist = action.payload;
            state.allTourist = action.payload;
            state.isSuccess = true;
        }),
        builder.addCase(nameTourist.rejected, (state, action) => {
            state.message = action.payload;
            state.loading = false;
            state.isSuccess = false;
        }),
        builder.addCase(detailTourist.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(detailTourist.fulfilled, (state, action) => {
            state.loading = false;
            state.detailTourist = action.payload;
            state.isSuccess = true;
        }),
        builder.addCase(detailTourist.rejected, (state, action) => {
            state.message = action.payload;
            state.loading = false;
            state.isSuccess = false;
        }),
        builder.addCase(touristPost.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(touristPost.fulfilled, (state, action) => {
            state.loading = false;
            state.tourist.push(action.payload);
            state.alertas.push({
                type: 'success',
                message: 'Tourist created Successfully',
                id: new Date().getTime()
            })
        }),
        builder.addCase(touristPost.rejected, (state, action) => {
            state.message = action.payload;
            state.alertas.push({
                type: 'error',
                message: action.error.message,
                id: new Date().getTime()
            })
        }),
        builder.addCase(touristDelete.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(touristDelete.fulfilled, (state, action) => {
            state.loading = false;
            state.isSuccess = true;
            state.message = "Tourist deleted Successfully";
            const index = state.tourist.findIndex((t) => t.id === action.payload.id);
            if (index !== -1) {
                state.tourist.splice(index, 1);
            }
        }),
        builder.addCase(touristDelete.rejected, (state, action) => {
            state.loading = false;
            state.isSuccess = false;
            state.message = "Could not delete tourist";
            state.error = action.error.message;
        })
    }
})

export const {
    getTourist,
    getNameTourist,
    touristDetail,
    postTourist,
    deleteTourist,
    setLoading
} = touristSlice.actions;

export default touristSlice.reducer;