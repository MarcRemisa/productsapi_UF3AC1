const express = require('express');
const slugify = require('slugify');
const products_routes = require('./routes/products.js');

// Server instantiation
const app = express();
const PORT = process.env.PORT || 5000;

// Server configuration: template engine
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('/views'));

// Middleware
app.use(express.json());
app.use('/', products_routes);

// Slugify welcome message
const welcomeMessage = "Welcome to our Express server!";
const slugifiedWelcomeMessage = slugify(welcomeMessage, { replacement: '*', lower: true });

console.log(`Slugified welcome message: ${slugifiedWelcomeMessage}`);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
