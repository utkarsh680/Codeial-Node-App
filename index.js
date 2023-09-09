const express = require('express');
const app = express();
const port = 8000;

// for managing ejs layout
const expressLayouts = require('express-ejs-layouts')

const db = require('./config/mongoose')
// for static files
app.use(express.static('./assets'));
app.use(expressLayouts);

// extract sttyle and scrips from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true)
//use express router
app.use('/', require('./routes'))


// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views')

app.listen(port, function(err){
    if (err) {
        console.log(`Error in running the server: , ${err}`);
    }
    console.log(`server is runnig on port: ${port}`)
})