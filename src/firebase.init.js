// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDoKOyd0ezJvaTicEOYowc4ddc7ABWwzI",
  authDomain: "assignment-10-affc3.firebaseapp.com",
  projectId: "assignment-10-affc3",
  storageBucket: "assignment-10-affc3.appspot.com",
  messagingSenderId: "946892419937",
  appId: "1:946892419937:web:41f6a47d9463179e8b8b20",
  measurementId: "G-24G5XDQP9L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;