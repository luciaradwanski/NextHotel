'use client'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataActivity = createAsyncThunk('actividad/getData', async(arg, {rejectWithValue}) => {
    try {
        const {data} = await axios.get('http://localhost:3001/activity')
        console.log(data);
        return data;
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})

export const nameActivity = createAsyncThunk('actividad/getName', async(name, {rejectWithValue}) => {
    try {
        const {data} = await axios.get(`http://localhost:3001/activity?name=${name}`)
        console.log(data);
        return data;
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})

export const detailActivity = createAsyncThunk('actividad/detailAct', async(id, {rejectWithValue}) => {
    try {
        const {data} = await axios.get(`http://localhost:3001/activity/${id}`)
        console.log(data);
        return data;
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})

export const activityPost = createAsyncThunk('actividad/postAct', async(payload) => {
    const {data} = await axios.post('http://localhost:3001/activity', payload)
    return data;
})
export const activityDelete = createAsyncThunk('actividad/deleteAct', async(id) => {
    const {data} = await axios.delete(`http://localhost:3001/activity/${id}`)
    return data;
})


const initialState = {
    activity: [],
    allActivity: [],
    detailActivity: {},
    isSuccess: false,
    alertas: [],
    loading: false,
    message: "",
    error: null
}

export const activitySlice = createSlice({
    name: 'actividad',
    initialState,
    reducers: {
        getActivity: (state, action) => {
            state.activity = action.payload;
            state.allActivity = action.payload;
        },
        getNameActivity: (state, action) => {
            state.activity = action.payload;
        },
        activityDetail: (state, action) => {
            state.detailActivity = action.payload;
        },
        postActivity: (state, action) => {

        },
        deleteActivity: (state, action) => {
            const id = action.payload;
            return state.filter((c) => c.id !== id)
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(getDataActivity.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(getDataActivity.fulfilled, (state, action) => {
            state.loading = false;
            state.activity = action.payload;
            state.allActivity = action.payload;
            state.isSuccess = true;
        }),
        builder.addCase(getDataActivity.rejected, (state, action) => {
            state.message = action.payload;
            state.loading = false;
            state.isSuccess = false;
        }),
        builder.addCase(nameActivity.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(nameActivity.fulfilled, (state, action) => {
            state.loading = false;
            state.activity = action.payload;
            state.allActivity = action.payload;
            state.isSuccess = true;
        }),
        builder.addCase(nameActivity.rejected, (state, action) => {
            state.message = action.payload;
            state.loading = false;
            state.isSuccess = false;
        }),
        builder.addCase(detailActivity.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(detailActivity.fulfilled, (state, action) => {
            state.loading = false;
            state.detailActivity = action.payload;
            state.isSuccess = true;
        }),
        builder.addCase(detailActivity.rejected, (state, action) => {
            state.message = action.payload;
            state.loading = false;
            state.isSuccess = false;
        }),
        builder.addCase(activityPost.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(activityPost.fulfilled, (state, action) => {
            state.loading = false;
            state.activity.push(action.payload);
            state.alertas.push({
                type: 'success',
                message: 'Room created Successfully',
                id: new Date().getTime()
            })
        }),
        builder.addCase(activityPost.rejected, (state, action) => {
            state.message = action.payload;
            state.alertas.push({
                type: 'error',
                message: action.error.message,
                id: new Date().getTime()
            })
        }),
        builder.addCase(activityDelete.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(activityDelete.fulfilled, (state, action) => {
            state.loading = false;
            state.isSuccess = true;
            state.message = "Actividad deleted Successfully";
            const index = state.activity.findIndex((act) => act.id === action.payload.id);
            if (index !== -1) {
                state.activity.splice(index, 1);
            }
        }),
        builder.addCase(activityDelete.rejected, (state, action) => {
            state.loading = false;
            state.isSuccess = false;
            state.message = "Could not delete activity";
            state.error = action.error.message;
        })
    }
})

export const {
    getRooms,
    getNameRoom,
    roomDetail,
    postRoom,
    deleteRoom,
    setLoading
} = activitySlice.actions;

export default activitySlice.reducer;