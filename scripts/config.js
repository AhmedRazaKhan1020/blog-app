import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";




const firebaseConfig = {
    apiKey: "AIzaSyBTeqWiaL854KXqyXixioy1nuBjx_v18o0",
    authDomain: "social-project-29ea5.firebaseapp.com",
    projectId: "social-project-29ea5",
    storageBucket: "social-project-29ea5.firebasestorage.app",
    messagingSenderId: "929013255817",
    appId: "1:929013255817:web:2e8f044c5d6f9dfd3e0058",
    measurementId: "G-VDTVMGQV93"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);