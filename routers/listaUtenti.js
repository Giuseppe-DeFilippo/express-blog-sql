const express = require("express")
const router = express.Router();
const { index, show, create, update, elimina, tagSearch } = require("../controllers/listaUtentiController.js")

router.get("/", index);

router.get("/:id", show);

router.post("/", create);

router.put("/:id", update);

router.delete("/:id", elimina);

router.get("/tagUsersSearch/:tag", tagSearch);

module.exports = router