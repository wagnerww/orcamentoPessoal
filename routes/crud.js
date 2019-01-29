
const crud = {
    findAll(model, req, res) {
        model.find()
            .then(data => res.send(200, data))
            .catch(err => console.log(`erro na busca: ${err}`));
    },

    create(model, req, res){
        console.log('req', req.body)
        let document = new model(req.body);
        document.create()
            .then(data => res.send(200, data))
            .catch(err => console.log(`erro no insert: ${err}`));


    }
}

module.exports = crud;

