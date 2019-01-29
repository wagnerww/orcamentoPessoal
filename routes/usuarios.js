
const app = require('../config/server').server;
const schema = require('../models/usuarios');
const crud = require('./crud');
const baseUrl   = '/users';

app.get(`${baseUrl}`, (req, res) => crud.findAll(schema, req, res));
app.post(`${baseUrl}`, (req, res) => crud.create(schema, req, res));


