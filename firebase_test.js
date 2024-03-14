const { initializeApp } = require("firebase/app");
const { getDatabase, ref, child, get } = require("firebase/database");

const firebaseConfig = {
  apiKey: "AIzaSyCcL5fMPBgs_crnYn-HvQfCGNGxbSrv26U",
  authDomain: "drug-stor.firebaseapp.com",
  databaseURL: "https://drug-stor-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "drug-stor",
  storageBucket: "drug-stor.appspot.com",
  messagingSenderId: "561596546010",
  appId: "1:561596546010:web:c83efab809d1fbec1ddee3",
  measurementId: "G-H0K3GM6MKE",
};
// https://drug-stor-default-rtdb.europe-west1.firebasedatabase.app
const app = initializeApp(firebaseConfig);
let dbRef = getDatabase(app);

dbRef = ref(getDatabase());
get(child(dbRef, `stores/`))
  .then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  })
  .catch((error) => {
    console.error(error);
  });
