import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// 1) When seeding the database you have to uncomment this!
import { seedDatabase } from "../seed";

// 2) See the README for how to get this info
const config = {
  databaseURL: "https://netflix-3-98d39.asia-southeast1.firebasedatabase.app",
  apiKey: "AIzaSyChHeAc_KzdLKUW9ANpuAKIm2a-2LhpO20",
  authDomain: "netflix-3-98d39.firebaseapp.com",
  projectId: "netflix-3-98d39",
  storageBucket: "netflix-3-98d39.appspot.com",
  messagingSenderId: "628475026806",
  appId: "1:628475026806:web:a06831759ee833da57ae57"
};

const firebase = Firebase.initializeApp(config);

// 3) When seeding the database you have to uncomment this as well!

// 4) Once you have populated the database (***ONLY RUN ONCE***!), re-comment this so you don't get duplicate data.
seedDatabase(firebase);

export { firebase };
