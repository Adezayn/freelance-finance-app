// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlOYXmG1SqGditEst4DniO2uaoOtmKkGs",
  authDomain: "freelance-backend-app.firebaseapp.com",
  databaseURL: "https://freelance-backend-app-default-rtdb.firebaseio.com",
  projectId: "freelance-backend-app",
  storageBucket: "freelance-backend-app.firebasestorage.app",
  messagingSenderId: "421303255882",
  appId: "1:421303255882:web:de46ef236fb68ec06977b3",
  measurementId: "G-P65B9MZHX1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
