import { createSlice } from "@reduxjs/toolkit";

const needChangeSlice = createSlice({
    initialState: false,
    name: 'needChange',
    reducers: {
        alterState:(state) => {
            return state = state?false:true;
        },
    }
});

export const { alterState } = needChangeSlice.actions;
export default needChangeSlice.reducer;