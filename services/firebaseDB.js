import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "drug-stor.firebaseapp.com",
  databaseURL: "https://drug-stor-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "drug-stor",
  storageBucket: "drug-stor.appspot.com",
  messagingSenderId: "561596546010",
  appId: "1:561596546010:web:c83efab809d1fbec1ddee3",
  measurementId: "G-H0K3GM6MKE",
};

export const firebaseDb = initializeApp(firebaseConfig);
