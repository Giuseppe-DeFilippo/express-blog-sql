
// - Create router, controller e model per un'altra risorsa a vostra discrezione (es. commenti, utenti, ...)

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const postRouter = require("./routers/post.js");
const PORT = process.env.port || 3000;

//middleware
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(cors());

console.log('ciao');
app.get("/", (req, res) => {
    console.log('dsa');
    res.send('Hello World!')
});
app.use("/api/post", postRouter);

app.listen(PORT, () => {
    console.log(`Server in esecuzione su http://localhost:${PORT}`);
});
