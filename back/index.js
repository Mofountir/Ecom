const express = require('express');
const cors = require('cors');
const path = require('path');
const { log } = require('console');

const app = express();
app.use(cors());
app.use(cors);
app.use(express.json());


//service les fihiers du dossiers "front"
app.use(express.static(path.join(__dirname, '../front')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../front/index.html'));
});

const port = 4000;
app.listen(port, () => { console.log(`Server démarré sur http://localhost:${port}`); }); 