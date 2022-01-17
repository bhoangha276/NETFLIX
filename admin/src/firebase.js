import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDVSB9DEEn3ASbgppVQZ15Vpfn_QVQAA94",
    authDomain: "netflash-7dc56.firebaseapp.com",
    projectId: "netflash-7dc56",
    storageBucket: "netflash-7dc56.appspot.com",
    messagingSenderId: "414886825921",
    appId: "1:414886825921:web:5193e45e05d06bdeaf6940",
    measurementId: "G-T1980DJZX8"
};

const storage = initializeApp(firebaseConfig);
export default storage;