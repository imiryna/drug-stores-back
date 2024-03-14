const { getStores } = require("../services");

exports.getAllShops = async (req, res, next) => {
  const allShops = await getStores();
  res.send(allShops);
};
