const bodyParser = require('body-parser');

function bodyParser(app) {
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
}

export default bodyParser;