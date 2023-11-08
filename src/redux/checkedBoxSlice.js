import { createSlice } from "@reduxjs/toolkit";

const checkedBoxListSlice = createSlice({
    initialState: [],
    name: 'checkedBoxList',
    reducers: {
        addToList: (state, action) => {
            state.push(action.payload);
        },
        removeFromList: (state, action) => {
            state.forEach((elem, index) => {
                if(elem == action.payload){
                    return state.splice(index, 1);
                }
            });
        },
        resetList: (state) => {
            state = [];
            return state;
        }
    }
});

export const { addToList, removeFromList, resetList } = checkedBoxListSlice.actions;
export default checkedBoxListSlice.reducer;