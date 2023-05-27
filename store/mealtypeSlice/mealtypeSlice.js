'use client'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataMealtype = createAsyncThunk('comida/getC', async(arg, {rejectWithValue}) => {
    try {
        const {data} = await axios.get('http://localhost:3001/mealtype')
        console.log(data);
        return data;
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})

export const nameMealtype = createAsyncThunk('comida/nameC', async(name, {rejectWithValue}) => {
    try {
        const {data} = await axios.get(`http://localhost:3001/mealtype?name=${name}`)
        console.log(data);
        return data;
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})

export const detailMealtype = createAsyncThunk('comida/detailC', async(id, {rejectWithValue}) => {
    try {
        const {data} = await axios.get(`http://localhost:3001/mealtype/${id}`)
        console.log(data);
        return data;
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})

export const mealtypePost = createAsyncThunk('comida/postC', async(payload) => {
    const {data} = await axios.post('http://localhost:3001/mealtype', payload)
    return data;
})
export const mealtypeDelete = createAsyncThunk('comida/deleteC', async(id) => {
    const {data} = await axios.delete(`http://localhost:3001/mealtype/${id}`)
    return data;
})


const initialState = {
    mealtype: [],
    allMealtype: [],
    detailMealtype: {},
    isSuccess: false,
    alertas: [],
    loading: false,
    message: "",
    error: null
}

export const mealtypeSlice = createSlice({
    name: 'comida',
    initialState,
    reducers: {
        getMealtype: (state, action) => {
            state.mealtype = action.payload;
            state.allMealtype = action.payload;
        },
        getNameMealtype: (state, action) => {
            state.mealtype = action.payload;
        },
        mealtypeyDetail: (state, action) => {
            state.detailMealtype = action.payload;
        },
        postMealtype: (state, action) => {

        },
        deleteMealtype: (state, action) => {
            const id = action.payload;
            return state.filter((c) => c.id !== id)
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(getDataMealtype.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(getDataMealtype.fulfilled, (state, action) => {
            state.loading = false;
            state.mealtype = action.payload;
            state.allMealtype = action.payload;
            state.isSuccess = true;
        }),
        builder.addCase(getDataMealtype.rejected, (state, action) => {
            state.message = action.payload;
            state.loading = false;
            state.isSuccess = false;
        }),
        builder.addCase(nameMealtype.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(nameMealtype.fulfilled, (state, action) => {
            state.loading = false;
            state.mealtype = action.payload;
            state.allMealtype = action.payload;
            state.isSuccess = true;
        }),
        builder.addCase(nameMealtype.rejected, (state, action) => {
            state.message = action.payload;
            state.loading = false;
            state.isSuccess = false;
        }),
        builder.addCase(detailMealtype.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(detailMealtype.fulfilled, (state, action) => {
            state.loading = false;
            state.detailMealtype = action.payload;
            state.isSuccess = true;
        }),
        builder.addCase(detailMealtype.rejected, (state, action) => {
            state.message = action.payload;
            state.loading = false;
            state.isSuccess = false;
        }),
        builder.addCase(mealtypePost.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(mealtypePost.fulfilled, (state, action) => {
            state.loading = false;
            state.mealtype.push(action.payload);
            state.alertas.push({
                type: 'success',
                message: 'Mealtype created Successfully',
                id: new Date().getTime()
            })
        }),
        builder.addCase(mealtypePost.rejected, (state, action) => {
            state.message = action.payload;
            state.alertas.push({
                type: 'error',
                message: action.error.message,
                id: new Date().getTime()
            })
        }),
        builder.addCase(mealtypeDelete.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(mealtypeDelete.fulfilled, (state, action) => {
            state.loading = false;
            state.isSuccess = true;
            state.message = "Mealtype deleted Successfully";
            const index = state.mealtype.findIndex((r) => r.id === action.payload.id);
            if (index !== -1) {
                state.mealtype.splice(index, 1);
            }
        }),
        builder.addCase(mealtypeDelete.rejected, (state, action) => {
            state.loading = false;
            state.isSuccess = false;
            state.message = "Could not delete mealtype";
            state.error = action.error.message;
        })
    }
})

export const {
    getMealtype,
    getNameMealtype,
    mealtypeDetail,
    postMealtype,
    deleteMealtype,
    setLoading
} = mealtypeSlice.actions;

export default mealtypeSlice.reducer;