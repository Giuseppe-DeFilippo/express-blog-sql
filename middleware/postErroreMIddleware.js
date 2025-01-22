// middleware per la gestione delle rotte non registrate e uno per la gestione degli errori.
// - Se viene chiamato un endpoint inesistente, un middleware dovrà rispondere un messaggio e uno status appropriato.
// - Se viene generato un errore, un middleware si occuperà di rispondere con un messaggio e uno status appropriato.

function gestioneErrore(err, req, res, next) {
    res.status(500)
    res.json({
        error: err.message,
    });
};

module.exports = gestioneErrore;