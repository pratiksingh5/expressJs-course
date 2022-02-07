const express = require('express');
const path = require('path');
const app = express();
const mainRouter = require('./routes/index');
const PORT = process.env.PORT || 3000;


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(mainRouter);


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
