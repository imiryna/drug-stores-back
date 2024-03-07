var express = require("express");
var getStores = require("../services/medicineApi");

var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  console.log("We are in the route");
  const stores = getStores();
  res.send("respond with a resource");
});

module.exports = router;
