import "./App.css";
import { createContext, useRef } from "react";

import Navbar from "./components/Navbar";
import ImageContainer from "./components/ImageContainer";

export const RefContext = createContext();


export default function App() {
    const ref = useRef([]);

    return (
        <main className="bg-slate-100 w-3/4 grid grid-cols-1 gap-1 place-items-center mx-auto">
            <RefContext.Provider value={ref}>
                <Navbar />
                <ImageContainer />
            </RefContext.Provider>
        </main>
    );
}
