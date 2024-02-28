
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyAoQUT5QpHB0MG-25JDrHM0n1qwoztgLFM",
    authDomain: "coderhouse-6be32.firebaseapp.com",
    projectId: "coderhouse-6be32",
    storageBucket: "coderhouse-6be32.appspot.com",
    messagingSenderId: "36051307346",
    appId: "1:36051307346:web:f5ce2706a326a08206c88b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
