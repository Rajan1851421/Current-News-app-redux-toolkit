import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

// create action
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
