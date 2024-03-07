// const firebaseDb = require("./firebaseDB");
// const { firebase } = require("./firebaseDB");
const { getDatabase, onValue, ref, get } = require("firebase/database");

// // const dbRef = ref(getDatabase());
const dbRef = getDatabase();

// get(child(dbRef, `users/${userId}`))
//   .then((snapshot) => {
//     if (snapshot.exists()) {
//       console.log(snapshot.val());
//     } else {
//       console.log("No data available");
//     }
//   })
//   .catch((error) => {
//     console.error(error);
//   });

exports.getStores = async () => {
  const storesRef = ref(dbRef, "stores/");
  await onValue(storesRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });
  return 200;
};
