import { createSlice } from "@reduxjs/toolkit";

const needChangeSlice = createSlice({
    initialState: false,
    name: 'needChange',
    reducers: {
        alterState:(state) => {
            return state = state?false:true;
        },
        makeFalse: state => false,
        makeTrue: state => true
    }
});

export const { alterState, makeFalse, makeTrue } = needChangeSlice.actions;
export default needChangeSlice.reducer;