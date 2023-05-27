'use client'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataTypeRoom = createAsyncThunk('tipos/getTypeR', async(arg, {rejectWithValue}) => {
    try {
        const {data} = await axios.get('http://localhost:3001/roomType')
        console.log(data);
        return data;
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})

export const nameTypeRoom = createAsyncThunk('tipos/nameTypeR', async(name, {rejectWithValue}) => {
    try {
        const {data} = await axios.get(`http://localhost:3001/roomType?name=${name}`)
        console.log(data);
        return data;
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})

export const detailTypeRoom = createAsyncThunk('tipos/detailTypeR', async(id, {rejectWithValue}) => {
    try {
        const {data} = await axios.get(`http://localhost:3001/roomType/${id}`)
        console.log(data);
        return data;
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})

export const typeRoomPost = createAsyncThunk('tipos/postTypeR', async(payload) => {
    const {data} = await axios.post('http://localhost:3001/roomType', payload)
    return data;
})
export const typeRoomDelete = createAsyncThunk('tipos/deleteTypeR', async(id) => {
    const {data} = await axios.delete(`http://localhost:3001/roomType/${id}`)
    return data;
})


const initialState = {
    typeRoom: [],
    allTypeRoom: [],
    detailTypeRoom: {},
    isSuccess: false,
    alertas: [],
    loading: false,
    message: "",
    error: null
}

export const typeRoomSlice = createSlice({
    name: 'tipos',
    initialState,
    reducers: {
        getTypeRoom: (state, action) => {
            state.typeRoom = action.payload;
            state.allTypeRoom = action.payload;
        },
        getNameTypeRoom: (state, action) => {
            state.typeRoom = action.payload;
        },
        typeRoomDetail: (state, action) => {
            state.detailTypeRoom = action.payload;
        },
        postTypeRoom: (state, action) => {

        },
        deleteTypeRoom: (state, action) => {
            const id = action.payload;
            return state.filter((c) => c.id !== id)
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(getDataTypeRoom.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(getDataTypeRoom.fulfilled, (state, action) => {
            state.loading = false;
            state.typeRoom = action.payload;
            state.allTypeRoom = action.payload;
            state.isSuccess = true;
        }),
        builder.addCase(getDataTypeRoom.rejected, (state, action) => {
            state.message = action.payload;
            state.loading = false;
            state.isSuccess = false;
        }),
        builder.addCase(nameTypeRoom.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(nameTypeRoom.fulfilled, (state, action) => {
            state.loading = false;
            state.typeRoom = action.payload;
            state.allTypeRoom = action.payload;
            state.isSuccess = true;
        }),
        builder.addCase(nameTypeRoom.rejected, (state, action) => {
            state.message = action.payload;
            state.loading = false;
            state.isSuccess = false;
        }),
        builder.addCase(detailTypeRoom.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(detailTypeRoom.fulfilled, (state, action) => {
            state.loading = false;
            state.detailTypeRoom = action.payload;
            state.isSuccess = true;
        }),
        builder.addCase(detailTypeRoom.rejected, (state, action) => {
            state.message = action.payload;
            state.loading = false;
            state.isSuccess = false;
        }),
        builder.addCase(typeRoomPost.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(typeRoomPost.fulfilled, (state, action) => {
            state.loading = false;
            state.typeRoom.push(action.payload);
            state.alertas.push({
                type: 'success',
                message: 'TypeRoom created Successfully',
                id: new Date().getTime()
            })
        }),
        builder.addCase(typeRoomPost.rejected, (state, action) => {
            state.message = action.payload;
            state.alertas.push({
                type: 'error',
                message: action.error.message,
                id: new Date().getTime()
            })
        }),
        builder.addCase(typeRoomDelete.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(typeRoomDelete.fulfilled, (state, action) => {
            state.loading = false;
            state.isSuccess = true;
            state.message = "TypeRoom deleted Successfully";
            const index = state.typeRoom.findIndex((t) => t.id === action.payload.id);
            if (index !== -1) {
                state.typeRoom.splice(index, 1);
            }
        }),
        builder.addCase(typeRoomDelete.rejected, (state, action) => {
            state.loading = false;
            state.isSuccess = false;
            state.message = "Could not delete TypeRoom";
            state.error = action.error.message;
        })
    }
})

export const {
    getTypeRoom,
    getNameTypeRoom,
    typeRoomDetail,
    postTypeRoom,
    deleteTypeRoom,
    setLoading
} = typeRoomSlice.actions;

export default typeRoomSlice.reducer;