import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk("fetchProduct", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(`https://fakestoreapi.com/products/`)
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
})

export const ViewProduct = createAsyncThunk("ViewProduct", async (id, { rejectWithValue }) => {
    try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
})

export const cartRemoveProduct = createAsyncThunk("cartRemoveProduct", async (id, { rejectWithValue }) => {
    try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
})

// export const ConfirmAddress = createAsyncThunk("ConfirmAddress", async (address, { rejectWithValue }) => {
//     try {
//         const response = await axios.post(`https://6584af38022766bcb8c77edd.mockapi.io/news${address}`)
//         return response.data;
//     } catch (error) {
//         return rejectWithValue(error);
//     }
// })
export const ConfirmAddress = createAsyncThunk("ConfirmAddress", async (address, { rejectWithValue }) => {

    const response = await fetch('https://6584af38022766bcb8c77edd.mockapi.io/news', {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(address)
    });

    try {
        const result = await response.json();
        return result; // Assuming the API returns the created user data
    } catch (error) {
        return rejectWithValue(error);
    }

});

export const pruductDetails = createSlice({
    name: 'productdetails',
    initialState: {
        products: [],
        address:[],
        cart: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // handle fetch product
            .addCase(fetchProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
                //console.log(action.payload);
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // view product by id

            .addCase(ViewProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(ViewProduct.fulfilled, (state, action) => {
                state.loading = false;
                const { id } = action.payload
                if (id) {
                    const matchingProduct = state.products.find((ele) => ele.id === id);
                    if (matchingProduct) {
                        state.cart = [...state.cart, matchingProduct]; // Store the matching product in the cart
                        console.log("Users 2:", state.cart);
                    }
                }
            })
            .addCase(ViewProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(cartRemoveProduct.fulfilled, (state, action) => {
                state.loading = false;
                const { id } = action.payload;
                if (id) {
                    const indexToRemove = state.cart.findIndex((ele) => ele.id === id);

                    if (indexToRemove !== -1) {
                        // Remove only the first occurrence of the item with the specified id
                        state.cart.splice(indexToRemove, 1);
                    }
                }
            })
            .addCase(ConfirmAddress.pending, (state) => {
                state.loading = true;
            })
            .addCase(ConfirmAddress.fulfilled, (state, action) => {
                state.loading = false;
                state.address = action.payload;
                console.log("Address:",action.payload);
            })
            .addCase(ConfirmAddress.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

    },
})
export default pruductDetails.reducer;