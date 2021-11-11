import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initFirebaseApp = () => {
    initializeApp(firebaseConfig);
}

export default initFirebaseApp;
