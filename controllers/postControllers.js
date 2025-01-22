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
    // const post = lista.find((post) => id === post.id);
    // if (post === undefined) {
    //     res.status(404).send("è un errore")
    // } else { res.json(post) }
    const sql = "SELECT * FROM ``"

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
    let indice = lista.indexOf(lista.find((post) => id === post.id));
    console.log(lista);
    if (indice === -1) {
        res.status(404).send("è un errore")
    } else {
        lista.splice(indice, 1);
        res.status(204).send()
    };
}
function tagSearch(req, res) {
    const tagScelto = (req.params.tag);
    const listaPost = lista.filter((post) => post.tags.some((tag) => tag === tagScelto));
    //restituisce un booleano per sapere se ce.some
    res.json(listaPost);
}

module.exports = { index, show, create, update, elimina, tagSearch };