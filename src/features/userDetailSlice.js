import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


// ****************************called as Action**************************************

// create user 
export const createUser = createAsyncThunk("createUser", async (data, { rejectWithValue }) => {

    const response = await fetch('https://6579af021acd268f9af9bb9b.mockapi.io/crud', {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data)
    });

    try {
        const result = await response.json();
        return result; // Assuming the API returns the created user data
    } catch (error) {
        return rejectWithValue(error);
    }

});

//Show Register User


export const showUser = createAsyncThunk("showUser", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get('https://6579af021acd268f9af9bb9b.mockapi.io/crud');
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
})

//Delete Register User

export const deleteUser = createAsyncThunk("deleteUser", async (id, { rejectWithValue }) => {
    try {
        const response = await axios.delete(`https://6579af021acd268f9af9bb9b.mockapi.io/crud/${id}`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
})

// Update User 
export const updateUser = createAsyncThunk("updateUser", async ({ id, updateData }, { rejectWithValue }) => {
    try {
        const response = await axios.put(`https://6579af021acd268f9af9bb9b.mockapi.io/crud/${id}`, updateData);
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const showNews = createAsyncThunk("showNews", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(`https://backend-ekms.onrender.com/manual_news/get_post_social/`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
})

// export const showTechnologyNews = createAsyncThunk("showTechnologyNews", async (_, { rejectWithValue }) => {
//     try {
//         const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=react`);
//         return response.data;
//     } catch (error) {
//         return rejectWithValue(error);
//     }
// })



// search news 








export const newsDeatil = createSlice({
    name: 'newsDeatil',
    initialState: {
        users: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload);
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // handle promise delete User
            .addCase(deleteUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.loading = false;
                const { id } = action.payload;
                if (id) {
                    state.users = state.users.filter((ele) => ele.id !== id)
                }
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            //handle promise update user
            .addCase(updateUser.pending, (state) => {
                state.loading = true;
                state.error = null; // Clear previous errors when making a new request
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = state.users.map((ele) =>
                    ele.id === action.payload.id ? { ...ele, ...action.payload } : ele
                );
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // Use action.error for the error message
            })

            // handle promise Registerd User
            .addCase(showUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(showUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(showUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
          

            //handle promise technology news
            .addCase(showNews.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(showNews.fulfilled, (state, action) => {
                state.loading = false;
                console.log("ALOGOLIA::",action.payload);
                state.users = action.payload;
            })
            .addCase(showNews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

           
    },
});

export default newsDeatil.reducer;
