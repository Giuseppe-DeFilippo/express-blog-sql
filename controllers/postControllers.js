// const lista = require("./../data/listaPost.js");
const connection = require("../connection");
function index(req, res) {
    const sql = "SELECT * FROM `posts`";
    connection.query(sql, (err, results) => {
        if (err) {
            console.error("errore non va ", err);
            return res.status(500).json({ error: "errore nel database" });
        }
        res.json({
            conteggio: results.length,
            post: results
        });
    });
}

function show(req, res) {
    const id = parseInt(req.params.id);
    const sql = "SELECT * FROM `posts` WHERE `id` = ?";
    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: "database query failed" });
        const item = results[0];
        if (!item) {
            return res.status(404).json({ error: "errore non ce" })
        }
        res.json({ success: true, item })
    });
}
function create(req, res) {
    const nuovoPost = req.body;
    nuovoPost.id = lista.length + 1;
    lista.push(nuovoPost);
    console.log(nuovoPost);

    res.json(lista);
}
//  In Update, controllare se il parametro si riferisce ad un post esistente, in caso contrario, rispondere con uno stato 404 e un messaggio d’errore, sempre in formato JSON.
function update(req, res) {
    const id = parseInt(req.params.id);
    const modificaPost = req.body;
    let indice = lista.indexOf(lista.find((post) => id === post.id));
    if (indice === -1) {
        res.status(404).send("non esiste")
    } else {
        lista.splice(indice, 1, modificaPost);
        res.json(lista);
    }
}
function elimina(req, res) {
    const id = parseInt(req.params.id);
    const sql = "DELETE  FROM `posts` WHERE `id` = ?";
    connection.query(sql, [id], (err, results) => {
        if (err) {
            console.error("errore nella query", err);
            return res.status(500).json({ error: "database  failed" })
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: "non esiste il post" });
        }
        res.sendStatus(204).json({ message: "eliminato correttamente" })
    });
}
function tagSearch(req, res) {
    const tagScelto = (req.params.tag);
    const listaPost = lista.filter((post) => post.tags.some((tag) => tag === tagScelto));
    //restituisce un booleano per sapere se ce.some
    res.json(listaPost);
}

module.exports = { index, show, create, update, elimina, tagSearch };