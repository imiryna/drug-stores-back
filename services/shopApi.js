// const { database } = require("./firebaseDB");
const { getDatabase, ref, child, get } = require("firebase/database");

const dbRef = ref(getDatabase());

exports.getStores = async () => {
  await get(child(dbRef, `stores/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        return snapshot.val();
      } else {
        return 404;
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
