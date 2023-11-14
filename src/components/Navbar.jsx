import { storage } from "../firebase";
import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { alterState } from "../redux/needChangeSlice.js";
import { updateImageList } from "../redux/imageListSlice.js";
import { resetList } from "../redux/checkedBoxSlice.js";
import { resetRefList } from "../redux/refSlice.js";
import { ref, deleteObject } from "firebase/storage";
import { RefContext } from "../App.jsx";

const nav = () => {
    const selectedImageList = useSelector((state) => state.counter);

    const refList = useSelector(state => state.refList);
    const dispatch = useDispatch();
    const ref = useContext(RefContext);


    const deleteImage = () => { 
    //   dispatch(updateImageList(dsletcedImageList));
        selectedImageList.map((image) => {
            const imageRef = ref(storage, image);
            
            deleteObject(imageRef)
            .then(() => {
                // dispatch(alterState());
                dispatch(updateImageList(image));
                dispatch(resetList());
            })
        });
    };

    const unselectAllImage = () => { 
        ref.current.map(elem => {
            elem && (elem.checked = false);
            elem.value ? elem.value = false : elem.value = true;
        });
        ref.current = [];
        dispatch(resetList());
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
                                onChange={unselectAllImage}
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