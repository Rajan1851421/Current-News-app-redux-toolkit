import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


export const pixelimageapi = createAsyncThunk("pixelimageapi", async (search, { rejectWithValue }) => {
    try {
        const response = await  axios.get(`https://api.pexels.com/v1/search?query=${search}`, {
            headers: {
                Authorization: 'XkNI8BJ7o1FRDdtaTkIgtYjAsmRiSASRHnUf6VbzLkXu1OuPfHHpfcXL',
            },
        })
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
})


export const pixelimg = createSlice({
    name: 'pixelimg',
    initialState: {
        users: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // handle promise Registerd User
            .addCase(pixelimageapi.pending, (state) => {
                state.loading = true;
            })
            .addCase(pixelimageapi.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
                console.log(action.payload);
            })
            .addCase(pixelimageapi.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })    


    },
});

export default pixelimg.reducer;