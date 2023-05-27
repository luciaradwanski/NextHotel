'use client'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataRooms = createAsyncThunk('suites/getR', async(arg, {rejectWithValue}) => {
    try {
        const {data} = await axios.get('http://localhost:3001/rooms')
        console.log(data);
        return data;
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})

export const nameRoom = createAsyncThunk('suites/nameR', async(name, {rejectWithValue}) => {
    try {
        const {data} = await axios.get(`http://localhost:3001/rooms?name=${name}`)
        console.log(data);
        return data;
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})

export const detailRoom = createAsyncThunk('suites/detailR', async(id, {rejectWithValue}) => {
    try {
        const {data} = await axios.get(`http://localhost:3001/rooms/${id}`)
        console.log(data);
        return data;
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})

export const roomPost = createAsyncThunk('suites/postR', async(payload) => {
    const {data} = await axios.post('http://localhost:3001/rooms', payload)
    return data;
})
export const roomDelete = createAsyncThunk('suites/deleteR', async(id) => {
    const {data} = await axios.delete(`http://localhost:3001/rooms/${id}`)
    return data;
})


const initialState = {
    room: [],
    allRoom: [],
    detailRoom: {},
    isSuccess: false,
    alertas: [],
    loading: false,
    message: "",
    status: null,
    error: null
}

export const roomSlice = createSlice({
    name: 'suites',
    initialState,
    reducers: {
        getRooms: (state, action) => {
            state.room = action.payload;
            state.allRoom = action.payload;
        },
        getNameRoom: (state, action) => {
            state.room = action.payload;
        },
        roomDetail: (state, action) => {
            state.detailRoom = action.payload;
        },
        postRoom: (state, action) => {

        },
        deleteRoom: (state, action) => {
            const id = action.payload;
            return state.filter((c) => c.id !== id)
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(getDataRooms.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(getDataRooms.fulfilled, (state, action) => {
            state.loading = false;
            state.room = action.payload;
            state.allRoom = action.payload;
            state.isSuccess = true;
        }),
        builder.addCase(getDataRooms.rejected, (state, action) => {
            state.message = action.payload;
            state.loading = false;
            state.isSuccess = false;
        }),
        builder.addCase(nameRoom.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(nameRoom.fulfilled, (state, action) => {
            state.loading = false;
            state.room = action.payload;
            state.allRoom = action.payload;
            state.isSuccess = true;
        }),
        builder.addCase(nameRoom.rejected, (state, action) => {
            state.message = action.payload;
            state.loading = false;
            state.isSuccess = false;
        }),
        builder.addCase(detailRoom.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(detailRoom.fulfilled, (state, action) => {
            state.loading = false;
            state.detailRoom = action.payload;
            state.isSuccess = true;
        }),
        builder.addCase(detailRoom.rejected, (state, action) => {
            state.message = action.payload;
            state.loading = false;
            state.isSuccess = false;
        }),
        builder.addCase(roomPost.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(roomPost.fulfilled, (state, action) => {
            state.loading = false;
            state.room.push(action.payload);
            state.alertas.push({
                type: 'success',
                message: 'Room created Successfully',
                id: new Date().getTime()
            })
        }),
        builder.addCase(roomPost.rejected, (state, action) => {
            state.message = action.payload;
            state.alertas.push({
                type: 'error',
                message: action.error.message,
                id: new Date().getTime()
            })
        }),
        builder.addCase(roomDelete.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(roomDelete.fulfilled, (state, action) => {
            state.loading = false;
            state.isSuccess = true;
            state.message = "Room deleted Successfully";
            const index = state.room.findIndex((act) => act.id === action.payload.id);
            if (index !== -1) {
                state.room.splice(index, 1);
            }
        }),
        builder.addCase(roomDelete.rejected, (state, action) => {
            state.loading = false;
            state.isSuccess = false;
            state.message = "Could not delete room";
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
} = roomSlice.actions;

export default roomSlice.reducer;