import ImageCard from "./ImageCard";
import Upload from "./Upload";
import { storage } from "../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { updateImageList, getImageList } from "../redux/imageListSlice";
import { resetList } from "../redux/checkedBoxSlice";
import { v4 } from "uuid";


const ImageContainer = () => {
    const imageList = useSelector(state => state.imageList);
    const needChange = useSelector(state => state.needChange);
    const dispatch = useDispatch();

    const imageListRef = ref(storage, "images/");

    useEffect(()=>{
        let isCanceled = false;
        console.log("in");
        dispatch(resetList());
        listAll(imageListRef)
            .then(res => {
                if(!isCanceled){
                    console.log('in2');
                    res.items.forEach(item => {
                        getDownloadURL(item)
                            .then(url => {
                                dispatch(getImageList(url))
                            });
                    }); 
                }
            });
        return ()=>{isCanceled = true};
    }, [needChange]);

    return (
        <div
            className="w-full bg-white shadow-lg p-5 w-3/4 rounded-b-lg
            grid grid-cols-4 gap-4"
        >
            {
                imageList.map((url, index) =>{
                    return <ImageCard url={url} key={index} />
                })
            }

            <Upload />
        </div>
    );
};

export default ImageContainer;