import { createSlice } from "@reduxjs/toolkit";

const refSlice = createSlice({
    initialState: [],
    name: 'refList',
    reducers: {
        addRef: (state, action) => {
            console.log('ty',action.payload);
            console.log('ty', typeof action.payload);
            state.push(action.payload);
        },
        resetRefList: (state) => {
            state = [];
        }
    }
});

export const { addRef,resetRefList } = refSlice.actions;
export default refSlice.reducer;