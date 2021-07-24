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
      students: ["Harry", "Hermione", "Ron", "Ginny", "Neville", "Luna"],
      teachers: ["Dumbledore", "McGonnagall, Snape, Flitwick"],
      deathEaters: ["Bellatrix, Malfoy", "Carrow"],
      looser: "Voldemort",
      ghosts: ["Nearly-Headless Nick", "Bloody Baron", "Peeves"],
      muggles: ["Darsleys"]
  }
    res.json(sendObj)
});

module.exports = router;
