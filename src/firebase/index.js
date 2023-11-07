import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCxeQ3UCft180rC1ERJpO3Os8HhwuRZ374",
  authDomain: "image-gallery-b6906.firebaseapp.com",
  projectId: "image-gallery-b6906",
  storageBucket: "image-gallery-b6906.appspot.com",
  messagingSenderId: "579193623259",
  appId: "1:579193623259:web:da2488cc6c86ab80e7f2fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);