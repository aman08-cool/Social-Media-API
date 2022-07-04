const router = require("express").Router();
router.get("/", (req, res) => {
  res.send("Hey..! It's User Route..");
});

module.exports = router;
