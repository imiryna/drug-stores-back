var express = require("express");
var router = express.Router();

const { getStores } = require("../services/");

/* GET home page. */
router.get("/", async (req, res, next) => {
  const stores = await getStores();
  res.render("index", { title: "Express" });
  // res.render("index", { title: "Express" });
});

module.exports = router;

// router.get("/", ()=>);
