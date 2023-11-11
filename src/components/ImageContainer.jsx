import ImageCard from "./ImageCard";
import Upload from "./Upload";
import { storage } from "../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { changeImageListFully, getImageList } from "../redux/imageListSlice";
import { resetList } from "../redux/checkedBoxSlice";


const ImageContainer = () => {
    let  dragItemIndex = useRef(null);
    let  dragEndItemIndex = useRef(null);

    const imageList = useSelector(state => state.imageList);
    const needChange = useSelector(state => state.needChange);
    const dispatch = useDispatch();

    const imageListRef = ref(storage, "images/");

    useEffect(()=>{
        let isCanceled = false;
        dispatch(resetList());
        listAll(imageListRef)
            .then(res => {
                if(!isCanceled){
                    res.items.forEach(item => {
                        getDownloadURL(item)
                            .then(url => {
                                dispatch(getImageList(url))
                            });
                    }); 
                }
            });
        return ()=>{isCanceled = true};
    }, []);

    const handleDragEnd = (e, index) =>{
        let  _items = [...imageList];

        if(dragEndItemIndex.current < dragItemIndex.current){
            let temp = dragEndItemIndex;
            dragEndItemIndex = dragItemIndex;
            dragItemIndex = temp;
        }
        let draggedItem = _items.splice(dragItemIndex.current,1)[0];
        _items.splice(dragEndItemIndex.current, 0, draggedItem);
        draggedItem = _items.splice(dragEndItemIndex.current-1,1)[0];
        _items.splice(dragItemIndex.current, 0, draggedItem);

        dragItemIndex.current = null;
        dragEndItemIndex.current = null;

        dispatch(changeImageListFully(_items) );
    }

    return (
        <div 
            className="w-full h-full bg-white shadow-lg p-5 w-3/4 rounded-b-lg
            grid grid-cols-4 gap-4"
        >
            {
                imageList.map((url, index) =>{
                    return (<li key={url} className={`list-none border-0 ${(index==0) ? "col-span-2 row-span-2": ""}`}
                    draggable
                    onDragStart={(e)=>dragItemIndex.current = index}
                    onDragEnter={(e)=>dragEndItemIndex.current = index}
                    onDragEnd={(e)=>handleDragEnd(e,index)}
                    > 
                        <ImageCard url={url} key={url} index={index} />
                    </li>)
                })
            }

            <Upload length={imageList.length}/>
        </div>
    );
};

export default ImageContainer;