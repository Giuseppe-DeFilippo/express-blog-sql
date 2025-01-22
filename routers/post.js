const express = require("express");
const { index, show, create, update, elimina, tagSearch } = require("../controllers/postControllers.js");
const router = express.Router();

router.get("/", index);

//show
router.get("/:id", show);

//create

router.post("/", create);

//update per modificare un elemento

router.put("/:id", update);

//delete

router.delete("/:id", elimina);

//aggiungendo dettagli alla chiamata vai in bacheca ma aggiungi tag

router.get("/tagSearch/:tag", tagSearch);

module.exports = router;