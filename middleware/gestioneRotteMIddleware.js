// middleware per la gestione delle rotte non registrate e uno per la gestione degli errori.
// - Se viene chiamato un endpoint inesistente, un middleware dovrà rispondere un messaggio e uno status appropriato.
// - Se viene generato un errore, un middleware si occuperà di rispondere con un messaggio e uno status appropriato.
function gestioneRotte(req, res, next) {
    res.status(404)
    res.json({
        error: "Not Found",
        message: "Pagina non trovata"
    });
};

module.exports = gestioneRotte;