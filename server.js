// Dependencies
// =============================================================
const express = require('express');

// Sets up the Express App
// ============================================================

const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static('models'));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Routes
// =============================================================
const controller = require('./controllers/burgers_controller')(app);
// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
