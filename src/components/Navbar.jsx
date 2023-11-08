import { storage } from "../firebase";
import { useSelector, useDispatch } from "react-redux";
import { alterState } from "../redux/needChangeSlice.js";
import { updateImageList, getImageList } from "../redux/imageListSlice.js";
import { addToList, removeFromList, resetList } from "../redux/checkedBoxSlice.js";
import { ref, deleteObject } from "firebase/storage";

const nav = () => {
    const selectedImageList = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const deleteImage = () => { 
    //   dispatch(updateImageList(dsletcedImageList));
        selectedImageList.map((image) => {
            const imageRef = ref(storage, image);
            
            deleteObject(imageRef)
            .then(() => {
                alert('deleted successfully.');            
                // dispatch(alterState());
                dispatch(updateImageList(image));
            })
        });
    };

    return (
        <div className="w-full ">
            {selectedImageList.length ? (
                <div
                    className={`w-full bg-white shadow-lg p-4 w-3/4 rounded-t-lg `}
                >
                    <div className="flex justify-between">
                        <div className="flex space-x-2">
                            <input
                                type="checkbox"
                                checked
                                value="true"
                                onChange={()=>{}}
                                className="  w-4 h-4 mt-1"
                            />
                            <p>{`${selectedImageList.length} File Selected`}</p>
                        </div>
                        <div className="text-red">
                            <button
                                type="submit"
                                className="text-red-600"
                                onClick={deleteImage}
                            >
                                Delete file
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="w-full bg-white shadow-lg p-4 w-3/4 rounded-t-lg">
                    <p>Gallery</p>
                </div>
            )}
        </div>
    );
};

export default nav;