let cards = [
    {id: '1', name: 'First Card', status: 'todo', priority: 2},
    {id: '2', name: 'Second Card', status: 'progress', priority: 5},
    {id: '3', name: 'Next Card', status: 'done', priority: 3},]

function routes(app) {
    app.get('/', (req, res) => {
        res.send('Hello World!');
    })
    app.get('/card', (req, res) => {
        res.send(cards);
    })
    app.delete('/card/:cardId', (req, res) => {
        let cardId = req.params.cardId;
        cards = cards.filter(el => el.id !== cardId);
        res.send(cards);
    })

    app.post('/card', (req, res) => {
        let card = req.body;
        cards.push({id: Math.random(), ...card});
        res.send('Card created');
    })
    app.patch('/card/:cardId', (req, res) => {
        let cardId = req.params.cardId;
        let card = req.body;

        cards = cards.map(el => el.id === cardId ? {...el, ...card} : el);

        res.send('Card updated');
    })
}

module.exports = routes;
