
// import { initializeApp } from "firebase/app";
// import {getAuth} from 'firebase/auth';
// import {getFirestore} from 'firebase/firestore'
// import {getStorage} from 'firebase/storage'

// const firebaseConfig = {
//   apiKey: "AIzaSyAOLrC78ytIE2hQ6AVHe1fZgcV8bR2j6Kg",
//   authDomain: "maltimart-8a688.firebaseapp.com",
//   projectId: "maltimart-8a688",
//   storageBucket: "maltimart-8a688.appspot.com",
//   messagingSenderId: "811524109552",
//   appId: "1:811524109552:web:96606e9adfe445744a7e35"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app);

// export default app;

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAphQigUPne3OdMrvRApDzoKA1_2-sJQS8",
  authDomain: "nhatquang-maltimart.firebaseapp.com",
  projectId: "nhatquang-maltimart",
  storageBucket: "nhatquang-maltimart.appspot.com",
  messagingSenderId: "116059081102",
  appId: "1:116059081102:web:4dc7686591b8f0353afcdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;