import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTrLZ9OMnzmvJNO7HXtuem4Y4mCzR8JfU",
  authDomain: "siraazhi.firebaseapp.com",
  databaseURL: "https://siraazhi-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "siraazhi",
  storageBucket: "siraazhi.firebasestorage.app",
  messagingSenderId: "268305400759",
  appId: "1:268305400759:web:32c3c8bd4699bf8b069e32",
  measurementId: "G-NJWEDHHDLC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { app, analytics, database };
