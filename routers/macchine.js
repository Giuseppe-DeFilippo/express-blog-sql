const { index, show, create, update, elimina } = require("../controllers/macchineController.js");
const express = require("express");
const router = express.Router();

router.get("/", index);

router.get("/:id", show);

router.post("/", create);

router.put("/:id", update);

router.delete("/:id", elimina);

module.exports = router;