const router = require("express").Router();
const User = require("../models/User");
router.get("/register", async (req, res) => {
  try {
    console.log(req);
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.log(err, "error");
  }
});
//REGISTER
router.post("/register", async (req, res) => {
  try {
    console.log(req);
    const user = await new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.username,
    });

    await user.save();
    res.send("ok");
  } catch (err) {
    console.log(err, "error");
  }
});

module.exports = router;
