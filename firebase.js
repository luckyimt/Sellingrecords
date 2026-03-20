import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your config
const firebaseConfig = {
  apiKey: "AIzaSyBvIRQOFXY3NCBB-60fgI8Kh_19LIo2lt8",
  authDomain: "store-86724.firebaseapp.com",
  projectId: "store-86724"
};

// Initialize
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export { db };