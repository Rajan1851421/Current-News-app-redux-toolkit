import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk("fetchProduct", async (category, { rejectWithValue }) => {
    try {
        const response = await axios.get(`https://fakestoreapi.com/products/${category}`)
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
            'https://dummyapi.online/api/users',
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
        const response = await axios.get(`https://dummyapi.online/api/users`)
        return response.data
    } catch (error) {
        return rejectWithValue(error);

    }
})

export const SelectAddress = createAsyncThunk("SelectAddress", async (id, { rejectWithValue }) => {
    try {
        const response = await axios.get(`https://dummyapi.online/api/users/${id}`)
        return response.data
    } catch (error) {
        return rejectWithValue(error);
    }
})

export const CancleOrder = createAsyncThunk("CancleOrder", async (id, { rejectWithValue }) => {
    try {
        const response = await axios.delete(`https://fakestoreapi.com/products/${id}`)
        return response.data
    } catch (error) {
        return rejectWithValue(error);
    }
})
export const AllCancleOrder = createAsyncThunk('AllCancleOrder', async (ids, { rejectWithValue }) => {
    try {
        const responses = await Promise.all(
            ids.map(async (id) => {
                return axios.delete(`https://fakestoreapi.com/products/${id}`);
            })
        );

        // Extract data from all responses
        const responseData = responses.map(response => response.data);
        return responseData; // Return array of response data for each deleted order
    } catch (error) {
        return rejectWithValue(error);
    }
});



export const pruductDetails = createSlice({
    name: 'productdetails',
    initialState: {
        products: [],
        address: [],
        uniqueAddress: [],
        successMessage: null,
        status: '',
        cart: [],
        order: [],
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
                console.log(action.payload);
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
                state.EditProductData = action.payload;
                state.products = state.products.map((ele) => ele.id === action.payload.id ? { ...ele, ...action.payload } : ele);
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

            .addCase(SelectAddress.pending, (state) => {
                state.loading = true;
            })
            .addCase(SelectAddress.fulfilled, (state, action) => {
                state.loading = false;
                const { id } = action.payload;
                if (id) {
                    const matchAddress = state.address.find((ele) => ele.id === id);
                    if (matchAddress) {
                        // state.uniqueAddress = { ...state.uniqueAddress, [id]: matchAddress, ...state.uniqueAddress };
                        state.uniqueAddress = matchAddress

                    }
                }
                state.order = state.cart

            })
            .addCase(SelectAddress.rejected, (state) => {
                state.loading = false
                state.error = "Something wrong "
            })

            .addCase(CancleOrder.pending, (state) => {
                state.loading = true;
            })
            .addCase(CancleOrder.fulfilled, (state, action) => {
                state.loading = false;
                const { id } = action.payload;
                if (id) {
                    state.order = state.order.filter((ele) => ele.id !== id);
                    state.status = 'Item Deleted !!!'
                }
            })
            .addCase(CancleOrder.rejected, (state) => {
                state.loading = false;
                state.error = "Something wrong";
            })

            .addCase(AllCancleOrder.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(AllCancleOrder.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.order = [];
            })
            .addCase(AllCancleOrder.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload; // Store the error message in the state
            });



    },
})
export default pruductDetails.reducer;