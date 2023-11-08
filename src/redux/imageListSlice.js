import { createSlice } from "@reduxjs/toolkit";

const imageListSlice = createSlice({
    initialState: [],
    name: 'imageList',
    reducers: {
        getImageList:(state, action) => {
            state.push(action.payload);
        },
        updateImageList: (state, action) => {
            
            state.forEach((elem, index) => {
                if(action.payload == elem){
                    let del = state.splice(index, 1);
                    console.log(' sataae',del);
                }
            });
            
        },
    }
});

export const { updateImageList, getImageList } = imageListSlice.actions;
export default imageListSlice.reducer;