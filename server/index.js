const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const db = require('./../database/dbMethods.js');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public/dist'));

app.listen(port, () => {
    console.log(`listening at ${port}`);
});

app.get('/prices', (req, res) => {
        var id = req.query.id;
        db.retrieve(id, (err, data) => {
            if (err) {
                res.end(err);
            } else {
                res.writeHead(200, {"Content-Type":"application/json"});
                res.end(JSON.stringify(data));
            }
        })
    }
);
