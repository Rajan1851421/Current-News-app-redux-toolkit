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

export const AddProduct = createAsyncThunk("AddProduct", async (formDataToSend, { rejectWithValue }) => {
    try {
        const response = await axios.post(
            'https://fakestoreapi.com/products',
            formDataToSend,
            {
                headers: {
                    "Content-type": "application/json",
                },
            }
        );
        return response.data; // Assuming the API returns the created user data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }

})

export const RemoveProduct = createAsyncThunk("RemoveProduct", async (id, { rejectWithValue }) => {
    try {
        const response = await axios.delete(`https://fakestoreapi.com/products/${id}`)
        return response.data
    } catch (error) {
        return rejectWithValue(error);
    }
})

export const HandleEdit = createAsyncThunk("HandleEdit", async ({ id, updateData }, { rejectWithValue }) => {
    try {
        const response = await axios.put(`https://fakestoreapi.com/products/${id}`, updateData)
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const ConfirmAddress = createAsyncThunk("ConfirmAddress", async (address, { rejectWithValue }) => {
    try {
        const response = await axios.post(
            'https://6584af38022766bcb8c77edd.mockapi.io/news',
            address,
            {
                headers: {
                    "Content-type": "application/json",
                },
            }
        );
        return response.data; // Assuming the API returns the created user data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
}
);


export const FetchAddress = createAsyncThunk('FetchAddress', async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(`https://6584af38022766bcb8c77edd.mockapi.io/news`)
        return response.data
    } catch (error) {
        return rejectWithValue(error);

    }
})

export const RemoveAddress = createAsyncThunk("RemoveAddress", async (id, { rejectWithValue }) => {
    try {
        const response = await axios.delete(`https://6584af38022766bcb8c77edd.mockapi.io/news/${id}`)
        return response.data
    } catch (error) {
        return rejectWithValue(error);
    }
})



export const pruductDetails = createSlice({
    name: 'productdetails',
    initialState: {
        products: [],
        address: [],
        successMessage: null,
        cart: [],
        EditProductData: null,
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
                console.log("Address:", action.payload);
            })
            .addCase(ConfirmAddress.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(AddProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(AddProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload
                state.successMessage = 'Product successfully added!';  // Set success message
                console.log('ADD ITEM:', state.products);
            })
            .addCase(AddProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(RemoveProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(RemoveProduct.fulfilled, (state, action) => {
                state.loading = false;
                const { id } = action.payload;
                if (id) {
                    state.products = state.products.filter((ele) => ele.id !== id)
                }
            })
            .addCase(RemoveProduct.rejected, (state) => {
                state.loading = false
                state.error = "Something wrong "
            })

            .addCase(HandleEdit.pending, (state) => {
                state.loading = true;
            })
            .addCase(HandleEdit.fulfilled, (state, action) => {
                state.loading = false;
                // Assuming action.payload contains the updated product data
                state.EditProductData = action.payload;
                // You may also update the products array if needed
                state.products = state.products.map((ele) =>
                    ele.id === action.payload.id ? { ...ele, ...action.payload } : ele
                );
            })
            .addCase(HandleEdit.rejected, (state) => {
                state.loading = false
                state.error = "Something wrong "
            })

            .addCase(FetchAddress.pending, (state) => {
                state.loading = true
            })
            .addCase(FetchAddress.fulfilled, (state, action) => {
                state.loading = false;
                state.address = action.payload;
            })
            .addCase(FetchAddress.rejected, (state) => {
                state.error = "Something wrong Please try Again";
            })

            .addCase(RemoveAddress.pending, (state) => {
                state.loading = true;
            })
            .addCase(RemoveAddress.fulfilled, (state, action) => {
                state.loading = false;
                const { id } = action.payload;
                if (id) {
                    state.address = state.address.filter((ele) => ele.id !== id)
                }
            })
            .addCase(RemoveAddress.rejected, (state) => {
                state.loading = false
                state.error = "Something wrong "
            })


    },
})
export default pruductDetails.reducer;