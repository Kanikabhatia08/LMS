// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBsiv68wJnti-ZjB3LkF51TVI-jtH8Ay0A",
    authDomain: "edupress-63daa.firebaseapp.com",
    projectId: "edupress-63daa",
    storageBucket: "edupress-63daa.appspot.com",
    messagingSenderId: "855579309616",
    appId: "1:855579309616:web:af2c9db51bd20d21425ff5",
    measurementId: "G-NLG8GHZF88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth, provider}