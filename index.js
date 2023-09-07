const express  = require('express');
var bodyParser = require('body-parser');
require("dotenv").config();
const app = express();
const cookieParser = require('cookie-parser');

const PORT = 8001;
const {connectToMongoDB} = require('./connect.js');
const URL = require('./models/url');
const urlRoute = require('./routes/url');
const homeRoute = require('./routes/home');
const signupRoute = require('./routes/signup');
const loginRoute = require('./routes/login');
const {checkAuthUser,checkAuthUserSilent,checkAuthUserForLoginSignup} = require('./middlewares/auth');
const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded());
app.set('trust proxy', true);
app.use(cookieParser());




connectToMongoDB('mongodb://localhost:27017/short-url').then(()=>{
    console.log('mongo connected');
});


app.use('/',loginRoute);
app.use('/url',checkAuthUserSilent,urlRoute);
app.use('/urls',checkAuthUser,homeRoute);
app.use('/signup',checkAuthUserForLoginSignup,signupRoute);
app.use('/login',checkAuthUserForLoginSignup,loginRoute);

app.listen(PORT,()=>{console.log('server started at jeetu bhaiya k ghar')});


