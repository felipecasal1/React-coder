
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDQKCNTi5banePb3UWI6eMh9gwtFx62vo0",
  authDomain: "coder2024-686a9.firebaseapp.com",
  projectId: "coder2024-686a9",
  storageBucket: "coder2024-686a9.appspot.com",
  messagingSenderId: "130951650400",
  appId: "1:130951650400:web:23c2f213663b6ffaf77705",
  measurementId: "G-KPWVBH2V66"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
