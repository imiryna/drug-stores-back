var express = require("express");
var router = express.Router();

const { getAllShops } = require("../controllers");

/* GET home page. */
router.get("/", getAllShops);

module.exports = router;

// router.get("/", ()=>);
