// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD39LlUWNlAqt9TowTLmVQMnSCAeGL-o6g",
  authDomain: "portifolio-web-site.firebaseapp.com",
  projectId: "portifolio-web-site",
  storageBucket: "portifolio-web-site.firebasestorage.app",
  messagingSenderId: "322704693158",
  appId: "1:322704693158:web:79f91cd82c6ea79d556167",
  measurementId: "G-MZV7RT8BYJ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
