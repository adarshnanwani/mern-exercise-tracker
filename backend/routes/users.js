const router = require("express").Router();
const User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const newUser = new User({ username });

  newUser
    .save()
    .then(response => res.json({ msg: "User added!", data: response }))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
