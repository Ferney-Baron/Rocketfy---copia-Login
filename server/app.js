const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const data_base = require('./db/data_base');
const controllers = require('./controllers')
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/register', controllers.register);
app.post('/', controllers.login);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})