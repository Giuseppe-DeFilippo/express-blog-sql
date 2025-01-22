// - Create router, controller e model per un'altra risorsa a vostra discrezione (es. commenti, utenti, ...)
//operazioni index show update  destroy create;

const lista = require("../data/listaPost");
const listaUtenti = require("../data/listaUtenti");
const car = require("../data/macchine");

function index(req, res) {
    res.json(listaUtenti);
}

function show(req, res) {
    const id = parseInt(req.params.id);
    const idUtenti = listaUtenti.find((utente) => utente.id === id);
    if (idUtenti === undefined) {
        res.status(404).send("è un errore")
    } else { res.json(car) }
}

function create(req, res) {
    const nuovoUtente = (req.body);
    nuovoUtente.id = lista.length + 1;
    lista.push(nuovoUtente);
    res.json(lista);
}

function update(req, res) {
    const id = parseInt(req.params.id);
    const modificaUtente = (req.body);
    let indice = lista.indexOf(lista.find((utente) => id === utente.id));
    lista.splice(indice, 1, modificaUtente);
    res.send(`hai modificato: ${JSON.stringify(car)}`)
}

function elimina(req, res) {
    const id = parseInt(req.params.id)
    let indice = lista.indexOf(lista.find((utente) => id === utente.id))
    lista.splice(indice, 1);
    if (indice === -1) {
        res.status(404).send("errore non va bene")
    } else {
        res.status(204).send("ok")
    }
}

function tagSearch(req, res) {
    const tagDaPrendere = (req.params.tag);
    const listaUtenti = lista.filter((utente) => utente.tag.some((tag) => tag === tagDaPrendere));
    res.json(listaUtenti);

}


module.exports = { index, show, create, update, elimina, tagSearch }