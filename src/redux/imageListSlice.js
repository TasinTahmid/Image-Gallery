import { createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from 'react-redux';

const imageListSlice = createSlice({
    initialState: [],
    name: 'imageList',
    reducers: {
        getImageList:(state, action) => {
            state.push(action.payload);
        },
        updateImageList: (state, action) => {
            const selectedList = useSelector(state => state.counter);
            state.forEach((elem, index) => {
                if(action.payload.includes(elem)){
                    state.splice(index, 1);
                }
            });
            console.log(' sataae',state);
            
        },
    }
});

export const { updateImageList, getImageList } = imageListSlice.actions;
export default imageListSlice.reducer;