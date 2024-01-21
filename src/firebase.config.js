
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD3UXSk7UZPu8A1IjG2zAoL9Q7dmxKMyDk",
    authDomain: "rs-motors-international.firebaseapp.com",
    projectId: "rs-motors-international",
    storageBucket: "rs-motors-international.appspot.com",
    messagingSenderId: "1079589958979",
    appId: "1:1079589958979:web:96d9b2ced39942fa436bf6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);