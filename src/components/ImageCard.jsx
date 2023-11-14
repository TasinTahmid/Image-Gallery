import React, { useState, useRef, useContext } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addToList, removeFromList } from "../redux/checkedBoxSlice.js";
import { RefContext } from "../App.jsx";
import { addRef } from "../redux/refSlice.js";


const ImageCard = ({url, index}) => {
    const list = useSelector(state => state.counter);
    const ref = useContext(RefContext);
    const needChange = useSelector(state => state.needChange);


    const dispatch = useDispatch();

    const [isHovering, setIsHovering] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (e) => {
        // ref.current.push(e.target);
        // console.log(ref.current);
        // dispatch(addRef((e.target)));
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

    // const addRef = (elem) => {
    //     console.log("in");
    //     console.log(elem);
    //     ref.current.push(elem);
    //     // dispatch(addRef(elem));
    // }

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
                    ref={(elem) => {elem&&elem.checked&&ref.current.push(elem)}}
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