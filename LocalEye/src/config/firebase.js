// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhhQczTlQulyrT5Xuf9KzDUBHZL8vAu3s",
  authDomain: "ebook-246b9.firebaseapp.com",
  projectId: "ebook-246b9",
  storageBucket: "ebook-246b9.appspot.com",
  messagingSenderId: "841080704682",
  appId: "1:841080704682:web:589ee5f551f7fb27d8cad3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics=getAnalytics(app);
export default app;