import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addToList, removeFromList } from "../redux/checkedBoxSlice.js";


const ImageCard = ({url, index}) => {
    const list = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const [isHovering, setIsHovering] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (e) => {
        if(!isChecked){
            setIsChecked(true);
            dispatch(addToList(url));

        }
        else{
            setIsChecked(false);      
            dispatch(removeFromList(url));  
        }      
    };
    const handleMouseEnter = (e) => {
        setIsHovering(true);
    };
    const handleMouseLeave = (e) => {
        setIsHovering(false);
    };

    return (
        <div 
            className={`grid border-2 rounded-lg  relative cursor-pointer `}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div 
                className={`flex items-center relative rounded-lg 
        z-50 ${isHovering || isChecked ? "" : "hidden"}
        `}
            >
                <input 
                    type="checkbox"
                    value={isChecked}
                    onChange={handleCheckboxChange}
                    className="absolute p-4 top-4 left-4 w-4 h-4 "
                />
            </div>

            <div 
                className={`h-full w-full bg-black opacity-30 
                absolute rounded-lg ${isHovering && !isChecked ? "" : "hidden"}`}
            ></div>

            <img 
                src={url}
                alt={`image`}
                className={`rounded-lg ${isChecked ? "opacity-40" : ""}`}
            />
        </div>
    );
};

export default ImageCard;