// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7flU098-YNrAAWbiWuK08r_6WonddwFc",
  authDomain: "netflix-clone-99350.firebaseapp.com",
  projectId: "netflix-clone-99350",
  storageBucket: "netflix-clone-99350.appspot.com",
  messagingSenderId: "743474355489",
  appId: "1:743474355489:web:97a69e5e57526b24ebb260",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
