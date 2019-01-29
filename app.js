const { server, port } = require('./config/server');
const router = require('./config/routes');
const mongoose = require('mongoose');
const db = require('./config/db');

mongoose.connect(db, 
    { useNewUrlParser: true })
    .then(res => console.log('conexão com o banco ok'))
    .catch(err => console.log(`Falha na conxão com o db:${err}`));

server.listen(port,
    router,
    console.log(`servidor rodando na porta: ${port}`)
);

