import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPFomR7WNz49DevHPtLSFWGvNHIeACfjg",
  authDomain: "wp-kindle.firebaseapp.com",
  projectId: "wp-kindle",
  storageBucket: "wp-kindle.appspot.com",
  messagingSenderId: "873216783227",
  appId: "1:873216783227:web:e8e5c69d31bed8086183de",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
