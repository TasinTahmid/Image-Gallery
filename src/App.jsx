import "./App.css";
import Navbar from "./components/Navbar";
import ImageContainer from "./components/ImageContainer";

export default function App() {
    return (
        <main className="bg-slate-100 w-3/4 grid grid-cols-1 gap-1 place-items-center mx-auto">
            <Navbar />
            <ImageContainer />
        </main>
    );
}
