const express = require('express');

const cookieParser = require('cookie-parser')
const app = express();
const port = 8000;

// for managing ejs layout
const expressLayouts = require('express-ejs-layouts')

const db = require('./config/mongoose')

//use for session cookie
const session = require('express-session');
const passport = require('passport')
const passportLocal = require('./config/passport-local-strategy')


app.use(express.urlencoded());
app.use(cookieParser());
// for static files
app.use(express.static('./assets'));
app.use(expressLayouts);

// extract sttyle and scrips from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true)


// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views')

app.use(session({
    name: 'codeial',

    //todo change the secret befor deployment in productino mode
    secret: 'ututututut',
    saveUninitialized:false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
//use express router
app.use('/', require('./routes'))

app.listen(port, function(err){
    if (err) {
        console.log(`Error in running the server: , ${err}`);
    }
    console.log(`server is runnig on port: ${port}`)
})