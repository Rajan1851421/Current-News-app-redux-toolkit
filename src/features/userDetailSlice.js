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




// show general news 
export const showNews = createAsyncThunk("showNews", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=9b7571cb6cc94c6a897fda39db74b3bc');
        return response.data; // Use response.data to get the actual data
    } catch (error) {
        // Use rejectWithValue to handle the rejected action with a specific payload
        return rejectWithValue(error.response.data);
    }
});

// show health news

export const showHelathNews = createAsyncThunk("showHelathNews", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=9b7571cb6cc94c6a897fda39db74b3bc')
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

// show sports news

export const showSportsNews = createAsyncThunk("showSportsNews", async (_, { rejectWithValue }) => {
    try {

        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=9b7571cb6cc94c6a897fda39db74b3bc`)
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})


// show business news 

export const showBusinessNews = createAsyncThunk("showBusinessNews", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=9b7571cb6cc94c6a897fda39db74b3bc`)
        return response.data;
    } catch (error) {
        return rejectWithValue(error);

    }
})

// show technology news

export const showTechnologyNews = createAsyncThunk("showTechnology", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=9b7571cb6cc94c6a897fda39db74b3bc`)
        return response.data;
    } catch (error) {
        return rejectWithValue(error);

    }
})




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

            // handle promise show general news


            .addCase(showNews.pending, (state) => {
                state.loading = true;
            })
            .addCase(showNews.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(showNews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })


            // handle promise show health news


            .addCase(showHelathNews.pending, (state) => {
                state.loading = true;
            })
            .addCase(showHelathNews.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(showHelathNews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // handle promise show Sports news


            .addCase(showSportsNews.pending, (state) => {
                state.loading = true;
            })
            .addCase(showSportsNews.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(showSportsNews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })


            // handle promise Business news

            .addCase(showBusinessNews.pending, (state) => {
                state.loading = true;
            })
            .addCase(showBusinessNews.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(showBusinessNews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            //handle promise technology news
            .addCase(showTechnologyNews.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(showTechnologyNews.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(showTechnologyNews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    },
});

export default newsDeatil.reducer;
