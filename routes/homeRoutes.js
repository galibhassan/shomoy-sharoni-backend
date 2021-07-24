const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Hello world");
});
router.get("/home", (req, res, next) => {
  res.send("home");
});
router.get("/sampleJson", (req, res, next) => {
  const sendObj = {
      school: "Hogwarts",
      students: ["Harry", "Hermione", "Ron"],
      teachers: ["Dumbledore", "McGonnagall, Snape, Flitwick"]
  }
    res.json(sendObj)
});

module.exports = router;
