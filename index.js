const express = require ('express');
const path = require('path');
const exphbs = require ('express-handlebars');
const books = require('./Books');

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));


// Set a static folder - Homepage
app.use(express.static(path.join(__dirname,'public')));

// Saved Books Route 
app.get('/favlist',(req,res) => res.render('booklist',
{
    title: 'Library',
    books
})
);

// Book preview Route
app.get('/bookpreview',(req,res) => res.render('bookpreview',
{
    title: 'Book Information',
    books
})
);



// Handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars'); 


// Books API Routes
app.use('/api/books', require('./routes/api/books'));

const PORT = process.env.PORT || 8000; // Port specification
app.listen(PORT, () => console.log('Server started on port ' + PORT )); // Start server


