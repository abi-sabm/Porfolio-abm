const express = require('express');
const path = require('path');


const mainRoutes = require('./routes/main');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
// End Middlewares

// Routes
app.use('/', mainRoutes);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});