import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "drug-stor.firebaseapp.com",
  databaseURL: process.env.DATABASE_URL,
  projectId: "drug-stor",
  storageBucket: "drug-stor.appspot.com",
  messagingSenderId: "561596546010",
  appId: process.env.APP_ID,
  measurementId: "G-H0K3GM6MKE",
};

export const firebaseDb = initializeApp(firebaseConfig);
