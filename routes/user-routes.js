const router = require("express").Router();
const {
  getUser, newUser, deleteUser,
} = require("../controllers/user-controller");

router.get("/users", getUser);

router.post("/users", newUser);

router.delete("/users", deleteUser);

module.exports = router;