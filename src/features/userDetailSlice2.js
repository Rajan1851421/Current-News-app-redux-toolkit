import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


// ****************************called as Action**************************************



//Show  User


export const showUser1 = createAsyncThunk("showUser1", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
})

export const DeleteJSON = createAsyncThunk("DeleteJSON", async (id, { rejectWithValue }) => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
})



export const userDetail = createSlice({
    name: 'userDetail',
    initialState: {
        users: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder


            // handle promise Registerd User
            .addCase(showUser1.pending, (state) => {
                state.loading = true;
            })
            .addCase(showUser1.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
                console.log(action.payload);
            })
            .addCase(showUser1.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            //handle Delete


            .addCase(DeleteJSON.pending, (state) => {
                state.loading = true;
            })
            .addCase(DeleteJSON.fulfilled, (state, action) => {
                state.loading = false;
                const { id } = action.payload;
                
                if (id) {
                    // console.log("slice ID:",id);
                    state.users = state.users.filter((ele) => ele.id !== id)
                    // console.log("Users 2:",state.users);
                }
            })
            .addCase(DeleteJSON.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })





    },
});

export default userDetail.reducer;
